# Data Model

Despite that IoT platform must be able to acquire OT data from IT friendly protocol with various payload format, it must turn the  payload into standardized data model across all of the sensor model/type.

Without the standard format, the downstream application such as analytics or UI require additional data transformation and might introduce data format inconsistencies which lead into data quality and scalability issues.

## Telemetry Payload

One safety sensor can generate multiple tags and will be correlated into itemId on the OPC DA Server. IoT platform will maintain PID (PID is stands for parameter ID) master data to ensure each safety sensor tags has standard mapping. Below are the sensor telemetry parameters list which applied for on the message broker.

Below is the standardized message payload

Above telemetry data model is applicable on following storage:

1. Highbyte MQTT Message broker (silver topic) for the UNS (unified namespace)
2. Kafka Message Broker within following topics: warmpath & coldpath


## Event & Incident

Apart from acting as protocol listener, IoT platform will also generate two kinds of platform generated information as the result of sensor data analysis including events and incident.

## Time Series Data

Telemetry data will be flattened out into timeseries format and stored on the influxDB (timeseriesDB).

## PID Mapping

Below is the itemID mapping to the PID on every known sites

## CBM Threshold

Aside from data acquisition from the sites, IoT platform also has responsibility to generate real time insight from the sensor data using streaming analytics based on configurable threshold

## Notification

Not all event and incident will become notification at the monitoring platform (remote sensing), only selected event and incident are converted into notifications based on preconfigured configuration.

# Data Transformation

Following section will contains all data transformation logic within the IoT platform.

## Asset Contextualization

Tags data by default does not come with asset information. Each of tags will be grouped based on following asset information.

## Business Information Enrichment

Apart from the asset information, the asset information will also be enriched with business information

# Streaming Analytics

## Condition Based Monitoring (CBM)

Condition based monitoring real time analytics will evaluate incoming sensor data based on pre-configured theshold.

## Anomaly Detection

There are several anomaly detection logic that will be applied on the streaming analytics.

# Non Functional Requirement

Below are the typical non-functional requirement for IoT platform

## Scalability

IoT platform must be able to scale to process hundreds of sites.

## Reliability

IoT platform must be able to withstand various application/network outage scenario

## Security

# Configuration

## Message Broker

## Apache Flink

## Lambda

## IoT Platform

## InfluxDB for timeseries

# Networking

## Subnet & Security Group

## Network Access Control List

## Virtual Private Network