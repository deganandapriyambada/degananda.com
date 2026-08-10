## Designing the OPC UA Collector

a

## Quickwin: Use Existing Opensource and Matured OPC UA Collector Library

b

# Simulation

below are the steps to simulate OPC UA server and OPC UA collector using nodered and highbyte

## Deploy highbyte locally

turn on docker and load highbyte image into docker

	docker load -i HighByte-Intelligence-Hub-4.5.0_Beta_Docker_Build_2026.6.26.214_arm64.tar

it will take time until the images fully loaded.

[image highbyte image is successfully loaded to the docker]

if the docker daemon is not running, you may encounter following error scenario

```json
Cannot connect to the Docker daemon at unix:///var/run/docker.sock. Is the docker daemon running?
```
once highbyte images is loaded, verify by executing following command

	docker images | grep highbyte

if the loading is successful, the highbyte image will be visible/listed

[image highbyte images is successfully listed on the docker images]

run the highbyte docker image locally by executing following image

	docker run -p 45245:45245 -p 1885:1885 -p 8885:8885 -e ACCEPT_EULA=Y --name highbyte highbyte:4.5.0-arm64

note: change the version accordingly. 

[image highbyte is successfully running locally]

## Run Local OPC UA Simulation Server on Port 50000

below is sample OPC UA server written using node-opc-ua on nodejs version 22.22

pacakge json

```json
{
  "name": "opc-ua-server",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "",
  "license": "ISC",
  "overrides": {
    "hexy": "0.3.5"
  },
  "dependencies": {
    "hexy": "0.3.5",
    "node-opcua": "^2.175.2",
    "serialport": "^13.0.0"
  }
}
```
opc-ua-server.js

```javascript
const { OPCUAServer, Variant, DataType, StatusCodes } = require("node-opcua");
const { SerialPort } = require('serialport');
const { ReadlineParser } = require('@serialport/parser-readline');

const port = 50000;
const nodePath = "/test";

const serverInstances = new OPCUAServer({
    port: port,
    resourcePath: nodePath,
})

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

    setInterval(() => {
        proximityValue = Math.floor(Math.random() * 100);
    }, 1000);
}

runOPCServer();
```

install the package dependencies

	npm install

run it

	node opc-ua-server.js

## Configure Highbyte to Listen Data From Existing OPC UA Server

Before attempting to create connection on highbyte, check whether docker has access to the opc ua server by executing following command

```json
highbyte % docker run --rm alpine sh -c \
  "apk add --no-cache netcat-openbsd >/dev/null && nc -zv host.docker.internal 50000"
```

it should return following message if the networkng between hihgbyte and host machine has no issue: "Connection to host.docker.internal (192.168.65.2) 50000 port [tcp/*] succeeded!"

[image creating a new connection to existing opc ua server on highbyte]

Create a new connection with following configuration

| No   | Parameter           | Value                                      |
| ---- | ------------------- | ------------------------------------------ |
| 1    | name                | localOPCUA (only alpha numeric is allowed) |
| 2    | description         | leave it as blank, optional                |
| 3    | protocol            | OPC UA TCP                                 |
| 4    | host                | host.docker.internal                       |
| 5    | security            | none                                       |
| 6    | path                | leave as blank                             |
| 7    | Authentication Type | anonymous                                  |
| 8    | Mode                | subscribe                                  |
| 9    | subscription rate   | 1 second                                   |

create on the create button. On the connection details of "localOPCUA" page, go to following tab: inputs and click browse.

[image highbyte successfully browse the OPC UA node]

if the connection is successfully established between highbyte (inside docker) to the host machine opc ua server, the namespaces list will be listed as shown on the above images.
