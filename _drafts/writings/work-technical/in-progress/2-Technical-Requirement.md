# Data Model

Despite that iot platform must be able to acquire ot data from IT friendly protocol with various payload format, it must turn the  payload into standardized data model across all of the sensor model/type.

Without the standard format, the downstream application such as analytics or UI require additional data transformation and might introduce data format inconsistencies which lead into data quality issues and inscalability.

## Telemetry

One safety sensor can generate multiple tags or itemID in the context of OP

Below are the sensor telemetry parameters list which applied for on the message broker.


## Event & Incident

Apart from acting as protocol listener, iot platform will also generate two kinds of platform generated information as the result of sensor data analysis including events and incident.

## Time Series Data

Tags

## PID Mapping

## CBM Threshold

## Notification

# Normalization

## Asset Contextualization

## Business Information Enrichment

# Streaming Analytics

## Condition Based Monitoring

## Anomaly Detection

# ITOT Convergence

# Non Functional Requirement

## Scalability

## Reliability

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