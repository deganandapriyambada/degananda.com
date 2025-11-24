Below is the complete t-code mapping to track work order's material, labor and cost on SAP PM from scheduling stages until realization then followed up by consolidation report.

**Work Order Control Key**

Control key is a 

Phase: WO Scheduling

| No | entity | Remarks | Control Key | 
|---|---|---|---|
| 1 | Labor | Internal | PM01 |
| 2 | Labor | External | PM03 |
| 3 | Labor | External | PM03 |
| 3 | Labor | External | PM03 |

**Rate Sources**

Phase: WO Scheduling

| No | entity | Remarks | Source | 
|---|---|---|---|
| 1 | Labor | Internal | d |

**Cost Collector**

Phase: WO Scheduling

| No | entity | Remarks | Bucket | 
|---|---|---|---|
| 1 | Labor | Internal | d |

**Realization**

Phase: Just before execution

to record actual usage

| No | entity | Remarks | T-Code | 
|---|---|---|---|
| 1 | Labor | Internal | d |

Phase: After TECO (technically complete)
