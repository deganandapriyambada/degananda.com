# What is NodeOPC-UA

NodeOPC-UA is an opensource OPC UA client and OPC UA server which has high portability across various hardware because the code is written in nodeJS(typescript/javascript) and can handle numerous of tags(still inferier with C/C++ based OPC UA server/client). It can be installed on almost any system as long as it ran on top of linux/windows/mac and x86/arm CPU architecture.

Below are the steps to install NodeOPC UA.

## Environment Prepration

NodeOPC is a nodeJS based OPC-UA server and client. NodeJS with minimum version of 20.x is required. Use following command to check if nodejs version 20.x is available on the system

​	node --version

otherwise, the installation of nodejs is neccesary.

[image node version 22.x is available on the system]

Install NodeOPC ua package through NPM

	npm install node-opcua --unsafe-perms

the --unsafe-perms flag will allow the installation to be happened with lesser security control. This will be helpful just incase the user that used to install the packagen(node opc-ua) is not root user.

## Create OPC UA Server

a simple OPC UA server is created for one tags called "pressure" which has "Double" as the value type


```javascript
const {
    OPCUAServer,
    Variant,
    DataType
} = require("node-opcua");

async function main() {
    const server = new OPCUAServer({
        port: 4840,
        resourcePath: "/test",
        buildInfo: {
            productName: "test",
            buildNumber: "1",
            buildDate: new Date()
        }
    });

    await server.initialize();

    const addressSpace = server.engine.addressSpace;
    const namespace = addressSpace.getOwnNamespace();

    let pressureReadings = 25;

    namespace.addVariable({
        organizedBy: addressSpace.rootFolder.objects,
        browseName: "pressure",
        nodeId: "ns=1;s=pressure",
        dataType: "Double",
        minimumSamplingInterval: 1000,
        value: {
            get: () =>
                new Variant({
                    dataType: DataType.Double,
                    value: pressureReadings
                })
        }
    });

    await server.start();

    console.log("OPC UA Server is running");
}

try {
    main();
} catch (err) {
    console.log(err);
}
```

run the OPC-UA server using following code

	node server.js

it should expose port 4840 locally.

[image opc-ua server which expose pressure tags is successfully running port 4840]


## Create OPC UA Client

OPC UA client is responsible to fetch or collect the "pressure" tags value from the OPC-UA server. Below is sample code to retrieve pressure tags from OPC UA server.

note: OPC UA server must be turned on as the following OPC UA client will connect local OPC-UA server that recently created.

```javascript
const endpointUrl = "opc.tcp://localhost:4840/test";
```

import OPC UA client and attribute

```javascript
const {
    OPCUAClient,
    AttributeIds
} = require("node-opcua");
```

add the listener/collector

```javascript
async function main() {
    const endpointUrl = "opc.tcp://localhost:4840/test";

    const client = OPCUAClient.create({
        endpointMustExist: false
    });

    try {
        await client.connect(endpointUrl);
        console.log("Connected");

        const session = await client.createSession();
        console.log("Session created");

        const dataValue = await session.read({
            nodeId: "ns=1;s=pressure",
            attributeId: AttributeIds.Value
        });

        console.log("Pressure:", dataValue.value.value);

        await session.close();
        await client.disconnect();

        console.log("Disconnected");
    } catch (err) {
        console.error(err);
    }
}

try {
    main();
} catch (err) {
    console.log(err);
}
```

kindly ensure the nodeId parameter on the client.js is same with nodeId exposed on the opcUA server, otherwise the opc-ua client won't find any tags.

run the opc ua client with following command

	node client.js

it should fetch the pressure tags exposed by opc ua server as shown in following image

[image the latest exposed pressure value from opc is 25 and successfully fetch by opc ua client]