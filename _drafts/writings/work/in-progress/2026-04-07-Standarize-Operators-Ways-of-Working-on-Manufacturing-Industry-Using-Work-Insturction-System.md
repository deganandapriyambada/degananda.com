# Why Standarized Way of Working Matter in Shopfloor?

Unlike on the creative industry where thinking out of the box (OOTB) is often encouraged to discovered fresh and intriguing idea, all operators and supervisor in manufacturing industry must follow strict standard operation procedure. 

Even if just one of the personnel is decided to take an unstandardised procedure to improve the production rate, it could lead into catastrophic event as it poses HSSE (health,safety, security and environmental) risk.

## Work Insturction System as Central Repostories for Any Procedure

Any operations must have standard operating procedure to eliminate HSSE risk as it govern how the personnel operate the machine or doing any field activities in the shopfloor. On smaller scale factory, the SOP can just be printed, laminated and hang it on the wall so the personnel on that working area can see the SOP. 

However, on bigger factory with dozens of machine, multiples production site and thousands of personnel, a printed SOP might not be reach all of the personnel on various working area. Moreoever, there is no guarantee that the personnel will read the printed out SOP. 

Unlike hardcopy SOP, digital work instructions can be integrated to other systme to force the personnel read and acknowledge the procedure. For example, it can be tied to the CICO (clock in and clock out system), so the personnel cant clock in without reading thoroughly the procedures. Not only that, the procedure can be visualized as video instead of text to increase the operator awareness.

Work instruction system (WIS) is a system to centralize all engineering and non engineering procedures for operations and maintenance. WIS is usually integrated with mobile workforce management system. Digital work instruction will be embedded on the Work order or work task so that the personnel can see the related procedure for their assignment/task.

# Available Business Process Within Work Insutrction System

Below are the typical business process of work instruction system

## 1.Scope and Area identification

| Information          | Source System         | Target System    | Inbound/Outbound | Frequency     |
| -------------------- | --------------------- | ---------------- | ---------------- | ------------- |
| Operational Feedback | Shift Handover        | Work Instruction | Inbound          | Daily         |
| Incident             | Event Management      | Work Instruction | Inbound          | Near Realtime |
| Near Misses          | Event Management      | Work Instruction | Inbound          | Near Realtime |
| Audit Findings       | Audit Management      | Work Instruction | Inbound          | On Demand     |
| Alarm                | Plant Data Management | Work Instruction | Inbound          | On Demand     |

## 2.Gather technical requirement

| Information                                  | Source System                          | Target System    | Inbound/Outbound | Frequency |
| -------------------------------------------- | -------------------------------------- | ---------------- | ---------------- | --------- |
| OEM(Original equipment manufacturer) Manuals | Engineering Document Management System | Work Instruction | Inbound          | On Demand |
| Engineering Drawings                         | Engineering Data Management System     | Work Instruction | Inbound          | On Demand |
| Technical Data Sheet                         | Engineering Data Management System     | Work Instruction | Inbound          | On Demand |
| Safety Critical Element List                 | Engineering Data Management System     | Work Instruction | Inbound          | On Demand |
| Regulatory Requirements                      | Engineering Document Management System | Work Instruction | Inbound          | On Demand |
| P&IDS (Piping and instrumentation diagram)   | Engineering Data Management System     | Work Instruction | Inbound          | On Demand |
| Equipment Modification History               | Reliability Centered Maintenance       | Work Instruction | Inbound          | On Demand |
| Movement Instruction                         | Engineering Document Management System | Work Instruction | Inbound          | On Demand |
| Product Loading Insturction                  | Engineering Document Management System | Work Instruction | Inbound          | On Demand |
| Digital Twin                                 | Engineering Data Management System     | Work Instruction | Inbound          | On Demand |
| 3D Models                                    | Engineering Data Management System     | Work Instruction | Inbound          | On Demand |

## 3.Develop execution steps

| Information           | Source System                | Target System    | Inbound/Outbound | Frequency |
| --------------------- | ---------------------------- | ---------------- | ---------------- | --------- |
| Energy Management KPI | Energy Management            | Work Instruction | Inbound          | On Demand |
| Asset Monitoring KPI  | Asset Performance Management | Work Instruction | Inbound          | On Demand |

## 4.Risk Assessment

| Information                                    | Source System                      | Target System    | Inbound/Outbound | Frequency |
| ---------------------------------------------- | ---------------------------------- | ---------------- | ---------------- | --------- |
| JSA (job safety analysis) Document             | Engineering Data Management System | Work Instruction | Inbound          | On Demand |
| Hazops (hazard and operability study) Document | Engineering Data Management System | Work Instruction | Inbound          | On Demand |
| Hazid (hazard identification) document         | Engineering Data Management System | Work Instruction | Inbound          | On Demand |
| Environment Monitoring Result                  | Environment Management             | Work Instruction | Inbound          | Daily     |
| Emission Monitoring Result                     | Environment Management             | Work Instruction | Inbound          | Daily     |

## 5.Review & Accomodate Change Request

| Information                  | Source System                          | Target System    | Inbound/Outbound | Frequency |
| ---------------------------- | -------------------------------------- | ---------------- | ---------------- | --------- |
| Standard Operating Procedure | Engineering Document Management System | Work Instruction | Inbound          | On Demand |
| Personnel Qualifications     | Competency Management                  | Work Instruction | Inbound          | On Demand |

## 6.Changes Approval

| Information                       | Source System                          | Target System    | Inbound/Outbound | Frequency |
| --------------------------------- | -------------------------------------- | ---------------- | ---------------- | --------- |
| Standard Operating Procedure      | Engineering Document Management System | Work Instruction | Inbound          | On Demand |
| Change request details & Approval | Management of Change                   | Work Instruction | Inbound          | On Demand |
| Permit to Work                    | Permit to Work                         | Work Insturction | Inbound          | On Demand |
| LOTO                              | Permit to Work                         | Work Instruction | Inbound          | On Demand |

## 7.Work Instruction Approval

| Information                  | Source System                          | Target System    | Inbound/Outbound | Frequency |
| ---------------------------- | -------------------------------------- | ---------------- | ---------------- | --------- |
| Standard Operating Procedure | Engineering Document Management System | Work Instruction | Inbound          | On Demand |

## 8.Upload & Publish (output)

| Information                      | Source System    | Target System                   | Inbound/Outbound | Frequency |
| -------------------------------- | ---------------- | ------------------------------- | ---------------- | --------- |
| Operation Manual                 | Work Instruction | Management of Change            | Outbound         | On Demand |
| Updated Operation Manual         | Work Instruction | Engineering Document Management | Outbound         | On Demand |
| Pre Startup Safety Procedure     | Work Instruction | Management of Change            | Outbound         | On Demand |
| PSSR (Pre-Startup Safety Review) | Work Instruction | Permit to Work                  | Outbound         | On Demand |
| JSA (Job Safety Analysis)        | Work Instruction | Permit to Work                  | Outbound         | On Demand |
| Operation Manual                 | Work Instruction | Shift Management                | Outbound         | On Demand |
| Shift Execution Insturction      | Work Instruction | Shift Management                | Outbound         | On Demand |
| Process Safety Limites           | Work Instruction | HSSE Monitor & Measure          | Outbound         | On Demand |
| Operation Manual                 | Work Instruction | Mobile Worker                   | Outbound         | On Demand |

## 9.Review & Renew work Instruction

| Information                  | Source System                          | Target System    | Inbound/Outbound | Frequency |
| ---------------------------- | -------------------------------------- | ---------------- | ---------------- | --------- |
| Standard Operating Procedure | Engineering Document Management System | Work Instruction | Inbound          | On Demand |
