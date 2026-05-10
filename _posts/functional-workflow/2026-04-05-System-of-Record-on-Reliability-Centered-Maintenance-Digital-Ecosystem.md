---
layout: posts
author: Degananda Ferdian
categories: functional-workflow
series-code: n/a
excerpt: The main functionality of CMMS (computerized maintenance management system) is to manage, plan, schedule and execute maintenance plan across all plant. Hence, CMMS will need tons of transaction and master data from its surrounding system such as inspection system and inventory system
tags: maintenance
background: Maintenance is one of critical business function on manufacturing industry. They responsible for timely inspection and maintenance of the equipment to ensure production schedule is not delayed due to equipment breakdown.
objective: To list down the system of record produced by CMMS (centralized maintenance management system)
deliverables: Article
typora-root-url: ./../../../
---

# The Defition of Reliability Centered Maintenance on Industry

Reliability centered maintenance or often to be abbreviated as RCM is method to identify critical industry equipment that can affect production and create a strategic, tactical and operational plan to keep the equipment in normal condition (**ready to use)**.

RCM generally done through data driven approach. For example, OEM (original equipment manufacturer) document guideline must be combined with historical maintenance data and process data from historian in order to determine the equipment criticality(through FSCA/ECA methodology), inspection plan (through RBI/risk based inspection methodology) and preventive maintenance plan.

## System Component of Reliability Centered Maintenance

RCM as a methodology covering end to end process to ensure the equipment can operate normally with minimum downtime (planned maintenance). Hence, it require at least following systme to be rolled out

1. CMMS (Computerized maintenance management system) - **Core system of reliability centered maintenance**. Used to manage work order, manage maintenance planning, aligning inspection planning with maintenance planning, scheduling corrective maintenance
2. RBI Tools - compute risk based plan per equipment type/classification
3. ECA/FSCA Tools - compute equipment or functional location criticality
4. Industrial internet of things - retrive process, event and measurement data from the field/shopfloor in form of timeseries data.
5. Dashboard/analytics -  to analyze the all of the data produced by CMMS and IIoT system into an insight (example: top equipment with highest maintenance cost including the failure analysis / root cause analysis)
6. Sparepart management - to inventorize all equipment sparepart based on its maintenance BOM (bill of material) 

# Typical Data Exchange Interface of CMMS 

System of records

1. Maintenance work order
2. Equipment maintenance status
3. Equipment maintenance history
4. Maintenance planning
5. Maintenance Task

Below are the common business process which available under CMMS 

| Information                                                  | Inbound/Outbound |
| ------------------------------------------------------------ | ---------------- |
| P&IDS (Piping and Instrumentation Diagram)                   | Inbound          |
| Engineering Drawing                                          | Inbound          |
| Maintenance Strategy                                         | Inbound          |
| Equipment Criticality                                        | Inbound          |
| Functional Location Criticality                              | Inbound          |
| Equipment and Asset Master Data                              | Inbound          |
| Functional Location Master data                              | Inbound          |
| Inspection Work Order (Visual inspection, <br />NDT/non destructive testing, Basic of Care, IOW Action) | Outbound         |
| Maintenance Work Order (preventive, corrective)              | Outbound         |
| Maintenance Work Order                                       | Outbound         |
| Equipment Maintenance Status                                 | Outbound         |
| Equipment Maintenance Status                                 | Outbound         |
| Equipment Maintenance Status                                 | Outbound         |
| Maintenance Work Order                                       | Outbound         |
| Equipment Maintenance History                                | Outbound         |
| Equipment Maintenance History                                | Outbound         |
| Equipment Maintenance History                                | Outbound         |
| Sparepart Master Data & Inventory                            | Inbound          |
| Bill of Material                                             | Inbound          |
| Functional Location / Equipment Hierarchy                    | Inbound          |
| Equipment Health Alarm                                       | Inbound          |
| Maintenance Cost                                             | Outbound         |
| Equipment Failures record                                    | Inbound          |
| Work Order Status and Completion Updates                     | Inbound          |
| Work Order Status and Completion Updates                     | Inbound          |
| Work Order Status and Completion Updates                     | Inbound          |
| Equipment Maintenance Status                                 | Outbound         |
| Maintenance Work Order Priority                              | Outbound         |
| Maintenance Plan / Schedule                                  | Outbound         |
| Sparepart Availability                                       | Inbound          |
| Work Order Request                                           | Inbound          |
| Work Order Request                                           | Inbound          |
| Root Cause Analysis                                          | Inbound          |
| Bad Actor                                                    | Inbound          |
| Failure Pattern & Recommendation                             | Inbound          |
| Corrosion Alarm                                              | Inbound          |

