# The Importance of Edge Gateway In the Age of Indsutrial Internet of Things

Industrial internet of things or often called as IIoT is an integrated computer network between plant and IT infrastructure which can be fully on cloud, on premises or hybrid especially on the data acquisition system such as sensors, SCADA and historian. **IIoT enable real time data collection** (device to cloud) from OT towards the IT network that make on cloud analysis possible to improve the productions and operations efficiency using data driven method.

Without IIoT concept, the realtime tags **data streaming analytics which combine enterprise resource planning data and process or operations data from shopfloor can't be achieved.** There are various key use cases enabled by IIoT including (but not limited) to following item

1. Realtime descriptive analytics (eg: condition based monitoring)
1. Realtime predictions (eg: predicitive maintenance) using AI/ML
1. Realtime diagnostics (eg: root cause analysis)
1. Prescriptive and automated control (eg: cutting the valve when fire gas detector detect methane leak)

Comperhensive **dataops tools** is needed to act as the technology foundation for enabling the use cases.

## Indsutrial DataOps Role in Industry 4.0

DataOps is the **orchestration** (a process to plan, schedule, coordinate and control of various activities or tasks to achieve one or more main objective) of information system components including people, process, hardware, software and data. 

	DataOps and DevOps are two different operations principle in software engineering.

DevOps focus on software development life cycle (SDLC) optimization, especially during the development phases by cutting manual activity such as deployment, build and testing. In other hand, DataOps is optimizing data management and analytical workflows. 

## CRISP-DM Framework for Data Analysis Project

CRISP-DM (cross industry standard process for data mining) is a framework to execute **data mining**, **data analytics** and **data science** process. 

Data mining: focused on uncovering the insight from given a data (pattern recognition) - solved using pattern recognition on the data itself.
Data analytics: utilize historical data and trends to gain insight (descriptive) - solved using statistical method
Data science: Build algorithms to predict the future (predictive and prescriptive) - solved by using computer science approach through machine learning

CRISP-DM framework determine six phases to execute data minig/analytics/science.

First stage is **[1] business understanding** - the most critical stages. Depending on the project scope, we have to determine the objectives of the data analysis initiatives by understanding the end to end related as-is business process alongside with the pain points (problem faced by user/business unit/organization).

Once the as-is business process has been mapped with confirmed pain points (usually done via user interviews), a clear objectives can be defined. Then we need to collect all required data or information to support the objectives and solve the problem. 

First cut of data analysis based on CRISP-DM framework is called as **[2] data understanding**. The initially collected data need to be studied to find out whether an additional data is needed or further clarification with business user are required. Once all the data foundation has been captured and collected, then we began to prepare the data (**[3] data prepration**) by clean, normalize and transform the data in one standardized dataset. 

If only if the dataset has been finalized (usually stored in form of datamart/factual table), then **[4] data modelling and [5] evaluation** can be executed. Those process (data modelling & evaluation) will repeated until it reached certain accuracy percentages before the model can be deployed so that the underlying consumer can inference the model.

	Highbyte is a dataops tools which can be used to execute stages 2 (data understanding) and 3 (data prepration) from CRISP-DM framework.

## Typical High Level ITOT Convergence Architecture with Centralized Highbyte on AWS

[image Common Highbyte Architecture on AWS for Industrial Data Integration]

Highbyte can be deployed on both cloud (including AWS) and on premise using direct deployment to the baremetal or via containerization. However, highbyte on the aws marketplaces **only support containerization** through ECS (elastic container services) or EKS (elastic kubernetes services). It connect  data engineer, data scientist and business users in one platform to collaborate and speed up decision making by through data driven analysis.

The recommended way to ingest or collect realtime OT telemetry or tags data to IT system at level 4 for data streaming purposes is through Open platform communication unified architecture (OPC-UA) protocol because its the standard defined by internet engineering of task (IETF).

Unlike OPC DA (data accesss) that based on client-server mechanism, OPC UA is built using pub-sub (publish and subscribe) approach which enabling data streaming capabilities just like apache kafka, azure eventhub or AWS kinesis data stream.

## Highbyte Modules & How it Help to Execute CRISP-DM framework

Highbyte has two role as industrial data integration and contextualization layer. There are at least four main industrial **system-to-system** protocol that supported by highbyte including: Modbus over TCP, OPC-UA, HTTP and MQTT. It was designed to sit on level 3.5 (DMZ network area) and listening/streaming to the incoming data.

Those telemtry data will be **aggregated**, **transformed**, **filtered** and **contextualized** by highbyte data pipeline in order to create ready-to-use (silver layer grade in context of medallion architecture) process or operations data.

Below are the lists of available highbyte modules which can serve as technology foudation for dataops practice. 

1. Connect - Manage **inbound or outbound connection** between highbyte and its surroundings. 
2. Model - **Structurize** the asset **data model.** For example, if each of gas detector sensor has arround five tags and we have total of 100 sensors, instead of having different data model per sensors, highbyte can create a unified data model with **multiple gas detector instances** across all gas detector sensors because its considered as "one asset type or equipment type" in form of **JSON** (javascript object notation) format
3. Pipeline - **Responsible for ETL** (extract, transform and load) towards the incoming data including following operations: reading, filtering, transforming, contextualization, routing, publish to outbound sink/connection and buffering as well as the **orchestration of the pipelines**
4. Namespaces - **Manage asset hierarchy** and **associate the data model** to the hierarchy
5. MQTT Broker - the most common UNS system hub is MQTT broker which allow every devices to communicate with other through centralized system hub. **Highbyte has built in or embedded MQTT broker**. 
6. UNS Client - MQTT client to susbcribe to an existing mqtt broker for **viewing available topics** and **getting the the incoming data payload.**

Highbyte can support phase two and three of CRISP-DM which are data understanding and data preparation. 

| Phase | Name               | Associated Highbyte Module               | Usage                                                        |
| ----- | ------------------ | ---------------------------------------- | ------------------------------------------------------------ |
| 2     | Data Understanding | Connect, UNS Client                      | To acquire the process and operations data from shopfloor/OT |
| 3     | Data Prepration    | Model, Pipeline, Namescapes, MQTT Broker | To model the data into normalized and standardized format.<br />Allowing the downstream analytics to process the silver grade data. |

Highbyte still need to be combined with other tools to complete the end to end Dataops along side with CRISP-DM framework cycle. 

Note: phase 1 of CRISP-DM usually done with just diagram drawing software like visio, draw.io or even powerpoint as it mostly brainstorming activities with relevant stakeholders.

## Designing Pipeline and Model using UNS Design Pattern

Unified name space or UNS is a concept of interconnected devices in one central data exchange hub. Each of the devices can seamlessly exchange information or even send command from one to another.

#1 First principle in UNS: **centralize all data in one places & define standardized hierarchy**

	Asset hierarchy on maintenance management system is the source of truth of namespace hierarchy not the OPC UA namespace hierarchy.

System that designed over UNS pattern must be able to create the **digital twin representation of asset hierarchy** as close as possible. In most of large organization, those asset hierarchy representation are usually managed on the maintenance planning system like SAP PM (functional location) or IBM Maximo. Highbyte is capable of mimicing those hierarchy using namespaces module.

for example

```json
organization
-- site A
--- area01
---- system01
------ sensor001
------ sensor002
```

there is no good or bad hierarchy to model the namespaces on highbyte. The most important thing is the structure must be aligned with how the maintenance system structurize it. 

#2 Second principle in UNS: **Publish-Subscribe Model**

Each system or devices should be able to communicate through UNS instead of direct connection for data acquisition (read) or send command purposes (write/control). The most common message hub is MQTT broker which enable every devices to publish their telemtry/updates updates and allow other devices to get the data.

However, message hub alone is not enough. The payload format or structure need to be standardized across all devices so that every devices are communicating through same languages. Highbyte "model" module can be used to create a standard message payload in JSON format.

for example, a data model for gas detector

```json
{
  "equipmentNumber": "001",
  "type": "gas-detector",
  "pi": [
    {
      "pid": 1,
      "unit": "ppm",
      "value": 5
    },
    {
      "pid": 2,
      "temperature": "C",
      "value": 3
    }
  ]
}
```

#3 Third principle in UNS: **Event Driven Updates**

Traditional historian to historian communication is done through client-server design pattern where the tags update is pooled every certain timerange (eg: every mins). UNS has the opposite architecture. The tags update must be pushed immediately to the message broker. Such pattern is called as event-driven and enabled with publish-subscribe data transmission architecture.

## Typical Integration Point of Edge Gateways towards the Downstream and Upstream Integration

Highbyte can only cover two out of six phases of CRISP-DM which mainly handle the data acquisition from field devices or L3.5 in industrial IoT context. Once the data are contextualized and formatted on highbyte, it will be consumed by downstream analytics system such as streaming analytics (for realtime processing/infereces usecases) or batch analytics (for daily reporting or training).

Eventhough highbyte has built in message broker, it was not designed to execute heavy computation/analytics like data mining: pattern detection, anomaly detection or ML infereces. Highbyte should only be used to collect data from OT and format it into standardized data model. Otherwise, it might causing performance issue (scalability and bottleneck) and bottleneck.

One of the common architecture pattern to handle integration between highbyte as iot hub towards the downstream analytics system is using lambda architecture. It segregate the operations into three layer including: batch processing (warm or cold), realtime processing (hot) and data serving and interconnected with message broker using event driven data transmisison architecture.

below is the typical data-sink system stack for each layer

| Layer         | Purposes                                                     | Stack                                                        |
| ------------- | ------------------------------------------------------------ | ------------------------------------------------------------ |
| Speed Layer   | To process the data and analyze it in realtime manner        | Streaming analytics<br />1. Apache flink<br /><br />2. Kafka Stream<br /> 3. Azure Streaming Analytics<br /> 4. Azure ADX |
| Batch layer   | To process the data and analyze it in batch manner           | Batch analytics<br />1. Apache spark<br /> 2. Hadoop<br />3. Datalake / object storage<br /> 4. Delta Lake<br /> 5. Apache Iceberg |
| Serving Layer | To query the data from both speed layer and batch layer analyics output (gold) | 1. Elasticsearch<br /> 2. TimeserisDB like Influx<br /> Apache Cassandra |

## Resiliency Hotspot of Highbyte and The Mitigation Strategy on AWS

Below are the some scenario where highbyte is lacking and how to mitigate it.

**Resiliency Hotspot 1**: High Availability

---

By default, Highbyte on AWS market places on come with one single instances. Its recommended to provision at least two highbyte instances (active-standby mode). When the maintenance instances is down, the second instances can automatically take-over the data collection and data prepration

**Resiliency Hotspot 2**: Store & Forward

---

Highbyte has built in MQTT message broker. Create a resilient data pipeline by applying process-storage-process-storage design pattern where one process only responsible for single specific action then push the transformed data output to message broker topic. The next data processing pipeline should always stream from the staging topic instead of processing it again from the data sources.

**Resiliency Hotspot 3**: Highbyte Underlying Infrastructure HA Mode

---

| Component  | HA Approach                          |
| ---------- | ------------------------------------ |
| PostgreSQL | use AWS RDS with Multi A-Z           |
| EKS        | Multi A-Z EKS and persistent storage |

**Resiliency Hotspot 4**: Horizontal scaling

---

**Be cautious!**: Unlike HTTP which can be funneled to several HTTP listener server using load balancer, MQTT and OPC UA are stateful protocol. The only way to horizontal scale MQTT and OPC UA are parallelize the pipeline and if needed spread it into several highbyte instances.

## Security Hotspot and The Mitigation Strategy on AWS

Highbyte need to be secured using following key hardening strategies.

1. OT-to-Highbte-on-AWS: OPC UA X506 certificate, Site to site VPN, VPC, Segregated private subnet and ensure physical firewall is used on L3.5
2. OT Control: Apply data diode principle, only devices to cloud scenario should be employed. Ensure there is no send command can be triggered back to the PLC/L3.5
3. Code Modification: Treat pipeline updates on highbyte like usual custom coding devops through proper CI/CD and integration with git repositories.
4. Highbyte UI Access: Its recommended to not use default username and password authentication but to migrate into SSO (single sign on) using azure entraID.
5. Controllized Traffic Rule (east-west): Only allow highbyte connect with following system: L3.5 OPC UA server & message broker (outside highbyte) become in transit storage/broker for the downstream analytics system.

Note: a proper penetration test should be conducted to find out the vulnerability and weakness of the whole ecosystem.
