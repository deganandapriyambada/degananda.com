---
layout: posts
author: Degananda Ferdian
categories: erp
series-code: ASM001
excerpt: Most of asset provider management (APM) platform has built in rounds management sub-module to handle the daily routing of maintenance and reliability function. 
tags: asset-management
topics: asset-management
background: Maintenance and reliability function has a day to day routine for maintenance, testing, inspection and monitoring. These routine can be managed by APM ranging from the data collection, workflow creation and post routine analytics
objective: to understand the definition of rounds management on asset performance management (APM)
deliverables: Article
---

# Rounds Management 

As one of critical module on APM, Rounds management is focusing on **managing routine task operation** performed by the reliability engineer. There are three main functionality of rounds management
1. data collection
2. designer
3. Monitoring

## Data Collection

Collect the maintenance related activities execution result ranging from inspection, monitoring, testing or the actual maintenance.

for example, to conduct corrosion monitoring or IoW (interval operation window), the maintenance technician can input the thicness result from monitoring activities to the data collection module at rounds management.

## Designer

Rounds designer is reponsible for creating the entire routine workflow. it has two main functionality

1. define routes
2. define the task for inspection, monitoring, maintenance or even testing

maintenance technician will execute the daily task and record the data collection results.  


## Monitoring

data recorded from maintenance activities will be then analyzed. For example, 4 month historical data of thickness on tank can be extracted into tank health information.

another scenario is for CBM (condition based monitoring) use cases which if the thickness exceed certain threshold it will trigger an alert to the maintenance technician.

# Comparison

| **Factor**                           | **Custom Application**                             | **SAP FSM & SAM**                                            | **APM Solution**                           |
| ------------------------------------ | -------------------------------------------------- | ------------------------------------------------------------ | ------------------------------------------ |
| **Pricing**                          | Typically the lowest initial cost                  | Requires separate licensing from SAP PM                      | Varies depending on the selected modules   |
| **Result Logging**                   | Yes, Can be customized                             | Available out-of-the-box (OOTB)                              | Available out-of-the-box (OOTB)            |
| **Result Analytics(Corrosion, IOW)** | Yes, Can be customized                             | Not Available                                                | Available out-of-the-box (OOTB)            |
| **Dispatching Capability**           | Supported through customization                    | Available out-of-the-box (OOTB)                              | Generally not available                    |
| **Offline/Mobile Execution**         | Supported through customization                    | Available out-of-the-box (OOTB)                              | Available out-of-the-box (OOTB)            |
| **Offline Synchronization**          | Supported through customization                    | Available out-of-the-box (OOTB)                              | Available out-of-the-box (OOTB)            |
| **Customization**                    | Fully customizable based on requirements           | Limited customization options                                | Limited customization options              |
| **Integration with SAP PM**          | Possible but requires high integration effort      | Natively integrated                                          | Standard connector available               |
| **Security**                         | Managed internally (self-hardened)                 | Governed and assured by SAP                                  | Ensured by APM provider                    |
| **SLA & Uptime**                     | Managed internally                                 | Guaranteed by SAP                                            | Guaranteed by APM provider                 |
| **User Interface / UX**              | Fully customizable, can deliver optimal experience | Web-based and standardized                                   | Web-based and standardized                 |
| **Deployment Options**               | Flexible: Cloud or On-premises                     | Cloud-only                                                   | Cloud or On-premises (depending on vendor) |
| **Integration Challenge**            | Integration to SAP PM                              | Almost non existent as its still within SAP Product Families | Integration with SAP & Legacy System       |
| **Main Strength**                    | Price & Customizeability                           | Native integration to SAP, OOTB Dispatch Module              | OOTB Battle Proven analytics Capability    |