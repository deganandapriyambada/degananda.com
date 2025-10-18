---
layout: posts
author: Degananda Ferdian
categories: erp
series-code: ASM001
excerpt: Before purchasing or developing apps for reliability and maintenance function, it is important to determine the bounded context between the whole digital ecosystem. it will be prevent function overlapping and future data issues or integration which are caused by unclear domain boundary.
tags: asset-management
topics: asset-management
background: CMMS, ERP and APM  are the triangle of reliability and maintenacne function. These platform can be customly build by the internal IT team or bought from ready to use tools available on the market. a clear domain segregation need to be determined in order to preventing overlapping.
objective: to determine domain segregation on digital ecosystem of maintenance and reliability enterprise architecture.
deliverables: Article
---

# Digital Application List on Maintenacne and Reliability Function. 

Below are the typical SAP and available legacy applications arround the RCM (Reliability Centered Maintenance) functional unit.

1. SAP for Managing Work Order Workflow
2. SAP for Managing Asset Master Data
3. Apps for Handling Inspection Execution Result
4. Apps for Handling Turn Around Execution Result
5. Apps for Handling Inspection Execution Result
6. Apps for Handling Condition Monitoring Execution - Result
7. Apps for handling Corrective Maintenance Execution Result
8. Apps for creating long term maintenance plan (10 year)
9. Apps for Handling Basic of Care (Daily checks to keep equipment condition)
10. Apps for Analytics
11. Apps for Predictive Analytics
12. Apps for Managing management of change
13. Apps for Handling the root cause analysis from any incident/failure
14. Dashboard to create an insight about RCM from all these apps

note:each organization might have different ecosystem but generally above apps are the common surroundings.


## Domain Segregation

among these 14 apps, it can be categorized into following ***bounded context**.

|                  Bounded Context | Primary Responsibility                                   | System-of-Record                 | Integration Pattern                   |
| -------------------------------: | -------------------------------------------------------- | -------------------------------- | ------------------------------------- |
|          WorkOrder Orchestration | WO lifecycle, dispatch, SLA                              | SAP or WorkOrder service         | Sync API (commands) + Events          |
|                     Asset Master | Asset hierarchy, BOM, master data                        | SAP                              | ACL / Replicated read model           |
|             Inspection Execution | Field inspection capture, offline sync, evidence storage | Inspection service               | Mobile offline sync + Events          |
|            Turnaround Management | Plan & execute turnarounds (long-running)                | Turnaround service               | Saga (events + commands)              |
| Condition Monitoring / Telemetry | Telemetry ingest, alarms, thresholds                     | Telemetry platform (TSDB)        | Event streaming (Kafka/IoT hub)       |
|           Corrective Maintenance | Corrective job capture, parts, closure                   | Corrective service               | Events + API to WorkOrder             |
|             Maintenance Planning | Long-term maintenance strategy & 10-year plans           | Planning service                 | API + Batch exports                   |
|    Basic Operations & Care (BOC) | Daily checks, operator rounds                            | BOC service                      | Offline-capable mobile + Events       |
|           Predictive Maintenance | ML models, predictions, RUL                              | Prediction service + model store | Event stream -> model -> events/API   |
|            Analytics & Dashboard | Aggregated KPIs, dashboards, reports                     | Analytics DW                     | Event -> ETL -> DW                    |
|          Change Management (MOC) | MOC requests, approvals, implementation tracking         | MOC service                      | API + Events                          |
|        Root Cause Analysis (RCA) | Failure investigation, causal trees                      | RCA service                      | API + Events / link artifacts         |
|      RCM Dashboard / Insight Hub | Composite insights pulled from analytics & events        | Composite read models            | Read models fed from events/analytics |

## Domain Interaction

once the domain has been draw and determined by the business user and technical team, it is important to also determine the domain interaction strategy.

ideally, each domain should not communicate directly. There should be an **additional layer which orchestrate the domain communication** or usually called as a middleware/enterprise service bus(ESB).

this layer will orchestrate the integration process. Performing ETL, payload encirhment and handling the rollback or any alternate scenario (if needed).

### Why the integration is not handled directly on the domain?

technically the integration can be handled and orchestrated on the domain itself. However on the reality, this will increase the complexity of the domain causing overhead on the domain system maintenance as it will cause function overlapping between origin domain and target domain.

Digital apps on same domain should only focus to execute all functionality belong to these domain only.