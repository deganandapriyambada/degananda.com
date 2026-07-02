# OPC-UA is The Golden Standard of OT Integration

Open platform communications unified architecture or often called as OPC-UA is a protocol that commonly used on operation technology (OT) ecosystem integration. Nowdays, OPC-UA become industry standard due to the vendor agnostics interoperability. It could work with siemens, honeywell, rockwell and so on. Thats why its called as **"open"** platform communication.

Apart from the intravendor interoperability OPC-UA protocol also has following technical benefits which can help organization to focus on the business logic instead of the underlying infrastructure:

1. **Enterprise grade security**: built in security layer and control including authenticaiton, data signing and encryption.
2. **Data Contextualization**: unlike modbus where it can only give the tags value, business information like equipment number, timestamp can be sent in one packet.

however, OPC-UA is not a silver bullet. there are some area which not covered by OPC-UA such as QoS(quality od services | 2 means the message will be **guaranteed to be delivered at least once**), queueing and buffer persistance on disk. Hence, **OPC-UA is often to be paired with MQTT protocol+queue** to overcome such weakness or limitations.

# Available Resiliency Mechanism on OPC-UA Listener

Below are the end to end data flow of production grade OPC-UA listener with following resiliency criteria:

1. auto reconnect
2. long active connection
3. session auto reconnect
4. prone to OPC-UA server error (still standby even the server is down)

## Intatiating OPCUAClient

**Connecting to OPC Server**: an OPCUAClient object is instantiate and will be connected the designated OPC UA server address and port. Usually its use port 4840(default and industry standard) over TCP protocol.

**Configuring OPCUAconnection properties**: OPCUAClient receive OPCUAClientOptions object as the parameter with following available options

note: security parameter wont be part of the topics. it will be discussed on different article as the main objective is to create resilient OPC UA listener. hence the security parameter will be set as default:

```json
securityMode: MessageSecurityMode.None,
securityPolicy: SecurityPolicy.None
```

list of useful OPCUAClientOptions for maximum resiliency

| Parameter         | Description                                                  |
| ----------------- | ------------------------------------------------------------ |
| endpointMustExist | if set to false means the OPC client will still works<br /> even the OPC-UA ua endpoint or port is not available/exists. |

Recommended to be set into **false** to ensure the OPC-UA is not prone to error. so the listener will always alive and standby even though there is something wrong with the opc ua server.

| Parameter         | Description                                                  |
| ----------------- | ------------------------------------------------------------ |
| discoveryUrl | to overriding the discover URL |

only change the discoveryUrl value incase the OPC server is located behind reverse proxy.

| Parameter         | Description                                                  |
| ----------------- | ------------------------------------------------------------ |
| connectionStrategy | mainly used to contorl retry strategy |

absolute mandatory to create resilient opc-ua listener. connection strategy has two parameter. first is **initialDelay**: basically determine the reconnect interval (too much retry might increase performance overhead). 

Graceful retry delay is recommended. second parameter is "**maxRetry**: the n number of retry attempt before its give up retrying (**important!** set larger retry time with longer retry delay can give extra breathing time for OPC-UA server to recover). 

note: **set maxRetry to -1** for absolute maximum resiliency as the client will keep retrying until the OPC-UA is back to online

| Parameter         | Description                                                  |
| ----------------- | ------------------------------------------------------------ |
| keepSessionAlive | to keep session always active/alive. |

OPC-UA listener must always be alive and always on standby. Its recommended to set it as true.

| Parameter         | Description                                                  |
| ----------------- | ------------------------------------------------------------ |
| keepPendingSessionsOnDisconnect  | to keep session during disconnection |

set the keepPendingSessionsOnDisconnect into **true** for auto reconnect.

| Parameter         | Description                                                  |
| ----------------- | ------------------------------------------------------------ |
| requestedSessionTimeout  | determine the alive session duration |

Determine how long (in ms/miliseconds) the OPCUA server keeping the session if somehow the OPCUAClient become idle or disconnected. Recommendation: per 5 mins (30000ms)

| Parameter         | Description                                                  |
| ----------------- | ------------------------------------------------------------ |
| defaultSecureTokenLifetime  | token TTL |

reduce the token renewal lifetime to reduce performance overhead. More token renewal process = more memory overhead.

| Parameter         | Description                                                  |
| ----------------- | ------------------------------------------------------------ |
| defaultTransactionTimeout  | timeout for each transaction |

higher timeout (in ms) will increase waiting time for **each transaction**. keep it low for the best performance . defaultTransactionTimeout affecting following transaction type:

1. read
2. write
3. browse
4. method calls

set low timeout for maximum performance (less than 10 sec) or higher timeout for slower OPC UA server.

| Parameter         | Description                                                  |
| ----------------- | ------------------------------------------------------------ |
| keepAliveInterval  | to keep connection alive by performing ping |

combined with "SIGINT" to achive longest duration of alive/active connection. Set with low number on unstable network.

| Parameter         | Description                                                  |
| ----------------- | ------------------------------------------------------------ |
| applicationName  | to log application name who subscribe to the opc ua server |

always set the applicationName for logging purposes. to ensure the logs is traceable (from which OPC UA server and OPC UA client)

| Parameter         | Description                                                  |
| ----------------- | ------------------------------------------------------------ |
| applicationUri  | unqiue application identifier |

can be set with following format: urn:opcua:client:[sensor_name]

| Parameter         | Description                                                  |
| ----------------- | ------------------------------------------------------------ |
| clientName  | to determine the logical client name |

always set unique client name for each opc listener to avoid session duplication especially if the opc-server is subscribed by multiple opc-ua client.

Recommended OPCUAClient intatiation config

here is the golden config (recommendation) on an moderate performance (good latency, good resiliency) OT system.

```javascript
const client = OPCUAClient.create({
    endpointMustExist: false,
    connectionStrategy: {
        initialDelay: 5000,
        maxRetry: 0
    },
    keepSessionAlive: true,
    keepPendingSessionsOnDisconnect: true,
    requestedSessionTimeout: 300000,
    defaultTransactionTimeout: 15000,
    keepAliveInterval: 10000
});
```

judgement

1. endpointMustExist: false => OPCUAClient will still "alive and standby" even the OPCUA server endpoint suddenly can't be found.
2. connection strategy (5000, -1) => unlimited retry attempt with 5 second retry delay.
3. keepSessionAlive: true =>  to maintain persistent connection between opcserver and opc-client when there is slight network disruption.
4. keepPendingSessionsOnDisconnect: true => for auto reconnect 
5. requestedSessionTimeout: 300000 => 5 mins session timeout
6. defaultTransactionTimeout: 15000 => 15 sec tolerance before timeout for READ, write & browse transaction
7. keepAliveInterval: 5000 => ping every 5 second to keep the connection alive

note: always perform NFT (non functional test) to determine the best config as the condition will be differ from every project.

## Create session

Once OPCUAclient successfully connected to the OPC-UA server endpoint, a session can be established based on the OPC-Serer authentication config. There are three authentication types which is applcable on OPC-UA server:

1. anonymous (weakest security)
2. username/password based
3. X509 certificate

depending on the enforced authentication method, the session initialization code will vary. Below is the sample of session creation with **anonymous auth method**.

```javascript
const session = await client.createSession();
```

## Create subscription

Once the session is created through and pass the authentication and authorization (if role based authorization is activated on the OPC UA server) process, a subscription can be created. The mechanism of asking (read) tags value/data from OPC-UA server is called as subscription.

below is the code to create subscription from **existing session**.

```javascript
const subscription = ClientSubscription.create(session, ClientSubscriptionOptions);
```

unlike the OPCUAClient which handle the connection retry, auto reconnect between OPC-UA server and OPC-UA client, ClientSubscription doesnt have such built in feature. Custom business logic on the handler must be created.

note: OPC-UA is pub-sub (publish and subscribe) based protocol just like MQTT.


here are the available ClientSubscriptionOptions that might benefical for the resiliency.

| Parameter         | Description                                                  |
| ----------------- | ------------------------------------------------------------ |
| requestedPublishingInterval | the expected update interval from OPC-UA server (inbound to the OPC-UA client) |

require low interval especially for near-realtime data pipeline from OPC-UA server to OPC-UA client. Ideally between 250ms to 500ms. Lower interval means higher computing resource needed on the OPC-UA client as the OPC-server will try to push the update every 250ms. Its recommended to use 1000ms (1 sec interval) unless the use case require absolute realtime data pipeline.

| Parameter         | Description                                                  |
| ----------------- | ------------------------------------------------------------ |
| requestedLifetimeCount | grade period duration of publish interval before the subscription considered as inactive |

low requestedLifetimeCount means the subscription is prone to be disconnected if there is network connectivity issue. its recommended to set between 500 to 750 ms.

| Parameter         | Description                                                  |
| ----------------- | ------------------------------------------------------------ |
| requestedMaxKeepAliveCount | n empty publish cycles before sending keep alive packet |

requestedMaxKeepAliveCount is important parameter to prevent subscription disconnection. Lower value means more frequent sending keep alive packet and more performance overhead. recommended value: 10.

| Parameter         | Description                                                  |
| ----------------- | ------------------------------------------------------------ |
| maxNotificationsPerPublish | n data changes per packet |

basically the number of bathed tags value data in one packet. recommended value: 100 (max 100 tags value data per notification/packet).

| Parameter         | Description                                                  |
| ----------------- | ------------------------------------------------------------ |
| publishingEnabled | streaming status |

set to true in order for start stream/subscribe the data immedately when there is updates. recommendation: true.


| Parameter         | Description                                                  |
| ----------------- | ------------------------------------------------------------ |
| priority | notify the opc-ua about the importance of our opc-ua client |

lower value indicates the level of importances (higher value means less importance). set to 1 for maximum priority.

below are the golden config:

```javascript
const subscription = ClientSubscription.create(session, {
    requestedPublishingInterval: 1000,
    requestedLifetimeCount: 100,
    requestedMaxKeepAliveCount: 10,
    maxNotificationsPerPublish: 100,
    publishingEnabled: true,
    priority: 1
});
```

justification:

1. requestedPublishingInterval: 1000 => opc-client will stream the tags value update per 1000 ms (1 sec). balanced approach (not too realtime but now slow either). good for almost all use cases (not for mission critical data acquisition!)
2. requestedLifetimeCount: 100 => requestedLifetimeCount*requestedPublishingInterval = lifetime count. means the subscription has 10000 ms (100 sec) disconnection time before the subscription is considered to be disconnected.
3. requestedMaxKeepAliveCount: 10 => if no tags updated sent in 10 cycle, OPC UA clinet will send keep alive package to maintain the subscription state. really important for resilient OPC UA client
4. publishingEnabled: true => start streaming immediately when the data updates available. important for auto recovery/self heal mechanism
5. priority: 1 => ask OPC UA to prioritize our OPC UA client (must be aligned with overall usages if there are multiple OPC UA client based on urgency).

## Create Resilient OPC-UA Handler

Most of the edge business logic such as data transformation & aggregation will happened inside the OPC UA subscription **handler (manually code)**. Moreover, the NFR (non functional requirement) for **subscription** auto heal, auto reconnect and auto recover will also be **handled (manually code)** here.

note: as mentioned on the previous section, the NFR (auto heal, auto reconnect and auto recover) for connection(between OPC UA server and OPC UA client) level has been handled out of the box by OPCUAClient.

Below are the available OPC UA **client subscription handler**

---

**onStarted**: subscription has been susccessfully established
**onTerminated**: subscrition has been terminated.
**onKeepAlive**: OPC-UA server send keep-alive package to OPC-UA client. this is important handler especially for NFR testing to determine whether the OPC-UA server has been configured to send keep-alive.
**onReceivedNotifications**: receive notification from OPC-UA server. useful for collecting debugging information from OPC-UA server.

**onInternalError**: **very important!!** to handle any error related with subscription.
**onStatusChanged**: subscription status is changed (eg: from alive to disconnected).
**onitemAdded**: if monitored items or monitored tags are updated (new or the old one removed)

**onRawNotification**: receive raw notification from OPC-UA server. useful for collecting debugging information from OPC-UA server.

Below are the available OPC UA **client session handler**

---

**onKeepAlive**: to confirm if session still active/alive
**onKeepAliveFailure**: to detect if session keep alive fails
**onSessionClosed**: triggered when session is closed

Below are the available OPC UA **client connection handler**

---

**onBackOff**: triggered before reconnect attempt
**onStartReconnection**: triggered when reconnection is about to be made
**onAfterReconnection**: triggered when reconnection is successfully established.
**onConnectionLost**: OPC-UA is based on TCP. this handler can check whether TCP connection is still alive of lost.
**onConnectionReestablished**: triggered then the TCP connection is successfully re-established
**onAbort**: when max retry attempt is exceeding the threshold. basically giving up the connection between OPC-UA server and OPC-UA client
**onClose**: triggered when the channel is closed
**onTimeOutRequest**: triggered when timeout detected on the TCP.

Below are the available ClientMonitoredEvent events

---

**onInitialized**: triggered when monitored event is established
**onChanged**: triggered when the monitored item (tags) value tags is changed by opc UA server
**onErr**: triggered when error is detected when checking or processing monitored events
**onTerminated**: monitored 

Each of the handler representing a "state" of OPC UA server to OPC UA client integration. The OPC UA listener should **manage and handle** the state changes to ensure all resiliency requirement is met.