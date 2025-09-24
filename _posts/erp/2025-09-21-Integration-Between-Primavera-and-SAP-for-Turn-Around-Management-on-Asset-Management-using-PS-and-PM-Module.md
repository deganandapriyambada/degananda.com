---
layout: posts
author: Degananda Ferdian
categories: erp
series-code: ASM001
excerpt: Turn around is executed if only if shutdown is needed on plant/system level before executing the maintenace. Because of the shutdown, it will disturpt the production activity. System restartup might introduce new safety, environmental and operational risk. TA need to be planned properly using proper project management tools.
tags: asset-management erp sap oracle project-management scheduling
topics: asset-management
ptype: Issue
background: Turn Around process on an oil gas or manufacturing company usually very complicated as it involved a lot of process during planning phase, execution, start up and post shutdown. a proper project planning and scheduling is needed.
objective: to plan turn around maintenance using project management tools and integrate it with SAP PM (plant maintenance) + SAP PS(Project System)
deliverables: Article
---

# High Level Integration Landscape 

below is the application integration landscape between SAP PM(Plant Maintenance), SAP PS(Project System) and Oracle Primavera P6

![postimage100](/assets/images/2025-09/prim6.svg)
[Integrated Project Management landscape between Oracle P6 and SAP](/assets/images/2025-09/p6.jpg){: .center-image }


# Primavera P6

Primavera P6 is a software for manging project planning  scheduling and execution. It used in many enterprise company across many industries such as contruction, manufacturing, oil and gas, and infrastructure.

&mdash; the complexity of running a project on industry is the main reason of primavera existance.

# Available Module on Primavera P6

There are the main modules on primavera P6

1. CPM Scheduling & Planning
2. Resource management
3. Cost Management (&integration to primavera unifier)

with following integration scenario.

| No | Source Module | CPM Scheduling & Planning |  Resource Management | Cost Management (Optional) |
|----|----------|--------|--------|--------|
| 1  | CPM Scheduling & Planning  | 1. create project <br /> 2. create WBS (work breakdown structure) <br /> 3.Create Activities & Ganttchart <br /> 4. Defining Activities Relationship <br />  5. create and freeze baseline (after definiing reosurce & expense/cost) <br /> 6. assign baseline to the project <br /> 7. update project activities status <br /> 8. Constraint | 1. WBS & Activities will be derrived <br /> 9. Compute Total Float 10. <br /> What if analysis (refactor) | WBS & Activities will be derrive |
| 2  | Resource Management  | Use activities and WBS data from CPM | 1. Create resource master data <br /> 2. Assign resource to the activities | N/A |
| 3  | Cost Management  | Use activities and WBS data from CPM | n/a | 1.Create expense item <br /> 2.Assign Expense on the Activities |

## CPM(Critical path method) Module

![postimage100](/assets/images/2025-09/prim1.jpg)
[Primavera Project Scheduling](/assets/images/2025-09/prim1.jpg){: .center-image }

the main capability of primavera. They have three main functionality
1. plan a project
2. schedule a project
3. control the execution of a project
   
## Resource Management  Module

mainly responsible for resource planning and optimization. There are four main capability, there are:

1. optimize resource
2. capacity planning
3. what-if analysis
4. resource requirement

## Integrated cost and schedule Management Module

focus on integrating project schedule and project cost with four key capabilities:

1. Cost and schedule management - integrated with primavera unifier (enterprise project life cycle management/ECPM) which control and manage the project budgeting, contracting, cashflow and approval process.
2. Cost and schedule forecast
3. Cash flow management
4. Project progress management


# Entity / Technical Object Comparison Between Primavera and SAP PM

Technical Object Comparison From Primavera P6 to SAP PM

| No | Primavera P6 | SAP PM | SAP PS |
|----|----------|--------|--------|
| 1  | Enterprise Project Structure (EPS), Company hierarchy  | n/a | Program |
| 2  | Project (represent company structural hierarchy) | n/a | Project Definition |
| 3  | Organization Breakdown Structure (OBS) & Resources | Work Center | Project Org. and Roles |
| 4  | Work Breakdown Structure (WBS), sub level of project, Multi Level | Functinal Localtion | WBS |
| 5  | Activity (sub level of WBS) | Work Order | Network Activity |
| 6  | Activity Steps (inside Activity) | WO Operation/Sub Operation/Task | Network Activity |
| 7  | Relationship (successor or predecessor) | Work Order Details? | Need to Custom the field |
| 8  | Constraint | N/A| Date & Scheduling Parameter  |

Available Scheduling Analytics on Primavera

1.**Critical Path** - longest sequences of interdependent activities that determine the minimum time to complete the project. If activities on the critical path is delayed 1 day then the whole project is delayed by 1 day.

2.**total float**- time which the activity can be deplayed without impacting the project completion date. Critical path shoudl have 0 total float.

3.**network activity** - a network visualization and representation that created based on activities and its defined **relationship** (predecessor and successor).relationship with link between one or more activities.

4.**network activitiy relationship type** - FS,SS,FF,SF (primavera) vs FS,SS,FF,SF (SAP). both use same relationship type/logic

5.**Activity Constrant** for critical path computation - there several constraint type such as finish on, finish on or after, as late as possible,etc. SAP also has similar capability

1. **project constraint** similar with activity constraint but on project level
2. 
3. **what if analysis/reflection** - basically a simulation if constraint is changed or the start date/end date is changed.

notes:
1. activities dependencies is added on the activity config/detail

## SAP Downsides compared to privara for the scheduling engine

| Subject |  Primavera P6 | SAP PS |
|----|----------|--------|
| Constraint |  Start On <br /> Start on or after <br /> start on or before <br /> finish on <br /> finish on or after <br /> finish on or before <br /> As late as possible <br /> mandatory start / finish | Basic Start/Finish Date(manual) <br /> Must Start On <br />  Must finish on(fixed finish) <br />  As late as possible via backward scheduling/work arround | 
| What if Analysis | Seamless process with Reflection to automatically create several copy of the project pre-baseline/baseline | Need to copy the project manually |
| Float Management | Available out of the box, integrated with CPM, constraint, network activities | Need to be configured as there is out of the box float columns/field |
|UI/UX | P6 is dedicated for project scheduling software, straight foward |  SAP PS has complex UI/UX as has depth integration to other module for budget, finance, etc. |
| Cost |  Day (affordable) | Night (really expensive) |

summary
1. primavera has richer **activities constraint**
2. primavera P6 has seamless what if analysis using reflection, where is SAP PS it need to be cloned manually into another project

## Network Activity Visualization

Primavera P6 Network Activity Visualization

![postimage100](/assets/images/2025-09/prim2.jpg)
[Primavera Network Visualization](/assets/images/2025-09/prim2.jpg){: .center-image }

SAP PS Network Activity Visualization

![postimage100](/assets/images/2025-09/prim3.jpg)
[SAP PS Network visualization Project Scheduling](/assets/images/2025-09/prim3.jpg){: .center-image }

# Summary

&mdash; primavera p6 is matured scheduling software (and industry norm) with rich network activity constraint, what if analysis and has been used by a lot of oil and gas , manufacturing companies (battle proven). p6 good for low level scheduling where as SAP PM is good for high level planning as it can be integrated to other SAP module for budgeting, costing, finance, etc

# Primavera Middleware

a Primavera middleware called as **primavera integration framework (PIF)**, can be used to bridge between SAP and Primavera P6.

there are two main integration scenarios

1. Scenario A - planning & scheduling integration with budgeting, invoicing (basically with financial factor).
2. Scenario B - integration without financial concern. Pure planning & scheduling execution.

## Scenario A

planning & scheduling integration with budgeting, invoicing (basically with financial factor).

![postimage100](/assets/images/2025-09/prim4.svg)
[Planning, Scheduling, Financing will be integrated between SAP and Primavera](/assets/images/2025-09/prim4.jpg){: .center-image }


&mdash; Tech Stack (Oracle Primavera P6, Oracle Primavera Unifier, Oracle PIS, SAP PM, SAP MM, SAP PS, SAP FICO, SAP PM, SAP ABAP Program, SAP BAPI)

## Scenario B

Scenario B - integration without financial concern. Pure planning & scheduling execution.

![postimage100](/assets/images/2025-09/prim5.svg)
[Only Planning & Scheduling will be integrated between SAP and Primavera](/assets/images/2025-09/prim5.jpg){: .center-image }

&mdash; Tech Stack (Oracle Primavera P6, Oracle PIS, SAP PM, SAP MM, SAP PS, SAP FICO, SAP PM, SAP ABAP Program, SAP BAPI)
