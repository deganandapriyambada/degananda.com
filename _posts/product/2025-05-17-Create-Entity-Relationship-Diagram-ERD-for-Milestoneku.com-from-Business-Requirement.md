---
layout: posts
author: Degananda Ferdian
categories: Product
series-code: CUSTOM001

excerpt: Designing Milestoneku Data Model using ERD based on must have feature for Minimum viable product (MVP).
tags: ERD Data-Modelling
topics: be-engineering
subtitle: Hello world subtitle of this post
ptype: Review
background: Apart from the API Services boilerplate, Programmer need data model which usually represented on the entity relationship diagram (ERD)
objective: Step by step to craft ERD (Entity relation Ship) for Milestoneku based on pre defined business requirement or user stories.
deliverables: Article, Illustration, ERD
---

# Business requirement


it was previously defined that milestoneku has following business requirement.

    During an actual project, Business requirement will be defined by business analyst or product owner. BA/PO will conduct requirement gathering to all stakeholder and consolidating+shaping the requirement.

1. Onboarding / Registration Flow (Absolutely needed)
2. Manage milestone for personal growth
3. Progress Tracking
4. Notification system that will remind critical mileston due date.
5. (dataset) an Access to list of activity (habit, course & training) to achieve the goal

# Convert Business Requirement to ERD

an ERD usually is created and defined by Solution architect (SA) who will be the bridge between business and the implementation team. 

    Imagine a cross road for dozens of street: data, apps, db, business user, CEO, CIO, network team, infra team, developer, ETC. SA is the cross road gatekeeper and orchestrator. Ensuring everyone concern is aligned.

Each SA has different method to create the ERD, here are the steps to create ERD based on author's version.

## Transforming Requirement to User Stories

the requirementes defined on previous section is quite vague. Its not clear <b>who</b> is doing <b>what</b> for <b>what purpose</b> on <b>which</b> page/screen.

Hence, Each of the business requirement need to be restructued using following format

    as a [Persona] [Activity | written is active sentence] in order to [Activity purpose]

## Identifying the Entity and Context

Entity an <b>Object</b> that extracted from user stories. Object is a tangible things/Noun that can receive action from of a verb. Each object has context. Context will defining on how the object will be perceived. every context has property. a property can embedded on the Object. 

For example: a car object with "vehicle interior" context can have Number of door, car color , number of seat as their properties. While a car object with "vehicle performance context " can have engine horse power, torque, number of turbo as their properties. 

    an Object Context is will defining how the ERD will be modelled later.

For example

    As a Milestoneku User, i want to be able to login the application so that i can see my personal profile.

from those user story, entity and context can be identified.

| No | Entity | Context  | Parameter  |
|:--------:|:-------:|:------:|
| 1 | User  |  Profile |  (TBC) To be defined later  | 

## Creating Wireframe

    Parameters can be extracted from every screen that created on the wireframe.

Once the entity and context has been defined, designer will need <b>map each user story to corresponding screen</b> (usually called as user journey) and craft the initial wireframe (mockup) on figma or other preferred tools.

for Example for previous user story

| No | User Story | Entity  | Screen  |
|:--------:|:-------:|:------:|
| 1 | As a Milestoneku User, i want to be able to login the application so that i can see my personal profile.  |  Profile | 1. Login 2. View Profile  | 

once the number of screen has been mapped, designer will begin to create the wireframe.

## Extracting Parameter from Wireframe

Suppose the those two screen's wireframe has been created (Login and view profile), SA (Solution architect) then can extract each parameter that can be embedded to those object with specific context.

    Usually after the screen is defined, a new Object can be identified. Meaning, a new user story can be introduced. This might affect the project scope. It the responsibility of the PO/Scrum Master to set the boundary/scope.

For example based on those two screen , there will be X amount of identified parameter.

| No | User Story | Entity  | Screen  | Parameter |
|:--------:|:-------:|:------:|
| 1 | As a Milestoneku User, i want to be able to login the application so that i authenticated my self to milestoneku using Google SSO (gmail) |  Profile | Login   | 1. SSO Type 2. Email |
| 2 | As a Milestoneku User, i want to be able to login the application so that i can see my personal profile.  |  Profile | View Profile   | 1. Nickname 2. Profile Photo |

    Based on above table, the user story is expanded and aligned.

## Create the ERD

Modelling the ERD would be depend on the database type. a SQL Data model like PostGreSQL, MySQL, MSSQL will have different data model compared to NoSQL Such as MongoDB, DynamoDB, CosmosDB etc.

    its really advised to understand about broader concept of data modelling on NoSQL, SQL, Object Storage and API Programming and General Application Architecture Concept  before start to draft the ERD. There are a lot of factor and no single correct rule. its always depend on the goal, architecture and principle.

General Rule of creating ERD (can be differ based on SA experience or architectural planning. No static rule)

**SQL Version**

    1. Object will be table
    2. Parameter will be the table column
    3. Two Table within same context need to be linked
    4. Before linking two Table, a relationship type need to be identified
    5. Relationship type 1: One to many (1-n)
    6. Relationship type 2: One to One (1-1)
    7. Relationship type 3: Many to many (n-n)
    8. many to many relationship usually will ended up with intermediary table which bridge one to many and many to one table.
    9. Normalization is absolutely required: There should be no other object inside the table. If there is object inside the table it should be migrated to new table.

**No SQL Version** (Materialized View)

SQL vs NoSQL Terminology.

- Collection: Table
- Field: Column
- Row: Document

those are the equivalent terminology.

    Note: this rule is created using materialized view approach: NoSQL data model will follow the wireframe/UI to ensure the fastest read performance as possible (sacrificing data integrity which can be handled)

there is only one rule: Put every required parameter on the same collections

# SQL ERD: User and Profile

![postimage100](/assets/images/2025-05/sqlerd.jpg)
[SQL ERD for User and Profile](/assets/images/2025-05/sqlerd.jpg){: .center-image }

# NO-SQL ERD: User and Profile

![postimage80](/assets/images/2025-05/nosqlerd.svg)
[No SQL ERD for User and Profile](/assets/images/2025-05/nosqlerd.jpg){: .center-image }

# Complete ERD of Milestoneku

As stated on previous section that creating ERD require wireframe. Hence complete ERD will be available **once the wireframe is fully created** (next article).