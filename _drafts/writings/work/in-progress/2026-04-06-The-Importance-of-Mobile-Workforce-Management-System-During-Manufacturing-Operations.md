# The Definition of Mobile Workforce Management in Manufacturing

Mobile workforce management or some people often called it as mobile worker is a system to manage the day to day task of personnel. Most commonly used by on field personnel who work on the shopfloor. They are the production site supervisor or operator.

There are two main system of records (SOR) managed by mobile workforce management

1. Field based activities assignment (planning and scheduling are outside of mobile workforce management system domain)
2. Post field based activities execution record

Almost any of field activities must be recorded including survellience, inspection, maintenance and operations. 

## Purposes of mobile workforce management

Data is the new oil. Those are the new topics in the era of AI. Mobile workforce management is not only used as control and management tools, but it plays important part to collect operational data from the shopfloor which can't be captured by the SCADA/DCS.

These data can be leveraged to generate business insight. For example: workforce scheduling optiomization, employee performance report and AI asissted root cause analysis for operational problem. 

# The Digital Thread of Mobile Workforce Management

Below are the business process of mobile workforce management 

## 1.Field surveillence and Condition Monitoring

| Transaction/Master | Information                                        | external integration? | Source System             | Target System | Inbound/Outbound | Frequency |      |
| ------------------ | -------------------------------------------------- | --------------------- | ------------------------- | ------------- | ---------------- | --------- | ---- |
| Transaction        | Shift Logbook                                      | Yes                   | Shift Handover            | Mobile Worker | Inbound          |           |      |
| Transaction        | Maintenance Work Order (Basic of care, Inspection) | Yes                   | Reliability & Maintenance | Mobile Worker | Inbound          |           |      |

## 2.Review & Respond to Alarm

| Transaction/Master | Information    | external integration? | Source System         | Target System | Inbound/Outbound | Frequency         |      |
| ------------------ | -------------- | --------------------- | --------------------- | ------------- | ---------------- | ----------------- | ---- |
| Transaction        | Shift Logbook  | Yes                   | Shift Handover        | Mobile Worker | Inbound          | Automated - Daily |      |
| Transaction        | Alarm Log      | Yes                   | Plant Data Management | Mobile Worker | Inbound          | Automated - Daily |      |
| Transaction        | Incident       | Yes                   | Event Management      | Mobile Worker | Inbound          | Automated - Daily |      |
| Transaction        | Nearmiss Event | Yes                   | Event Management      | Mobile Worker | Inbound          | Automated - Daily |      |

## 3.Execute Action in-response to the findings

| Transaction/Master | Information                        | external integration? | Source System                          | Target System | Inbound/Outbound | Frequency          |      |
| ------------------ | ---------------------------------- | --------------------- | -------------------------------------- | ------------- | ---------------- | ------------------ | ---- |
| Transaction        | Shift Logbook                      | Yes                   | Shift Handover                         | Mobile Worker | Inbound          | Automated - Daily  |      |
| Transaction        | Standard Operating Procedure (SOP) | Yes                   | Engineering Document Management System | Mobile Worker | Inbound          | Manual - On Demand |      |

## 4.Action exection coordination with other teams and control room

| Transaction/Master | Information      | external integration? | Source System    | Target System | Inbound/Outbound | Frequency         |      |
| ------------------ | ---------------- | --------------------- | ---------------- | ------------- | ---------------- | ----------------- | ---- |
| Transaction        | Shift Logbook    | Yes                   | Shift Handover   | Mobile Worker | Inbound          | Automated - Daily |      |
| Transaction        | Work Instruction | Yes                   | Work Instruction | Mobile Worker | Inbound          | Manual - One time |      |

## 5.Validate permit to work & isolation

| Transaction/Master | Information                          | external integration? | Source System                   | Target System | Inbound/Outbound | Frequency          |      |
| ------------------ | ------------------------------------ | --------------------- | ------------------------------- | ------------- | ---------------- | ------------------ | ---- |
| Transaction        | Shift Logbook                        | Yes                   | Shift Handover                  | Mobile Worker | Inbound          | Automated - Daily  |      |
| Transaction        | Isolation Certificate                | Yes                   | Engineering Document Management | Mobile Worker | Inbound          | Automated - Daily  |      |
| Transaction        | Job Safety Analysis (JSA)            | Yes                   | Engineering Document Management | Mobile Worker | Inbound          | Manual - On Demand |      |
| Transaction        | Certifications & Workforce Readiness | Yes                   | Competency Management           | Mobile Worker | Inbound          | Manual - One Time  |      |

## 6.Assist maintenance and operation execution

| Transaction/Master | Information                                        | external integration? | Source System                   | Target System | Inbound/Outbound | Frequency          |      |
| ------------------ | -------------------------------------------------- | --------------------- | ------------------------------- | ------------- | ---------------- | ------------------ | ---- |
| Transaction        | Maintenance Work Order (Basic of care, Inspection) | Yes                   | Reliability  & Maintenance      | Mobile Worker | Inbound          | Automated - Daily  |      |
| Transaction        | Permit Approval                                    | Yes                   | Permit to Work                  | Mobile Worker | Inbound          | Automated - Daily  |      |
| Transaction        | Isolation Certificate                              | Yes                   | Engineering Document Management | Mobile Worker | Inbound          | Manual - On Demand |      |

7.Assist on inspection program

| Transaction/Master | Information                 | external integration? | Source System                   | Target System | Inbound/Outbound | Frequency          |      |
| ------------------ | --------------------------- | --------------------- | ------------------------------- | ------------- | ---------------- | ------------------ | ---- |
| Transaction        | Previous Inspection Reports | Yes                   | Inspection Management           | Mobile Worker | Inbound          | Automated - Daily  |      |
| Transaction        | Shift Logbook               | Yes                   | Shift Handover                  | Mobile Worker | Inbound          | Automated - Daily  |      |
| Transaction        | Isolation Certificate       | Yes                   | Engineering Document Management | Mobile Worker | Inbound          | Manual - On Demand |      |

## 8.Assist on Integrity Inspection Program

| Transaction/Master | Information                | external integration? | Source System         | Target System | Inbound/Outbound | Frequency         |      |
| ------------------ | -------------------------- | --------------------- | --------------------- | ------------- | ---------------- | ----------------- | ---- |
| Transaction        | RBI Inspection Work Order  | Yes                   | Inspection Management | Mobile Worker | Inbound          | Automated - Daily |      |
| Transaction        | Previous Inspection Record | Yes                   | Inspection Management | Mobile Worker | Inbound          | Automated - Daily |      |

## 9.HSSE surveillience

| Transaction/Master | Information                      | external integration? | Source System          | Target System | Inbound/Outbound | Frequency         |      |
| ------------------ | -------------------------------- | --------------------- | ---------------------- | ------------- | ---------------- | ----------------- | ---- |
| Transaction        | Environmental Monitoring Records | Yes                   | HSSE Monitor & Measure | Mobile Worker | Inbound          | Automated - Daily |      |
| Transaction        | Shift Logbook                    | Yes                   | Shift Handover         | Mobile Worker | Inbound          | Automated - Daily |      |

## 10.Record and handover field surveillence status

| Transaction/Master | Information                | external integration? | Source System         | Target System                                  | Inbound/Outbound | Frequency         |      |
| ------------------ | -------------------------- | --------------------- | --------------------- | ---------------------------------------------- | ---------------- | ----------------- | ---- |
| Transaction        | Shift Logbook              | Yes                   | Shift Handover        | Mobile Worker                                  | Inbound          | Automated - Daily |      |
| Transaction        | Previous Inspection Report | Yes                   | Inspection Management | Mobile Worker                                  | Inbound          | Automated - Daily |      |
| Transaction        | Updated work order details | Yes                   | Inspection Management | Mobile Worker                                  | Inbound          | Automated - Daily |      |
| Transaction        | Field Obersevation         | Yes                   | Mobile Worker         | Shift Handover                                 | Outbound         | Automated - Daily |      |
| Transaction        | Field Observation          | Yes                   | Mobile Worker         | Production management & Reservoir Optimization | Outbound         | Automated - Daily |      |
| Transaction        | Field Observation          | Yes                   | Mobile Worker         | Environment Management                         | Outbound         | Automated - Daily |      |
| Transaction        | Field Observation          | Yes                   | Mobile Worker         | HSSE Monitor & Measure                         | Outbound         | Automated - Daily |      |

## 11.Assist turnaround & shutdown activity

| Transaction/Master | Information                                       | external integration? | Source System                   | Target System | Inbound/Outbound | Frequency          |      |
| ------------------ | ------------------------------------------------- | --------------------- | ------------------------------- | ------------- | ---------------- | ------------------ | ---- |
| Transaction        | Shutdown Checklist                                | Yes                   | Reliability & Maintenance       | Mobile Worker | Inbound          | Automated - Daily  |      |
| Transaction        | Isolation Certificate                             | Yes                   | Engineering Dacument Management | Mobile Worker | Inbound          | Manual - On Demand |      |
| Transaction        | Maintenance Work Order (Overhaul and Turn Around) | Yes                   | Reliability & Maintenance       | Mobile Worker | Inbound          | Automated - Daily  |      |