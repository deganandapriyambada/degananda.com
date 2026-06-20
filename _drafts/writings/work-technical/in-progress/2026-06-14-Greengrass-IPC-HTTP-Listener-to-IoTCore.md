Adjust recipe

```json
RecipeFormatVersion: '2020-01-25'

ComponentName: com.example.HelloWorld
ComponentVersion: '1.0.21'

ComponentDescription: Hello World NodeJS component
ComponentPublisher: Dega

ComponentDependencies:
  aws.greengrass.Cli:
    VersionRequirement: ">=2.0.0"
    DependencyType: HARD

ComponentConfiguration:
  DefaultConfiguration:
    accessControl:
      aws.greengrass.ipc.mqttproxy:
        com.example.HelloWorld:
          policyDescription: "Allow publish to IoT Core"
          operations:
            - aws.greengrass#PublishToIoTCore
          resources:
            - "*"

Manifests:
  - Platform:
      os: linux

    Artifacts:
      - URI: s3://greengrass-artifact-dega-test/com.example.HelloWorld/1.0.17/http-listener.zip
        Unarchive: ZIP

    Lifecycle:
      Run: |
        cd {artifacts:decompressedPath}/http-listener
        /usr/bin/node index.js
```

adjust the code

```javascript
const express = require("express");
const { greengrasscoreipc } = require("aws-iot-device-sdk-v2");

const app = express();
app.use(express.json());

const client = greengrasscoreipc.createClient();

async function init() {
    await client.connect();
    console.log("IPC connected");
}

async function publishToIoTCore(topic, payload) {
    return client.publishToIoTCore({
        topicName: topic,
        qos: greengrasscoreipc.model.QOS.AT_LEAST_ONCE,
        payload: Buffer.from(JSON.stringify(payload))
    });
}

app.post("/pi-data", async (req, res) => {
    try {
        const data = req.body;
        await publishToIoTCore("pi/system/data", data);
        res.json({ status: "published", data });
    } catch (err) {
        console.error(`publish error: ${err}`);
        res.status(500).send({ error: err.message });
    }
});

app.get("/", (req, res) => {
    res.send("Greengrass bridge is alive");
});

app.listen(4001, async () => {
    try {
        await init();
        console.log("Express running on port 4001");
    } catch (e) {
        console.error("IPC initialization failed failed:", e);
        process.exit(1);
    }
});
```

 upload the artifact from dist folder

	aws s3 cp index.js s3://greengrass-artifact-dega-test/com.example.HelloWorld/1.0.3/index.js

check if the artifact exist on specific version

	aws s3 ls s3://greengrass-artifact-dega-test/com.example.HelloWorld/1.0.3/

upversion component (in this case is to 1.0.3)

	aws greengrassv2 create-component-version --inline-recipe fileb://recipe.yml

component created​

```json
{
    "arn": "arn:aws:greengrass:ap-southeast-1:547268513310:components:com.example.HelloWorld:versions:1.0.21",
    "componentName": "com.example.HelloWorld",
    "componentVersion": "1.0.21",
    "creationTimestamp": "2026-06-14T15:08:19.895000+00:00",
    "status": {
        "componentState": "REQUESTED",
        "message": "NONE",
        "errors": {},
        "vendorGuidance": "ACTIVE",
        "vendorGuidanceMessage": "NONE"
    }
}
```

check the component list and validate

	aws greengrassv2 list-components

deploy version 1.0.21

```json
aws greengrassv2 create-deployment \
  --target-arn "arn:aws:iot:ap-southeast-1:547268513310:thing/edge-transparant-gateway" \
  --deployment-name "hello-world-deployment-$(date +%s)" \
  --components '{
    "com.example.HelloWorld": {
      "componentVersion": "1.0.21"
    }
  }'
```

check if the artifact is successfully downloaded

	 ls -la /greengrass/v2/packages/artifacts/com.example.HelloWorld/1.0.3

next up is checking the deployment status, if everything goes well it should be marked as "COMPLETED" by executing following command

	aws greengrassv2 list-deployments

if there is error, check the logs:

	sudo tail -n 100 -f /greengrass/v2/logs/greengrass.log

Heartbeat test

openup {greengrass-ip} with port 4001, it should return "greengrass bridge is alive"

then try to send telemetry data over http into following address {greengrass-ip}:4001/pi-data using below message

```json
{
    "tag":"temperature",
    "value":32.5
}
```

if IPC connection is successful, it should return http 200 with status of "published" as shown below

[image]