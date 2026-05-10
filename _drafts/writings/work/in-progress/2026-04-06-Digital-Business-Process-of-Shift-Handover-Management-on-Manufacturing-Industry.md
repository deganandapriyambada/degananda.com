# The Definition of Shift in Manufacturing

In general terms, shift is a specific condition to move something from one place to another. In manufacturing context, shift is always refer to the **production schedule assignment**. For example, an instant noddle factory has usually has three shift. Assuming one shift last for 8 hours (24 divided by three equal to eight). Meaning, in a day, there are three production assignment group based on the schedule. 

1. First shift - started from 6 am to 12 pm
2. Second shift - started from 12 pm to 6 pm
3. Third shift - started from 6 pm to 12 am

In almost any manufacturing company, shift is required even for smart factory that has wide robotic automation adoption because human still required to at least **supervise** the production line operations (assuming all the control system is automated).

Unlike robots who can operate 24/7 non-stop, human require to take break from fatigue to take rest, recharge their energy and spend time with their family. Hence, production shifting from **one operator/supervisor to another operator/supervisor** is absolutely required. 

## Type of shift rotation in manufacturing

There are various production shifting rotation strategies and often adopted by manufacturing company with high production throughtput that require 24/7 operations

1. Rotating shift - Operator shift are switched between the night shift and day shift to maintain their sleeping schedule. for example, on first one week the operator is on day shift and the following one week will be moved to night shift and will be rotated with such pattern.
2. Pitman Shift - two days on -> two days off -> three days on and so on
3. Four to four shift - four days on -> four days off -> four days on and so on

Note that the duration of each shift will be vary from one manufacturing company to another. Based on ILO (international labor organization 1919 convention), minimum working hours per shift is eight hour with maximum fo 12 hours. a Minimum of nine team are required to operate with three production shift.

- **Available production shift** is the number of available production schedule group per day.
- **Shift rotation** is the mechanism of rolling one operator from one shift group to another shift group to ensure minimum distruption to their natural sleeping schedule.
- **Shift handover** is an activity to handover any mandatory information and instuctions from personnel of the current shift to next shift.

## Problem with shift mechanism in manufacturing

Robots is programmed to operate with specific command and will always execute the command in same sequences and precision, while a human has unknown factor called as human error which can be happen due to some factors. Major factor of human error including (but no limited to):

1. Miscommunication / Misinformation
2. Fatigue
3. Skill issues
4. Psychological factor
5. Environmental factor
6. Loss of focus

Those major factors can contribute to the human error. When human error is occured during production, it may cause catastrophic effects ranging from health, security safety and environmental issues (HSSE). At worst, the factory might be exploded and injure the whole personnel.

Shifting from one operator to another operator can reduce some of those factor likely hood such as loss of focus and pshycological factor because the fatigued operator will be replced with fresh operator (assuming the new operator is in good health and took a good rest).

However, the shift handover (process of replacing exiting operator with new operator ) itself is possesing risk to **increase the likelyhood of miscommunication and misinformation**. For example, first shift is ended, the operators from first-shift forgot to document equipment/machine condition. Then, the second shift is started without knowing that some of the machine need to be maintained for 30 mins before it can be reused. Now imagine what willl happen on the second shift? most likely an accident will happened.

On bigger scale, there are hundreds of shift to managed from different plant and production unit. Each of shift need to be planned and managed properly.

Therefore, a proper shift handover systems must be implemented to ensure thorough handover is done without missing any single HSSE factor including (but not limited) following major **informations**:

1. Any identified on-going equipment issues / near misses
2. LOTO (lockout and tagout) procedure - critical safety procedure to ensure dangerous equipment or machine is properly turned off and the **removal of the energy sources flow**. The powersources will be **locked and tagged** with personnel name who lock it. The **key** must be passed to the next personnel from next shift. It will ensure only authorized personnel can use and start the machine with correct critical procedure.
3. Work permits - document which authorize the personnel to start working on the shift.
4. Equipment status - alarm status, any implemented bypass/workarround which applied during the current shift for keeping the production alive, system control, etc.
5. Production metrics - number of producred goods, target production, any production KPI (key performance indicator) metrics
6. In progress jobs/activities
7. Identified action item for next shift
8. Inventory/material level (number of material)
9. Quality issues
10. Staffing information during the current and next shift
11. Maintenance status / Equipment availability status

# Digitalized Shift Handover System Digital Thread

Shift handover must be able to **transfer all information, risk and responsibilities** from current shift to the next shift and of these parameter must be written on a system instead of verbally communicated between one shift to another another shift in order to prevent any miscommunications which can ended up in any HSSE incident/accident.

rule of thumb: a shift handover system is a digital documentation of any crucial information from current shift which will be handed over to the next shift

## 1.Operational Status Logging

Log any **operations** related information from control system and field or shopfloor

SOR : Shift logbook

| Transaction/Master | Information                                                  | external integration?         | Source System                  | Target System  | Inbound/Outbound | Frequency         |
| ------------------ | ------------------------------------------------------------ | ----------------------------- | ------------------------------ | -------------- | ---------------- | ----------------- |
| Transaction        | Shift Logbook                                                | Internal Information Exchange |                                |                |                  |                   |
| Transaction        | Operation Alarm Log                                          | yes                           | Plant Data Management          | Shift Handover | Inbound          | Automated - Daily |
| Transaction        | Operation Event log                                          | yes                           | Plant Data Management          | Shift Handover | Inbound          | Automated - Daily |
| Transaction        | CMMS Work Order (preventive maintenance, corrective maintenance, inspection, basic of care, overhaul & turn around) | yes                           | Reliability & Maintenance      | Shift Handover | Inbound          | Automated - Daily |
| Transaction        | Equipment Maintenance Status                                 | yes                           | Relaibility & Maintenance      | Shift Handover | Inbound          | Automated - Daily |
| Transaction        | Operational Incident                                         | yes                           | Event Management               | Shift Handover | Inbound          | Automated - Daily |
| Transaction        | Operational Nearmiss                                         | yes                           | Event Management               | Shift Handover | Inbound          | Automated - Daily |
| Transaction        | Permit Register                                              | yes                           | Permit to Work                 | Shift Handover | Inbound          | Automated - Daily |
| Transaction        | Vessel Port Call Operations (Arrival, deperature, cargo handling, berthing, bunkering) | Yes                           | Terminal Operations Management | Shift Handover | Inbound          | Automated - Daily |
| Transaction        | Field Observation                                            | Yes                           | Mobile Worker                  | Shift Handover | Inbound          | Automated - Daily |

## 2.Production information logging

Log any production related information from the field or shopfloor

| Transaction/Master | Information                | external integration?         | Source System                | Target System  | Inbound/Outbound | Frequency         |
| ------------------ | -------------------------- | ----------------------------- | ---------------------------- | -------------- | ---------------- | ----------------- |
| Transaction        | Shift Logbook              | Internal Information Exchange |                              |                |                  |                   |
| Transaction        | Production Alarm Log       | yes                           | Plant Performance Management | Shift Handover | Inbound          | Automated - Daily |
| Transaction        | Production Event log       | yes                           | Plant Performance Management | Shift Handover | Inbound          | Automated - Daily |
| Transaction        | Production Report          | yes                           | Plant Performance Management | Shift Handover | Inbound          | Automated - Daily |
| Transaction        | Production Plan & Schedule | yes                           | Production Planning          | Shift Handover | Inbound          | Automated - Daily |
| Transaction        | Operator Notes             | yes                           | Mobile Worker                | Shidt Handover | Inbound          | Automated - Daily |


## 3.Review alarm system

Check and review alarm system used on the field, add any near misses and incident which shown by the alarm systems

| Transaction/Master | Information                          | external integration?         | Source System                | Target System  | Inbound/Outbound | Frequency         |      |
| ------------------ | ------------------------------------ | ----------------------------- | ---------------------------- | -------------- | ---------------- | ----------------- | ---- |
| Transaction        | Shift Logbook                        | Internal Information Exchange |                              |                |                  |                   |      |
| Transaction        | Operation Alarm Log                  | Yes                           | Plant Data Management        | Shift Handover | Inbound          | Automated - Daily |      |
| Transaction        | Production Alarm Log                 | Yes                           | Plant Performance Management | Shift Handover | Inbound          | Automated - Daily |      |
| Transaction        | Trip (sudden system shutdown) Report | Yes                           | Plant Data Management        | Shift Handover | Inbound          | Automated - Daily |      |

## 4.Review neccesary administrative document

Log any required administrative process 

| Transaction/Master | Information                                                  | external integration?         | Source System                           | Target System  | Inbound/Outbound | Frequency          |
| ------------------ | ------------------------------------------------------------ | ----------------------------- | --------------------------------------- | -------------- | ---------------- | ------------------ |
| Transaction        | Shift Logbook                                                | Internal Information Exchange |                                         |                |                  |                    |
| Transaction        | CMMS Work Orders (preventive maintenance, corrective maintenance, inspection, basic of care, overhaul & turn around) | Yes                           | Reliability & Maintenance               | Shift Handover | Inbound          | Automated - Daily  |
| Transaction        | Isolation certificates                                       | Yes                           | Engineering  Document Management System | Shift Handover | Inbound          | Manual - On Demand |

## 5.Determine priority actions for next shift

Shift has specific operationg period, for any action which cant be completed during the shift, it must be documented. So that the next personnel from the next shift is aware can continue the task.

| Transaction/Master | Information                                                  | external integration?         | Source System                | Target System  | Inbound/Outbound | Frequency         |
| ------------------ | ------------------------------------------------------------ | ----------------------------- | ---------------------------- | -------------- | ---------------- | ----------------- |
| Transaction        | Shift Logbook                                                | Internal Information Exchange |                              |                |                  |                   |
| Transaction        | Production Alarm log                                         | Yes                           | Plant Performance Management | Shift Handover | Inbound          | Automated - Daily |
| Transaction        | Operation Alarm log                                          | Yes                           | Plant data management        | Shift handover | Inbound          | Automated - Daily |
| Transaction        | Permit Register                                              | Yes                           | Permit to Work               | Shift Handover | Inbound          | Automated - Daily |
| Transaction        | CMMS Work Orders (preventive maintenance, corrective maintenance, inspection, basic of care, overhaul & turn around) | Yes                           | Reliabiluty & Maintenance    | Shift Handover | Inbound          | Automated - Daily |

## 6.Share current shift information for next shift

All information that has been logged (operational status, production information, alarm, administrative documennt and pending action item ) need to be available to the next shift.

| Transaction/Master | Information                   | external integration?         | Source System                | Target System  | Inbound/Outbound | Frequency         |
| ------------------ | ----------------------------- | ----------------------------- | ---------------------------- | -------------- | ---------------- | ----------------- |
| Transaction        | Shift Logbook                 | Internal Information Exchange |                              |                |                  |                   |
| Transaction        | Production  Alarm & Event log | Yes                           | Plant Performance Management | Shift Handover | Inbound          | Automated - Daily |
| Transaction        | Operation Alarm & Event Log   | Yes                           | Plant Data Management        | Shift Handover | Inbound          | Automated - Daily |
| Transaction        | Permit Register               | Yes                           | Permit to Work               | Shift Handover | Inbound          | Automated - Daily |

## 7.Share curent shift information to control room

all the logged information need to be shared as well to personnel on the control room to ensure they get updated

| Transaction/Master | Information                                                  | external integration?         | Source System                | Target System          | Inbound/Outbound | Frequency         |
| ------------------ | ------------------------------------------------------------ | ----------------------------- | ---------------------------- | ---------------------- | ---------------- | ----------------- |
| Transaction        | Shift Logbook                                                | Internal Information Exchange |                              |                        |                  |                   |
| Transaction        | Production Alarm & Event log                                 | Yes                           | Plant Performance Management | Shift Handover         | Inbound          | Automated - Daily |
| Transaction        | Operation Alarm & Event Log                                  | Yes                           | Plant Data Management        | Shift Handover         | Inbound          | Automated - Daily |
| Transaction        | Permit Register                                              | Yes                           | Permit to Work               | Shift Handover         | Inbound          | Automated - Daily |
| Transaction        | CMMS Work Orders (preventive maintenance, corrective maintenance, inspection, basic of care, overhaul & turn around) | Yes                           | Reliability & Maintenance    | Shift Handover         | Inbound          | Automated - Daily |
| Transaction        | Shift Logbook                                                | Yes                           | Shift Handover               | HSSE Monitor & Measure | Outbound         | Automated - Daily |
| Transaction        | Shift Logbook                                                | Yes                           | Shift Handover               | Integrated Logistics   | Outbound         | Automated - Daily |

## 8.Review on going activities and share it to next shift

Any pending action on curent shift must be shared and reviewed together with next shift

| Transaction/Master | Information                                                  | external integration?         | Source System             | Target System  | Inbound/Outbound | Frequency         |
| ------------------ | ------------------------------------------------------------ | ----------------------------- | ------------------------- | -------------- | ---------------- | ----------------- |
| Transaction        | Shift Logbook                                                | Internal Information Exchange |                           |                |                  |                   |
| Transaction        | Permit Register                                              | Yes                           | Permit to Work            | Shift Handover | Inbound          | Automated - Daily |
| Transaction        | CMMS Work Orders (preventive maintenance, corrective maintenance, inspection, basic of care, overhaul & turn around) | Yes                           | Reliability & Maintenance | Shift Handover | Inbound          | Automated - Daily |

## 9.Formaly handover from current shift to next shift

usually a gemba walk (current shift and incoming shift personnel inspect on the working area/firled/shopfloor together) is performed and will be closed with digital acknowledgment on the system.

| Transaction/Master | Information                                                  | external integration?         | Source System                | Target System  | Inbound/Outbound | Frequency         |
| ------------------ | ------------------------------------------------------------ | ----------------------------- | ---------------------------- | -------------- | ---------------- | ----------------- |
| Transaction        | Shift Logbook                                                | Internal Information Exchange |                              |                |                  |                   |
| Transaction        | Production Alarm & Event log                                 | Yes                           | Plant Performance Management | Shift Handover | Inbound          | Automated - Daily |
| Transaction        | Operation Alarm & Event Log                                  | Yes                           | Plant Data Management        | Shift Handover | Inbound          | Automated - Daily |
| Transaction        | Permit Register                                              | Yes                           | Permit to Work               | Shift Handover | Inbound          | Automated - Daily |
| Transaction        | CMMS Work Orders (preventive maintenance, corrective maintenance, inspection, basic of care, overhaul & turn around) | Yes                           | Reliabiluty & Maintenance    | Shift Handover | Inbound          | Automated - Daily |

## 10.Next shift continue to update the logbook

Shift handover logbook is a living document which continuously updated by the personnel ensuring all the information is passed down to the shift.

| Transaction/Master | Information   | external integration?         | Source System | Target System | Inbound/Outbound | Frequency |
| ------------------ | ------------- | ----------------------------- | ------------- | ------------- | ---------------- | --------- |
| Transaction        | Shift Logbook | Internal Information Exchange |               |               |                  |           |