---
layout: posts
author: Degananda Ferdian
categories: erp
series-code: ASM001
excerpt: Ensuring all the data from CMMS and ERP properly collected, cleansed and currated are important pre-requisite before implementing an Asset Performance Management (APM) Platform
tags: asset-management
topics: asset-management
background: APM is commonly used to perform maintenance and reliability related analytics which can't be done CMMS or ERP. Data quality level will determine the output generated from APM.
objective: to determine critical data quality points before implementing APM(Asset performance management)
deliverables: Article
---

# Data Needed From SAP PM (Plant Maintenance) for APM

Data is the primary foundation on any analytics software. On Asset maintenance context, SAP PM (Plant maintenance) responsible as the core asset master data and work order workflow.

SAP PM manages following master data which important for any analytics software especially for an APM (Asset Performance Management) software and maintenance/turn around master planning software (short term per 1 year and  long term per 5 years)

1. **Equipment master data** and the tagging parameter (eg: criticality, serial number, etc)
2. **Functional location** (asset location hierarchy crossed with the organization structure)
3. **Bill of Material** (sparepart master list which support the equipment's maintenance application)
4. **Task List** (list of mandatory maintenance activity checklist/job plans to the specific equipment)

these master data then will be contextualized with the organization business process in form of transaction data. Below are the important SAP PM transaction data that will be fed into maintenance related analytics software

1. **maintenance plan** and the tagging parameter (interval settings / ABCD config of preventive maintenace program. can be a maintenance, inspection, condition monitoring or testing)
2. **work order** - a maintenance activity work order. It handle the end to end cycle of the order. from initiated all the way into technically complete(maintenance done/TECO) and settlement (maintenance's administration done / closed)
3. **maintenance history** - historical data of past maintenance activities including the technical feedback, actual man power used, actual sparepart consumed, assigned technician, etc
4. **measurement point** - physical or logical condition recorded at specific time frame for a specific equipments. for example: machine's temperature, truck's tyre running hour etc.  
5. **Equipment History** - often also called as usage history. it record a new usage state each time the asset is starting/executing/completing a maintenance(end to end work order lifecycle change can be captured as well), testing, inspection or the equipment assignment information (eg: equipment XXX assigned to site A from 5th jan to 10th jan 2025) which affect the equipment's functional locations.

    Note that root cause analysis details after incident or failure occured is typically not recorded on SAP PM. it should be recorded directly on the APM.

however, SAP PM only record the high level information about the detail on the equipment's usage history such as the incident name and the timestamp.

# Additional Data OutSide SAP

apart from SAP PM master data and transactional data, additional data outside SAP PM will need to be fed into APM. 

## OT (operational technology) data

Apart from SAP, OT data take crucial role for APM as OT is responsible for **sensor data acquisition** from the assets using various technique such as sensorization, OCR, SCADA, Historian or DCS.

There are two OT data acquisition from edge all the way to cloud(APM/EAM) scenario

- automated data acquisiton: sensor data captured by PLC -> send to -> DCS/SCADA -> stored on historian as time series -> pulled by APM or pushed to APM.
- manual data acquisition: operator perform conditioning monitoring by capturing the machine condition readings on physical/digital gauge/equipment's built in monitoring software/visual observation/hardcopy form to SAP as measuring points. 

## ERP Data

**SAP FICO**

Asset financial information such as overall asset value, asset value depreciation, asset categorization(capex, opex), asset lifecycle cost, yearly maintenance budget, WBS and sparepart cost.

&mdash; financial data related to the asset will be collected from FICO to support asset performance management software especially for any computation that require financial data such as return of investment.

**SAP MM (Material Management)**

list of material (spareparts or consumeable) and its detail which used during the maintenance work order lifecycle. before the work order is handed over to the maintenance execution team (ready to work's work order), the WO sub order to material and external services issue need to be issued. all of these detail (which material required, which external services needed) are need to be fed into APM software.

Apart from the list of material requirement per work order, APM also need the material delivery information such as lead time per material, current stock per material and safety stock per material

**HSE System**

HSE's data is mostly used for safety and compliance computation on APM. some data that usually needed are permits, risk assetment matrix, failure or incident logs.

**Engineering Document**

unnecesary to to be fed to the APM as these document should already be converted into SAP master data or transaction data.

for example, OEM maintenenance's activity (maintenance/inspection/testing/monitoring) internal suggestion/recommendation is translated into maintenance plan

# APM Data Input Requirement mapping to the Functionality

below is the summarized version of the **key data input required for APM** and its usage on the APM modules.

| Data                                                                                                                           | Source                            | APM Module                | APM Functionality                                                                                                                                            |
| ------------------------------------------------------------------------------------------------------------------------------ | --------------------------------- | ------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Equipment Master Data(Serial number, name, criticality, commisioning date, manufacturer)                                       | SAP PM                            | Asset Register            | Master data synchronization, Asset Hierarchy Setup, Lifecycle tracking and criticality analysis                                                              |
| Equipment Functional Location                                                                                                  | SAP PM                            | Asset Register            | Asset Hierarchy Setup, <br /> Organizational Hierarcy baseline for Performance monitoring                                                                    |
| Bill of Material(BOM Spareparts per assets/equipment, material group, supplier info)                                           | SAP PM                            | Reliability Analysis      | Spareparts criticality analysis                                                                                                                              |
| Spareparts stock / inventory information                                                                                       | SAP MM                            | Reliability Optimization  | Spareparts stocking optimization                                                                                                                             |
| Task list(steps, standard durations, resources, tools & safety notes)                                                          | SAP PM                            | Maintenance Strategy      | Task Optimization                                                                                                                                            |
| Maintenance Plan(Interval, Countertype, strategy: time/usage/condition)                                                        | SAP PM                            | Maintenance Strategy      | Maintenance forecasting, Optimize preventive maintenance interval                                                                                            |
| Work Orders & Technical Feedback (planned vs acutual material consumption <br /> man power, costs, planned vs actual duration) | SAP PM                            | Reliability Analysis      | MTBF, MTTR, Work Execution Benchmark                                                                                                                         |
| Maintenance History or Equipment usage history (failure/incident name and code), <br />  cause, remedy, action                 | SAP PM                            | Reliability Analysis      | Root cause Analysis, Failure Mode Analysis, <br /> RCM (Reliability centered maintenance) Strategy Update                                                    |
| Measurement point (logical or physical condition of assets) + IT-OT Data                                                       | SAP PM / IT-OT                    | Condition Monitoring      | Realtime Monitoring, Anomaly Detection, <br /> Predictive failure modeling/CBM                                                                               |
| Timeseries sensor data + Unplanned/Planned Maintenance History                                                                 | SAP PM+IT-OT                      | Condition Monitoring      | Predictive Maintenance for early warning using <br /> machine learning, Health Scoring                                                                       |
| Production Data                                                                                                                | SAP PP/MM                         | Performance Risk          | Downtime to Production loss analysis                                                                                                                         |
| Inventory Data(Spare parts, consumeable, leadtime, stock level)                                                                | SAP MM                            | Reliability Analysis      | Sparepart optimization, STO Planning (shutdown, turnarround, overhaul) <br /> Sparepart forecasting, procurement planning/MRP(material requisition planning) |
| Work Force(headcout, skill list, certification)                                                                                | HCM Software / SAP Success Factor | Reliability Analysis      | Capability Planning, Skill Matching                                                                                                                          |
| Financial data (asset value, budget, depreciation)                                                                             | SAP FICO                          | Asset Investment Planning | Repair vs replace decision, asset lifecycle costing, capex planning                                                                                          |
| RCA Record                                                                                                                     | Typically recorded on APM         | Root cause analysis       | detailed failure investigation, corrective action <br /> event summary, faulre tree analysis, anomaly detection                                              |
| Worker Assignment (who's doing what on production, <br /> maintenance & operation/shift log)                                   | SAP PM & SAP PP; basically MES    | Root cause analysis       | bad actor analysis, process historical analysis                                                                                                              |

# Data Quality Check on the SAP

From previous table mapping between data input requirement to the APM capability, it is clearly shown that SAP PM data need to be currated and maintained to ensure the data integrity, completeness and validity as it will be the **core data that will be analyzed by APM.**

&mdash; if SAP PM data is garbage then APM will also produce garbage. it is aligned with garbage in = garbage out principle on any analytics software. No system can produce useful and applicable insight if the data input is garbage.

    garbage data will produce either false positive or false negative insight which can affect the decision making.

bad decision making due to bad insight will affect the company tracjectory and eventually may impact the revenue, stock and reputation of the organization. **Data quality is critical!**

# Key Data to be Monitored 

list of key data that need intensive **monitoring and governance**

1. Equipment master data
2. Functional location
3. Task List
4. Measuring Point
5. Measuring Doc (Double click detail of the measuring point)
6. Maintenance Plan
7. Maintenance Item
8. Notification
9. Work Order

here are some data quality check formula that can be easily used to determine the level of data quality for SAP PM data.

## Equipment master data

focus on the compleness of master data and its mandatory parameter for the downstream system consumer ranging from SAP, APM, Scheduling apps and Reporting. 

Some master data quality query that can be applied for APM are :

- **Asset register**: count n equipments
- **Criticality Analysis**: count equipments without criticality tagging vs with criticality tagging
- **Lifecycle Tracking**: count of equipment without manufacturer information/model
- **Asset age profiling**: asset installation date

for Data Driven Master Planning on SAP PM:
- count n equipments
- count equipments without criticality tagging vs with criticality tagging
- count of equipment without vs with manufacturer information/model
- count of equipment without vs with Construct Date/Construct Month/Acquisition Date


## Functional Location

for APM

- **Hierarchy Visualization**: count of equipment without vs with Functional Location
- **Maintenance Cost Allocation**: count of functional location without cost center assignment

for Data Driven Master Planning on SAP PM

- count of equipment without vs with Functional Location
- count of functional location without cost center assignment

## Task List

for Quality of life (QOL)

- **Job Plan Execution**: count of task list without the operation steps

for Data Driven Master Planning on SAP PM

- count of task list without the planned work center.

## Measuring Point

Measuring point is list of measurement needed for specific equipment or functional locations.

for APM

- **condition based monitoring**: Equipment without measuring point 
- **condition based monitoring**: Functional location without measuring point 
- **condition based monitoring**: Measuring point without unit of measurement


## Measuring Document

Historical measurement record

for APM:

- **Anomaly Detection**: Check missing timestamp of the equipment measuing document historical data
- **Predictive Analyyics**: measurement historical data with invalid range (eg: negative running hour, etc)

## Maintenance Plan

diference between maintenance plan and maintenance item:

- maintenance plan focus on time parameter/ scheduling parameter (cycle, interval, date)
- maintenance plan determining the maintenance strategy (time based, performance based)
- maintenance item is linked to task list
- maintenance item specify the target equipment or functional location
- (for SWE) maintenance item is intermediary table/object which linked maintenance plan to task list and equipment.

APM

- **Job Plan Interval Planning**: count of maintenance plan without assigned maintenance item 
- **Scheduling**: n maintenance plan without interval/strategy definition
- **data consistency**: count of maintenance item without link to task list
- **data consistency**: count of maintenance item without link to equipment or functional location

for Data Driven Master Planning on SAP

- historical maintenance plan without link to maintenance item
- historical maintenance plan without interval/strategy definition.
- historical maintenance item without link to task list
- historical maintenance item without link to equipment or functional location
  
## Notification

for APM

- **Root Cause Analysis**: Count of notification without cause details
- **Failure History Traceability**: count of notification with missing references (equipment or functional location)


## Work Order

for APM

- **Accurate MTBF/MTTR** n worker without TECO
- **Utlitization Report** n WO without actual labor hour confirmation
- **Forecasting** n WO without actual labor hour confirmation
- **Forecasting** n WO without actual material consumed confirmation
- **Performance/Utilization report**: count of open work order (50 -> 60 AND initial to planned)
- **Root Cause Analysis**: count of WO with missing failure codes.

for Data Driven Master Planning on SAP

specifically used for budget estimation(as forecast comparison datapoint) 
- count of open work order (50 -> 60 AND initial to planned)

## Equipment BOM

for APM:

1. **spareparts optimization**: n of equipment without BOM

for Data Driven Master Planning on SAP

1. n of equipment without BOM (especially for high criticality equipment)
2. n of equipment with inactive BOM
3. n of duplicated BOM per equipment
4. n of BOM without link to equipment

# Summary

&mdash;it is recommended to apply these checking formula on DQM (Data Quality Management) software and chain the rule into MDM (Master data management) software to enforce the data governance framework.

    Note: Material master data from SAP MM should be assessed as well.