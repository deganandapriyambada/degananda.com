---
layout: posts
author: Degananda Ferdian
categories: erp
series-code: ASM001
excerpt: A digital asset management can be used to manage overall asset lifecycle for industrial equipment. Ensuring the readiness, realiblity and safety of the plant.
tags: asset-management erp  
topics: asset-management
ptype: Issue
background: Industrial equipment especially that operate on production site is one of (if not the most) important asset which need to be available, ready and comply to HSSE all the time. A distruption in production will directly cause revenue loss.
objective: to Understand the common digital thread of managing asset on industrial equipment from the maintenance strategy until monitoring phase
deliverables: Article
---

# Digital Thread of Asset Management System

Asset management main goal is to achieve asset integrity which will ensure asset readiness (availabe), fit for services (readiness) and comply with HSSE (Health, Safety, Security and Environment)

There are five main process of asset management which covered whole PDCA (Plan, Do, Control and Act) lifecycle. Those are :
1. **Maintenance Strategy Definition** - Plan
2. **Maintenance Planning and Scheduling** - Plan
3. **Maintenance Sourcing & Contractor Management** - Plan
4. **Maintenance Execution** - Do
5. **Workforce and Asset Performance Monitoring** - Control & Act

## Technical Assumption

From maintenance planning until maintenance execution tools are using SAP PM (Plant maintenance). Other maintenance process is done using non SAP Tools.

# Maintenance Step by Step on Digital System

## Maintenance Strategy Definition

Strategy is a sets of principle to achieve certain condition by breaking down into some defined key business directives which need and should be followed by all related parties.

Based on above definition, maintenance strategy is a sets of **principle** to ensure the company can **achieve asset integrity**.

<hr /> 

Key Process of Defining Maintenance Strategy on Asset Management

**1. Defining Asset Integrity**

Each company might have different definition of asset integrity depending on their industry sector. For an energy company (eg: nuclear powerplant). Their asset integrity should put safety & environemnt as their top prioty. Any leakage or damage might cause radiation spread to the whole country.

While for manufacturing company their asset integrity priority should be safety & fit for services (readiness). Those prioritization will significantly influence the trajectory of ,maintenance strategy design.

**2. Defining KPI (Key Performance Indicator)**

For each asset integrity need to be mapped to specific KPI. Quantified oritented KPI is a must to ensure the KPI is measureable. Without measureable parameter, improvement can't be tracked and planned properly as there is no control parameter.

**3. Design Engineering Review**

Every industrial equipment should have its own engineering document which usually covered on how the equipment should be maintained and safe operating level. These document will be used as baseline for risk studies.

**4. Risk Studies**

Based on the design engineering review process, maintenance engineer need to perform criticality analysis for each equipment and whole function system.  Usually documented in form of FSCA (Functional System Criticality Assessment) and ECA(Equipment criticality analysis) documents.

From those two document, then a risk register can be created (risk level & risk mapping)

## Maintenance Planning & Scheduling

Once a maintenance strategy principle has been breaked down, maintenance staff can start maintenance planning. It could be per year plan or some companies prefer to have 5 year plan (depend on the company policies and strategy).

**1. Master Data Preparation**

Any Digital system will require master data to be inserted on the databases. Those data will be used for any transaction related to the asset management.

Mandatory master data for maintenance planning and schedule are :

1. Asset / Equipment Registration
2. Func loc Hierarchy
3. Measuring Point
4. SECE Identification (Safety and Environment Criticality Element)

**2. Create Master Plan**

Defining maintenance master plan during the span of companies maintenance horizon. Usually dependent on the budgeting period. If the WBS(work breakdown structure) is available on yearly basis, then the masterplan will only cover for one year period.

There are two program need to be defined on master plan

1. maintenance program
2. inspection program

common maintenance program:
1. preventive maintenance
2. corrective maintenance
3. overhaul

apart from maintenance program, some company also execute regular inspection on their facilities / industrial equipment.

**3. Create Notification**

on SAP based digital thread, first step to initiate maintenance is to create a notification. It is advised to segregate the notification code / type depend on the maintenance program eg:

- A1 for preventive maintenance (Planned maintenance)
- A2 for Corrective maintenance (Unplanned maintenance)
- A3 for Overhaul (Unplanned maintenance)

there are two common notification type for mainteance

- 0A is created, notification just issued to planner
- 0B is released, notification has been verified by planner. Signaling planner to create work order.

**4. Create Work Order**

On this maintenance process stage, it will dependent on the company policies and SOP (Standard operationb procedure).

The Most standard process is to follow general consensus of SAP PM Workorder lifecycle

### Work Order Lifecycle ###

Common work order lifecycle condition and status code

| Step | Status Code | Description |
|----|----------|--------|
| 1  | CRTD  | WO Created |
| 2 | REL | WO released, material and Purchase requisition can be issued (if the material lacking or the execution will be done by outsource)  |
| 3 | PLANNED | Resource (Material, Manpower) are estimated |
| 4 | Ready to Work | Resource (Material, Manpower) are already available (booked/procured).  |
| 5 | TEKO | WO released, material can be issued |
| 6 | CLSD | WO released, material can be issued |

during maintenance plan phase, work order need to be completed from step 1 until step 4 (1-2-3-4) with following process

1. Create Work Order (CRTD)
2. Permit Approval
3. Create Sub Work Order (CRTD) for Material and Manpower
4. Update Work Order to (PLANNED)  after material and manpower are defined+estimated

Every maintenance trigger will create a work order. 

- Corretive Maintenance trigger: inspection result & condition based monitoring
- Preventive Maintenance trigger: scheduled maintenance
- Overhaul trigger: request for overhaul from maintenance staff.

## Maintenance Sourcing & Contractor Management 

**1. Material Requisiton**

some material requisition scenario

- if the material master data is not available, material master data need to be created
- if the material is lacking its need to follow MRP (Material Requisition Planning) process

**2. Procure Maintenance Services (if outsourced)**
if the maintenance will be executed by outsource / outhouse, usually it need to follow following process: 
1. create RFQ
2. PR (Purchase requisition)
3. vendor selection and purchase order.
4. PO (Purchase Order)

## Maintenance Planning & Scheduling (After Sourcing)

Back to maintenance planning and scheduling process

**1. Set WO to ready to work**

Once the material and manpower secured(PO has been created to the vendor or material procurement has been planned via MRP process), planner need to update the WO status to ready to work.

Indicating that the **WO ready to be executed**.

## Maintenance Execution

pre-requisite before maintenance process can be executed on the digital thread: WO status has been turned into **ready to work** (RTW)

**1. Create Job Ticket**
a digital document which consist of the work order details and usually printed out into hard copy so that the contractor  or executor can bring it to the site and use it as reference while doing the maintenance

**2. Set WO to CNF**

For example : a maintenance targeting one of the pipe on the plant. once the leakage on pipe has been fixed, the work order status will be set CNF. By then, the actual material and resources/time consumed can be compared with the estimation during WO status: Planned  

**3. Set WO to TECO**

There are two document need to be signed before adjusting WO status to TECO (tehnically completed)

1. Service Acceptance
2. Service Entry Sheet

both need to be signed to ensure the quality of work.

**4. Set WO to CLSD**

Once all the administration is done then the work order can be completely closed and can be marked as done both technically and administratively.

mandatory process before CLSD

1. invoicing
2. settlement

## Workforce and Asset Performance Monitoring
 
this process occured after maintenance process to evaluate and monitor if there any issues encountered on the asset/equipment.

**1. condition monitoring**

can be manual or automated by collecting telemetry data from historian and settings some condition threshold.

On most cases, the equipment health will be displayed over a digital dashboard so that the team can monitor the health in realtime/hourly/daily (depend on the cases) basis

**2. Inspection**

scheduled inspection based on the design engineering review and risk analysis. Usually part of BOC(Basic of Care) process

Both of condition monitoring and inspection can trigger unplanned maintenance or corrective maintenance.

**3. Analysis & Evaluation**

Once the maintenance process completed, maintenance team will create a post maintenance analysis which usually consist of following document:

1. vendor performance
2. Management of Change
3. Audit
4. FFS(Fit for Services) Report

**4. Determining Next Year Maintenance Masterplan**

based on the post maintenance analysis, lesson learned document will be created and will be used for next cycle maintenance plan. Those plan usually discussed over **meeting** based on maintenance history and post maintenance analysis document.

# Common Pain Point

| No | Process | Pain Point |
|----|----------|--------|
| 1  | Design Engineering Review  | Scattered document. a missing document can impact this step. might ended up doing assumption if there is no equipment document as the baseline |
| 2  | Risk Studies  | Risk studies result often not used for creating master plan. |
| 3  | Create Master Plan  | Master plan often created based on subjectivity instead of purely data driven decision from the risk studies result (FMCA, ECA) |
| 4  | Create Master Data  | Equipment data not found |
| 5  | Release Notification  | Become long queued backlog as the engineer need to validate it one by one |
| 6  | Create Work Order (CRTD->PLANNED)  | Material Master data not found, Material not available |
| 7  | Create Work Permit  | Usually only discussed about the budget not the availability of material/resources |
| 8  | Settlement (CRTD->CLSD)  | Service detail are not captured on SAP. eg actual material qty, actual working hour, etc |

# SAP Tools for Each Process

| No | Process | Granular Sub Process | Tools
|----|----------|--------|--------|
| 1 | Maintenance Strategy Definition | Defining Asset Integrity | SAP ASPM |
| 2 | Maintenance Strategy Definition | Defining KPI (Key Performance Indicator) | SAP Fiori |
| 3 | Maintenance Strategy Definition | Design Engineering Review | SAP DMS |
| 4 | Maintenance Strategy Definition | Risk Studies | SAP EHS |
| 5 | Maintenance Planning & Scheduling | Master Data Preparation | SAP PM, SAP MM |
| 6 | Maintenance Planning & Scheduling | Create Master Plan | SAP PM + SAP PS |
| 7 | Maintenance Planning & Scheduling | Create Notification (Preventive Maintenance, Corrective & Overhaul) | Notification: SAP PM, Non preventive maintenance : Trigger: SAP PCO |
| 8 | Maintenance Planning & Scheduling | [CRTD] Create Work Order (WO) | SAP PM |
| 9 | Maintenance Planning & Scheduling | [CRTD] Permit Order / Approval | SAP PM |
| 10 | Maintenance Planning & Scheduling | [CRTD] Create Suborder for Material & Manpower | SAP PM |
| 11 | Maintenance Planning & Scheduling | [PLANNED] Material Requistion Planning | SAP MM |
| 12 | Maintenance Sourcing | [PLANNED] Purchase Requsition for external services | SAP MM |
| 13 | Maintenance Sourcing | [PLANNED] Vendor Selection | SAP SRM / ARIBA |
| 14 | Maintenance Sourcing | [PLANNED] Purchase Order for external services | SAP MM |
| 15 | Maintenance Execution | [RTW] Create Job Ticket | SAP FIORI - Maintenance Job Card |
| 16 | Maintenance Execution | [RTW] Execute Maintenance | SAP Asset Manager (Mobile) |
| 17 | Maintenance Execution | [TEKO] Service Acceptance Approval | SAP MM via Service Entry Sheet |
| 18 | Maintenance Execution | [CLSD] Billing/Invoice Settlement| SAP PM + SAP FI |
| 19 | Asset Performance Management | Create Vendor Performance Report | SAP SRM / Ariba |
| 20 | Asset Performance Management | Mangement of Change | SAP EHS |
| 21 | Asset Performance Management | Create FFS (Fit for Services Report) | Custom Tools |
| 22 | Asset Performance Management | Audit | SAP Audit Management |
| 23 | Asset Performance Management | Condition Monitoring | SAP PCO |
| 24 | Asset Performance Management | Inspection | SAP PM via Inspection Plan |
| 24 | Evaluation | Determining Next Year Maintenance Masterplan | SAP PM |

once step number 24 is done, it will back to step number 3 (risk Studies)

# Hybrid Model

SAP is known for its high cost. Combining SAP, custom solution and existing legacy system on the company could save a lot of cost.

## Boundary

1. SAP PM Will be used solely for work order lifecycle
2. SAP MM to manage the material 
3. SAP FI for Invoicing

others will be done by new custom apps or any legacy apps.