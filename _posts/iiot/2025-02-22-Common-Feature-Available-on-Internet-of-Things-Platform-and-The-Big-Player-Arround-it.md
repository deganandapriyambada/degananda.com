---
layout: posts
author: Degananda Ferdian
categories: Industrial-IoT
series-code: ITOT001
excerpt: IoT Platform manage and control devices related operation from edge activities until analytics capabilities on the cloud. IoT platform serve as middleware.
tags: ITOT-Convergence Industrial-IOT IoT-Platofrm AWS
topics: ITOT
subtitle: Hello world subtitle of this post
ptype: News
background: What is the avaialble capabilities of IoT Platofrm MLP (Minimum loveable product)
objective: to identify basic and core capabilities of IoT Platform based on market standard
deliverables: Article, Comparison Analysis & Illustration
---

# Internet of Things Platform as A Core Digital Foundation

Internet of things is a concept where data collected from machine through sensorization and transmitted over the internet to the designated system. Practically it will be stored on data lake (IoT Historian) before it will be further analyzed using AI/ML and generating business insight for the management to make a business decisions.

    IoT Platform is a platform that govern data ingestion process from end to end (E2E). From sensor data acquisition until business insight generation.

The reponsibility of IoT platform is strated from edge (OT Layer) until cloud (IT Layer). It govern between **Edge to Cloud (D2C)** and **cloud to Devices(C2D)**. 

While D2C focues on data acquisition parts such as collecting telemetry data from sensor / machine, parsing, normalization and store it into databases, in otherhand D2C is function to handle cloud to devices command such as : OTA (over the air updates), send command (config update) and security certificate rotation.

    Hence, IoT Platform is one of key enabler for indutry 4.0 digital transformation. The quality of IoT Platform can determine overall telemetry data quality dan data pipeline performance. It is really important to build scalable, robust and enterprise grade level of IoT Platform

## Available  IoT Platform Accelerator on The Market

There are several big player that provide IoT Platform (Opensource/Paid enterprise) who can accelerate the development of IoT Platform. Some notable players on open source area are 
- Thingsboard 
- MainFlux. 

Meanwhile the big player on enterprise market are following below : 
- PTC Thingswork 
- Siemens Insighthub (also known as Mindsphere)
- Bosch IoT Suite
- IBM Watsom

Due the limited availability of closed source / paid enterprise platform, we can't compare the capabilities of those. 

    Usually the enterprise platform are highly tailored for specific industry. For example Siemens insight hub (or was known as mindshhere ) are heavility customized for manufacturing and industrial use cases.
 
## IoT Platform on Accelerator vs Cloud Native
Actually all the IoT platform's accelerator listed above can be instegrated to those public cloud.

    Note: IaaS "IoT Platform" such as Azure, Google and AWS are not listed because they are focus more on the infrastructure side instead of the actual platform where all the capability and business logic resides


As a solution architect it is really important to decide whether we are going to use accelerator (either with opensource or enterprise grade) or proceed with build iot platform natively on public cloud. There are several factor that need to be considered before make the decision. But before that, we have to know the common and critical capabilities of IoT Platform.

# Common Capabilities and Feature on Internet of things Platform

## Opensource IoT Platform Capability Comparison

We are going to compare between Mainflux Vs Thingsboard based on Available features.

    Note Scalability and perfromance factor are not considered. It require comperhensive NFT(Non functional test) for performance and will depend on the configuration part.

**i am not affiliated with either mainflux or thingsboard**. The capabilities that i listed down are based on my experiences building IoT Platform for Land-Based Fleet Management. Below are minimum loveable capabilites that any IoT Platform should have.

## Information Architecture Available on the GUI

**Mainflux**
![postimage100](/assets/images/2025-02/iotplatform-1.jpg)
[Mainflux Menu list](/assets/images/2025-02/iotplatform-1.jpg){: .center-image }

**Thingsboard**
![postimage100](/assets/images/2025-02/iot-platform-2.jpeg)
[Thingsboard Menu list](/assets/images/2025-02/iot-platform-2.jpeg){: .center-image }

## Capabilities Comparison

| No | Capabilities | MainFlux | Thingsboard |
|:--------:|:-------:|:------:|:------:|
| 1 | Device Provisioning  |  <i class="fa fa-check" aria-hidden="true"></i>  |  <i class="fa fa-check" aria-hidden="true"></i> |
| 2 | Data Parsing |  <i class="fa fa-check" aria-hidden="true"></i>  |  <i class="fa fa-check" aria-hidden="true"></i> |
| 3 | Custom Attribute and Tags |  <i class="fa fa-check" aria-hidden="true"></i>  |  <i class="fa fa-check" aria-hidden="true"></i> |
| 4 | Custom ETL |  <i class="fa fa-check" aria-hidden="true"></i>  |  <i class="fa fa-check" aria-hidden="true"></i> |
| 5 | Multi Tenant  |  <i class="fa fa-times" aria-hidden="true"></i>  |  <i class="fa fa-check" aria-hidden="true"></i> |
| 6 | Alarm & Alerting  |  <i class="fa fa-times" aria-hidden="true"></i>  |  <i class="fa fa-check" aria-hidden="true"></i> |
| 7 | No/Low Code Dashboard  |  <i class="fa fa-times" aria-hidden="true"></i>  |  <i class="fa fa-check" aria-hidden="true"></i> |
| 8 | No/Low Code Rule Engine  |  <i class="fa fa-times" aria-hidden="true"></i>  |  <i class="fa fa-check" aria-hidden="true"></i> |
| 9 | User Management  |   <i class="fa fa-times" aria-hidden="true"></i> |  <i class="fa fa-check" aria-hidden="true"></i> |
| 10 | Device to Cloud |   <i class="fa fa-times" aria-hidden="true"></i> |  <i class="fa fa-check" aria-hidden="true"></i> |
| 11 | Cloud to Device / OTA |  <i class="fa fa-times" aria-hidden="true"></i> |  <i class="fa fa-check" aria-hidden="true"></i> |
| 12 | Native Integration to Azure/AWS/GCP |  <i class="fa fa-times" aria-hidden="true"></i>|  <i class="fa fa-check" aria-hidden="true"></i> |
| 13 | Notification (SMS/Email/Push) |  <i class="fa fa-times" aria-hidden="true"></i> |  <i class="fa fa-check" aria-hidden="true"></i> |
| 14 | OpenAPI Integration |   <i class="fa fa-times" aria-hidden="true"></i> |  <i class="fa fa-check" aria-hidden="true"></i> |
| 15 | Industry Specific Analytics |  <i class="fa fa-times" aria-hidden="true"></i> |  <i class="fa fa-times" aria-hidden="true"></i> |
| 16 | GUI |  <i class="fa fa-times" aria-hidden="true"></i> |  <i class="fa fa-check" aria-hidden="true"></i> |

Feature wise, Thingsboard is far ahead againt mainflux. It seems that mainflux is designed to be lightweight and more focuses on data collection while thingsboard are provide more business layer abstration on top of the data collection and devices management such as : multi tenant, Alarm and Dashboard.

    Conculusion: thingsboard is more suitable for enterprise and Mainflux is better for personal project or POC.

# L0 Architectural Comparison

## End to End

**L0 Data Streaming Pipeline Architecture E2E Comparison**
![postimage100](/assets/images/2025-02/arch-comparison-3.jpg)
[Thingsboard vs Mainflux: End to End data Pipeline](/assets/images/2025-02/arch-comparison-3.jpg){: .center-image }

Both Thingsboard and mainflux are using common architecture pattern
- **lambda architecture**: data pipeline are separated. realtime pipeline (hot) and warm pipeline having different processing pipeline. it will hinder the system from getting performance issues due load depedencies with other pipeline
- **Process-storage-process concept**: Data from devices are received by a storage/listener, then processed and store it again in queue/NATS then processed again and repeat.
- **Versatile protocol gateway**. data can be sent directly from devices to gateway or through edge devices.
- **Edge devices** is **compensating the limited protocol avaialbility** on the IoT Platform. 
- Mandatory protocol on the iot platform : CoAP, MQTT and HTTP. the rest of the protocol will be extended on edge devices. I believe this to reduce the number of active listener on the IoT Platform. better performance, reliability and scalability.
- **Rule engine is a must** on IoT PLatform to generate business insight. Mainflux using redis stream, but thingsboard have it on different level. they create custom rule engine with comperhensive capability.
- IoT data are stored in **NoSQL Databases**

## Device to Cloud

**L0 Architecture Comparison for Device to Cloud**
![postimage100](/assets/images/2025-02/arch-comparison-1.jpg)
[Thingsboard vs Mainflux: Devices to Cloud](/assets/images/2025-02/arch-comparison-1.jpg){: .center-image }

Both of thingsboard and mainflux has same architecture concept for device to cloud where the devices or edge can actually connect to the main iot platform. This is offer flexibility and support different integration scenario based on the cases.

| No | Protocol | MainFlux | Thingsboard |
|:--------:|:-------:|:------:|:------:|
| 1 | HTTP  |  <i class="fa fa-check" aria-hidden="true"></i>  |  <i class="fa fa-check" aria-hidden="true"></i> |
| 2 | MQTT |  <i class="fa fa-check" aria-hidden="true"></i>  |  <i class="fa fa-check" aria-hidden="true"></i> |
| 3 | TCP |  <i class="fa fa-check" aria-hidden="true"></i>  |  <i class="fa fa-check" aria-hidden="true"></i> |
| 4 | OPC-UA |  <i class="fa fa-times" aria-hidden="true"></i>  |  <i class="fa fa-check" aria-hidden="true"></i> |
| 5 | ModBus |  <i class="fa fa-times" aria-hidden="true"></i>  |  <i class="fa fa-check" aria-hidden="true"></i> |
| 6 | CoAP |  <i class="fa fa-check" aria-hidden="true"></i>  |  <i class="fa fa-times" aria-hidden="true"></i> |

Thingsboard supported more protocol compared to the mainflux. Common industrial protocol like OPC UA and Modbus are key protocol that needed for IIoT. Hence, on this point, thingsboard are winning.

## Data Ingestion Pipeline and Cloud Integration

**L0 Architecture Comparison for Cloud Integration**
![postimage100](/assets/images/2025-02/arch-comparison-2.jpg)
[Thingsboard vs Mainflux: Cloud Integration](/assets/images/2025-02/arch-comparison-2.jpg){: .center-image }

    Thingsboard and mainflux has different concept of integration to AWS. Thingsboard use IoT Core as their main IoT Gateway. In otherhand, mainflux act as middleware between devices and IoT Core.

Above is the cloud integration between mainflux/thingsboard to AWS IoT Core. Thingsboard offering OOTB(out of the box) integration between AWS IoT Core and thingsboard through their uplink and downlink conveter. No custom code needed. You only need to config it on thingsboard platform.

Mainflux is more focus on backend middleware for IoT Platform. Hence, you might need to deploy additional component like custom mqtt publisher service in order to be able to push the data into IoT Core.

## Technology Stack

Below are technology choice comparison between Thingsboard and Mainflux

| No | Technology Foundation | MainFlux | Thingsboard |
|:--------:|:-------:|:------:|:------:|
| 1 | Streaming Platform  |  Apache Kafka | Apache Kafka |
| 2 | Microservices  |  Go-lang | Java EE |
| 3 | Devops  |  Kubernetes/Docker | Kuberentes/Docker |
| 4 | Load Balancer/RP  |  HA Proxy | Nginx |
| 5 | Frontend  |  Angular | Angular |
| 6 | Authentication  |  TLS X509 | TLS X509 |
| 7 | Databases Type  | NoSQL | SQL+NOSQL |
| 8 | Databases Platform  | InfuxDB, MongoDB | Postgre,Cassandra <br /> TimescaleDB |

    you may decide which IoT Platform that suite with your organization preference or policy. But generally both of them are using top notch technology selection which already provden in industry.

## Rule Engine

Only thingsboard have rule engine as their capabilities. Mainflux positioning is as a middleware, they dont have built in rule engine. Hence, on this section, only thingsboard architecture will be discussed. But, there are some 3rd party library that can integrate between **Mainflux and NodeRed** which will be act as their middleware.

    https://github.com/darkodraskovic/mf-node-red

**Thingsboard Rule Engine**

![postimage100](/assets/images/2025-02/arch-comparison-4.jpg)
[Thingsboard Rule Engine](/assets/images/2025-02/arch-comparison-4.jpg){: .center-image }

Thingsboard has built in (custom) rule engine called as TB-Rule, which is the shortname for thingsboard rule. Its an event driven system backed up by apache kafa for **realtime processing**, **transformation** and **routing**.

    It will enable user to orchestrate IFTTT (If this then that). Some also called similar system as CBM (Condition based monitoring)

TB Rule mainly has three capabilities on top of event based workflow or event driven process orchestration.
- **Message** : receive incoming telemtry data from devices, call REST API, RPC Request/gPRC
- **RuleNode**  : Filter, transform on incoming messages.
- **RuleChain** : Chaining one rule with others.

Business Logic that typically can be done on TB-Rule
- Data validation and modification. Eg: Check if temperature data is between 0 - 100 celcius
- Aggregation. Eg: Which devices that has the most average temperature in span of time
- Condition based monitoring. Eg: Trigger overtemperature if the temperature is higher than 100
- Trigger based on devices life cycle: Eg: trigger "DEVICE ISSUES" alarm if devices not sending data from more than 10 mins or also known as device inactive.
- Publish to external system (API, Pub MQTT, RPC etc) from defined condition.
- Integrate with external pipeline (Kafka, Spark, AWS Services, ETC)

# Fully Cloud Native IoT Platform on AWS
Some companies are actually prefer(especially for companies that not treat IT as their Core Business) to have everything on the cloud(of course except the edge gateway) because following **main reason**:

    Performance, Scalability, Security and Reliability are Guanrateed if compared to an accelerator/non cloud native system. We can purely focus on writing the Business Logic Abstration.

 Does fully native cloud platform which **functioned like Thingsboard/MainFlux** is possible ?! We will try to craft the architecture as native as possible.

**Yes it Is**

## Full Cloud Native IoT Platform on AWS


![postimage100](/assets/images/2025-02/arch-comparison-5.jpg)
[Thingsboard Like IoT Platform on AWS](/assets/images/2025-02/arch-comparison-5.jpg){: .center-image }