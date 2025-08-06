---
layout: posts
author: Degananda Ferdian
categories: cloud
series-code: AZIOT001
excerpt: Configure, Develop and Deploy Custom Azure IoT Edge module to Detect Machine Fault and Controlling the Machine (edge to devices)
topics: azure iot iiot edge agenticai
ptype: News
background: Apart from data extraction from the machine, perception layer on Agentic-AI is responsible for controlling the machine (if the action applicable)
objective: Create Custom IoT Edge Module that can send data over MQTT protocol from Azure IoT edge to the Devices.
deliverables: Article
---

# Common Scenario of Edge to Devices (E2D) Communication

Typically edge devices (can be raspberrypi, jetson or any baremetal server/peripheral) will perform **analytics** computation. Either machine learning, condition based monitoring or realtime batch analytics.

Those computation will resulted in insight. For example on Machine fault detection use cases, it will generate machine fault code or event. (eg: over-temp, high-vibration, etc).

OT can trigger alarm, ringing bell or any other action on the factory based on the "edge generated event". Its called as **Edge to Devices (E2D)** Communication

## Custom Module on Edge

For example, an Azure IoT Edge Custom Module receiving following payload from cloud or another edge component.

Input Payload

```
    {
        "MESSAGETYPE" : "ERROR",
        "ERRORCODE" : "ERR-0001",
        "ERRORDESCRIPTION" : "OVERTEMPERATURE"
    }
```

## Data transimisison to output topic via IoT Edge Internal Routing

Possible output routing option

1.  route to $upstream: (from <output> to $upstream) Message will be sent to the IoTHuB using MQTT protocol. However, $upstream route is bypassing IoTHuB devices twin module, hence message enrichment can't be implemented.
2. route to another module input topic: example from <output> to BrokeredEndpoint(\"/modules/<moduleName>/inputs/input1\")
3. route to another output (from <output> to another ) BrokeredEndpoint(\"/modules/<moduleName>/outputs/output1\")

### Direct Data Transmission to Output Topic

apart from those routing option, custom IoT Edge module can also directly send data to specific output topic (not via route).

Sample on NodeJS Code Custom Module.

```javascript
    if(data.MESSAGETYPE !== undefined || typeof(data.MESSAGETYPE) !== "undefined"){
        if(MESSAGETYPE == "ERROR"){
             console.log("sent to the outputalert1 topics");
            client.sendOutputEvent('outputalert1', outputMsg, printResultFor('Sending received message'));
        }
    } else {
        if(data.voltage !== undefined || typeof(data.voltage) !== "undefined"){
            console.log("sent to the main output1 topics");
            client.sendOutputEvent('output1', outputMsg, printResultFor('Sending received message'));
        } else {
            console.log("message dropped");
        }
    }
```

above code will route any message that came to the module which has "MESSAGETYPE" as the payload and send it to this output BrokeredEndpoint(\"/modules/<moduleName>/outputs/outputalert1\")

add route to the external listener (so the client can subscribe over mqtt topics)

    "exposeToEdge": "FROM /messages/modules/<moduleName>/outputs/outputalert1 INTO BrokeredEndpoint('/modules/eventlistener/inputs/input1')"

create a custom module (eventlistener) with "any" images. Ensure its included on the **deployment json**. 

```json
    "eventlistener": {
        "version": "1.0",
        "type": "docker",
        "status": "running",
        "restartPolicy": "always",
        "settings": {
            "image": "<acrname>.azurecr.io/<eventlistener-repo>:<version>",
            "createOptions": "{}"
        }
    }
```


otherwise the authentication to that module identity cant be used to subscribed to the edge mqtts topics for receiving the e2c message.

sample event listener

```javascript
console.log("starting  event listener as module identity for Edge");
```

any dummy codes will do, the objective of this eventlistener is to ensure the module identity is not deleted by edgeAgent after deplomynet because we can't specify blank edge module without image.

    eventlistener module identity is used to subscribe from specific Edge's MQTT topic externally.

Connecting devices and edge module are based on different SAS Token but same X506 Certificate (if the authentication method is Certificate Based) 

Generating SAS Token for Devices

    az iot hub generate-sas-token --device-id <deviceId> --hub-name <iothub-name> --duration 3600

Generating SAS Token for Edge Module Identity

    az iot hub generate-sas-token --device-id <EdgeId> --module-id <moduleIdentity> --hub-name <iotHubName> --duration 3600


**Sample Test**

any Data with MESSAGETYPE object on the payload will be sent to the topic via custom edge module. This can be seen on edgeHub logs & Custom module logs

to view the logs execute following command

via iotedge

    iotedge logs -f <module_name>

via docker logs (recommended, as the iotedge logs usually shaky)

    docker logs --tail 20 <module_name>

logs from the custom module

![postimage100](/assets/images/2025-07/edge1.jpg)
[Message with MESSAGETYPE:ERROR routed to different output topic](/assets/images/2025-07/edge1.jpg){: .center-image }


## Client Side

    regardless of the authentication method (SAS or X506 Certificate Based) both method enable the client receive and send data to specific topic

a client that connect to the azure iot edge MQTT can execute following action :
1. send data to specific topic
2. receive data from specific topic

## Authentication to the MQTT

Sample code using python and paho MQTT+SAS Token authorization to send data into ioT Edge's $EdgeHub input topic

**Connection preparation**

```python
import paho.mqtt.client as mqtt

edge_gateway_host = "<edge Ip>"
port = 8883

client_id = "<deviceId>"
username = "<iothub-name>.azure-devices.net/<deviceId>/?api-version=2018-06-30"
password = "<SaS Token>"

topic = "devices/<deviceId>/messages/events/"
```

**Connect & Send Data to MQTT Topic**

![postimage100](/assets/images/2025-07/edge2.jpg)
[Send data to EDGE over MQTT](/assets/images/2025-07/edge2.jpg){: .center-image }


establish mqtt connection and send data to the topic

```python
def on_connect(client, userdata, flags, rc):
    if rc == 0:
        print("Connected via MQTT to Edge Hub")
    else:
        print(f"Connection failed with code {rc}")

def on_publish(client, userdata, mid):
    print("Message published")

client = mqtt.Client(client_id=client_id, protocol=mqtt.MQTTv311)
client.username_pw_set(username=username, password=password)

# Disable cert verification
client.tls_set(cert_reqs=ssl.CERT_NONE)
client.tls_insecure_set(True)

client.on_connect = on_connect
client.on_publish = on_publish

client.connect(edge_gateway_host, port)
client.loop_start()

try:
    while True:
        payload = json.dumps(
        {
            "MESSAGETYPE" : "ERROR",
            "ERRORCODE" : "ERR-0001",
            "ERRORDESCRIPTION" : "OVERTEMPERATURE"
        }
    )
        client.publish(topic, payload, qos=1)
        time.sleep(15)
except KeyboardInterrupt:
    client.loop_stop()
    client.disconnect()
```

**Subscribe to specific output topic**

```python
client.sendOutputEvent('outputalert1', outputMsg, printResultFor('Sending received message'))
```

As shown on above code, Any message can be directed to the output topics from custom module. By default it will be send to this topic/address

![postimage100](/assets/images/2025-07/edge3.jpg)
[Subscribing routed message from internal route to external MQTT topics using module-identity](/assets/images/2025-07/edge3.jpg){: .center-image }


assuming the custom iot edge module name is module-a

```python
import paho.mqtt.client as mqtt
import ssl

# IoT Hub / Device / Module info
iot_hub_name = "<iothub-name>"
device_id = "<edge-id>"
module_id = "<module-id>"

# SAS token generated from Azure CLI for module 'eventlistener'
sas_token = "<SAS Token>"

# MQTT connection parameters
broker = "<edge-ip>"
port = 8883
client_id = f"{device_id}/{module_id}"
username = f"{iot_hub_name}.azure-devices.net/{device_id}/{module_id}/?api-version=2021-04-12"
password = sas_token

# MQTT topic to subscribe to
topic = f"devices/{device_id}/modules/{module_id}/#"

def on_connect(client, userdata, flags, rc):
    if rc == 0:
        print("Connected successfully")
        client.subscribe(topic)
        print(f"Subscribed to topic: {topic}")
    else:
        print(f"Connect failed with code {rc}")

def on_message(client, userdata, msg):
    print(f"Received message on topic {msg.topic}: {msg.payload.decode()}")

client = mqtt.Client(client_id=client_id, protocol=mqtt.MQTTv311)
client.username_pw_set(username, password)

# Disable certificate validation for local Edge dev/test; for production, provide CA cert
client.tls_set(cert_reqs=ssl.CERT_NONE)
client.tls_insecure_set(True)

client.on_connect = on_connect
client.on_message = on_message

print("🔌 Connecting to MQTT broker...")
client.connect(broker, port)
client.loop_forever()
```




