---
layout: posts
author: Degananda Ferdian
categories: erp
series-code: ASM001
excerpt: ADKAR change management methodologies can be used as central or core solution for process re-engineering on packaged apps.
tags: erp sap-pm change-management
topics: sap-pm
background: Not all digital transformation project went smooth especially for packaged apps like SAP.  Most common problem is when user use their own creativity to operate the apps as no clear user manual/guidance available,
objective: to understand how process re-engineering on packaged apps like SAP. 
deliverables: Article
---

# Why process redesign often happened after digital transformation?

In many cases, an organization will soon realize that the new implemented business process on certain application is not optimal after a group of consultant/audit team found a process flaw during the system  after digital transformation go-live process is completed.

&mdash; Such condition can still be considered normal as long as **the discovered flaw do not affect the core/fundamental solution design**, otherwise it might require fullbown software re-engineering.

Usually these people will propose to re-engineer the process and tried to stich out new workflow based on the solution fundamental standard/best practices within the application.

## Study Case on SAP PM

Top Four Most common flaw which not related to the application fundamental solution are:

1. The **feature is not intended to be use as it was designed**. For example, maintenance plan on SAP PM should use to project any maintenance activity which has some certain trigger (time based, performance based or the combination)
2. **missing integration**. Any first cut digital transformation will have to battle with tight timeline as it has to accomodate most of the leadership/stakeholder visioning resulting in some unncesary integration to be descoped as long as those integration can still be done manually as the work around. It will impacting the user QoL(Quality of life) when they operate the application.
3. **Decoupled reporting process**. If KPI(key performance indicator) is not well defined during the digital transformation project, it might cause user to create their own reporting which more align with their department goal causing unaligned process flow between SAP PM within actual day to day operation.
4. **Lack of non functional quality gate check**. Business user will likely use SAP PM for data input and hope to get good insight from it. However, a simple slowness of the application load time (from SAP PM or it surrounding) might annoy the user and cause a lot of problem (low data quality, frustation or worst cases, the apps is not going to be use by user as they opted to use coventional tools like excel file)

# The Resolution: Structurized Timeline to Address the Process Flaw

Assuming the application (in this case is SAP PM) fundamental / core solution is not changed and doesnt require full blown software re-engineering (re-coding/programming), a systematic timeline can be created in order implement process re-engineering on SAP PM.

## Execution Order

Before creating the timeline, lets breakdown the solution mapping for each flaw.

Change management (CM) will be the main/core solution because it is an process rebaseline implementation and the other solution need to be grouped into blocking or not blocking the change management.

1. Blocking - must be before or during the CM and there is no acceptable workaround.
2. Non block - put into backlog as it has acceptable "workaround"

| No | Flaw | Solution | Type |
|---|---|---|---|
| 1 | Feature is not intended to be use as it was designed | Change Management - Update Documentation  | Blocking | 
| 2 | Missing Integration | New Application Landscape with integration layer(EIL)  | Non Blocking | 
| 3 | Decoupled Reporting Process | 1. KPI Re-Definition <br /> 2.Dashboard Creation Based on SAP PM Data  | Blocking | 
| 4 | Lack of non functional quality gate check (slowness) | Performance & Usability Re-Test for SAP PM and All Surroundings | Blocking | 

# Final Timeline

Once the solution is identified as well as the category (blocking/non-blocking), timeline is ready to structurized.

on this cases, change management is the central of the solution. Hence, the timeline should follow ADKAR methodologies.

&mdash; ADKAR is done in waterfall.

## Awareness

Relaibiltiy & Mainteannce Department Key Performance Indicator Re-definition

a. L1 KPI definition & formula agreement
b. L2 KPI definition & formula agreement


## Desire

a. Define SAP compliance KPI/Key Performance Indicator (Data quality) & SLA
b. Identify user champion to lead and oversea the changes

## Knowledge

SAP PM Documentation Update

1.BBWO (Business Blueprint Workshop Output) Updates.
Things to update:
a. Update to be workflow
b. configuration
c. test Script
2.User Manual Update (positive scenario)
3.User Manual Update (negative scenario)
4.Socialization. & Workshop

## Ability

a. User Acceptance Testing (UAT) of the new flow.
b. Dry run on UAT environment

## ROLLOUT

this is where the new process will be rolled out into production.

## Reinforcement

a. build control tower to track department KPI
b. build control tower to track SAP Compliance/data quality KPI
c. monthly socialization (post rollout)

# Backlog

This is where the non blocking solution will be catered. For example, to integrate SAP PM with all the surroundings or to customize SAP PM based on the identified gaps which require custom program.