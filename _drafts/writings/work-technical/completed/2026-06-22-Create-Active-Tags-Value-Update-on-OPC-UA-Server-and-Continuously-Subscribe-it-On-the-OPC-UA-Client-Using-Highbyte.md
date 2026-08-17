# The Important of Resilient OPC UA Collector

OPC UA collector only has one responsibility: **to acquire data from target OPC UA server namespaces and can withstand any possible network outage and runtime error** during and after the data acqusition. Eventhough the OPC UA server and collector are deployed on local network, the likely possibility of network issue such as broken cables, IP address conflicts and unpredicted network spikes are still possible. 

	Good OPC UA collector should be able to recover from those scenario without sacrificing the data integrity

Unless the OPC UA server is down, OPC UA collector has no right to loss data assuming the OPC UA also has historical access capability through **OPC UA HA**. Most of industrial grade OPC UA collector system like cogent, highbyte or telegraf has built in data ingestion recovery mechanism.

Without resiliency strategy, the tags value update might loss and affecting the whole downstream analytics pipeline result. It may produce false positive or false negative result which can impact the organization leaderships decision making quality. 

For example on predictive maintenance use cases where machine telematics data like pressure, temperature and vibration are closely monitored and inferenced to ML models but there are certain time where those data are not ingested due to network issue and never been recovered. a Loss of ground truth and telemtry data can alter the intelligence of the ML models due to incomplete data which obstruct the pattern recognition during the learning process.

## Designing Resilient OPC UA Collector

Strict NFR (non functional requirement) must be enforced when desining, building and implementing OPC UA collector from various resiliency aspect including: retryability, recoverability and scalability. Below are the main NFR for highly resilient OPC UA collector that need to be tested during SIT (system integration testig), UAT(user acceptance test) and NFT(non functional test, eg: load testing).

**Reconnection Strategy**: Connection must be able to restored after disconnection between OPC UA server and OPC UA collector (client) by determining retry timing, retry frequencies and backoff strategy (orchestrate the retry and idle sequence while giving sometime for OPC UA server or network to recover).

**Session Timeout**: Session must be maintained between server and client based on the environment. Connection over site to site VPN (virtual private network) through internet might require higher session timeout (beyond 10 minutes) because the high likely hood of disconnection from the internet network.

**Transaction Timeout**: OPC UA is based on **client-server architecture pattern with namespace subscription capability** instead of built on top fully publish-subscribe design pattern like kafka, eventhub or mqtt message broker. Hence, the READ/WRITE/BROWSER transactions timeout must be controlled properly to avoid long running operations (hanging/zombie tranasction)

**Keep Alive Heart Beat**: OPC UA server could automatically disconnect their existing client incase no request is made during certain timeframe depending on the OPC UA server configuration. To avoid being disconnected and have to made re-connect attempt, keep-alive sampling heartbeat can be sent.

**Measured Tags Update Cycletime**: Unlike pub-sub where the both publisher and subscriber can control the ingestion rate, OPC UA client has the authority to determine the tags update timing (cycle time). If the server has fast cycle time (say every 100ms) update from PLC/OPC DA server, the OPC UA collector/client can reduce the cycle time to match the client machine specs and avoid getting runtime error due to out of memory/CPU.

apart from those connectivity strategy, OPC UA collector must **grafully handle the OPC UA events** depending on the scenario. Below are the sample event handler for Node OPC UA based OPC UA collector.

| Event                                                        | Scenario          | Typical Handling                                             |
| ------------------------------------------------------------ | ----------------- | ------------------------------------------------------------ |
| connection_lost, connection_reestablished                    | capture data loss | 1. Log both of connection lost and connection re-established time<br />2. Create a scheduled READ connection to OPC UA server for accessing the missing data through HA (historical access) method |
| connection_lost, start_reconnection, <br />after_reconnection, connection_reestablished | health check      | 1. log all lifecycle related timestamp and details           |
| close                                                        | Graceful shutdown | 1. Clear all cache or any memory related operations          |

note: strict and thorough resiliency testing must be conducted as OPC UA server or collector from different brand can behave differently eventhough the based on one standard principle (internet engineering task force for OPC UA)

# Run Local OPC UA Server using Node OPC UA and Acquire the Data via Highbyte

Below are the steps to use highbyte OPC UA collector from local OPC UA simulator which based on node OPC UA.

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

	OPC Client resiliency configuration has been handled out of the box by highbyte.

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
