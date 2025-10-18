---
layout: posts
author: Degananda Ferdian
categories: erp
series-code: ASM001
excerpt: Data management, data collection and data integration are the top three pilar for any data driven digital transformation project. Without any data, any DSS/Analytics platform will produce garbage.
tags: asset-management
topics: asset-management
background: Data driven decision making is a big buzz word. But it is actually fiable target state from a digital transformation project. There are some important pre-requisite which usually forgotten by the organization.
objective: to list down the pre-requisite activity before transition into data-driven long term master plan generation for maintenance and reliability.
deliverables: Article
---

# Data Driven Master Plan Generation

Data Driven Long Term RCM Master Planning which has three output:

## Master program

Master program in context of maintenance and reliability context is refferring to maintenance, monitoring, testing and inspection activities.

Generally, organization will have sets of program which then executed on the specific fiscal year. 

ideally these program should be **arranged based on data** instead of thorugh human intuition. a Data driven master plan will increase the effectiveness of the program and reducing the risk of wasting the budget as all the program specificied during master plan is on point and target.

&mdash; after long term of short term master plan is defined and approved, it will be converted into maintenacne plan on the CMMS.

## Budget projection

one of important aspect before releasing master plan into maintenance plan is budget. a Good and on point master plan ideally should optimize the budget required for maintenance and reliability program.

On some organization, a good master plan is crafted by considering equipment criticality and health score. The maintenance program will then be prioritized based on these two factor in order to optimize the budget.

an equipment will low criticality such as (for example) street light, might not be an top priority on the maintenance program as fixing these light is fairly simple and doesnt require any downtime or shutdown on the production site.

## Material requirement

Once the maintenance program is identified for specific equipments/functional location, then the BOM(bill of masterial) from associated equipments/functinal location can be processed to compute the projected amount of spare parts/material needed to execute the maintenace program (maintenance, inspection, monitoring and testing) 

# Drafting Implementation Roadmap for Data Driven Master Plan Generation.

below are the typical existing(as-is) digital ecosystem condition from any organization.

- SAP PM has been setup to manage master data and work order workflow
- SAP PM has been integrated to SAP MM for the equipment BOM linking to the inventory/material

## Build the foundation

there are several digital enabler (technology foundation) before data driven master plan creation can be implemented.

**Foundation for Data Management**

- Data Governance
- Data Quality Management
- Master Data Management

**Foundation for Data Collection**

- Rounds Management
- Determining Critical data quality parameter
- Work Order Classification for Turn Around and Non Turn Around
- Legacy apps integration to SAP PM Workorder WorkFlow
- SAP PM Data Collection for Data Collection to Record Actual Consumed Material and Work Hour
- Calculate material safety stock on SAP MM and configure the action item

**Integration** (Optional)

- Scheduling Application(eg: oracle primavera P6) integration to SAP PM
Administrative
- WBS / CapEx / OpEX for multiyear RCM planning

## Implementation Roadmap

Data Management foundation > Data Collection Foundation > Integration > Data Driven Long Term RCM Master Planning Custom Program on SAP PM.

![postimage80](/assets/images/2025-10/apm1.jpg)
[Implementation pre-requisite for auto generate long term RCM master plan](/assets/images/2025-10/apm1.jpg){: .center-image }

Long term master plan creation can only be implemented if only if the neccesary data from SAP PM (both transactional and master data) has been properly setup and collected.

can also be seen directly on the following google docs links

    ocs.google.com/spreadsheets/d/1PRimGc0By2f03R08x8oIcsMo-5trW-5lgaW58fQns58/edit?usp=sharing