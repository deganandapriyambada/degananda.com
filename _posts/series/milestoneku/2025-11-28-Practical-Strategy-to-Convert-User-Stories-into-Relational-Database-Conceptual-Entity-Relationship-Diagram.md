---
layout: posts
author: Degananda Ferdian
categories: product
series-code: TLNT001
excerpt: Conceptual ERD require high level low level business requirement which usually written in form of user stories. Entity relationship such as one to one, one to many or many to many will be defined on the conceptual ERD phase. 
tags: user-stories application-design
background: Before the database table schema can be created, application design or solution architect need to create the conceptual -> logical -> physical ERD.
objective: Step by step to create conceptual entity relationship diagram (ERD) based on given user stories
deliverables: article
title: "Practical Strategy to Convert User Stories into Relational Database Conceptual Entity Relationship Diagram (ERD)"
---

# The Role of Entity Relationship Diagram (ERD) on Software Engineering

Before the actual software coding process is started, one of key pre-requisite step is to define the database model which commonly drew in form of entity relationship diagram (ERD). Backend developer will use the ERD to code and the backend services.

&mdash; ERD is one of design bible apart from wireframe (figma) for the backend developer.

Regardless the software development life cycle (SDLC), whether it is waterfall, agile or even rapid programming, there are at least two required business related document to be defined in order to draw software ERD, such as :

1. **Business requirement** - contains all the requirement which need to be covered by the software to fullfill the user needs.
2. **User stories** - bridge between business requirement adn technology requirement as business requirement commonly written in non technical way.

# User Stories

on the previous article, milstoneku user stories has been defined as shown below

[Minimum viable user stories for milestoneku]({% post_url /series/milestoneku/2025-11-27-Mininum-Viable-Product-and-User-Stories-for-Productivity-Assistant-Platform-to-Prevent-FOMO %})

these user stories are derrived from the market research result and related human psychology research about FOMO (fear of missing out).

however, for the first cut development, only some subset of the total user stories will be part of the scope.

Following are the **stage-0** user stories for milestoneku

| # | Epic| User Stories |
|---|---|---|
| P#1 | Career Goal Management | As a user i want to create a career goal o that i can set my goal over specific period of time | 
| P#2 | Career Goal Management | As a user i want to correlate some of my career goal so that i can view the depedencies | 
| P#3 | Career Milestone Management | As a user i want to create important milestone for my career goal so that i can see the runway or path to achieve the goal | 
| P#4 | Career Milestone Management | As a user i want to get informed regarding my career milestone viability so that i am not creating a mission impossible | 
| P#5 | Milestone's Task Management | As a user i want to add new task to my milestone |
| P#6 | User Management | As a user i want to be able to login into milestoneku platform so that i can start managing my milestone | 

apart from these functional user stories for the main persona, below are additional user stories for the administrator

| # | Epic| User Stories |
|---|---|---|
| A#1 | LoV Management | As an admin to be able to manage all milestone related list of value (LoV) so that i can add new LoV without re-deploy or make changes on the code | 
| A#2 | User Management | As an admin to be able to manage all registered user including admin user so that i can control the platform authentication and authorization | 

# Converting User Stories into Database Conceptual L0 Entity Relationship Diagram

Conceptual ERD is high level (sometimes also refered as L0) of entity interaction flow used to illustrate the services to services interaction.

for example on milestoneku case, user can interact with milestone and task services as user should be able manage those entity.

There is no single silver bullet approach convert user stories into conceptual ERD without any defect (design misalignment risk or introducing potential peformance and data integrity risk) as **designing a database is prone to subjectivity**, any design approach can be makesense **as long as it has strong decision reasoning**.

Even so, these risk can be minimalized by following practical approach on the software engineering industries

## Scope

Each database type might have different design approach. This article will cover for r**elational databases** such as SQLServer, MySQL and PostgreSQL.

## Why SQL Database over NoSQL for Milestoneku

If a digital product prioritizing **CP** (consitency and partition tolerance) from the CAP Theorem principle, generally the guidance is to use SQL as it has better data integrity (naturally came ACID properties) compared to NoSQL (limited ACID)

The transaction feature came out of the box. If lets say, a transaction involving 5 different table and one of the writing query is failed, rollback can easily be done.

such case might not come handy on NoSQL. because they noSQL is a **denormalized schema** and have no concept of table, relationship and foreign key. Hence, multi rows and complex transaction ACID is not guaranteed on NoSQL databases.

&mdash; Eventual consistency/integrity will be achieved my NoSQL. not immediate consistency which offered by RDBMS.

in short, milestoneku will priotize CP over A (availability), therefore RDBMS is choosen for the stage-0.

eventually will evolve slowly into **hybrid approach** (combination of SQL and NoSQL).


## Identifying an Object from User Stories

based on oxford dictionary, by definition object is a tangible thing that can be seen or touched. Grammatically object is the receiver of an action (after verb).

both of the definition are correct.

from the defined user stories on previous section, lets extract any "object word".

| # | User Stories | Extracted Object |
|---|---|---|
| P#1 | As a user i want to create a career goal o that i can set my goal over specific period of time | user, career, goal |
| P#2 |  As a user i want to correlate some of my career goal so that i can view the depedencies |   user, career, goal |
| P#3 |  As a user i want to create important milestone for my career goal so that i can see the runway or path to achieve the goal |  user, milestone, goal, path |
| P#4 | As a user i want to get informed regarding my career milestone viability so that i am not creating a mission impossible |  user, milestone |
| P#5 |  As a user i want to add new task to my milestone |  user, task |
| P#6 | As a user i want to be able to login into milestoneku platform so that i can start managing my milestone |  user |

eliminate the duplicate object and have single object name/type.

1. user
2. career
3. goal
4. path
5. milestone
6. task

## Defining the relationship

from the known object, create a relationship between one to another based on the user story description & business requirement.

note: it also recommended to add the **relationship description** as well.

rule of thumb

1. 1 to 1: (one to ony) one object has one object relationship
2. 1 to n: (one to many) one object has one or more related object
3. n to n: (many to many) many object has relationship to many object

example in the context of class assignment for high school student on indonesia

- 1 to 1: one student can only be assgined into one class (eg: science-1)
- 1 to n: one homeroom teacher can be assigned to look for many 
- n to n: students can enroll to multiple course and one course can be attended by many student

below is the relationship for each object

![postimage80](/assets/images/2025-12/erd1.svg)
[Conceptual Entity Relationship Diagram Based on Extracted Object From User Stories](/assets/images/2025-12/erd2.jpg){: .center-image }

# Next steps

Common flow of ERD evolution.

1. Define Business Requirement
2. Define user stories
3. (in parallel) User stories description detailing
3. (in parallel) Create L0 conceptual ERD **<= we are here**
4. L1 Logical ERD
5. L2 Pysical & Normalized ERD (up to 3NF)

At this stage, the ERD are completed, however it require further process to define the **column** on each table and **normalize**(1NF, 2NF until 3NF) the table. 

Mainly to improve the **performance**, **data integrity** and avoid **unnecessary multiple join**


