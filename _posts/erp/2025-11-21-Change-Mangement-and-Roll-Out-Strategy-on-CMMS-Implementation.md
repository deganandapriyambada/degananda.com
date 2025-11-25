---
layout: posts
author: Degananda Ferdian
categories: erp
series-code: ASM001
excerpt: Change management is as important as the CMMS development or rollout it self as poeple will be the one operate the platform. One of the most popular CM framework which adopted by many big organization is ADKAR methodologies.
tags: erp sap-pm change-management
topics: sap-pm
background: any CMMS platform available on the market are just a tools. In the end, human is the one who operate the platform.a bad operator can result in bad data quality. Garbage in and garbage out!. a Proper management need to be put in places to govern the transition and process.
objective: to understand the practical change management process on CMMS roll-out 
deliverables: Article
---

# CMMS is Just a Tools

CMMS (Computerized maintenance management system) is a tools to support reliablity and maintenance departement to execute all maintenance related activities.

CMMS is often to be integrated with other tools such as ERP(enterprise resource planning) and EAM (enterprise asset management)

most popular tools which has built in integration between CMMS-ERM-EAM is SAP PM (Plant maintenance)

&mdash; However, people tend to forget that **SAP PM is just a tools**. Those built in integration with other modules such as MM, FI, CO, rich capabilities and the big name of SAP doesnt guarantee the implementation success.

## Tools is Supporting Human Task

Tools is used to support human to achieve certain goal. For example, a restaurant chef make a steak and  use knife to slice the meat and these knife can't move on its own. 

In the end, the dish quality & presentation will be dependent on at least three factor:

1. raw meat quality it self (marbling level, type of the caw)
2. knife quality. knife built from obsidian is super sharp in which it can cut any type of meat perfectly.
3. chef skill

each factor will be contribute to the final fish quality. **But, the chef skill is the key.** A bad knife and mediocre meat, can be turned into wonderful dish in the hand of good chef.

&mdash; same analogy goes to the CMMS / SAP PM implementation, the operator of the SAP PM will determine the output.

Hence, it is really important to ensure the people which operate the CMMS to understand how to use the tools properly. Thats why, **change management is needed**.

# The Importance of Change Management on CMMS Implementation

Change management is a set of strategy and methodology used by an organization to **change the existing business process into new business process** and **adapt into new technology** (for CMMS context).

## Typical Post CMMS Implementation Pain Point

Below are the typical pain point of **post CMMS implementation** which resulted from bad change management and roll out:

1. Unclear SOP(standard operation procedure) to oprate the CMMS which has been tailored to fit with organization requirement.
2. Inconsistent data input guidance resulting in inconsistent data quality.
3. SLA (service level agreement) related with CMMS operation such as data input not defined clearly.
4. Alternate scenario or negative scenario is not defined on the SOP causing user/CMMS operator to use their own creativity to create a workaround from an encountered problem.
5. Manual report creation. Imagine a CMMS implementation for 3 different factory, each of the plant staff will use their own parameter to generate report. Once the report is presented to the management, each of the plant has different report calculation formula and often contradictive from one to another!
6. Poor CMMS (and its surroundings) application performance. CMMS user usually has their own main task apart from data input on the CMMS. slowness on the CMMS will cause frustation.

these six pain point can be avoided by implementing proper change management and roll out plan before/during/after the CMMS golive.

## Change Management Model Best Practices

One of the most widely adopted change management model is called as **ADKAR Model**. 

    Microsoft is one of the fortune 500 company which has success story of implementing ADKAR model.

ADKAR is stands for:

1. Awareness of **the need** of change
2. Desure to **support** the change
3. Knowledge on **how** to change
4. Ability to implement **required skills** and behavior
5. reinforment to **sustain** the change.

# Sample Change Management Approach on CMMS Implementation based on ADKAR

Following change management approach will be based on the six identified pain point from post CMMS implemenetation as the study cases.

## A - Awareness

The higher awareness level of core CMMS operator / user will increase the implementation success rate.

But what is the success factor?

<hr />

a success factor is department target within a fiscal year and need to be defined in form of tangible KPI (key performance indicator). 

These KPI should relate with the reliability and maintenance department goal and will be computed based on SAP PM master data and transaction data as it is a **system of record**.

KPI will be the main driver of the changes. If the user know WHY their departement need to do the digital transformation, they will put 120%+ effort to support and operate the CMMS.

## D - Desire to participlate the changes

there are three strategy can be used to increase the user desire to operate the CMMS/SAP PM:

1. Assign the department key performance indicator (KPI) with user/staff KPI. Causing indirect accountability for the CMMS operator. It will force them to use the CMMS accordingly as their data input quality will affect the department KPI.
2. SAP Compliance KPI. In addition to department KPI which related to the maintenance/asset performance target, compliance KPI score is focus on the master data/transaction data recorded by user to SAP PM.
3. identify user champion on each digital thread

sample of SAP Compliance KPI:

- % of work orders updated on time
- % of notifications with correct coding
- SLA compliance (e.g., WO approval, confirmation submission)

## K - Knowledge

Once the CMMS user know why they should support the new CMMS implementation and has the reason/desire to support it, finally change management will equip them with proper knowledge on how to operate the CMMS properly in form of standard operating procedure (SOP)

existing **SOP need to be revamped** with following adjustment 

1.	Rewritten end-to-end SOP (including negative/alternate scenarios)
2.	Unified data input guideline (coding dictionaries, examples)
3.	DefinedSLA per user role
4.	Central KPI definitions with Clear calculation methods

once the SOP has been finalized, a workshop and regular training need to be conducted to socialize the new procedure.

## A - Ability

Ability is the stages to test whether the user has awareness (A), desire (D) and knowledge (K) to face the changes.

it can be achieved with hand on training on test environment with guidance of the platform expert.

these hands on training should be fully based on the SOP(standard operating procedure) and CMMS handbook.

## R - Reinforcement

Reinforcement is a control stages to continuously monitor the changes. Preventing things can go wrong after workshop and training.

it is advised to monitor the changes by using **data quality KPI** followed up with regular meeting to refresh knowledge about the CMMS SOP.

Reinforcement stage for CMMS rollout often implemented on specific plant as the pilot. Once the pilot project is success, it will be scaled out into other plant.

# Application No Functional Quality Gating

Performance issue encountered by CMMS user/operator after the go live can be avoided using proper quality gating for non functional requriement.

On a small-medium or even large organization which IT is not their main business core usually most of the apps implementation is done by 3rd party as their organization doesnt have dedicated digital department which focus on the digital transformation.

in most cases, these 3rd party vendor (especially low cost one) doesnt perform non functional test which consist of two type of tests such as:

**a. Performance testing**

Performance test is aimed to check the platform / application performance with various tools(eg; apache jmeter, k6, etc) and methodology in form of : availability, scalability, latency and data consistency.

usually it has three stages:
1. load test (target throughput & concurrent user for 24 hour)
2. stress test(150% of load test throughput + concurrent user for 24 hour.)
3. soak test(stress test but for 48 hours.)

the throughput will be dependent on the infrastructure specifications and organization preferences.

once the performance test is completed, the result will be compared with target performance. for example: 200 concurrent user with total of 20000 TPS(transaction per second) and average of 500 latency.

if the expected performance is not match, vendor or the SI(system integrator/implementor) shall create a RCA (root cause analysis) and then adjust their application itself/scale the infra/readjust the configuration (depend on the root causes)

    usually frontend and backend performance test are performed independently to achieve optimum result.

**b. Penetration testing**

performance testing will mitigate the application slowness after CMMS implementation/go live.