---
layout: posts
author: Degananda Ferdian
categories: erp
series-code: n/a
excerpt: Layered key performance indicator is generally recommended in order to create complete visiblity of monitoring asset performance. Outcome driven matrix such as MTTR, MTTBR or equipment availability will be placed on the first layer as outcome KPI. The second layer will be diagnostics KPI to determine underlyting factors that driving outcome KPI.
tags: maintenance kpi reliability
background: Key performance indicator (KPI) has important role on maintenance and reliability function as the barometer to measure the asset integrity as well as monitor the overall plant performance.
objective: to understand the common key performance indicator for maintenance and reliability function
deliverables: Article
---

# Why organization need a Key Performance Indicator (KPI)

Improvement within an organization can only be made if a valid measurement result from previous performance evaluation cycle is available and agreed by all department in a mutual consensus. One of the most common measurement tools is **key performance indicator** or also often called as KPI.

Ideally, KPI should be objectively computed using data-driven approach, none of the parameter are subjectively scored. For example, production team key performance indicator will revolves arround **production data from shopfloor** such as: number of produced goods, average time to manufacture one semi finish goods and so on.

&mdash; However, some organization tend to mix objective and subjective key performance such as supervisor review indicator to balance the scoring matrix as some of parameter are not quantificable especially related with employee performance that doesnt have sales/production/operational matrix.

# Maintenance Operations Key Performance Indicator (KPI)

Department KPI often derrived from organization goal. One of engineering based company or organization key goal is about **asset integrity** as the whole production operations perfromance will be dependent on the asset integrity level.

&mdash; Asset integrity is an indicator to determine whether an asset / equipment / machine can met the expected performance target in regards of the throughput, quality and safety and often compared with new condition performance benchmark as the basepoint.

a bad machine/equipment will cause trouble for production operations while good and well maintained machine/equipment capable of keeping the production rate and product quality.

## Two level of KPI for Asset Integrity (Outcome vs Diagnostics)

The depth of key perfromance indicator usually divided into two level. First level (level-1, top level) will directly explain the target area (in this case is: asset integrity) performance, can also be called as **outcome KPI**.

Second level (level-2) is focused for determining level-1 key performance indicator performance factor and often called as **diagnostics KPI**. For example, if the MTTR(meantime to repair) KPI is low, second-level KPI should be able to the explain the reasons of specifics level-1 KPI downfall (and vice-versa, if the level-1 KPI is sky rocketed, it should also able to explain the reason).

# Sample of Two level Key performance indicator with Three Level of POV for Asset Integrity

below are the key performance indicator hierary for asset integrity with followings guidelines:

1. CMMS (computerized maintenance management system) is the main data sources.
2. If required data to compute the KPI, it can be retrieved from other legacy systems.

## Level 1 KPI - Outcome Key Performance Indicator

**Strategic** (Affected by L1 operational KPI)

| Code | KPI | Type
|---|---|---|
| SK1 | Equipment operational availability (%) | Lagging | 
| SK2 | Predictive Maintenance Coverage (%) | leading | 

**Tactical** (has L2 Diagnostics KPI)

| Code | KPI | Type
|---|---|---|
| TK1 | MTTR (meantime to repair) | Lagging | 
| TK2 | MTBR (meantime between repair) | Lagging | 
| TK3 | MTBF (meantime between failure) | Lagging | 
| TK4 | PM Compliances (%) | Leading | 

note: PM Compliances (%) Schedule Adherence

**Operational** (Already Granular, doesnt have L2 KPI Diagnostic)

| Code | KPI | Type
|---|---|---|
| TK1 | Failure Rate | Lagging | 
| TK2 | Planned Maintenance Percentage | Leading | 
| TK3 | % of sub-contracted work order | Leading | 

## Level 2 KPI - Diagnostics Key Performance Indicator

| Code | L1 - Outcome KPI | L2 - Diagnostics KPI |
|---|---|---|
| DK1 | MTTR, MTBF, MTBR | % Work Order Delayed Because of Stock | 
| DK2 | MTTR, MTBF, MTBR | Spare Parts Availability | 
| DK3 | MTTR, MTBF, MTBR | Mean Maintenance Cost Per Asset | 
| DK4 | MTTR, MTBF, MTBR | Mean Maintenance Time (MMT) | 
| DK5 | MTTR, MTBF, MTBR  | Number of spares parts below safety stock  | 
| DK6 | MTTR, MTBF, MTBR  | Number out-of-stock sparesparts   | 
| DK7 | MTTR, MTBF, MTBR | % Work order That Require Rework | 
| DK8 | MTBF | % Corrective Maintenance | 
| DK9 | MTTR | Equipment Downtime | 
| DK10 | MTTR | Running Hour | 
| DK11 | MTBF, MTBR | Number of Breakdown | 
| DK12 | MTBF, MTBR | Repeat Failure Rate (%) | 
| DK13 | MTTR, MTBR | Average Repair Time| 
| DK14 | MTTR | Average Notification Response Time | 
| DK15 | MTTR | First Time Fix Rate % | 
| DK16 | PM Compliance % | Maintenance Backlog | 
| DK17 |  PM Compliance %  | % High Priority Work Order Completed on Time | 
| DK18 |  PM Compliance %  | % Low Priority Work Order Completed on Time | 
| DK19 |  PM Compliance %  | Active Released Work Order Aging | 
| DK20 |  PM Compliance %  | Work Order Prioritization Accuracy (%) | 
| DK21 | MTBF, MTBR, PM Compliance | % Overdue Planned Maintenance Work Order | 

## Data Quality KPI Group

| Code | KPI Group| Type |
|---|---|---|
| DQ1 | Equipment | Master Data Data Quality | 
| DQ2 | Functional location | Master Data Quality | 
| DQ3 | Notification | Transaction Data Quality | 
| DQ4 | Work Order (WO) | Transaction Data Quality | 
| DQ5 | SAP Compliance | Compliance | 