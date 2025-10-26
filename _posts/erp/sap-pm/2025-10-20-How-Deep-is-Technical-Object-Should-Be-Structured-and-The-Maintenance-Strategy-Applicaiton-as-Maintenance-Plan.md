---
layout: posts
author: Degananda Ferdian
categories: erp
series-code: ASM001
excerpt: There are at mandatory three organization(CO, Company & Plant) and least 4 master data(Equipment, Functional location, Work Center and Technical Object BOM) that need to be configured on SAP PM before a maintenance plan can be set.
tags: asset-management erp sap-pm
topics: asset-management
background: Any maintenance that planned a head of time is called planned maintenance and Maintenance plan is the heart of planned maintenance. a Master data that serve as planning catalog for planned maintenance is called as a maintenance plan.
objective: to understand how to prepare SAP master data and technical object before apply it into mainteance plan.
deliverables: Article
---

# Organization Unit: Plant

Plant is an organization unit on SAP that **represent physical unit of a factory, warehouse or anything functional** unit that avaialble to the company which perform production, material storage and so on.

&mdash; on the SAP organization hierarchy, plant is reside on level 3 below the company (CO(Controlling area, basics for all master data eg : cost center) -> Company Code -> Plant)

## The difference between Maintenance Plant vs Planning Plant

In context of maintenance process in SAP, there are kind plant.

a Plant in SAP can be **maintenance plant** if these plant is used to represent the technical object(representation of the physical object on the plant) of the actual plant.

on other hand, a **planning plant** which is a plant which manage the **maintenance planning**.

a maintenance plant has three main master that which all of them are related with the physical representation of asset/equipment on the factory/plant

1. location (area, building, factory)
2. plant section (production, packaging, assembling)
3. work center (turning shop, cutting center, painting area)

in contrast, planning plant focus on managing master data related to planning activities or scheduling activities such as :

1. planner group(work scheduling)
2. work center supervisor(mechanical engineering)

there is a scenario where a maintenance is done specifically on specific site. The material is also stored on same plant. in this scenario, a plant can become maintenance plant -> plant maintenance -> spare parts storage plants (three of them are "type of" logical plant is SAP)

some key master data for planning plant

- a planner group is reponsible for planning the maintenance activity
- location is tied to technical object where equipment/functional location is located (note: location should be created very specific for certain plant)
- plant section segregate area within the plant.
- plant section can be assigned to equipment or functional location.
- work center represet a group of people that belong to specific group name or usually a workshop (eg: mechanical workshop, electrical workshop, paint shop, welding workshop, etc)

## Work Center

apart from representing a group of people / workshop, work center also has **work center category**.

a work center category will affect following parameter:

- a work center is assigned to specific cost center.
- **task list usage**: permitted task list application (SAP PM, PP etc), basically which app that can use the work center. eg: I if for intenance task list. 
- task list also has task list type. for example: A general maintenance task list E = equipment task list, T= functional location task list
- change documents.
- **task list usage** keys: (sample use cases) a work center can be differentiated for miantenance or inspection.

&mdash; work center type for maintenance is 0005.

# Pre-Requsite Before Implementing Maintneance Plan

## Criticality Analysis from the RCM

reliability centered mainteance focus on identifying what need to be done in order to ensure the physical assets continue to perform and function and meet the user expectation/requirement.

In order to came with the "what need to be done", a full fledged analysis on SSA (System, structure and assets) need to be performed.

based on JA1011, each of SSA (system, structure and asset) require a medium to fully fledged review depend on the risk possessed by the SSA/assets. 

    a high risk SSA/assets might require full fledged review

below are the 7 review process suggested by JA1011:

the result of JA1011 review & analysis is **strategy for managing or mitigate** the risk.

## Structuring Technical Object

before a maintenance plan can be created, an organizational unit, master data and up to technical object need to be defined because it the bases for the maintenance plan.

there are two mandatory data on SAP that need to be configured and prepared before maintenance can be created.

1. organizational unit (controlling area -> company code -> plant) including planning plant and maintenance plant
2. basic master data such as : equipment, work order and functional location

once these two data are ready so SAP, maintenance plan can be configured to automatically create notification/work order (or the combination of these two) when the call horizon is due.

&mdash; ideally task list and bill of material should be ready as well, however it is not mandatory for a maintenance plan as these two data are used for work order (maintenance order)

# Maintenance Plan

Maintenance plan is responsible for planned maintenance in general. It may consist of preventive maintenace or any scheduled maintenance that will be executed on the future(**planned ahead**).

a maintenance plan will have multiple maintenance item (one to many if it viewed from the ERD perspective).

&mdash; maintenance item is the intermediary table between equipment/functional location to maintenance plan. 

There are several kind of maintenance plan call object (basically the event triggered when the call horizon is due)

## Maintenance plan -> notification

ideal for an activity which require a feedback 
rather than actual maintenance work. for example as shown below:

1. routine inspection 
2. routine monitoring
3. basic of care.
4. operator rounds.

## Maintenance plan -> work order

in case a maintenance plan will be followed up with maitneancne activity request such as preventive maintenace/overhaul/turn around, the call object of maintenance plan need to be set as workorder or maintenancen order.

&mdash; basically for any maintenance activities that require material consumption, manhour allocation and cost tracking.