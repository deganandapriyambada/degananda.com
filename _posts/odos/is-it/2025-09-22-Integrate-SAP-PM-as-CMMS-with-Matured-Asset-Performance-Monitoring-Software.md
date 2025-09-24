---
layout: posts
author: Degananda Ferdian
categories: is-it-terminology
series-code: n/a
excerpt: SAP PM serve as CMMS and EAM. It handle maintenance workflown and capable of incorporating some ERP modules such as FICO for financing and MM for material management including inventory, procurement, invoicing and vendor management.
tags: apm
background: CMMS or standsfor Computerized Maintenance Management System is used to manage maintenance workflow such as work order creation, update execution status, inventory control, scheduling, sparepart control. It lack performance monitoring and asset life cycle management from procurement to disposal.
objective: to understand the importance of integrating three key compoent of asset management. EAM, CMMS and APM. Note that EAM is the one who interfacing on the ERP (Enterprise Resource Planning).
deliverables: article
--- 

&mdash; Asset performance monitoring is a great tools to help monitoring asset health, condition and overall status. However, Before implementing an APM, The application landscape and source of truth need to be defined between APM,CMMS and EAM. So it has clear domain and segregation. Othwise it might causing duplicated process and complication.

# Domain Segregation between CMMS, EAM and APM

    without well defined domain segregation between those three main asset management software, there will be overlapping functionality which affect on the operational excellence. Hence, it need to be well defined on the front.

Below is the practical function and responsibility segregation between CMMS (Computerized maintenance management system), EAM (Enterprise Asset management) and APM(Asset Performance Monitoring) based on its domain.

| No | Scope | CMMS | APM | EAM |
|----|----------|--------|--------|--------|
| 1  | Asset Hierarchy/Structure  | Yes | Use the data From CMMS/EAM | Yes, enriched with financial  & Compliance Context |
| 2  | Work Order & Notification  | Yes | N/A | Yes (Indirectly), At High Level Version(WBS) |
| 3  | Mainteannce Scheduling | Yes | N/A | Yes (Indirectly), Only monitor the Lifecyle, Planned vs actual cost, remaining budget, <br /> capex, opex <br /> (eg: is it still under maintenace? when expected ro ready?) |
| 4 | Condition Monitoring(From IoT,Sensor Or DCS) | n/a | yes | n/a |  
| 5 | Predictive Maintenance Analytics | predictive result will become WO | yes | n/a | 
| 6 | Post Maintenance analytics | no | yes | become an insight/baseline for next year/5 year maintenance strategy | 
| 7 | Reliability & Risk Management | no | yes, risk will be mapped based on the asset health condition <br /> risk will be mapped to the impact as well | yes, on policy level, if the risk is high then it needed some required mitigation. <br /> usually the final output is SOP/FMEA/ECA/Reliability Maintenance Strategy | 
| 7 | Spare Parts/Inventory | Yes | No | Yes, the procurement | 
| 8 | Asset Lifecycle | No | No | Yes | 
| 9 | System of record | Maintenance work history |  asset condition, health indicator, performance matrix | finance data, compliance data, lifeycle, master asset record |
| 10 | Typical users | Maintenance Planner, Maintenance Technician | Reliability Engineer, Data Analyst | Asset Manager, Finance, Executives | 

Summary/Key Points for above domain mapping:

- CMMS is focused on maintenance planning,scheduling and sparepart/inventory management
- APM is focused on determining asset health condition based on IoT, Sensor or instrumentation data (can be automated or manual data retrieval) and map it with the risk assessment matrix during day to day operation or post maintenance execution.
- EAM is focus on asset "administrative" lifecycle from procurement until dismantling. Highly dependent on fianncial aspect.
- engineering lifecycle of an asset will be managed by PLM such as solidwork to handle FEED, Desgin engineering review, etc.

## Practical Operational Task Example on CMMS vs EAM vs APM

below is the practical example for each capability scope between EAM vs CMMS vs APM

**1.Asset Hierarchy / Structure**

- CMMS => Register a Pump on area X -> Refinery Unit X / Line -> X (Register functional location)
- EAM => increase the CAPEX for the pump by 20%
- APM => Retrieve asset data from CMMS as master data on APM.

**2.Work Order / Notification**

- CMMS => Pump leak is detected after an visual inspection, maintenance then create notification/Wo for corrective maintenance.
- EAM => Report/portofolio view: there are 50 closed WO on 2025, with actual spend $200K and planned budget $100K
- APM => Detect leak from timeseries historian/dcs and automatically create an alert

**3.Maintenance Scheduling**

- CMMS => as per OEM, a pump sparepart need to be changed every 45 days and regular inspection per 15 days. Maintenance planner create maintenance plan on CMMS.
- EAM => Plant availability report on area X. one pump not functional until the maintenance is completed by XXXX/XX/XX (consume 3% of annual allocation)
- APM => acquire sensor data from historian or DCS, then process it into trend, from that trend APM will do analytics process to give recommendation if there is an anomaly happened.

**4.Condition Monitoring**

- CMMS => maintenance technician log instrument recording/reading manually. eg : avg temperature 25'c for xxxx/xx/xx
- EAM => **Out of domain**
- APM => automate the readings via DCS/OCR/Historian and detect anomalies (condition based monitoring/CBM)

**5.Predictive Analytics**

- CMMS => received WO/notification from APM that performed PDM (Predictive maintenance)
- EAM => create report on the efficiency of predictive maintenance. $ saved vs cost for maintenaining predictive maintenance system
- APM => create & train ML model to detect the time before the pump is breaking down and send WO/notification to CMMS.

**6.Post Maintenance Analytics**

- CMMS => Record the actual man power hour and spareparts consumed. eg: during WO-XXX for pump equipment actual hour 5, spare parts consumed 10
- EAM => create cost/performance reports. if the maintenance is considered as useful/success/impactful, make it recurring cost for next years.
- APM => Confirm the maintenance result based on sensor readings (if available).

**7.Reliability & Risk Management**

- CMMS => equipment and work order flagging with critical/high/medium/low. maintenance planner will use those prioritization to plann their maintenance over the year/5 years.
- EAM => define policy for every risk register and set the budget.
- APM => Compute risk score.


**8.Spareparts / Inventory**

- CMMS => WO-XXX consumed 3 bearings and 5 liter of grease. compute the remaining bearing and grease on the inventory.
- EAM => automate material purchase requisition when sparepart stock level below X and trigger the procurement.
- APM => **Out of domain**

**9.Asset Lifecycle**

- CMMS => Track work order (WO) history or equipment history
- EAM => record life cycle for each asset/equipment (pump commisioned at 2024, depreciation end at 2025, overhauled at 2026, decommision planned at 2030)
- APM => perform performance degradation analytics on the asset/equipment(eg : pump will be reaching its end of life by end of 2027) and suggest when to do action(overhaul/turn arround)

**10.System of record**

- CMMS => WO history for each equipments/asset
- EAM => cost depreciation record.
- APM => time series condition log based on sensor readings or DCS or instrumentation readings


## SAP PM distrupting the Domain Segregation as it functioned as CMMS and EAM

However, the capability depth of the CMMS might affecting the domain segregation. Some CMMS nowdays also incorporating some subset function of EAM. 

&mdash; SAP PM has capability to integrate with MM & FICO. those three combiation made SAP PM considered as CMMS and EAM as it can manage maintenance work order and manage the asset end to end life cycle from different enterprise angle: finance, engineering, company strategy.

It leverage the capabilities to not only managing maintenance workflow but overscoping into end to end asset life cycle management from procurement until disposal.

    Note: SAP capability as EAM is limited to manage the asset life cycle as equipment/master data and the procrement process.

it can register and unregister the asset depend on the cycle. However, it **cant execute FEED**(Frontend Engineering Design),design engineering review or other engineering process/life cycle before/after procurement cycle. 

Engineering process are out of SAP Domain. PLM (Product lifecycle management) software such as solidworks will manage the engineering life cycle. SAP is just managing the **asset cycle state**

&mdash; Domain segregation between EAM, CMMS and APM might be different between one organization to others as it will be affected by the organization culture, process and the platform ecosystem. it's unique.

# Typical Analytics Use Cases/Capabilities on APM

Asset performance monitoring is not just a platform to record telemetry readings data from sensor/iot/dcs or instrument (data acquistion). it also operate as data analytics platform which will provide an insight on following three key area:

1. reliability
2. risk
3. asset optimization

APM detect a problem which already occured or will mostlikely occured (predictive).

for problem(usually called as a incident or failure) that already occured, APM can help on following analytics task that usually done by maintenance engineer on excel file.

## Descriptive Analytics

    What Happened? When its Happened? How it happened?

- failure history analysis (top 3 , top 5 of failure/.incident that happened over last 1 year/month/timeframe)
- chronogical event analysis (build timeline before the failure happened. from when the alarm triggered until intervention.
- utilization vs downtime analysis
- process historial replay => recontruct chronogical sensor that lead into failures.

kindly note that above capability can only be performed by APM if only if the required data is supplied to APM. garbage in = garbage out.

## Diagnostics Analysics

    Why its happened

- Root Cause analysis (determine the root cause on such failures)
- RCPS , combine detected/defined root cause with corrective/preventive tracking to see available solution (but not decision yet on which solution that going to be choosen)
- Fault tree analysis (FTA)
- Cause & Effect (Fishbone / Ishikawa) Diagrams &mdash; map process, mechanical, human, and external factors.
- Bad Actor Analysis, rank equipment that has the most contribution to such failure

## Prescriptive analytics

- Recommendation engine, from the defined root cause and available solution(corrective/preventive), the engine will recommended the best action.
- Simulation of maintenance scneario a.k.a what if analysis. exampl: what if the planned maintenance is delayed, what if over haul is delayed, what if turn around is delayed, etc and what's the impact to the asset health/condition.
- Reliability centered maintenance (RCM) - recommend some actions to fix the failure from various caombination of maintenance strategies (corrective,planned, predictive or run to failure/intentially let the equipment into failure without any intervention)
- Risk mitigation planning, link failure risk/impact to company SOP(Standard operational procedures)

## Reliability & risk analytics

- Risk matrix (PoF vs CoF), possibility/likelyhood and the impact heatmap.
- Criticality analysis, prioritize asset based on the criticality. critical asset need more care and attention.
- FMEA, scoring of failure(risk vs likelyhood vs impact) and detect the mitigation.
- Event Tree/Bow Tree analysis, a mind map that describe how the failure happened until how its impacting production/environment/safety/health

## Performance & optimization analytics

- Asset health index / EHS (Equipment health score) - Computed based on several parameter such as condition,performance, utiliaztion (might differ per company due to the organization culture)
- Bencmark across plants. comapre same equipment type health score on different plants and benchmark it (whats wrong, what could be better)
- Digital twin simulation 
  
## Available APM Tools on the market

based on above typical analytics capabilities, below is the list of available APM software/tools that capable of performing such analytics/computation.

| Analytics Capabilities | Hexagon APM | GE APM | Aveva APM | HoneyWell APM | AspenTech APM |
|----|----------|--------|--------|--------|--------|
| Failure history analysis  | Yes | Yes| Yes | Yes |Yes |
| Chronological events & alarm analysis  | Yes | Yes| Yes | Yes |Yes |
| MTTR/MBTF  | Yes | Yes| Yes | Yes |Yes |
| Process Historian Replay | Yes | Yes| Yes | Yes |Yes |
| RCPS | No | No| No | No | No |
| Fault Tree Analysis | No | No| No | No | No |
| Bad Actor Analysis | Yes | Yes | Yes | Yes | Yes |
| Predictive Maintenance | Yes | Yes | Yes | Yes | Yes |
| Anomaly Detection/CBM | Yes | Yes | Yes | Yes | Yes |
| Maintenance Action Recommendation | Yes | Yes | Yes | Yes | Yes |
| Asset Health Index Scoring | Yes | Yes | Yes | Yes | Yes |
| Fault tree analysis | Yes | Yes | Yes | Yes | Yes |

Mandatory digital enabler/digital spine for implementation perspective:

1. heavily sensorization as the APM analytics model is based on numerical data.
2. clean asset master data
3. maintenance historical data
4. operator activity logs (Connected worker), who's doing what need to be recorded properly.
5. centralized data repository (data lake/lakehouse platform)

    it is recommenmded to perform maturity assessment on those five digital enabler.

&mdash; without those five enabler, any APM can't perform and will just ended up with garbage in and garbage out condition.

