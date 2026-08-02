# Automatic Data Ingestion Pipeline from Greengrass to AWS Kinesis Data Stream using Stream Manager

Greengrass has two types built in data ingestion pipeline. First is, IPC (inter-process communication): to allow bidirectional communication between greengrass and iot core. Enable D2C (devices to cloud) and C2D (cloud to devices). Any incoming tags to the greengrass can be automatically forwrded to AWS iot core securely or vice versa, any message originated from the cloud can be captured on the greengrass through IPC.

	apart from D2C and C2D, IPC also handle devices shadow management for contextualizing the assets or things.

The second type is called as stream manager. Allowing greengrass to store incoming data to local persisted buffer (stored on the disk). Those buffer can be automatically ingested to following AWS cloud services:

1.  S3 (Object storage) 
2.  AWS Kinesis Data Stream
3.  IoT Sitewise (cloud historian)

Unless you're building cloud level historian on AWS or having non AWS data platform (eg: on premises hadoop), the most common integration scenario from stream manager in through kinesis data stream as it provide rich integration to the AWS services like lambda, managed flink, redshift or glue. 

## Provision AWS Kinesis Data Stream

go to the aws console and navigate towards "kinesis data stream" menu. Create a new data stream called as "pi-stream" and choose "kinesis data stream" as the category.	

[image configure the kinesis data stream parameter accordingly]

below are the recommended configuration for kinesis data stream

1. Capacity mode: on demand - to ensure the message broker and message queue has auto scale capability based on the incoming throughput (becareful with the cost!)
2. maximum record size - align with the edge business logic for timeseries batching and aggregation as well as the stream manager configuration. its recommended to set the maximum payload size to 1mb.

then click on the create data stream. 

wait until the provisioning process of kinesis data stream is completed.

[image kinesis data stream is being provisioned]

provisoning status will be change to "active" once the provisioning is completed.

[image kinesis data stream is successfully provisioned]

## Allow greengrass to access kinesis data stream

Go to the IAM Role and find following role name: "GreengrassV2TokenExchangeRole" (the same role where the  policies to access S3 was created during the greengrass core devices creation/provisioning on the virtual machine) then attach following inline policies:

```json
{
  "Version":"2012-10-17",
  "Statement": [
    {
      "Effect": "Allow",
      "Action": [
        "kinesis:PutRecords"
      ],
      "Resource": [
        "arn:aws:kinesis:<region>:<account_number>:stream/<data_stream_name>",
      ]
    }
  ]
}
```

replace following parameter :

1. region: the region of kinesis data stream  note that iotcore, greengrass control plane and kinesis data stream must be located / provisioned on same region. If kinesis data stream is located at US and greengrass control plane/iotcore is located on ASIA, then the stream manager wont be able to send the data to the kinesis data stream
2. account_number: AWS account number
3. data_stream_name: kinesis data stream name (on this case is : pi-stream)

[image edit the policy using json format and paste those configuration]

then click next. enter the policy name (use meaningful name to make it traceable and trackable, eg: greengrass-for-kinesis)

if the policy creation is succeed, "greengrass-for-kinesis" will appear on the policy list

[image policies to allow greengrass write to aws kinesis is successfully created]

## Create Greengrass Custom Component to Write Stream and Export to Kinesis Data Stream

Add aws stream manager library to the project. 

	npm install aws-greengrass-core-sdk

Note: do not use the stream manager SDK(Software development kit) from github (the sources) as its an old version and not maintained. Fetch the stream manager from NPM to get the latest and maintained version of stream manager.

import the required packages

```javascript
const express = require("express");
const {
    StreamManagerClient,
    MessageStreamDefinition,
    StrategyOnFull,
    ExportDefinition,
    Persistence,
    KinesisConfig, ResourceNotFoundException
} = require("aws-greengrass-core-sdk/stream-manager")
```

define stream manager name and kinesis data stream name. Each of the stream belong to different context. Stream manager name refer to the internal stream of the greengrass stream manager. The stream will be persisted on the local storage (disk), while AWS kinesis data stream name is the message broker name on aws kinesis.

```javascript
const STREAM_NAME = "pi-data-stream-for-kinesis";
const KINESIS_STREAM_NAME = 'pi-stream';
```

initialize stream manager client

```javascript
const smClient = new StreamManagerClient();
```

stream manager is managed asynchronously. Create an async function that will interact with stream manager async pakge.

```javascript
async function init() {
}
```

stream manager client has different initialization code. If the stream already exist on the disk, it must be reinitialized using smClient.updateMessageStream(), when the stream not exist on the disk, use smClient.updateMessageStream(). To avoid error, we must evaluate the stream status (exist or not exist) and apply the logic accordingly.

``` javascript
try {
    smClient.onConnected(async () => {
        console.log("Stream Manager client created and connected");
        console.log("Get list of streams");
        const existingStreams = await smClient.listStreams();
        console.log(existingStreams);
        if (existingStreams.includes(STREAM_NAME)) {
            console.log(`Stream ${STREAM_NAME} already exists. update stream config`);
            const exports = new ExportDefinition()
                .withKinesis([new KinesisConfig()
                    .withIdentifier(`KinesisExport${STREAM_NAME}`)
                    .withKinesisStreamName(KINESIS_STREAM_NAME)]
                );
            await smClient.updateMessageStream(
                new MessageStreamDefinition()
                    .withName(STREAM_NAME) 
                    .withMaxSize(268435456)  // Default is 256 MB.
                    .withStreamSegmentSize(524288)  // Default is 512 kb.
                    .withTimeToLiveMillis(null)  // By default, no TTL is enabled.
                    .withStrategyOnFull(StrategyOnFull.OverwriteOldestData)  // Required.
                    .withPersistence(Persistence.File)  // Default is File.
                    .withFlushOnWrite(true)  // Default is false.
                    .withExportDefinition(exports)

            );
            isReady = true;
        } else {
            console.log(`Stream ${STREAM_NAME} is not exists.`);
            console.log(`Creating Streams`);
            const exports = new ExportDefinition()
                .withKinesis([new KinesisConfig()
                    .withIdentifier(`KinesisExport${STREAM_NAME}`)
                    .withKinesisStreamName(KINESIS_STREAM_NAME)]
                );

            await smClient.createMessageStream(
                new MessageStreamDefinition()
                    .withName(STREAM_NAME)
                    .withMaxSize(268435456)  // Default is 256 MB.
                    .withStreamSegmentSize(524288)  // Default is 512 kb.
                    .withTimeToLiveMillis(null)  // By default, no TTL is enabled.
                    .withStrategyOnFull(StrategyOnFull.OverwriteOldestData)  // Required.
                    .withPersistence(Persistence.File)  // Default is File.
                    .withFlushOnWrite(true)  // Default is false.
                    .withExportDefinition(exports)
            );
            console.log(`Stream ${STREAM_NAME} created.`);
            isReady = true;
        }
    });

} catch (err) {
    console.error("Stream Manager init failed:", err);
    process.exit(1);
}
```

Apart from the stream checking, a strict validation to certain conditions need to be handled to avoid any runtime error which include following scenario:

1. (optional, depend on the cases, use if only if the business logic invalidate the pre-existing stream message) its recommended to delete pre-existing stream to avoid re-processing old messages from the disk.
2. only write the buffer if SMClient is connected.
3. Grafully handle the error using try & catch.

next up is adding an ingestion code to the stream. Depending on the input channel, add following codes to write a buffer to the stream.

```javascript
const payload = JSON.stringify(req.body);
console.log("2. Before appendMessage");

await smClient.appendMessage(
    STREAM_NAME,
    Buffer.from(payload)
);

console.log("3. appendMessage returned");
res.json({
    status: "sent",
    stream: STREAM_NAME
});
```

below are the full code of greengrass stream manager component that receive data from HTTP POST REST API and send it to the aws kinesis data stream via local aws greengrass stream

```javascript
const express = require("express");
const {
    StreamManagerClient,
    MessageStreamDefinition,
    StrategyOnFull,
    ExportDefinition,
    Persistence,
    KinesisConfig, ResourceNotFoundException
} = require("aws-greengrass-core-sdk/stream-manager")

const app = express();
app.use(express.json());

let isReady = false;

const STREAM_NAME = "pi-data-stream-for-kinesis";
const KINESIS_STREAM_NAME = 'pi-stream';

const smClient = new StreamManagerClient();

async function init() {

    try {
        await smClient.deleteMessageStream("pi-data-stream");
    } catch (e) {
        if (!(e instanceof ResourceNotFoundException)) {
            throw e;
        }
    }

    try {
        await smClient.deleteMessageStream(STREAM_NAME);
    } catch (e) {
        if (!(e instanceof ResourceNotFoundException)) {
            throw e;
        }
    }

    try {
        smClient.onConnected(async () => {
            console.log("Stream Manager client created and connected");
            console.log("Get list of streams");
            const existingStreams = await smClient.listStreams();
            console.log(existingStreams);
            if (existingStreams.includes(STREAM_NAME)) {
                console.log(`Stream ${STREAM_NAME} already exists. update stream config`);
                const exports = new ExportDefinition()
                    .withKinesis([new KinesisConfig()
                        .withIdentifier(`KinesisExport${STREAM_NAME}`)
                        .withKinesisStreamName(KINESIS_STREAM_NAME)]
                    );
                await smClient.updateMessageStream(
                    new MessageStreamDefinition()
                        .withName(STREAM_NAME)
                        .withMaxSize(268435456)  // Default is 256 MB.
                        .withStreamSegmentSize(524288)  // Default is 512 kb.
                        .withTimeToLiveMillis(null)  // By default, no TTL is enabled.
                        .withStrategyOnFull(StrategyOnFull.OverwriteOldestData)  // Required.
                        .withPersistence(Persistence.File)  // Default is File.
                        .withFlushOnWrite(true)  // Default is false.
                        .withExportDefinition(exports)

                );
                isReady = true;
            } else {
                console.log(`Stream ${STREAM_NAME} is not exists.`);
                console.log(`Creating Streams`);
                const exports = new ExportDefinition()
                    .withKinesis([new KinesisConfig()
                        .withIdentifier(`KinesisExport${STREAM_NAME}`)
                        .withKinesisStreamName(KINESIS_STREAM_NAME)]
                    );

                await smClient.createMessageStream(
                    new MessageStreamDefinition()
                        .withName(STREAM_NAME)
                        .withMaxSize(268435456)  // Default is 256 MB.
                        .withStreamSegmentSize(524288)  // Default is 512 kb.
                        .withTimeToLiveMillis(null)  // By default, no TTL is enabled.
                        .withStrategyOnFull(StrategyOnFull.OverwriteOldestData)  // Required.
                        .withPersistence(Persistence.File)  // Default is File.
                        .withFlushOnWrite(true)  // Default is false.
                        .withExportDefinition(exports)
                );
                console.log(`Stream ${STREAM_NAME} created.`);
                isReady = true;
            }
        });

        smClient.onError((err) => {
            console.log(`StreamManager Error : ${err} `);
        });

    } catch (err) {
        console.error("Stream Manager init failed:", err);
        process.exit(1);
    }
}

app.post("/pi-data", async (req, res) => {
    try {
        console.log("1. Request received");
        if (!isReady || !smClient) {
            return res.status(503).json({
                error: "Stream Manager not ready yet"
            });
        }
        const payload = JSON.stringify(req.body);
        console.log("2. Before appendMessage");

        await smClient.appendMessage(
            STREAM_NAME,
            Buffer.from(payload)
        );
        console.log("3. appendMessage returned");
        res.json({
            status: "sent",
            stream: STREAM_NAME
        });
        console.log("4. Response sent");
        console.log("Message sent to Stream Manager:", payload);

    } catch (err) {
        console.log("5. appendMessage threw", err);
        console.error("appendMessage error:", err);
        res.status(500).json({
            error: err.message
        });

    }
});

app.get("/", (req, res) => {
    console.log("Do Health Check");
    res.send("Greengrass Stream Manager bridge alive");
});

async function start() {
    console.log("Starting service... for http listener to stream manager to kinesis data stream");

    await init();

    app.listen(4003, () => {
        console.log("Listening on port 4003");
    });

    setInterval(() => { }, 3600000);
}

start();
```

## Deplo The Custom Greengrass Component

prepare the recipe.yml

```json
RecipeFormatVersion: '2020-01-25'

ComponentName: com.streamkinesis
ComponentVersion: '1.0.9'

ComponentDescription: Greengrass resilient data ingestion with persisted queue on disk and buffering
ComponentPublisher: Dega

ComponentDependencies:
  aws.greengrass.Cli:
    VersionRequirement: ">=2.0.0"
    DependencyType: HARD

  aws.greengrass.StreamManager:
    VersionRequirement: ">=2.0.0"
    DependencyType: HARD

ComponentConfiguration:
  DefaultConfiguration:
    accessControl:
      aws.greengrass.StreamManager:
        com.streamkinesis.bridge:
          policyDescription: "Allow Stream Manager access"
          operations:
            - aws.greengrass#PutMessage
            - aws.greengrass#ListStreams
            - aws.greengrass#DescribeStream
            - aws.greengrass#ReadMessages
          resources:
            - "*"

Manifests:
  - Platform:
      os: linux

    Artifacts:
      - URI: s3://greengrass-artifact-dega-test/com.streamkinesis/1.0.9/stream-kinesis.zip
        Unarchive: ZIP

    Lifecycle:
      Run: |
        set -e
        cd {artifacts:decompressedPath}/stream-kinesis
        exec /usr/bin/node index.js
```

zip the artifact (include the node_modules folder as well). 

	zip -r stream-kinesis.zip 

note: its recommended to execute the npm install on the edge devices (or to any devices has mimic the target edge devices OS/CPU architecture) itself to avoid any issues during the build.

upload the artifact the S3

	aws s3 cp stream-kinesis.zip \
	s3://greengrass-artifact-dega-test/com.streamkinesis/1.0.9/stream-kinesis.zip

create greengrass core devices component

	aws greengrassv2 create-component-version --inline-recipe fileb://recipe.yml

deploy

```json
aws greengrassv2 create - deployment \
--target - arn "arn:aws:iot:ap-southeast-1:547268513310:thing/edge-transparant-gateway" \
--deployment - name "stream-manager-to-kinesis-component-$(date +%s)" \
--components '{
"com.streamkinesis": {
    "componentVersion": "1.0.9"
}
}'
```

## Data Ingestion Testing from Greengrass to AWS Kinesis Data Stream

invoke the HTTP post returned http status 200 which indicates no error caught on the code and the message should be forwarded to stream managed & kinesis data stream successfully.

[image HTTP POST endpoint is successfully invoked]

check greengrass custom component that use stream manager and kinesis export config log

[image success logs is printed when trying to append the data to greengrass stream manager]

check the kinesis data stream message logs and peek or show the incoming mesasgae on aws console.

[image message successfully ingested to aws kinesis data stream]