Layer
Tool
Required?
Storage
S3 / MinIO
✅
Table format
Apache Iceberg
✅
Catalog service
Iceberg REST Catalog
✅
Catalog metadata store
PostgreSQL
✅
Batch compute
Apache Spark
✅
Query / analysis
DuckDB
optional but great

# Mini Lakehouse Architecture 

&mdash; a multi cloud approach will be choosen to **optimize the cost** by combining AWS S3 and low cost cloud platform like digitalocean. Only data lake layer will be hosted on AWS(S3). The other data platform component(opensource and hostable on vm/premises) will be hosted on digital ocean virtual machine (DO droplets)

Lakehouse architecture is a data platform architecture which **combine datalake and data warehouse capabilities**. Data lake has great scalability and relatively efficient cost. Where as data warehouse offering data management and ACID transactions which enable data analytics, machine learning and business intelligence.

AWS S3 object storage will be used as the data lake to have high performance with strong geo-redudancy across different region and relatively cheap cost. Meanwhile, table format and data catalog will be managed by apache iceberg with additional library for iceberg REST catalog.

## Technology Stack

below is the mini data analytics platform using lakehouse architecture technology stack ecosystem.

| Component | Stack | Description |
| --------- | ----- | ----------- |
