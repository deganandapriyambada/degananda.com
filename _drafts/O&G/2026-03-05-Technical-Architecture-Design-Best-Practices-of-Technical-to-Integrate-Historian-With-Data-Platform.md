# The Role of Historian Databases on Industry

Historian is a specialized system persisted storage (saved on the disk, not in memory) for storing time series process & control data from productions and operations facilities in manufacturing/fmcg/oil and gas industries.

**Process Data** or also known measurement data such as temperature, pressure, machine operating hour or **Control Data** such as alarm, operator action are obtained from shopfloor/facilities will be captured by SCADA/DCS/ICSS through sensorization and PLC integration.

All of those data will need to be consumed by OLTP system on level four (enterprise layer, in context of ISA95) for planning purposes such as ERP(Enterprise resource planning), analytical purposes and reporting purposes.

    Without process and control data from shopfloor, ERP wouldnt be able to provide best decision support.

# Modern ITOT Convergence Enterprise Architecture

## Data Lake

Before Timeseries data which contains process and control data from the facilities can be used by any system, those data must be transmitted into organization centralized **data lake**.

The data centralization is important for organization IT operations to manage and govern all organization data easily without worrying about the performance and scaleability as data lake can support big data. 

Apart for the IT operations ease of data access, data lake also providing much greater benefits.

Unlike RDBMS (relational database management system) which designed to have highly structured schema with strict referential integrity, data lake is designed without any structure.

Data lake can hold structured data such as time series, semi structured data such as json & XML and unstructured data such as video or images, Resulting in the scalability of datalake to hold **big data**.

Due to the schemaless structure, data lake support **horizontal scaling**  which is not possible through traditional RDBMS as the storage and computing power of RDBMS are highly coupled.

## OLAP (Online Analytical Processing)

Data lake cant perform any computation, their main purposes is to store big amount of data without getting performance issue.

Inorder to perform OLAP (online analytical processing), data lake can be integrated with various analytics engine such as apache hadoop, apache spark, apache flink and so on. 

Each of the compute engine has their own strength and weakness, often used together to achieve maximum computing efficiency depend on the use cases.

## Data Ingestion from Historian to Data Lake

a

## Medallion Architecture

a

## Data Lineage

a

## Metadata Management & Data Catalog

a

## Data Governance

a

## Data Quality Management (DQM)

a

## Data Fabric

# Message broker

Time series data that stored on datalake is prepared for further **batch analytics**. Batch analytics is a computation technique which process large amount of historical data collected over specific period of time.

batch analytics job often to be scheduled on hourly/daily or monthly instead of done in near realtime basis depending on the use case objectives.

- hourly:
- daily:
- monthly:

Stream analytics is the opposite of batch analytics. It process the just in time data immedetiately that enter the stream engine. Both batch analytics and stream analytics has different uses cases

| Factor | Streaming Analytics | Batch Analytics |
|---|---|---|
| Nature of Computation | a | b |
| Typical Usecases | | |

Organization should not choose between stream analytics and batch analytic. Those two tools must be used together to achieve the best computation performance as they serve different purposes.

## Data Ingestion from Historian to message broker

a

## Streaming Analytics Source: Distributed Message Broker vs Delta Lake

Data lake is not intended for efficient data streaming purposes eventhough the flat file produced by data lake can be streamed. Most of modern streaming analytics job will either use **delta lake** or go with event streaming tools such as apache kafka depend on the **use cases**.

| Factor | Delta lake Streaming | Message Broker Event Streaming |
|---|---|---|
| Nature of Processing | a | b |
| Latency | | |
| Retention | | |
| Typical Use Cases | | |

On some scenario, delta lake and message broker are combined into one data pipeline where message broker is used to ingest sensor data from field, and the streaming engine will perform the near realtime OLAP via the delta lake.

## Output of Streaming Analytics

the output of streaming analytics can be vary depending on the use cases.

1. Notification:
2. Data stream:
3. API call:
4. Data ingestion:
5. AI/ML Model Inferences: