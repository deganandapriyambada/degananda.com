Below is the complete t-code mapping to track work order's material, labor and cost on SAP PM from scheduling stages until realization then followed up by consolidation report.

# Plant Maintenance Control Key

**Work Order Control Key**

Control key in context of SAP PM (Plant maintenance) is a value to define how the maintenance order is going to be processed.

genrally there are three types of PM control key

- **PM01** is used for internal operation. Both of the material and labor will be came from internal (in-houses) organization resources through internal work center.
- **PM02** or also known as outsourcing operation. Both of the material and labor will be part of vendor responsibility. vendor will provide the material and labor.
- **PM03** is subset of PM02 process. Material or spareparts will be provided by internal organization, however vendor will execute the maintenace. They provide the labor

## Control Key Implementation 

Phase: WO Scheduling

| No | Type | Control Key | Labor | Material | 
|---|---|---|---|---|
| 1 | Internal Operation | PM01 | Inhouse (IH) | Inhouse (IH) |
| 2 | Fully Outsource | PM02 | Outhouse (OH) | Outhouse (OH) |
| 3 | Labor Outsource | PM03 | Outhouse (OH) | Inhouse (IH) |

PM02 and PM03 require additional SAP MM/FICO to be configured such as : services master to record the external services(labor) pricing detail , Valuation price or category for external material price

## Rate Computation

internal and external maintenance operation has different way to compute the rate. Internal operation will solely rely on the activity type while the external operation need to involve combiation of service master, valuation price & category, OA and PIR as shown below

**Rate Sources**

Phase: WO Scheduling

| No | entity | Remarks | Source | 
|---|---|---|---|
| 1 | Labor | Internal | d |

**Cost Collector**

SAP doesnt have rigid collector for specific control key. Each control key can be assigned to any cost collector

- Cost Center: daily activities/operation which aimed to perserve the assets condition but **not prolong the asset age**.
- WBS: project based activity (eg: for turn around/TA project)
- AUC(Asset under construction): usually high cost activities to **prolong the asset age** (eg: for turn around/TA project)

cost center is OPEX to track ongoing operational cost while WBS and AUC is CAPEX (capital expenditure)

# Realization


Phase: Just before execution

to record actual usage

| No | entity | Remarks | T-Code | 
|---|---|---|---|
| 1 | Labor | Internal | d |

Phase: After TECO (technically complete)
