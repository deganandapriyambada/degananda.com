---
layout: posts
author: Degananda Ferdian
categories: architecture
series-code: RELEARNSWE01
excerpt: Safety and Environmental Telematics data from IoT devices can be captured using edge gateway while surroundings data on the cloud can be captured through Web Scrapping and API Integration.
tags: iot d2c c2d
topics: iot
ptype: Issues
background: There are various way to collect enviromental and safety data from surroundings. 
objective: to create a data pipeline which support device to cloud data acqusition and cloud to cloud data acquisition
deliverables: article & illustration
---

![postimage100](/assets/images/2025-09/sdarch2.svg)
[Sudutkota as Automated City News Content Aggregator Platform: Safety, Environment and Lifestyle](/assets/images/2025-09/sdarch2.jpg){: .center-image }


# Capture Environmental and Safety Data

a Good architecture need to be able to incorporate various way of data aquisition strategies.

<hr />

First method to capture safety and environemntal telematics data (or also known as sensor readings data) by using iot devices and transmitted to cloud through different data transmission protocol.

The second method is to get the data from social media such as X(formerly known as twitter), Thread, Facebook, Instagram etc using a technique called web scrapping or web harvesting.  

    Web scrapping has a grey area on the data privacy. Always check the platform policy before harvesting the data.

Its often find safety or environemntal news on the city on those platform because anyone can post anything (not limited to specific content/category).

The last method (but not least) is getting the environmental and safety data through 3rd party provider. For example, weather information on specific country or city are available on weather.com and they provide API(Applicatio programming interface) for the data integration mechanism.

&mdash; The architecture should be able to capture those data using various method and support various protocol (agnostics)

## Environmental & Safety Information Data Sources 

Below are the environmental and safety information that will be captured automatiicaly to the platform from various source and acquisition method.

Apart from the auto-generation method, user will also have option to submit their report.

### Environmental

| No | Information | Data Source | Aquisition Method |
------------|----------|---------------|---------------|
| 1 | Temperature | IoT Devices (Pi) | Device/Edge to Cloud |
| 2 | Humidity | IoT Devices (Pi) | Device/Edge to Cloud |
| 3 | Weather Forecast | Weather platform | Web Scrapping |

potential platform as the data sources (aside from the direct iot devices data collection which will be built using raspberry pi or arduino):

1. bmkg (for jakarta)
2. waether.com (for jakarta)

### Safety Information

| No | Information | Data Source | Aquisition Method |
------------|----------|---------------|---------------|
| 1 | Fire Incident | X | Web Scrapping |
| 2 | Theft Incident | X | Web Scrapping |
| 3 | Damaged Road | X | Web Scrapping |
| 4 | Flood Incident | X | Web Scrapping |

potential platform as the data sources:

1. official radio services X account on jakarta
2. x's search

### (Trivia) Lifestyle Information

to improve the user experience and reach the audience, the platform will also capture lifestyle information arround the city. 

| No | Information | Data Source | Aquisition Method |
------------|----------|---------------|---------------|
| 1 | Event | Event/Ticket Selling Platform | Web Scrapping |
| 2 | Discount | X, Discount Platform, E-Commerce | Web Scrapping |
| 3 | New Store/Place Openings | X | Web Scrapping |

potential platform as the data sources:

1. x's search
2. traveloka
3. jakarta-tourism
4. jcc
5. eventbrite
6. loket
7. instagram account which focus on event publishing

# SudutKota - a unified news platform for Jakarta (Indonesia)

SudutKota (in english: Cities corner) is a platform where people can get up to date information about safety, environment and life style from other people post on different media. 

    In shorts: its an aggregator engine for safety, environemntal and lifestyle information

As the pilot experimental project, the data will be limited for Jakarta (Indonesia) region.

# L0 High Level Data Acquisition Architecture

![postimage100](/assets/images/2025-09/sdarch1.svg)
[Data Acquisition Architecture from Surroundings to OTLP/OLAP Databases](/assets/images/2025-09/sdarch1.jpg){: .center-image }

Below are the applied architectural principles/pattern :

1. lambda architecture (batch and streaming segregation)
2. layered event driven architecture
3. Medallion / Lakehouse
4. All of those architecture style will be **stitched** by data fabric

it will be deployed on azure cloud using a combination of cloud native component and opensource component which deployed on Container.  

## Data Fabric Architecture

![postimage100](/assets/images/2025-09/sdarch3.svg)
[Data Fabric Architecture Pattern/Style](/assets/images/2025-09/sdarch3.jpg){: .center-image }

main data fabric capability: discover, integrate and access the data without storing the data. It is a middleware that **connect various data platform component** into single digital thread.

### Data Extraction

a Data pipeline will be called as a data fabric if it is capable to access and extract data from different platform's surroundings through **diverse integration protocol and method**. The flexibility differs based on the platform's surroundings integration capability.

### Data Governance & Integration

Althrough it also has several supporting capabilities such as :

1. **data catalog** - any incoming data metadata to the data fabric will be organized into active meta data (usually in form of knowledge graph / object mind map). an Organized metadata will make data analytics easier as the data already catageorized and labelled. Then it can be easily tied to the use cases description and scope.
2. **data governance & security** - Data Access control using RBAC (role based access control). &mdash; "Who can access which data"
3. **unified life cycle** - a data fabric can and should coexist with entire data pipeline lifecycle. For example, it should be integrated to lakehouse platform starting from data extraction (bronze) until (gold) data visualization. 
4. **Integration to AI/ML/Ops Platfrorm** - Data fabric will faciliate the routing of datainto various data plaform within the architecture, Such as AI/ML environments, relational databases, lakehouse platform, message broker, etc.

### Data Consumption

Apart from data extraction, data fabric will also function as an integration bridge/middleware between client application and the data platform, enabling seamless data consumption by the client applications

### Data Extraction

At this stage, data will be stored on two different storage. For realtime data processing pipeline, the raw data will be then sent to message broker. Can be in form of pub sub/topics or queue (depend on the use cases). Then, for batch processed data, the data will be stored into bronze layer of lakehouse platform.

## Transformation Layer

Business context enrichment and transformation will be applied to the raw data. For example, incoming fire incident data from X will be then processed using NLP to extract the data insight such as : where the incident happen & when it happen. 

Then it will be enriched with external information (not from the X/sources) such as : cityId, provinceId, etc and aligned with platform data structure / format.

    Transformed raw data will be stored on the lakehouse platform silver layer 

## Data Analytics Layer

    Data -> Information -> Business Insight / Report

Data extraction and data transformation layer  has one objectives: **extract, enrich and fit** the data to become an **information**.

Data analytics then will use the **informations** (more than one information type/variance) that already stored on the silver layer or on "silver" message broker to create business insight. User will use the insight to make decision (data driven).

For example:

Data to Information Processing

| Data | Information | Processing Approach |
------------|----------|----------| 
| Tweet about fire incident | When, where, how it happened | NLP / Natural language processing |
| Temperature sensor data | When is the sensor. data telemetry recordings exceed (**OVERTEMPERATURE**) the temperature threshold (eg: above 50 Degree) | CBM (Condition based monitoring) |

Information to Insight Processing

Practically, Insight is also called as a **report**

| Information Combination | Insight / Report | Processing Approach |
------------|----------|----------| 
| Fire Incident location, Overtemperature readings from sensor on specific location | RCPA (root cause process analysis) why fire incident happened due to high temperature and it burn some tree leaf | Diagnosis analysis/Cause-reasoning analysis using knowledge graph
| Fire Incident location| Most location with high fire incident rate | Descriptive statistics |