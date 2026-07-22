## Pre-requisite

below are the pre-requisite before OPC UA server can be established and read telematics data from arduino

1. at least one sensor (on this case we're using proximity sensor) wired on the arduino board
2. data acquisition code / .INO sketches on the arduino has been uploaded
3. arudino is connected to the local machine with usb serial
4. node js has been installed (we will use node opcua to build the opc ua server).

validate whether the local machine has been able to receive sensor data from the arduino/sensor.

	screen /dev/cu.usbmodem11201 9600

its should return the sensor readings value (ideally already in digital format instead of binary)

[iamge sensor readings is successfully retrieved on the local machine that has direct interface with arduino]

to close the screen readings at cli, press ctrl + a and followed up with ctrl + \ and "type" : y on the prompt confirmation to kill and exit the screen.

## Intitiate OPC UA Server and Connection Test From OPC UA Client

Ensure nodejs has been installed

	node --version

latest nodejs with LTS is preferred. create new folder 

	mkdir OPC-UA-SERVER

initiate git

	git init

initiate nodejs project

	npm init

create gitignore files, ensure node_modules is not enlisted on the git.

```json
node_modules
```

create a new file called as server.js

	touch server.js

install node opc ua 

	npm install node-opcua --save

--save will ensure it node-opcua become dependencies means the nodeopc ua is required when executing or starting up the opc ua server instead of just dev dependencies (skipped during production deployment or build).

spin up simple opcua server

import nodeopc-ua core component

```javascript
const { OPCUAServer, Variant, DataType, StatusCodes } = require("node-opcua");
```

instantiate and start OPC UA Server on port 50000 and exposing following path /test

```javascript
const port = 50000;
const nodePath = "/test";

const serverInstances = new OPCUAServer({
    port: port,
    resourcePath: nodePath,
})

async function runOPCServer() {
    await serverInstances.initialize();
    await serverInstances.start();
    console.log(`OPC US Server started at port ${port}`)
}

runOPCServer();
```

before assining namespaces, its recommended to test whether an OPC UA client can connect to the recently created opc ua server. opcua commander will be used as the client.

	opcua-commander -e opc.tcp://localhost:50000

wait until the opc ua client connected to the opc ua server.

[image opc ua client is successfully connected to the opc-ua server]

## Modelling the OPC UA Namespaces

Subscribing to OPC UA server is like browsing **file tree on FTP server**. Any OPC UA client will have same tree view regardless of the brand because OPC UA is standardizing the protocol interaction mechanism from authentication, push, subscribe and so on.

​	by default our OPC UA server only has /RootFolder namespaces.

namespace is a logical node objects which has unique naming (can't be same across the OPC UA server instances). Eventhough OPC UA is standardizing the protocol interactions, the namespace tree might be vary depending on the projects/plant structure/functional structure as its configureable.

the highest order (top parts of the cone) namespace (because namespace is structured in a **tree**) is represented as ns=0 and has been **reserved by the OPC UA server itself (built in nodes)** to store following information under **RootFolder**.

1. Root
2. Objects
3. Server
4. FolderType
5. BaseObjectType

custom namespace can only be started from ns=1 (or below).

On our cases, the namespace tree will be modelled based on following structure

```json
/Objects
----/DevicesType
------/SensorName
```

devicesType would be Arduino and the sensorName would be ProximitySensor. Its recommended to use PerfectCase when naming the namespaces.

create ns=1 "Arduino" or "Devicestype" namespace below the Objects (ns=0)

```javascript
const addressSpace = serverInstances.engine.addressSpace;
const namespace = addressSpace.getOwnNamespace();

const arduinoObject = namespace.addObject({
    organizedBy: addressSpace.rootFolder.objects,
    browseName: "Arduino"
});
```

now lets test on the opc ua client, there should be new nodes called as "arduino" (ns=0) under the RootFolder.Objects (ns=1)

 [image opc ua commander now detecting new "arduino" nodes under rootFolder.Objects]

## Assign Proximity Sensor Readings as N2

next, lets create the ns=2 (ProximitySensor) and assign a the sensors readings variable.

```javascript
let proximityValue = 0.01;

namespace.addVariable({
    componentOf: arduinoObject,
    browseName: "ProximitySensor",
    dataType: "Double",
    value: {
        get: () => {
            return new Variant({
                dataType: DataType.Double,
                value: proximityValue
            });
        }
    }
});
```

later on the proximityValue variable will be binded to the actual sensor readings from arduino microcontroller (which already connected to the local machine where the OPC UA server is running.)

lets test it on the opc ua client. a new node called as "ProximitySensor"

[image new node is detected on the opc ua client]

## Bind proximity sensor readings to the ProximitySensor node on ns=2

before binding the proximityvalue into the actual serial port readings, lets try to dynamically update the value using random number

```javascript
setInterval(() => {
    proximityValue = Math.floor(Math.random() * 100);
}, 1000);
```
it will randomly change the proximity value  every 1000 ms or equal to 1 second.

[image now the value readings can be captured by opc ua client]

next lets bind the serial readings and updated the proximity value. first, import serialport library including the readline parser.

```javascript
const { SerialPort } = require('serialport');
const { ReadlineParser } = require('@serialport/parser-readline');
```

create the usb serial reading handler

```javascript
const port = new SerialPort({
    path: '/dev/cu.usbmodem11201',
    baudRate: 9600
});

const parser = port.pipe(
    new ReadlineParser({ delimiter: '\n' })
);

parser.on('data', (line) => {
    console.log('Received:', line);
});
```

move the handler code after opc ua server is successfully established and the namespaces+address spaces is added. Dont forget to parse the data. it will depend on the transmitted data. in our case it will be parsed JSON.parse value as it use json as the payload format.

```javascript
async function runOPCServer() {
    await serverInstances.initialize();
    await serverInstances.start();
    const addressSpace = serverInstances.engine.addressSpace;
    const namespace = addressSpace.getOwnNamespace();
    const arduinoObject = namespace.addObject({
        organizedBy: addressSpace.rootFolder.objects,
        browseName: "Arduino"
    });


    let proximityValue = 0.01;

    namespace.addVariable({
        componentOf: arduinoObject,
        browseName: "ProximitySensor",
        dataType: "Double",
        value: {
            get: () => {
                return new Variant({
                    dataType: DataType.Double,
                    value: proximityValue
                });
            }
        }
    });

    const port = new SerialPort({
        path: '/dev/cu.usbmodem11201',
        baudRate: 9600
    });

    const parser = port.pipe(
        new ReadlineParser({ delimiter: '\n' })
    );

    parser.on('data', (line) => {
        try {
            const value = JSON.parse(line).Value;
            proximityValue = value;
            console.log(`proximity value updated to ${value}`);
        } catch (err) {
            console.log('Skipping invalid JSON');
        }
    });

    console.log(`OPC US Server started at port ${port}`)
}
```

done. now the readings are come directly from arduino sensor instead of simulated using math random.

[image we can already see the value from arduino on the opc ua client]
