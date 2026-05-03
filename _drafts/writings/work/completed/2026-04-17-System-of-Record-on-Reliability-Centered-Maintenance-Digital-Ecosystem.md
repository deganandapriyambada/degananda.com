# The Defition of Reliability Centered Maintenance on Industry

Reliability centered maintenance or often to be abbreviated as RCM is method to identify critical industry equipment that can affect production and create a strategic, tactical and operational plan to keep the equipment in normal condition (**ready to use)**.

RCM generally done through data driven approach. For example, OEM (original equipment manufacturer) document guideline must be combined with historical maintenance data and process data from historian in order to determine the equipment criticality(through FSCA/ECA methodology), inspection plan (through RBI/risk based inspection methodology) and preventive maintenance plan.

## System Component of Reliability Centered Maintenance

RCM as a methodology covering end to end process to ensure the equipment can operate normally with minimum downtime (planned maintenance). Hence, it require at least following systme to be rolled out

1. CMMS (Computerized maintenance management system) - **Core system of reliability centered maintenance**. Used to manage work order, manage maintenance planning, aligning inspection planning with maintenance planning, scheduling corrective maintenance
2. RBI Tools - compute risk based plan per equipment type/classification
3. Industrial internet of things - retrive process, event and measurement data from the field/shopfloor in form of timeseries data.
4. Dashboard/analytics -  to analyze the all of the data produced by CMMS and IIoT system into an insight (example: top equipment with highest maintenance cost including the failure analysis / root cause analysis)

# Typical Data Exchange Interface of CMMS 

System of records

1. Maintenance work order
2. Equipment maintenance status
3. Equipment maintenance history
4. Maintenance planning

Below are the common business process which available under CMMS 

| Information                                         | Source System                    | Target System                             | Inbound/Outbound | Frequency     |
| --------------------------------------------------- | -------------------------------- | ----------------------------------------- | ---------------- | ------------- |
| P&IDS (Piping and Instrumentation Diagram)          | Engineering Document Management  | Reliability Centered Maintenance          | Inbound          | On Demand     |
| Engineering Drawing                                 | Engineering Document Management  | Reliability Centered Maintenance          | Inbound          | On Demand     |
| Maintenance Strategy                                | Asset Management                 | Reliability Centered Maintenance          | Inbound          | On Demand     |
| Equipment Criticality                               | Asset Management                 | Reliability Centered Maintenance          | Inbound          | On Demand     |
| Inspection Strategy                                 | Inspection Management            | Reliability Centered Maintenance          | Inbound          | On Demand     |
| Equipment Master Data                               | Master Data Management           | Reliability Centered Maintenance          | Inbound          | On Demand     |
| Functional Location Master data                     | Master Data Management           | Reliability Centered Maintenance          | Inbound          | On Demand     |
| Maintenance Work Order (inspection & basic of care) | Reliability Centered Maintenance | Inspection Management                     | Outbound         | Daily         |
| Maintenance Work Order (preventive & corrective)    | Reliability Centered Maintenance | Mobile Worker                             | Outbound         | Daily         |
| Maintenance Work Order                              | Reliability Centered Maintenance | Shift Handover                            | Outbound         | Daily         |
| Equipment Maintenance Status                        | Reliability Centered Maintenance | Shift Handover                            | Outbound         | Daily         |
| Equipment Maintenance Status                        | Reliability Centered Maintenance | Mobile Worker                             | Outbound         | Daily         |
| Equipment Maintenance Status                        | Reliability Centered Maintenance | Inspection Management                     | Outbound         | Daily         |
| Maintenance Work Order                              | Reliability Centered Maintenance | Permit to Work                            | Outbound         | Daily         |
| Equipment Maintenance History                       | Reliability Centered Maintenance | ERP                                       | Outbound         | Daily         |
| Equipment Maintenance History                       | Reliability Centered Maintenance | HSSE Monitor & Measure                    | Outbound         | Daily         |
| Equipment Maintenance History                       | Reliability Centered Maintenance | Asset Performance Management              | Outbound         | Daily         |
| Sparepart                                           | ERP                              | Reliability Centered Maintenance          | Inbound          | Daily         |
| Bill of Material                                    | ERP                              | Reliability Centered Maintenance          | Inbound          | Daily         |
| Functional Location / Equipment Hierarchy           | Asset Management                 | Reliability Centered Maintenance          | Inbound          | Daily         |
| Equipment Health Alarm                              | Plant Data Management            | Reliability Centered Maintenance          | Inbound          | Near Realtime |
| Maintenance Cost                                    | Reliability Centered Maintenance | ERP                                       | Outbound         | Daily         |
| Equipment Failures record                           | Asset Performance Management     | Reliability Centered Maintenance          | Inbound          | Daily         |
| Work Order Status and Completion Updates            | Mobile Worker                    | Reliability Centered Maintenance          | Inbound          | Daily         |
| Work Order Status and Completion Updates            | Inspection Management            | Reliability Centered Maintenance          | Inbound          | Daily         |
| Work Order Status and Completion Updates            | Shift Handover                   | Reliability Centered Maintenance          | Inbound          | Daily         |
| Equipment Maintenance Status                        | Reliability Centered Maintenance | Integrated Activity Planning & Scheduling | Outbound         | Daily         |
| Maintenance Work Order Priority                     | Reliability Centered Maintenance | Integrated Activity Planning & Scheduling | Outbound         | Daily         |
| Maintenance Plan                                    | Reliability Centered Maintenance | Integrated Activity Planning & Scheduling | Outbound         | Daily         |
| Sparepart Availability                              | ERP                              | Reliability Centered Maintenance          | Inbound          | Daily         |
| Work Order Request                                  | Corrosion & Monitoring           | Reliability Centered Maintenance          | Inbound          | Daily         |
| Work Order Request                                  | Event Management                 | Reliability Centered Maintenance          | Inbound          | Daily         |
| Root Cause Analysis                                 | Asset Performance Management     | Reliability Centered Maintenance          | Inbound          | Daily         |
| Bad Actor                                           | Asset Performance Management     | Reliability Centered Maintenance          | Inbound          | Daily         |
| Failure Pattern & Recommendation                    | Asset Performance Management     | Reliability Centered Maintenance          | Inbound          | Daily         |
| Corrosion Alarm                                     | Corrosion & Monitoring           | Reliability Centered Maintenance          | Inbound          | Daily         |

