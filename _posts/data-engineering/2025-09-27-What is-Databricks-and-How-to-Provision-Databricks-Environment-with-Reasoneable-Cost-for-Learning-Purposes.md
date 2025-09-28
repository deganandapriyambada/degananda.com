---
layout: posts
author: Degananda Ferdian
categories: data-engineering
series-code: DE001
excerpt: Databricks for production is indeed costly. However, for learning purposes, databricks can be provisioned for reasonable cost.
tags: databricks
topics: databricks
background: While AI, LLM and Machine learning are getting famous nowdays compared to the last 3 years, data engineering is still the backbone of those capability. Databricks is a good data platform that often used to handle and manage big data.
objective: to setup databricks environment on cloud with reasonable cost for learning purposes.
deliverables: article
---

# What is Databricks ?

Many data engineering tools have existed for decades. **RDBMS** to store and process structured data (OLTP), **apache spark** for executing batch analytics from a storage, **MongoDB** to store non strucuted data, **data warehouse** for OLAP which centralized all structured data from RDBMS, **Data lake** to store structured and non structured data but with limited performance. 

then finally **lakehouse** a combination of DWH and datalake. It has high speed processing for structured data while also able to process non strucutred data ( with acceptable performance )

&mdash; databricks is scaleable unified data platform which capable doing **all of these capability** inlcuding collaborative workspaces where data engineer, data analyst and data scientist can collaborate together working on single source of code in form of jupyter notebook (can support scala, R, java and python)

    databricks often abbreviated as dbx

## Key Capabilities of Databricks

From these legacy data engineering tools, databricks summarized those existing capabiltiy into four key main capability

- ETL/ETL data pipeline creation
- End to end machine learning development from EDA, feature engineering all the way the model deployment (including inferecing as well)
- Data streaming - apache spark on the dbx can perform **mini batch** streaming, work for most of the cases. however, apache flink still has lowered latency.
- Big data analytics - distributed sql queries

all of these capability will be developed on jupyter notebook as collaborative work spaces.

note: apache spark on databricks is the premium version of open source apache spark. it has better performance compared to the original one.

## Databricks Technology Stack

Below is the databricks technology stack that used on its unified data platform and the equivalent stack on other cloud data platform such as **AWS**, **GCP**, **Azure** and the **on premsises data platform** equivalent

### Databricks Built-in Techstack

note: databricks also available on AWS, GCP and Azure.

| No | Category | Databricks Built-In | Mandatory External Tech | (Optional) Integration |
|----|----------|--------|--------|--------|
| 1  | Storage & Engine  | Delta Lake, Photon engine | AWS S3, Azure ADLS, GCP GCS | N/A - Not needed |
| 2  | Compute & Runtime  | Databricks runtime (based on apache spark ) Databricks SQL | AWS EC, Azure VM/Scale Sets, GCP CE | Data Shaping tools: DBT(Transformation), Airbyte / Prefect (Connector) & Informatica (MDM) |
| 3  | ML/AI  | MLflow, AutoML, Unity Catalog (Vector Search), Model Serving | n/a | TensorFlow, PyTorch, Scikit-Learn, LangChain, Hugging Faces |
| 4  | Collaboration | Notebook, Repo, Workflow | n/a | Github, Gitlab, Azure Devops, Jenkins, PowerBI, Tableau, Looker |
| 5  | Governance | Unity Catalog, Delta sharing, Cluster Policies | Cloud IAM(AWS IAM, Azure entraId/AD , GCP IAM) | n/a ||


### Databricks Built-in Techstack Comparison

below is the equivalent databricks tech stack on prem or based on cloud native component.

| No | Databricks Native | Open Sources / Can Be Hosted On Prem | AWS Cloud native | Azure Cloud Native | GCP Cloud Native |
|----|----------|--------|--------|--------|--------|
| 1  | Delta Lake  | Delta Lake(**OSS**), Apache Iceberg(Table), Apache Hudi | Athena + Lakeformation | Synapse, ADLS and pureview | BigLake |
| 2  | Photon (SQL query engine, vectorized)  | Apache Spark SQl, DuckDB | RedShift RA 3 + Spectrum | Synapses Pools | BigQuery |
| 3  | ML Flow | MLFlow (**OSS**) | SageMaker | AzureML | VertexAI |
| 4 | Unity Catalog | Apache Atlas, DataHub | Glue Data Catalog+Lake Formation | Pureview nad Microsoft Fabric | Dataplex |
| 5 | Databricks Workflow | Apache Air Flow, Prefect, Dagster | Step Function / MWWA | Data Factory / Synapse Pipelines | Big Query |
| 6 | Databricks SQL (BI+SQL on lakehouse) | Trino/Presto, Apache Drill, Dremio | Athena/RedShift Spectrum | Synapse | Big Query |
| 7 | DLT(Delta Live Tables) for straming | Spark Structured Streaming+ Air Flow | Glue Streaming + Kinesis | Stream Analytics + Synapse Pipeline | Data Flow + Pub Sub |
| 8 | Auto Loader(ingest to delta lake, schema evo) | Apache Spark + Apache Kafka Connect | Kinesis, Fire House, Glue | Event Hub, Azure Data Factory| Data Flow + Pub Sub |
| 9  | object storage & data lake(on top of object storage) on AWS/GCP/Azure <br /> for both storage and meta store/catalog | HDFS+Hive or MinIO/Cepth+Hive Metastore | AWS S3 | Azure ADLS | GCP GCS |
| 10  | Delta Lake (Lakehouse, combination of datalake + table format + catalog, unity catalog) | HDFS+Apache Icreberg+Hive Metastore | S3+Iceberg+Glue Data Catalog+ lake Formation | ADLS+Synapse/Fabric(based on iceberg) +PureView|GCS+Iceberg+DataPlex |

### Conclusion: 

On the end, every big player on tech world is **creating their own version of data engineering technology** for (not limited to) **storage** (data lake/delta lake/warehouse), **processing** (streaming, batch, sql processing), **orchestration** (pipeline/work flow), **ML/AI** development tools, **governance** (catalogs, security, lineage) and **visualization**.

# Provision a Databricks Instances

There are two ways to use databricks on the cloud :

1. databricks on AWS, GCP or Azure
2. databricks free environment

the first option is suitable for actual project development wrok as it is deployed on top of most reknown cloud provider.

However, for learning purposes databricks provide sandbox environment for free.

## Databricks Free Limitation

    Free databricks instaces should only used for learning purposes not for commercial/production.

While databricks offer true zero of charge (free) services on thier databricks free edition, it has several important limitations such as :

1. limited cluster, might not even able to handle medium-to-large data.
2. One SQL Warehouses (can't be scaled)
3. Only one active pipeline
4. limited number of model serving endpoint
5. limited notebook supported language (python and java only)
6. limited security options (vnet, MFA,role based access control per column or table)


## Creating Free Databricks Instances

Go to following url

    https://login.databricks.com/signup

register with google or preferred authentication method

![postimage100](/assets/images/2025-09/dbx1.jpg)
[Register and authenticate on databricks free instances using google or microsoft account](/assets/images/2025-09/dbx1.jpg){: .center-image }


done, the free databricks instances now can be accessed.

![postimage100](/assets/images/2025-09/dbx2.jpg)
[Free databricks workspace now can be accessed](/assets/images/2025-09/dbx2.jpg){: .center-image }

## Cost Comparison Between Azure, GCP and AWS to Host Databricks Instances for Instances with Lowest Computing Power

cost may varies based on region(and the cloud provider might adjust the pricing), below cost estimation is based on **south east asia region**.

    DBU Cost already included based on the VM specs

### 4 vCPU and 16 RAM

- Databricks on **Azure** : D4aS(4 vCPU and 16 RAM), price: 0.240 per hour, 0.55 DBU, per month = **$550**, per 60 hour(for learning purposes, 2 hour per day) = +- $45 (storage and infra cost might still be billed)
- Databricks on **AWS**: m5.xlarge (4 vCPU, 16 GB RAM), per month: +- $540, per 60 hours +- $44
- Databricks on **GCP**: n2-standard-4 (4 vCPU, 16 GB RAM), per month: +- $420, per 60 hours +- $34

costs differences is not that much between those cloud. Use the one that familiar with developer's skill sets on the project