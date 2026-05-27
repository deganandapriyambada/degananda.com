---
layout: posts
author: Degananda Ferdian
categories: nodejs
series-code: n/a
excerpt: One of the most repetitive effort during software development of OLTP based software is writing the CRUD function. There are several techniques or method which can reduce the effort to build the CRUD for NodeJS and PostgreSQL stack
background: CRUD is an essential function for OLTP especially on business software which highly depends on the user data input (master or transaction data)
objective: To understand various techniques of building CRUD (create, read, update and delete) function in NodeJS
deliverables: Article & Illustration
typora-root-url: ./../../../
---

# CRUD is the Heart of Digital Products

OLTP (online transaction processing) and OLAP(online analytics processing) are two software architecture foundation. Almost every digital product were made by adopting those concept. Whether its banking system, ERP system or even news platform are revolved arround OLTP and OLAP core function.

OLTP is the heart of any digital product because its responsible for **master and transactional data management** within the database or also known as CRUD (create, read, update and delete). 

1. Create ("INSERT") - manage the data ingestion from various channels (eg: web frontend, mobile apps, desktop apps or even through the csv files import)
2. Update ("UPDATE") - modify existing data on the database based on user input from various channel
3. Read ("SELECT") - serve and visualize the data to end users in form of text, image, chart and so on.
4. Delete ("DELETE") - delete existing data from the database.

Software (specifically for business software) become useless without data. Imagine an enterprise resource planning (ERP) to manage sales order without sales data from customer, the software wont give any benefit to the user and the data availability is enabled by CRUD system. Hence, designing CRUD system is critical milestone on any software engineering project. 

&mdash; CRUD is not exclusive to RDBMS (relational database management system), it also valid data foudational concept on noSQL or even on object storage like datalake.

Eventhough not all software require CRUD/OLTP, the majority of business software or digital products relies on user data input which require OLTP except for streaming services, video editor or graphic editor. 

## Important Aspect on OLTP / CRUD System

Bad OLTP system might hinder user from entering the correct data. For example, if the POST api require minutes to complete, user might be upset and prefer to goes back to the their microsoft excel.

Good OLTP system can be judged if it can met following aspects

**Correctness**

Whatever user input on the form, it must be stored on the database without any content alteration except formatting. For example, in the scenario of CRM(customer relationship management), user add "customer A" to the database. The same text "customer A" must be stored on the table.

**Consistency**

Dealing with data input is not easy, especially if the data is quite numerous. If user input 10 customers on the CRM software, a good OLTP system must ensure that those 10 customer should be added without any missing customer data.

**Simplicity**

The frontend of OLTP system. Complex and unintuitive user interface will definitely hinder the user to actually use the software or increase the likely hood of human error during the data input. 

**Performance**

Research shown that if user need to wait more than 3 second for a system/software to respond, high chance that they will quit/close the software. Good CRUD system must have good performance(low latency/response time), scalability and reliability

the correctness, consistency and performance of OLTP system can be achieved using correct CRUD design

# Five Method of Creating CRUD System on PostgreSQL

CRUD is basically a sets of databases queries that exposed through API call and often to be represented using REST (representational state transfer application) design interfaces. 

1. POST -> Create (insert data to database)
2. GET -> Read (read data from database)
3. PUT -> Update (update existing data on database)
4. DEL -> Delete (delete existing data on database)

CRUD can be created through various methods starting from the most conventional one until fully automated CRUD generation. Below are the fie method/techniques to create CRUD specifically for postgreSQL using NodeJS as the programming/scripting language.

## Manual CRUD Generation

Manually create the required class, model, DAO(data access object) and queries ("INSERT INTO ...")

| Aspect       | Remarks                                                      |
| ------------ | ------------------------------------------------------------ |
| Advantage    | Full control of all the sql query as everything is manually written |
| Disadvantage | Time consuming / high effort, repetitive CRUD, no entity object abstraction |
| Library      | node-postgress                                               |

## Query Builder

Use library to perform the CRUD. No need to write "INSERT INTO", but instead call queryBuilder.Insert("").

| Aspect       | Remarks                                                      |
| ------------ | ------------------------------------------------------------ |
| Advantage    | Reduce development time, no need to write the SQL query manually but still have full control |
| Disadvantage | no entity object abstraction                                 |
| Library      | knex.js                                                      |

Note: with query builder, the object sql query will still need to be passed but in form of a function (.where(), orderBy(), etc)

## Data Mapper ORM

Similar with query builder, however, the object class will automatically integrated / mapped to with the query generated by the ORM. We directly create the object entity instead of manually write the SQL queries.

| Aspect       | Remarks                                                      |
| ------------ | ------------------------------------------------------------ |
| Advantage    | Higher development time reduction, Object abstraction is available |
| Disadvantage | Less control of the SQL query, need to understand the ORM framework, <br /> otherwise it may cause performance issue due to the slow query generated by the ORM |
| Library      | prisma                                                       |


Note: only data mapper ORM, the data access to the database is handled separately from the entity model/object.

## Active Mapper ORM

similar concept with data mapper ORM, but intead the object entity can directly connect and execute the query immediately to the database. 

| Aspect       | Remarks                                                      |
| ------------ | ------------------------------------------------------------ |
| Advantage    | Fast CRUD Generation                                                |
| Disadvantage | bad scaling compared with data mapper ORM as the data access layer is coupled with the model. |
| Library      | sequalize                                                    |

## CRUD Scafolding

Automatically generate the CRUD class / model / DAO based on the defined object entity.

| Aspect       | Remarks                                                      |
| ------------ | ------------------------------------------------------------ |
| Advantage    | Instant CRUD generation |
| Disadvantage | No control at all on the sql query |
| Library      | Loopback, strapi    |