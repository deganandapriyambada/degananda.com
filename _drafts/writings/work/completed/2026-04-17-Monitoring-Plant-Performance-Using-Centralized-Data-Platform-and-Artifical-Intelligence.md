# What is Plant Performance Management

Plant performance management focused on monitoring production related metrics such as :

1. Planned production target vs actual production
2. Production losses

Those two metrics will be tracked and monitored in day to day basis. Daily production report is generated and distributed across all team in order to perform PDCA (plan-do-check-action). If one or more of the production metrics is lacking, team will use the production performance report to find the underlying root causes.

Once the root cause is found, a sets of action item and improvement will be planned and usually is executed through MOC (management of change) workflow / procedures.

All those capability are available within plant performance management system (PPMS).

# Typical Process on the Plant Performance Monitoring System

below are the list of business processes within plant performance monitoring system which mainly focus on tracking and reporting of productions.

## 1.Capture daily production data

| Information              | Source System                | Target System                             | Inbound/Outbound | Frequency     |
| ------------------------ | ---------------------------- | ----------------------------------------- | ---------------- | ------------- |
| Actual Production Volume | Plant Data Management        | Plant Performance Management              | Inbound          | Near Realtime |
| Process Operational Data | Plant Data Management        | Plant Performance Management              | Inbound          | Near Realtime |

## 2.Reconcile production and inventory data

| Information           | Source System                | Target System                         | Inbound/Outbound | Frequency |
| --------------------- | ---------------------------- | ------------------------------------- | ---------------- | --------- |
| Mass Balance Sheet    | Plant Performance Management | Hydrocarbon Accounting (Mass Balance) | Outbound         | Hourly    |
| Updated Shift Logbook | Plant Performance Management | Shift Handover                        | Outbound         | Hourly    |

## 3.Monitor equipment and overall plant performance 

| Information      | Source System         | Target System                | Inbound/Outbound | Frequency     |
| ---------------- | --------------------- | ---------------------------- | ---------------- | ------------- |
| Production Alarm | Plant Data Management | Plant Performance Management | Outbound         | Near Realtime |
| Production Event | Plant Data Management | Plant Performance Management | Outbound         | Near Realtime |

## 4.Detect performance deviation

| Information                 | Source System                | Target System                             | Inbound/Outbound | Frequency |
| --------------------------- | ---------------------------- | ----------------------------------------- | ---------------- | --------- |
| Production Deviation Report | Plant Performance Management | Integrated Activity Planning & Scheduling | Outbound         | Report    |

## 5.Capture production performance checklist

| Information                                   | Source System                | Target System                             | Inbound/Outbound | Frequency |
| --------------------------------------------- | ---------------------------- | ----------------------------------------- | ---------------- | --------- |
| Target Production vs Actual Production Report | Plant Performance Management | Integrated Activity Planning & Scheduling | Outbound         | Report    |

## 6.Analyze performance deviation

| Information                   | Source System                    | Target System                    | Inbound/Outbound | Frequency |
| ----------------------------- | -------------------------------- | -------------------------------- | ---------------- | --------- |
| Maintenance Work Order        | Plant Performance Management     | Reliability Centered Maintenance | Outbound         | Hourly    |
| Inspection Work Order         | Plant Performance Management     | Inspection Management            | Outbound         | Hourly    |
| Equipment Maintenance History | Reliability Centered Maintenance | Plant Performance Management     | Inbound          | Daily     |
| Asset Integrity Record        | Corrosion and Erosion Monitoring | Plant Performance Management     | Inbound          | Daily     |
| Energy Consumption Report     | Energy Management                | Plant Performance Management     | Inbound          | Daily     |
| Inspection Findings           | Inspection Management            | Plant Performance Management     | Inbound          | Daily     |

## 7.Share daily production performance report

| Information             | Source System                | Target System                             | Inbound/Outbound | Frequency |
| ----------------------- | ---------------------------- | ----------------------------------------- | ---------------- | --------- |
| Daily Production Report | Plant Performance Management | Regulatory System                         | Outbound         | Daily     |
| Daily Production Report | Plant Performance Management | Energy Management                         | Outbound         | Daily     |
| Daily Production Report | Plant Performance Management | Integrated Activity Planning & Scheduling | Outbound         | Daily     |

## 8.Review daily production performance report

| Information                | Source System                  | Target System                             | Inbound/Outbound | Frequency |
| -------------------------- | ------------------------------ | ----------------------------------------- | ---------------- | --------- |
| Tank Inventory Report      | Terminal Operations Management | Plant Performance Management              | Inbound          | Hourly    |
| Custody Transfer Report    | Terminal Operations Management | Plant Performance Management              | Inbound          | On Demand |
| Root Cause Analysis Report | Plant Performance Management   | Integrated Activity Planning & Scheduling | Outbound         | On Demand |

## 9.Track action item to to improve production performance or detected production issues

| Information                          | Source System                | Target System                | Inbound/Outbound | Frequency     |
| ------------------------------------ | ---------------------------- | ---------------------------- | ---------------- | ------------- |
| Trip (sudden system shutdown) Report | Plant Data Management        | Plant Performance Management | Inbound          | Near Realtime |
| Production KPI Metrics               | Plant Performance Management | Data Management              | Outbound         | Daily         |

## 10.Handover production issues

| Information                | Source System                | Target System                | Inbound/Outbound | Frequency     |
| -------------------------- | ---------------------------- | ---------------------------- | ---------------- | ------------- |
| Work Permit                | Permit to Work               | Plant Performance Management | Inbound          | On Demand     |
| Production Incident Report | Plant Performance Management | Event Management             | Outbound         | Near Realtime |

## 11.Operations Performance Monitoring

| Information                              | Source System                                | Target System                     | Inbound/Outbound | Frequency     |
| ---------------------------------------- | -------------------------------------------- | --------------------------------- | ---------------- | ------------- |
| Operations Alarm                         | Plant Data Management                        | Operations Performance Management | Inbound          | Near Realtime |
| Operations Event                         | Plant Data Management                        | Operations Performance Management | Inbound          | Near Realtime |
| Trip (sudden system shutdown) Report     | Plant Data Management                        | Operations Performance Management | Inbound          | Near Realtime |
| Shit Logbook                             | Shift Handover                               | Operations Performance Management | Inbound          | Daily         |
| Tank Inventory Report                    | Terminal Operations Management               | Operations Performance Management | Inbound          | Hourly        |
| Laboratory Test Report                   | LIMS                                         | Operations Performance Management | Inbound          | Hourly        |
| Flare Volume Report                      | Plant Data Management                        | Operations Performance Management | Inbound          | Near Realtime |
| Equipment Condition Report               | Reliability Centered Maintenance             | Operations Performance Management | Inbound          | Daily         |
| Equipment Maintenance History            | Reliability Centered Maintenance             | Operations Performance Management | Inbound          | Daily         |
| Root Cause Analysis Report               | Asset Performance Management                 | Operations Performance Management | Inbound          | Daily         |
| Maintenance Plan                         | Reliability Centered Maintenance             | Operations Performance Management | Inbound          | Daily         |
| Maintenance Schedule                     | Reliability Centered Maintenance             | Operations Performance Management | Inbound          | Daily         |
| Work Order Request                       | Operations Performance Management            | Reliability Centered Maintenance  | Outbound         | Near realtime |
| Incident Report                          | Operations Performance Management            | Event Management                  | Outbound         | Near realtime |
| Updated Shift Logbook                    | Operations Performance Management            | Shift Management                  | Outbound         | Hourly        |
| Equipment Downtime Report                | Asset Performance Management                 | Operations Performance Management | Inbound          | Daily         |
| Custody Terminal Report                  | Terminal Operations Management               | Operations Performance Management | Inbound          | Daily         |
| IOW Action                               | Corrosion and Erosion Monitoring             | Operations Performance Management | Outbound         | On Demand     |
| Thickness Measurement                    | Corrosion and Erosion Monitoring             | Operations performance Management | Outbound         | On Demand     |
| Corrosion Mitigation Effectieness Report | Corrosion and Erosion Monitoring             | Operations Performance Management | Outbound         | Daily         |
| Corrosion  Anomalies Report              | Corrosion and Erosion Monitoring             | Operations Performance Management | Outbound         | Daily         |
| Asset Integrity Record                   | Corrosion and Erosion Monitoring  Operations | Performance Management            | Outbound         | Daily         |
| Energy KPI Metrics                       | Energy Management                            | Operations Performance Management | Outbound         | Near Realtime |
| Energy optimization recommendation       | Energy Management                            | Operations Performance Management | Outbound         | Daily         |
| Energy vs Production Deviation Report    | Energy Management                            | Operations Performance Management | Outbound         | Daily         |
| Loading Balancing Recommendation         | Energy Management                            | Operations Performance Management | Outbound         | Hourly        |
| Personnel movement log                   | Integrated Logistics                         | Operations Performance Management | Outbound         | Daily         |
| Logistics Performance Report             | Integrated Logistics                         | Operations Performance Management | Outbound         | Daily         |
