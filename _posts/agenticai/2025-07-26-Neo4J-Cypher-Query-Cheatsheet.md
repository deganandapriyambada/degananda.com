---
layout: posts
author: Degananda Ferdian
categories: agentic-ai
series-code: AGENTIC01
excerpt: Cypher Query is used to perform casual relationship between node in Neo4J. Unlike SQL Query which is meant for tabular data, Neo4J is based on graph databases (connected data). 
tags: agentic-ai neo4j graphdb
topics: agenticai
ptype: Issues
background: As a Developer who came from SQL/NoSQL World, Its important to know the similarity and differences between SQL Query of Cypher Query.
objective: To understand how to perform Cypher Query on NEO4J on vairous scenario.
deliverables: article
---

    MySQL Syntax will be used as the SQL counterpart. Might be different with Azure SQL or PostgreSQL

CypherQuery should have slightly different on each version. Following syntax is used to determine the Neo4J version.

    CALL dbms.components() YIELD name, versions, edition UNWIND versions AS version RETURN name, version, edition;

This article is use following configuration : Cypher **25** and Neo4J kernel **v2025.06.02 Community**

# Databases Operation

## Show Databases

Mysql

    SHOW DATABASES;

Cypher Query

    SHOW DATABASE

Sample Result

```
[
  {
    "name": "neo4j",
    "type": "standard",
    "aliases": [

    ],
    "access": "read-write",
    "address": "localhost:7687",
    "role": "primary",
    "writer": true,
    "requestedStatus": "online",
    "currentStatus": "online",
    "statusMessage": "",
    "default": true,
    "home": true,
    "constituents": [

    ]
  },
  {
    "name": "system",
    "type": "system",
    "aliases": [

    ],
    "access": "read-write",
    "address": "localhost:7687",
    "role": "primary",
    "writer": true,
    "requestedStatus": "online",
    "currentStatus": "online",
    "statusMessage": "",
    "default": false,
    "home": false,
    "constituents": [

    ]
  }
]
```

both has identical query to show database. Neo4J use singular word.

## Creating Databases.

Mysql

    CREATE DATABASE my_database;

Cypher Query

Connect to system database first

    :use system

If only if Connected to the system databases, a new databases can be created (note that multiple databases only work for the Enteprises Edition!)

    CREATE DATABASE my_database;

check database details

    SHOW DATABASE my_database;

Neo4J community edition can only use neo4j databases

    :use neo4j

## Reset Table/Node on a Databases

Mysql

    TRUNCATE TABLE <table_name>

Neo4J

    MATCH (n) DETACH DELETE n;

If the detachment query is success, all nodes will be deleted. Can be seen on the left panel of neo4J browser.

![postimage100](/assets/images/2025-07/cypher2.jpg)
[Number of available nodejs on databases](/assets/images/2025-07/cypher2.jpg){: .center-image }

or simply use cypher query to count the number of nodes which matched with query

    MATCH (n)
    RETURN count(n) AS total_nodes;


# Read

## Show All Nodes

Following syntax will return all nodes regardless the relationship

    MATCH (n) RETURN n;

double click the node to show the relationship

![postimage100](/assets/images/2025-07/cypher1.jpg)
[Visualizing all Nodes](/assets/images/2025-07/cypher1.jpg){: .center-image }

# Write

## Create Nodes

Nodes in Neo4J is representation of data object. It has two component

1. Node Label - Node name
2. Node Properties - Property of the object.

It has similar concept with object oriented programming. an object can have method and properties. Lets take example, Battery object. It has batteryId, Chemical information, Manufacturer, Etc.

create node without any properties

    create (b:Battery)

Create node with properties. These properties parameter reside after the node name and wrapped with object { propertiesName : "<properties_value">}

    create (b:Battery {id : "BMS-003",  manufacturer : "Samsung", chemical : "Lithium-Ion"}) 

if above query is executed successfully, following response will shown.

    Created 1 node, set 3 properties, added 1 label

it will indicate the number of node created and number of properties that attached on those node.

in order to prevent duplicated master data such as Battery, MERGE clause can be used. MERGE can be followed up with CONDITIONAL STATEMENT to ensure the node creation query will only be executed if one more of condition are matched (true)

    MERGE (b:Battery {id: "BMS-003"})
    ON CREATE SET b.manufacturer = "Samsung", b.chemical = "Lithium-Ion"

above query will ensure battery node with BMS-003 will only be created if BMS-003 is not yet exist. Otherwise the battery node will be created.

If those query executed two times, neo4j will return: **No changes**, no records as the condition is not matched due to the battery with id bms-003 already exist.


## Connect Two Nodes Safely (Not prone to error)

Battery telemetry data such as voltage,temperature and current can be extracted by BMS and sent to the edge or cloud every X second. From the edge it will be ingested to Neo4J in near realtime to achieve realtime fault detection.

There is one important pre requisite for neo4j to connect two nodes

    Both of the nodes should be exist.

For example, battery node (b) can only be associated to the telemetry node (t) if the b and t are both exist on the neo4j databases.

By nature the master data should be created first before telemetry data from battery can came to neo4j. But in realtime world, this kind of chicken and egg condition won't can't predicted as the data can came from different data stream with unpredictable latency, message ordering, data transmission problem, retry etc.

**Solution**

Hence, it is suggested to use MERGE clause to ensure the parent object is exist then do the association and if the parent object not available, it will automatically create the parent object node.

following Cypher query is used to accomplish above solution:

```
MERGE (b:Battery {id: "BMS-003"})  // Ensure the Battery node exists
CREATE (t:Telemetry {
  timestamp: datetime("2025-07-27T01:00:00"),
  voltage: 4.3,
  current: 1.2,
  temperature: 80
})
CREATE (b)-[:SEND]->(t)  // Create the relationship between Battery and Telem
```

if battery node not exist, neo4j will first create the battery node and then create the telemetry node. Once both of the object are exist, then association (b-[:SEND:]-t applied to Battery Node that has deviceId equal to BMS-003) will be executed.

**What if the telemetry is duplicated?**

Some cloud native resource such as eventhub has following guarantee: **data will be send at least ONCE**. Meaning, the same telemetry data can be sent twice or thrice but azure will ensure at least it will be sent once.

Hence, query need to be slightly modified to ensure the association of telemetry node for battery with id: BMS-003 only be executed if only if:

1. both battery and telemetry node exist
2. If battery node somehow to exist, neo4j should create the battery node first (placeholder, which only has id)
3. and if the same telemetry node (identified by timestamp) already exist on neo4j, creation of t node and association to battery b should not happen.

If above condition translated into cyphre query it would be: 

```
MERGE (b:Battery {id: "BMS-003"})  // Ensure the Battery node exists

MERGE (t:Telemetry {timestamp: datetime("2025-07-27T01:00:00"), deviceId: "BMS-003"})  // Ensure Telemetry with same timestamp and deviceId

ON CREATE SET t.voltage = 4.3, t.current = 1.2, t.temperature = 80  // Set Telemetry properties if created

MERGE (b)-[:SEND]->(t)  // Create relationship between Battery and Telemetry, ensuring it’s only created once
```

## Connecting two nodes but both of them are prone to not exist.

battery (b) => send => telemetry (t). then, telemetry => cause => fault (f)

    [b]-[:send]->[t]-[:causes]->[f]

fault node can only be created if following condition are matched

1. battery node and telemetry node are created
2. if battery node not created, create battery node placeholder
3. if telemetry node not created, create telemetry node placeholder.
4. ensure b->t relation ship are created
4. once condition 1,2,3 are matched, then the association is executed.

if above scenario translated to cypher, it would be : 

```
MERGE (b:Battery {id: "BMS-003"})  // Ensure the Battery node exists

MERGE (t:Telemetry {timestamp: datetime("2025-07-27T01:00:00"), deviceId: "BMS-003"})  // Ensure Telemetry with same timestamp and deviceId

MERGE (f:Fault {faultCode: "BATTERY_OVER_TEMPERATURE", avgTemperature: "23.5", startTimestamp: "2025-07-27T01:00:00", endTimestamp : "2025-07-27T05:00:00"})  // Ensure Fault node exists (you can add more properties to identify faults)
CREATE (t)-[:CAUSES]->(f)  // Create the relationship between Telemetry and Fault
MERGE (b)-[:SEND]->(t)  // Ensure the relationship between Battery and Telemetry is created
```

what if telemetry for BMS-001 and timestamp : 2025-07-27T01:00:00 are late(compared to the fault)? ideally the late telemetry should update the placeholder

then, the telemetry node creation and association with battery should cater when the telemetry placeholder already exist it should do update.

```
MERGE (b:Battery {id: "BMS-003"})  // Ensure the Battery node exists

MERGE (t:Telemetry {timestamp: datetime("2025-07-27T05:00:00"), deviceId: "BMS-003"})  // Ensure Telemetry with same timestamp and deviceId

ON CREATE SET t.voltage = 4.3, t.current = 1.2, t.temperature = 80  // Set Telemetry properties if created
ON MATCH SET t.voltage = 4.3, t.current = 1.2, t.temperature = 80  // Set Telemetry properties if created

MERGE (b)-[:SEND]->(t)  // Create relationship between Battery and Telemetry, ensuring it’s only created once
```

above query will create a seamless data ingestion for telemetry. If telemetry node already exist due to fault injection then it will update.

same case should be applied for Battery node creation

```
MERGE (b:Battery {id: "BMS-003"})
ON CREATE SET b.manufacturer = "Samsung", b.chemical = "Lithium-Ion"
ON MATCH SET b.manufacturer = "Samsung", b.chemical = "Lithium-Ion"
```

But fault ingestion should not CATER this scenario because fault is the last NODE. So update to the FAULT Node is not needed unless there is new Node that correlated to FAULT (apart from telemetry Node)

# Fault Detection Safe Data Ingestion Sceneario

Below are the summarized data flow from all of query mentioned on previous section.

![postimage100](/assets/images/2025-07/cyphersummary.jpg)
[Fullflow Safe Data Ingestion to Neo4J, not prone to Error](/assets/images/2025-07/cyphersummary.jpg){: .center-image }

## Test Scenario

### Happy Path

1. Incoming#1 - Battery Master Data Node (BMS-003)
```
MERGE (b:Battery {id: "BMS-003"})
ON CREATE SET b.manufacturer = "Samsung", b.chemical = "Lithium-Ion"
ON MATCH SET b.manufacturer = "Samsung", b.chemical = "Lithium-Ion"
```
2. Incoming#2 - Telemetry 05:00:00 Node for BMS-003

```
MERGE (b:Battery {id: "BMS-003"})  // Ensure the Battery node exists

MERGE (t:Telemetry {timestamp: datetime("2025-07-27T05:00:00"), deviceId: "BMS-003"})  // Ensure Telemetry with same timestamp and deviceId

ON CREATE SET t.voltage = 4.3, t.current = 1.2, t.temperature = 80  // Set Telemetry properties if created
ON MATCH SET t.voltage = 4.3, t.current = 1.2, t.temperature = 80  // Set Telemetry properties if created

MERGE (b)-[:SEND]->(t)  // Create relationship between Battery and Telemetry, ensuring it’s only created once
```

3. Incoming#3 - Telemetry 01:00:00 Node for BMS-003

```
MERGE (b:Battery {id: "BMS-003"})  // Ensure the Battery node exists

MERGE (t:Telemetry {timestamp: datetime("2025-07-27T01:00:00"), deviceId: "BMS-003"})  // Ensure Telemetry with same timestamp and deviceId

ON CREATE SET t.voltage = 5.3, t.current = 3.2, t.temperature = 120  // Set Telemetry properties if created
ON MATCH SET t.voltage = 5.3, t.current = 3.2, t.temperature = 130  // Set Telemetry properties if created

MERGE (b)-[:SEND]->(t)  // Create relationship between Battery and Telemetry, ensuring it’s only created once
```

4. Incoming#4 - Telemetry 03:00:00 Node for BMS-003

```
MERGE (b:Battery {id: "BMS-003"})  // Ensure the Battery node exists

MERGE (t:Telemetry {timestamp: datetime("2025-07-27T03:00:00"), deviceId: "BMS-003"})  // Ensure Telemetry with same timestamp and deviceId

ON CREATE SET t.voltage = 6.3, t.current = 8.2, t.temperature = 120  // Set Telemetry properties if created
ON MATCH SET t.voltage = 6.3, t.current = 8.2, t.temperature = 150  // Set Telemetry properties if created

MERGE (b)-[:SEND]->(t)  // Create relationship between Battery and Telemetry, ensuring it’s only created once
```

5. Incoming#5 - Fault Node for BMS-003
```
MERGE (b:Battery {id: "BMS-003"})  // Ensure the Battery node exists

MERGE (t:Telemetry { timestamp: datetime("2025-07-27T05:00:00"), deviceId: "BMS-003"})  // Ensure Telemetry with same timestamp and deviceId, set on the MAX time

MERGE (f:Fault {faultCode: "BATTERY_OVER_TEMPERATURE", avgTemperature: "23.5", startTimestamp: "2025-07-27T01:00:00", endTimestamp : "2025-07-27T05:00:00", rule : "temperature > 20"})  // Ensure Fault node exists (you can add more properties to identify faults)
CREATE (t)-[:CAUSES]->(f)  // Create the relationship between Telemetry and Fault
MERGE (b)-[:SEND]->(t)  // Ensure the relationship between Battery and Telemetry is created
```

expected final condition on neo4j graph visualization


![postimage100](/assets/images/2025-07/cypher4.jpg)
[Expected: 3 Telemetry node, 1 Battery node and 1 Fault Node connected to telemetry with highest timestamp](/assets/images/2025-07/cypher4.jpg){: .center-image }

**Generate RCA**

![postimage100](/assets/images/2025-07/cypher5.jpg)
[Expected: 3 Telemetry node, 1 Battery node and 1 Fault Node connected to telemetry with highest timestamp](/assets/images/2025-07/cypher5.jpg){: .center-image }

based on max timestamp
```
MATCH (f:Fault {faultCode: "BATTERY_OVER_TEMPERATURE"})<-[:CAUSES]-(t:Telemetry)
RETURN t
LIMIT 10
```

based on time range 

```
MATCH (f:Fault {faultCode: "BATTERY_OVER_TEMPERATURE"})
WITH f, datetime(f.startTimestamp) AS faultStart, datetime(f.endTimestamp) AS faultEnd
MATCH (t:Telemetry {deviceId: "BMS-003"})
WHERE t.timestamp >= faultStart AND t.timestamp <= faultEnd
RETURN f, t
ORDER BY t.timestamp
LIMIT 10
```

this should return the three telemetry sent between those range.

view battery

```
MATCH (n:Battery) RETURN n LIMIT 25;
```

view fault

```
MATCH (n:Fault)
RETURN n
ORDER BY n.endTimestamp DESC
LIMIT 25
```

view specific battery
```
MATCH (n:Battery {id: "BMS-003"})
RETURN n
LIMIT 25
```

find specific fault based on timestamp 

```
MATCH (f:Fault {endTimestamp: datetime("2025-07-28T04:46:14.004637000Z"), faultCode: "BATTERY_OVER_VOLTAGE"})
RETURN f
```

Final find RCA of fault based on datetime and timerange

```
MATCH (f:Fault {endTimestamp: datetime("2025-07-28T04:46:14.004637000Z"), faultCode: "BATTERY_OVER_VOLTAGE"})
WITH f, datetime(f.endTimestamp) AS startTs, datetime(f.startTimestamp) AS endTs
MATCH (t:Telemetry)
WHERE t.timestamp >= startTs AND t.timestamp <= endTs
RETURN f, collect(t) AS telemetry
```