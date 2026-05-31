---
layout: posts
author: Degananda Ferdian
categories: functional-workflow
series-code: n/a
excerpt: Shift management system mainly handle personnel assignment to their shift along side with currating any required operational information from past shift current assignment to ensure all the knowledge has been passed to the upcoming shift.
tags: shift-management
background: Managing shift on medium to large scale manufacturing facilities is insane difficult. Especially if the operators number is grow up to hunderes. Inproper shift planning and scheduling might affect both operations and productions.
objective: To understand how shift is managed usign shift management digital solution
deliverables: Article & Illustration
typora-root-url: ./../../../
---


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

# Shift Handover Information Exchange Matrix

## 1. Operational Status Logging

Personnel must log operational information from control systems, field personnel, and shopfloor activities during their shift. Those information is neccesary for the upcoming shift incase there is unfinished work or any specific upcoming operations action.

| Information | Inbound/Outbound |
|------------|-----------|
| Operation Alarm Log | Inbound |
| Operation Event Log | Inbound |
| CMMS Work Orders | Inbound |
| Equipment Maintenance Status | Inbound |
| Operational Incident | Inbound |
| Operational Near Miss | Inbound |
| Permit Register | Inbound |
| Vessel Port Call Operations | Inbound |
| Field Observation | Inbound |


## 2. Production Information Logging

Apart from the operations log, personnel must also Log any production-related information from the field and shopfloor.

| Information | Inbound/Outbound |
|------------|-----------|
| Production Alarm Log | Inbound |
| Production Event Log | Inbound |
| Production Report | Inbound |
| Production Plan & Schedule | Inbound |
| Operator Notes | Inbound |


## 3. Review Alarm System

Depending on the organization business process, typically alarm review process can also be assigned to each shift. Any operational and production alarms must be acknowledged and (if possbile) identify potential incidents or near misses so that the upcoming shift or maintenance team can take further action.

| Information | Inbound/Outbound |
|------------|-----------|
| Operation Alarm Log | Inbound |
| Production Alarm Log | Inbound |
| Trip Report | Inbound |


## 4. Review Safety Administrative Documents

Shift must not be started or handed over before the isolation certificates like LOTO (lockout tagout) and work permits has been verified + approved otherwise it will poses HSSE risk.

| Information | Inbound/Outbound |
|------------|-----------|
| Isolation Certificates | Inbound |
| Permit | Inbound |


## 5. Determine Priority Actions for Next Shift

Both productions and operations logbook playing vital role to minimize human error. Any near misses, defect, issues must be written on the logbook and action item need to be determined if those issue cant be resolved on current shift. So that the up coming shift can continue the pending task. 

| Information | Inbound/Outbound |
|------------|-----------|
| Operations Logbook | Outbound |
| Productions Logbook | Outbound |

## 6. Share Current Shift Information with Next Shift 

Shift logbook is a living document. Any issues which occured during production and operations must be visible to all personnel from current and upcoming shift. Every personnel must write the logbook diligently. Shift logbook adherences is crucial to minimize human eror and ensure continue improvement (Plan-do-check-action or PDCA)

| Information | Inbound/Outbound |
|------------|-----------|
| Operations Logbook | Outbound |
| Productions Logbook | Outbound |

note: logbook should also be shared with maintenance and HSSE team as well.