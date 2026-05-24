---
layout: posts
author: Degananda Ferdian
categories: functional-workflow
series-code: n/a
excerpt: Work instruction system main objective is to ensure all personnel have correct instruction during their shift based on the role. Apart from that, work instruction system also help to currate all neccesary documents which may make the current work instructions obsolete and help to renew or update it.
tags: authentication authorization
background: Medium to large scale manufacturing organization might employ hundreds plus of personnel. Each personnel will need to perform specific task and the task need to be executed precisely especially if its involving machine or equipment operation.
objective: To understand the common business process within work isntruction system.
deliverables: Article & Illustration
typora-root-url: ./../../../../
---

# Why Standarized Way of Working Matter in Shopfloor?

Unlike on the creative industry where thinking out of the box (OOTB) is often encouraged to discovered fresh and intriguing idea, all operators and supervisor in manufacturing industry must follow strict standard operation procedure. 

Even if just one of the personnel is decided to take an unstandardised procedure to improve the production rate, it could lead into catastrophic event as it poses HSSE (health,safety, security and environmental) risk.

## Work Insturction System as Central Repostories for Any Procedure

Any operations must have standard operating procedure to eliminate HSSE risk as it govern how the personnel operate the machine or doing any field activities in the shopfloor. On smaller scale factory, the SOP can just be printed, laminated and hang it on the wall so the personnel on that working area can see the SOP. 

However, on bigger factory with dozens of machine, multiples production site and thousands of personnel, a printed SOP might not be reach all of the personnel on various working area. Moreoever, there is no guarantee that the personnel will read the printed out SOP. 

Unlike hardcopy SOP, digital work instructions can be integrated to other systme to force the personnel read and acknowledge the procedure. For example, it can be tied to the CICO (clock in and clock out system), so the personnel cant clock in without reading thoroughly the procedures. Not only that, the procedure can be visualized as video instead of text to increase the operator awareness.

Work instruction system (WIS) is a system to **centralize all engineering and non engineering procedures for operations and maintenance**. WIS is usually integrated with mobile workforce management system. Digital work instruction will be embedded on the Work order or work task so that the personnel can see the related procedure for their assignment/task. 

Apart from the procedures, work instruction system can also used to **manage the day to day required task** per personnel or facilities (depend on the design). The task often to be defined after debrief meeting/coordiantion is done. On some cases.

# Available Business Process Within Work Insutrction System

Below are the typical business process of work instruction system.

## 1. Work Scope and Operation Constraint Identification

Depending on the type of work instructions, the work instruction document can only be prepaed once the scope of works is determined. The scope can be derrived from following documents

| Document                                                     | Inbound/Outbound |
| ------------------------------------------------------------ | ---------------- |
| Operational Feedback                                         | Inbound          |
| Incident                                                     | Inbound          |
| Near Misses                                                  | Inbound          |
| Audit Findings                                               | Inbound          |
| Operations Alarm                                             | Inbound          |
| Engineering Documents (Drawing, OEM Manual, <br /> digital twin, safety checklist, etc) | Inbound          |

Engineering documents typically used to define the standard operating procedure (administrative) and operations instruction (day to day operations guideline) during pre-commisioning and implementation phase. While the other document such as operational feedback from operator, incident, near misses, audit findings or operations alarm will be used to improve the pre-existing SOP, operation instruction as we as determining the daily task assignment.

## 2. Develop Execution Steps

Unmeasured and uncontroleld personnel action can be fatal for an organization as reduce overall plant OEE or even poses safety risk. Hence, all personnel task assignment must be carefully planned. One of best methodology to evaluate the operations process is by defining KPI (key performance indicator) which often derives from organization goal

All personnel action (execution step) must be either be defined on operations instruction or daily task assignment. Each of action done by personnel will affect one or more organization key performance indicator (KPI) depending on the work area (operations/maintenance/productions/HSSE)

| Information                                | Inbound/Outbound |
| ------------------------------------------ | ---------------- |
| Operations KPI metrics                     | Inbound          |
| Reliability Center Maintenance KPI metrics | Inbound          |
| Productions KPI metrics                    | Inbound          |
| HSSE KPI metrics                           | Inbound          |

Engineering procedure + relevant organization KPI = measureable and controlable success evaluation criteria on organization which is important for decision making on operational, tactical and strategical level.

## 3. Risk Assessment

Once the execution steps is defined in form of standard operating procedure, operations instruction or task list, a control instrument must be created. Risk assessment which will have risk register as the deliverable outcome can be a good control instrument to ensure all the personnel action have the risk mitigation strategy in case something bad happen.

Risk assessment will primarily focus on HSSE (health, safety, security and environment). Any action that poses high risk to HSSE element must have proper mitigation method in order to avoid (best cases) or minimize the occurence likely hood.

All HSSE related documents is neccesary to perform the risk analysis for all the personnel action mention on SOP, operations instruction and task list

| Information                                   | Inbound/Outbound |
| --------------------------------------------- | ---------------- |
| JSA (Job Safety Analysis) Document            | Inbound          |
| HAZOP (Hazard and Operability Study) Document | Inbound          |
| HAZID (Hazard Identification) Document        | Inbound          |
| Environment Monitoring Result                 | Inbound          |
| Emission Monitoring Result                    | Inbound          |

## 4. Review & Renew Work Instruction

SOP, operations instruction and task list are **not a fixed document**. It is a **living document** and must be renewed periodicly based on the operating conditions, KPIs, Approved MOC (management of change), maintenance findings, audit findings and so on.

| Information          | Inbound/Outbound |
| -------------------- | ---------------- |
| KPIs                 | Inbound          |
| Operator Feedback    | Inbound          |
| Audit Findings       | Inbound          |
| Maintenance Findings | Inbound          |
| Approved MOC         | Inbound          |
