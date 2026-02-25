ERP 

# System Categorization for operations

Operations in oil and gas LNG upstream industry is really complex. Covering an end to end oil and gas engineering process started by natural gas extraction from reservoir all the way up to the LNG loading to the LNG carrier.

These complexity triggering a demand to build interconncted digital solution to handle the O&G LNG operations in order speedup the decision making, operations monitoring and optimize the overall operations performance/excellence.

There are two kind of IT level system (refer to ISA95 level 4) to support O&G operations. 

1. The foundational system or often called as digital core 
2. The core operations system itself.

&mdash; OT System such as process control, PLC, sensor/field devices wont be covered as the topic is focused on the IT/OT convergence area.

## Foundational System

Foundational system (digital core) is the underlying backbone of the whole core operations system. Any IT system that categorized as core operations system will be designed, developed, testing and rolled out based on the foundational system design.

Ideally, the foundation system will be implemented first before the core operations system can be implemented. Otherwise, each of the core operations system software vendor will bring their own application/infrastructure/network design, resulting on the non standardized IT system that eventually will become technical debt (eg: legacy system cant be integrated, data integrity or quality issue, performance bottleneck, etc) in the future.

    System consist of hardware and software

below are the common foundational system which is tailored for on-premises configuration to support any operations system (cloud-based foundational system might be slightly different as the cloud provider will handle the infrastructure or often the software layer itself)

Category: **OLTP/Transaction Integration** 

| System Name | Description |
|---|---|
| Enterprise services bus (ESB) | Software for integrate & orchestrate one or more system transaction / OLTP <br /> using various protocol (https, SOAP, etc) and data format (XML, JSON) |

Category: **Unified data integration to Data lake/lakehouse** 

| System Name | Description |
|---|---|
| Data fabric | Combination of tools to integrate OLTP system database and data lake |

Category: **API Management** 

| System Name | Description |
|---|---|
| API Gateway/Management | Software to manage API (application programming interfaces). <br /> Mainly reponsible for access control and rate limiting. |

Category: **Traffic Management** 

| System Name | Description |
|---|---|
| Load balancer | Software to distribute traffic across server based on pre-defined rules <br /> for example: round robin active-active, round robin active-passive |

Category: **OLAP (Online analytical processing)** 

| System Name | Description |
|---|---|
| Batch Analytics | Software to analyze batch data (often a big data) |
| Streaming Engine | Software to analyze stream data in near time from **message broker** |
| Message broker | a middleware that enable distributed computing <br /> through asynchronous message distribution pattern <br /> including queue, topic and pub-sub. <br /> often used in event driven architecture or big data streaming system. |

Category: **Data Management** 

| System Name | Description |
|---|---|
| Data lake | big data storage to store structured, semi structured and non structured data |
| Lakehouse platform | System architecture that combine the analytical power of data warehouse and flexibility of data lake to store all kind of data |
| Operational data store (ODS) | realtime management data system to store and <br /> process fast-moving data that used across the digital operations system for example account balance. |
| Metadata management | Software to maintain and organize data metadata as well as the **data lineage** and **data strwardship** <br /> metadata management often implemented on top of **data catalog** |
| Master data management | Software to manage and standardize master data across the core operations system |
| Data quality management | a KPI engine and dashboard that will scan <br /> the entire data warehouse/lakehouse to check the data quality level (completeness, correctness etc) |
| Business intelligence | tools to slice and dice factual data from **datamart** into chart and ultimately combined into dashboard. |


Category: **Infrastructure** 

| System Name | Description |
|---|---|
| Virtualization | Software to create server inside a server (OS inside an OS) or often called as VM |
| DevOps | set of tools to manage, control and orchestrate end to end source code life cycle. |

Category: **Security** 

| System Name | Description |
|---|---|
| PAM (privilaged access management) | Software to control and secure server access <br /> by centralizing the credential storage with automatic key rotation. |
| XDR (Extended detection and response) | Security guard to detect threat across the system |
| Vulnerability Scanning tools | scan source code to identify potential security breach caused by the code. |

Category: **Infra Monitoring** 

| System Name | Description |
|---|---|
| Log management system | Software to capture and acquire system log <br /> and store it into centralized places to enable fast query. |
| Log monitoring system | KPI engine that specifically measure system performance and availability |
| Network monitoring system | KPI engine to measure network performance and availability |
| Incident management system | capture L1 until L4 ticket escalation for IT related problem/issues. |
| Performance Test Tools | To perform system performance benchmark <br /> by flooding the target system with specific amount of traffic <br /> (depend on the perfromance test phase/category) <br /> load test, stress test & soak test |


## Core Operations System

Core operations system is any OLTP (Online transaction processing) or OLAP(Online analytics processing) software that support the whole operations business process including (but not limited to) production, maintenance, asset monitoring and so on.

During the enterprise architecture solution blueprinting, legacy system often to be grouped based on the capability/capability area as well as the function area.

a capability area will be enabled by many software systems and one system can enable many capabilities (many to many cardinality between capability area and software systems)

**Area A: Historian Databases**

- Enterprise historian system
- Plant historian system
- Historian middleware system
- Edge Analytics System

**Area B: PPM (Plant performance management)**

- PPM system
- PIMS (plant information management system)
- EDMS (Engineering data management system)

**Area C: Process simulation**

- Steady state simulation system
- flow simulation system
- dynamic simulation system

**Area D: Work instruction**

- Digital work instruction system

**Area E: Log management & shift handover**

- Logbook system
- Shift Handover System

**Area F: Mobile worker**

- Mobile worker system

**Area G: Operations incident management**

- Incident management system
- RCA tools

**Area H: Inspection management**

- Risk based inspection system (RBI 580, RBI 581)

**Area I: Corrosion Management**

- Thichness management system

**Area J: Energy Management**

- Energy monitoring system (EMS)

**Area K: Waste & Material Management**

- Waste Tracking System

**Area L: Environment Monitoring System**

- PIMS (Plant information management system)

**Area M: Terminal Operations Management**

- TMS (Terminal management system)

**Area N: Hydrocarbon Billing & Invoice**

- Hydrocarbon accounting system

**Area O: Sales Planning**

- Sales Planning System

**Area P: Sales Allocation**

- Sales Allocation System

**Area Q: Integrated Asset Modelling**

- Integrated Asset Modelling System

**Area R: Well Production Management**

- Well Surveillence System

**Area S: Competency Management**

- Competency Management System

**Area T: Logistics Management**

- Fleet Management System (FMS)

**Area U: Permit to Work**

- Permit to work system

**Area V: Management of Change**

- Management of Change System

**Area W: Production Planning**

- Production Planning System

**Area X: Production Scheduling**

- Production Scheduling System

**Area Y: Mass Balance**

- Mass Balance System

**Area Z: Production Allocation**

- Production Allocation System

**Area AA: Carbon capture storage**

- Carbon dioxide monitoring system

**Area AB: Data Platform**

- Data Platform System

**Area AC: Reliability & Maintenance**

- CMMS (Computerized maintenance management system)

**Area AD: HSSE Performance Information Management**

- HSSE Reporting System

**Area AE: Contract Management**

- Contract Management System