# Does Legacy Apps is a Burden for an Organization Who Is Undergoing Digital Transformation?

Existing legacy apps on an organization are often treated as burden and technical debt from either software engineering or business perspective during digital transformation project.

While these condition is generally true, it is not completely applicable for all digital trasformation scenario especially at integration solutioning stages.

&mdash; any legacy apps used on specific business process has been used for months/years. It had **survived the day to day operational battle** and has been supporting (as a tools) the business user needs/requirement.

    if it doesnt break, dont ever fix it; embrace it and leverage it.

Hence, legacy apps should be viewed as technical debt/business burden, rather than it should be viewed as an  **battle proven digital assets** (of course with some limitation) which ready to be leveraged during digital transformation stages. 

the integration solution should incorporate these legacy apps instead of completely scrapp the platform. A strategy need to be well defined in order to properly position the legacy apps on the new application landscape.

# Digital Transformation Case Study

&mdash; suppose there is ongoing project to integrate legay apps used on reliability and maintenance function with SAP PM(plant maintenace) as the core/center of the transaction & master process.

below are the case study to simulate how a proper integration solutioning should be designed during digital transformation by incorporating legacy apps.

- Indsutry : Mainufacturing, Oil & Gas
- Function : Reliability & Maintenance
- Central ERP. : SAP PM (master data and transaction)

REL function is choosen as its usually has wide variety legacy apps to manage end to end maintenance process on manufacturing and oil & gas industry from creating maintenance streategies, maintenance workflow until RCA (root cause analysis)

## Application Catalog

there are arround +- 15 application used during the end to end maintenance(monitoring, inspection, testing, maintenance, overhaul or turn around) process.

| No | Application | Main functionality |
|---|---|----|
| 1 | SAP PM (Plant maintenance) |Asset Master Data, Workorder, Integration to the ERP (finance,accounting & material) though SAP MM, FICO  |

## Application Rationalization

Apps rationalization main purpose is to divide and conquer the existing legacy apps domain with new application introduced to the existing digital ecosystem with minimal distruption.

aim to define clear solution by creating technical principle to solve & completely avoid following condition as it will drasticly increase the chance of digital transformation to be fail:

## Principle

### Event Driven Architecture (EDA)

a modern software architecture which treat integration as producing event and consuming event.

analogy: 

a teacher send out an lunch invitation to the class member via email. she specifically mentioned that anyone who wanted to join should reply the email with "i will attend".

john is member of the class, he wanted to join te lunch by confirming via email (he subscribed to the "event" produced by her teacher)

Core principle on the event driven

- all event need to be logged into event history
- before the event is published to the service bus, it need to has "ingested"(example) status on event history
- once the event is subscribed by the consumer it should logged on the event history as "consumed" and specifically mention the subscriber name
- the event status should not be updated into completed unless all desired susbcribe has confirming the transaction(subscribed and successfully process the transaction on their apps)

&mdash; event history will become the SSOT(Single source of truth) of **any transaction which part of the integration journey**

### CAP Theorem

**Master data**

**Transaction data**

## Digital Spine

Digital spine or also often called as digital core is a foundational layer which shared across all the legacy apps and including the new introduced system (SAP PM)

    Digital Spine / Core technology selection should be done on organization level as it will be shared across all organization function.

### EIL (Enterprise Integration Layer)

a middleware which connect and stich the journey of all existing legacy apps with SAP PM as the core.

&mdash; the most important digital core foundation especially for realtime integration use cases.

what is EIL? it is a platform which has following sets of capabilities:     

1. **API management/Gateway**: manage all the exposed API(an API that used on the specific integration journey) from the legacy apps. &mdash; not all API need to be exposed/register on the EIL API Management

EIL can be customly created using native cloud component or purchased from ready to use tools/PaaS on the market.

2. **Message Broker**: modern integration architecture often done through asynchronous (ASYNC) manner. pub-sub(publish & subscribe) mechanism will help to distribute transaction into several target application via message broker (topic/queue)

3. **Pipe & Filters**: the **orchestrator**. for example, incident diagnosis/recommendation result will be distributed to several application(including SAP PM as notification). Pipe and filters mechanism will transform the payload/protocol to fit with the expected API interfaces.

apart from these three component, there are some NFR component which usually incorporated to the EIL such as : IAM, Logging & Monitoring & Caching

### MDG (Master data governance)

to standardize master data and transaction data parameter by **forcing the users to follow the business rule** that has been set into the form/UI.  

    document SOP(standard operating procedure) for data input often skipped by users. However, system defined rule cant be bypassed.

usualy data quality issue (in context of data variances which breaking the rule) on SAP PM are:

1. Empty mandatory parameter on equipment (eg: manufactured date, brand, model etc)
2. mismatch tag number format
3. etc

these issues can be easily fixed by MDG (master data governance) and SAP has specific tools for this called as SAP MDG.

**MDG is not solely silver bullet** to avoid garbage in and garbage out, it need to be supported by clearly defined user journey/workflow, strong data governance, clear data quality monitoring, SSOT and integrated platform (no disconnected digital thread) in terms of the master and transaction data.

### Lakehouse Platform Datalake on Steroid

datalake is just a storage to store all kind of files/document with any format. These data then will be fetched by analytics platform.

datawarehouse is where all the organization data is stored, but can only accomodate structured data (SQL). RDBMS styles which can perform super fast OLAP (online analytical processing)

Lakehouse &mdash; best of the two world, one unified data platform which can organize structured, semi structured and non structured data into one database with the fast OLAP performance like datawarehouse and built in machine learning capabilities.

### Data Lineage Monitoring

Data lineage focus on tracking the end to end data joureny from the origin/sources to the destination.

Mainly monitor following parameters:

1.

