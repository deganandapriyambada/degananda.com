---
layout: posts
author: Degananda Ferdian
categories: functional-workflow
series-code: n/a
excerpt: Mobile worforce management is focus on ensuring operators to know what to do on their shift and make sure all the required document such as operating manual or safety checklist are ready. The assignment will be assigned based on production schedule. Mobile worforce software often built on top of explosive proof mobile devices handheld that can be carried across all facilities 
tags: mobile-workforce-management
background: On a busy manufacturing facitilites where productions is non-stop for 24/7 and executed by different shift, any event, incident or near miss must be diligently logged into system to ensure the current shift and next shift personnel understand the situation and can make correct decision.
objective: To Understand the typical process on mobile workforce management
deliverables: Article & Illustration
typora-root-url: ./../../../../
---

# The Definition of Mobile Workforce Management in Manufacturing

Mobile workforce management or some people often called it as mobile worker is a system to manage the day to day task of personnel.  Commonly used by on field personnel who work on the shopfloor. They are the production site supervisor or operator. Imagine on a plant with more than 1K personnel. Daily briefing might not be sufficient to explain the nitty gritty of the task. All the task and required readiness document such as safety, operating manual, certifications requirement will be prepared by system to ensure no human error during task assignment.

There are two main system of records (SOR) managed by mobile workforce management

1. Field based activities assignment (planning and scheduling are outside of mobile workforce management system domain)
2. Post field based activities execution record

Almost any of field activities must be recorded including survellience, inspection, maintenance and operations. 

## Purposes of mobile workforce management

Data is the new oil. Those are the new topics in the era of AI. Mobile workforce management is not only used as control and management tools, but it plays important part to collect operational data from the shopfloor which can't be captured by the SCADA/DCS.

These data can be leveraged to generate business insight. For example: workforce scheduling optiomization, employee performance report and AI asissted root cause analysis for operational problem. 

# The Digital Thread of Mobile Workforce Management

Below are the business process of mobile workforce management 

## 1. Task Assignment

At the start of their shift, Operator will receive assigned task for that day as well as other supporting information from previous shift to ensure the information chain is fully relied to next shift. 

| Transaction/Master | Information                                        | Inbound/Outbound | 
| ------------------ | -------------------------------------------------- | ---------------- |
| Transaction        | Shift Logbook                                      | Inbound          | 
| Transaction        | Assigned Task                                      | Inbound          | 
| Transaction        | Operation Manual                                   | Inbound          | 

note: generally, the task assignment on mobile worker is per personnel, while execution monitoring on shift management is more on shift level.

## 2.Validate permit to work & isolation

Before starting any task, operator must have work permit in places

| Transaction/Master | Information                          | Inbound/Outbound |
| ------------------ | ------------------------------------ | ---------------- |
| Transaction        | Isolation Certificate                | Inbound          |
| Transaction        | Job Safety Analysis (JSA)            | Inbound          |
| Transaction        | LOTO (lock out tag out| Inbound          |
| Transaction        | Certifications Status                           | Inbound          |
| Transaction        | Barrier Status                              | Inbound          |

If the pre-requisite requirement of starting the task not met (vary depending on the organization), operator should not be able to execute the task. Ideally, mobile workforce management should handle the readiness validation.

## 3.Execute Action in-response to the Asset related Activities

Operator or maintenance staff must log all inspection and maintenance findings including (but not limited): breakdown and measurement point.

| Transaction/Master | Information                        | Inbound/Outbound |
| ------------------ | ---------------------------------- | ---------------- |
| Transaction        | Operation Manual: Incident Response Procedure  | Inbound   | 

## 4.Execute Action in-response to the findings

Operator must respond to any field event based on the operation manual.

| Transaction/Master | Information                        | Inbound/Outbound |
| ------------------ | ---------------------------------- | ---------------- |
| Transaction        | Operation Manual: Incident Response Procedure  | Inbound   | 


## 5.Review & Respond to Any Field Event

Any required field readings which required by the assigned task as well as any incident, near misses, anomaly or potential threat to the HSSE must be reported must be logged on the mobile workforce management

| Transaction/Master | Information    | Inbound/Outbound |
| ------------------ | -------------- | ---------------- |
| Transaction        | Field Readings | Inbound          |
| Transaction        | Incident       | Inbound          |
| Transaction        | Nearmiss Event | Inbound          |

Once the response action has been done, operator must define the event potential root cause and bad actor analysis (if possible) as well as the event details. Those information are important to build operational knowledge management system.

| Transaction/Master | Information    | Inbound/Outbound |
| ------------------ | -------------- | ---------------- |
| Transaction        | Operator Feedback  | Outbound          |
| Transaction | Event Details | Outbound |
| Transaction | Field Readings | Outbound |

