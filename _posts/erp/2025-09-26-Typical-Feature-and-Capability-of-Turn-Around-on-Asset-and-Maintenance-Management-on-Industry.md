---
layout: posts
author: Degananda Ferdian
categories: erp
series-code: ASM001
excerpt: Production capacity need to be maintained by planning the regular maintenance,overhaul and on time turn around.
tags: turn-around asset-management
topics: asset-management
background: Turn Around management is like a mini project. Consist of several grouped work order which require the plant to be shut down. It need to be planned properly.
objective: to listdown critical feature for turn around management information system.
deliverables: Article
---

below are the list of mandatory turn around management system feature and the preliminary assessment of SAP PM capability based these expected feature

# Define Short Term and Long Term Master Plan

oil and gas industry need to **maintain their production rate** to ensure the demand can always be fullfilled especially for state owned oil and gas refinery.

Lack of gasoline stock on the gas station can become a national problem. It may affect the national stability and security particularly for developing country as most of the citizen is still using their own vehicle/motorcycle.

    In order to maintain the gasoline production capacity, a proper turn around planning need to be set up.

below is the list mandatory feature on CMMS & EAM to address those strategic objective.

| No | Feature | Data Input | Compute | SAP PM as Data Input | SAP PM as Computation |
|----|----------|--------|--------|--------|--------|
| 1  | Set TA Interval on Maintenance Plan based on Vendor Recommendation | Yes | Yes | Yes | Yes |
| 2  | Set TA Interval on Maintenance Plan based on Government Regulation | Yes | Yes | Yes | Yes |
| 3  | Set TA Interval on Maintenance Plan based on Equipment Lifecycle | Yes | Yes | Yes | Yes |
| 4  | Set TA Fixed Date on Maintenance Plan based on MOC request | Yes | Yes | Yes | Yes |
| 5  | Set TA Interval on Maintenance Plan based on Equipment performance decline report (predictive) | Yes | Yes | Yes | No |
| 6  | Set TA Interval on Maintenance Plan based on Failure Rate/Pattern (predictive) | Yes | Yes | Yes | No |
| 7 | Differentiate Non TA and TA work order | Yes | No | Yes | No |
| 8 | Integrate with legacy apps that manage TA job list and task | Yes | No | Yes | No |

# Define TA Job List

TA Job list is consolidated maintenance program for turn around over particular period of time (eg: TA Job List for FY25)

Usually job list is managed outside SAP because the organization would like to manage custom data structure and more detailed job list information.

&mdash; an integration to SAP is generally recommended from legacy apps using api or through csv file to ensure no double data input.

| No | Feature | Data Input | Compute | SAP PM as Data Input | SAP PM as Computation |
|----|----------|--------|--------|--------|--------|
| 1  | Opt1 - Create and manage job list with standard format of SAP but with free text input (ms word style) for the details | Yes | No | Yes | No |
| 2  | Opt2 - Create and Manage job list based on company specific format | Yes | No | Yes | No |
| 3  | Op3 Ingest turn around job list from legacy apps and automatically turn it into work order | Yes | No | Yes | No |
| 4  | Op3 Ingest turn around job list from legacy apps and automatically turn it into work order | Yes | No | Yes | No |

# Work Order Creation Procedure for Early Turnaround prior to the WBS release

some turn around activity is planned ahead before the TA WBS is released. 

for example the material issues or material requisition planning might happened as early as two years before the TA execution started.

| No | Feature | Data Input | Compute | SAP PM as Data Input | SAP PM as Computation |
|----|----------|--------|--------|--------|--------|
| 1  | Create TA work order and sub work order (for material issue and external services issue ) without specifying WBS | Yes | No | Yes | No |
| 2  | Adjust TA work order and sub work order WBS when the WBS is released. | Yes | No | Yes | No |

# Monitor and track material issues for turn around work order

before the TA execution, there is a process called TA pre execution, on this stage, all required material and contract for external services must be ready.

there should a dashboard to monitor material issues and contract (for external services) issues progress

| No | Feature | Data Input | Compute | SAP PM as Data Input | SAP PM as Computation |
|----|----------|--------|--------|--------|--------|
| 1  | an Integrated dashboard to check material issues progress of a work order | Yes | No | Yes | No |
| 2  | an Integrated dashboard to check contract issues progress of a work order | Yes | No | Yes | No |

# Integrate scheduling tools into SAP

most mature scheduling software on oil and gas or manufacturing industry is oracle primavera p6. it has rich capability to simulate perform network activity with various constraint compared to other scheduling tools such as SAP PS.

Domain segregation:

1. SAP will be used as TA work order workflow management
2. All master data/transactional data related to the Work order will be managed on SAP
3. Job list from legacy appps is ingested to SAP as work order
4. Primavera will be used as scheduling software to perform CPM, network activity & schedule optimization.

| No | Feature | Data Input | Compute | SAP PM as Data Input | SAP PM as Computation |
|----|----------|--------|--------|--------|--------|
| 1  | Synchronize SAP Work order into primavera **Activity**  | Yes | No | Yes | No |
| 2  | Synchronize SAP associated task list for particular work order into primavera **Activity Steps**  | Yes | No | Yes | No |
| 3  | Synchronize Back final(optmized) network activity planned date from primavera back to SAP as work order with updated planned date | Yes | No | Yes | No |
| 4  | Planned vs actual budget monitoring during and after the TA execution using SAP PS | Yes | No | Yes | No |

