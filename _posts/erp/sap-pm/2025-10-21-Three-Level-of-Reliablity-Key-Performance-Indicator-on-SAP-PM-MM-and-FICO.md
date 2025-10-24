---
layout: posts
author: Degananda Ferdian
categories: erp
series-code: ASM001
excerpt: Based on balance score card(BSC) management & strategic planning framework, KPI is located on the center(core) of the process. Hence, SAP PM configuration should not only depend on the organization structure business process but should also factor in the target KPI. the solution design should be crafted in order to achieve the KPI  
tags: asset-management erp sap-pm
topics: asset-management
background: before implementing SAP as solution for maintenance process management on organization, it is advised to determine the target key performance indicator which will be obtained from SAP PM.
objective: to understand how to prepare SAP master data and technical object before apply it into mainteance plan.
deliverables: Article
---

# What is Maintenance Key Performance Indicator

Maintenance key performacne indicator (KPI) is **quantifiable metrics to evaluate maintenance performance** or (in genreal) maintenace departmeent within an organization.

&mdash; without a well defined KPI, improvement on maintenance program/activities is lagging as there is no benchmarking metrics to monitor the performance. 

Apart from the process improvement, KPI is the baseline used for adopting PDCA(plan,do, check and action) framework which commonly used on many organization's maintenance and reliability department.

    it all started from company goals, then derrived into specific department's key performance indicator.

## Typical KPI on Maintenance Departments.

# List KPI for Maintenance & Reliability 

On Below table is the common KPI which can be calculated from SAP transactional data. Not only SAP PM data, some parameter is retrieved from SAP PM linked module such as MM (Material management) and FICO (Financial accounting).

note that each KPI is tied into one of three planning level (strategical, tactical and operational)

## Strategical

long term focused maintenance (2 or 5 years). highly related with company vision or direction.

users: top management

| KPI                     | Description                                                                      | Typical Formula                       |
| ----------------------- | -------------------------------------------------------------------------------- | ------------------------------------- |
| Budget Utilization Rate | Comparison between maintenance cost over the year compared with the asset value. | Annual maintenance cost / asset value |


## Tactical

shorten focused (monthy).

    it is recommended to have the KPI based on equipment manufacturer.

KPI based per manufacturer will give visibility for each equipment based on the brand. Super useful to be used as data driven for future equipment or assets procurement as an important factor.

users: manager

| KPI                              | Description                                                                                      | Typical Formula                                                                                          |
| -------------------------------- | ------------------------------------------------------------------------------------------------ | -------------------------------------------------------------------------------------------------------- |
| MTTR (mean time to repair)       | average time needed  to repair (Corrective maintenance) after a failure or accident are occured. | total repair duration / number of failure or accident                                                    |
| MTTF (mean time between failure) | average time between one failure to another failure                                              | average equipment uptime compared with the average equipment downtime                                    |
| Sparepart consumption cost       | total sparepart issued per maintenance                                                           | total cost of spare part consumed during maintenance grouped by equipment/manufacturer/func loc/location |

## Operational

focus on day to day insight during operation

users: manager, technician and planner.

| KPI                       | Description                                                                               | Typical Formula                                           |
| ------------------------- | ----------------------------------------------------------------------------------------- | --------------------------------------------------------- |
| Number of breakdown       | Daily, weekly or monthly breakdown insight          per location/func loc/equipment/brand | n of breakdown/failure/accident                           |
| Notification closure rate | To check team performance regarding document administration on SAP                        | number of closed/rejected notification/total notification |
| Work order closure rate   | To check team performance regarding document administration on SAP                        | number of closed/rejected work order/total work order     |