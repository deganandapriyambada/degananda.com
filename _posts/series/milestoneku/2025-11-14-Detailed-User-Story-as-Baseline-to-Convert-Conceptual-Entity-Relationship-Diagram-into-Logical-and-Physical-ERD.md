---
layout: posts
author: Degananda Ferdian
categories: product
series-code: TLNT001
excerpt: Well writen and self spoken user story can be created by defining clear business rule, technical requirement, tangible test matrix and one sprint fit scope.
tags: user-stories application-design
background: Only arround 35% of digital transformation project are reported to be success according to BCG. One of the common factor is misalignment between business objective with software capabilities.
objective: Step by step to create self spoken and clear detailed user story for development team
deliverables: article
---

# Entity Relationship Diagram Lifecycle

There are three stages during ERD (Entity relationship diagram) life cycle.

1. **Conceptual ERD** - High level interaction and relationship betwen one table to another table
2. **Logical ERD** - Enrich the table with the column as well as the properties (not null, primary key, etc) and ensuring the design wont cause performance or data integrity issue by doing normalization (up to 3NF)
3. **Physical ERD** - Represented in form of DDL (Data Design Language), ready to be imported on the relational databases, usually has .sql format

## Pre-requisite Before Creating Logical ERD 

Before logical ERD can be created, a clear user story, overall application architecture and **conceptual ERD definition** must be in place. 

Otherwise, it would be really challenging to define the column and its properties on each table because these detail shall came from business analyst.

&mdash; ERD is technical requirement design and ideally should always derrived from the business requirement (in form of user story detail), otherwise the solution wont be able to solve the business use cases. it should be **business driven**, while IT is the supporting tools.

# Detailing User Story

a good user story can convey the business user expectation to the technical team on its own, meaning all the details must be written in cleary.

there is an anecdote &mdash; if the developer doesnt have any question about the user story and the delivered feature is on point with the requirement, then it was a **good user story**.

## Strategy to Write Self Spoken User Story

Development outcome not solely dependent on the developer skills. Good developer with deep technical knowledge might produce unusable feature which not aligned with the business user requirement.

Each of software delivery team member has equal role to determine the final product or feature.

as a business analyst or solution architect, it is important to drive the alignement between business and delivery team by defining good user stories.

one of the method is to ensure the written **user stories details** are standardized and has following properties

1. **Atomic user story** - can be developed without dependencies to another user story. Ideally the dependencies will be added on the user story task. On worst case scenario, if the user story has depedencies, it should be put on the backlog and will be detailed during design sprint.
2. **Valueable** - business driven user story, the outcome must be solving business problem because user story is a solution design.
3. **Estimeable** - the user story can be estimated using tangible matrix such as user story points which later will be converted into number of sprint (Eg: 5 user story point equal to 2 sprints and 1 sprint will took 10 man days)
4. **Small** - Must closeable in one sprint! if it took more than one sprint, the general principle is to divide the user stories into smaller part.
5. **Testable** - Has tangible way to close the user story, usually represented in the **definition of done** list.
6. **Clear** - All required business information, business rules and expected business outcome must be explicitly defined as **acceptance criteria**

note: definition of done or DoD is a checklist to track development progress (code reviewed, unit test completed, ready to test, tested/passed, ready to deploy, etc) while acceptance criteria is business rules (user must enter valid email address, etc)

# Sample Good Detailed User Stories

below is the usual template to write the story details based on those five principles (atomic, valueable, estimeable, small and testable)

## Self Spoken User Story Template

#**Epic**: {module belong to the user story} <br />
#**User story id**: {identifider of the user story number, for tracking purposes} <br />
#**Story points**: user story complexity (generally will be represented by fibonacci number 1,3,5,7,13,21...) <br />

| Category | Content |
|---|---|
| User Story Summary | One liner summary of the user story  |
| User Story Description | as a <persona> i want {action/goal/activity} so that {benefit/value}  |
| Task| technical breakdown of the user story |
| Definition of Done | list of development phase, might vary depending on the projects and the solution architect preferences.  |
| Acceptance Criteria | list of business rules  |
| Attachment | any related document to support the user stories, example: wireframe, interface agreement document (IFA), etc |

## User Story Details for Milestone Management System

below is the stage-0 milestoneku.com user stories following the good user stories principle.

assumption:

1. one sprint is done in 1 weeks basis
2. 13 story point equal to 1 sprint
3. one weeks equal to 5 mandays

<hr />

**Epic**: User Management <br />
**User story id**: US#1 <br />
**Story points**: 5 <br />

| Category | Content |
|---|---|
| User Story Summary | User login to the platform  |
| User Story Description | As a user i want to be able to login into milestoneku platform so that i can start managing my milestone |
| Task | 1. Create ERD <br /> 2. Create Wireframe <br /> 3. BE Development <br /> 4. FE Development <br /> 5. System Integration Test  |
| Definition of Done | 1. **>= 90%** Unit Test Coverage <br /> 2. **0%** Code Smell on Sonarcube <br /> 3. Code reviewed  |
| Acceptance Criteria | 1. User Must be login using valid gmail address <br /> 2. User will still in logged in even after closing the apps for 3 days  |

<hr />

**Epic**: User Management <br />
**User story id**: US#2 <br />
**Story points**: 8 <br />

| Category | Content |
|---|---|
| User Story Summary | Admin login to the platform  |
| User Story Description | As an admin user i want to be able to login into milestoneku administration platform so that i can start manage my platform configuration |
| Task | 1. Create ERD <br /> 2. Create Wireframe <br /> 3. BE Development <br /> 4. FE Development <br /> 5. System Integration Test  |
| Definition of Done | 1. **>= 90%** Unit Test Coverage <br /> 2. **0%** Code Smell on Sonarcube <br /> 3. Code reviewed  |
| Acceptance Criteria | 1. User Must be login using pre-created email and password  <br /> 2. Admin user must automatically logged out after idling more than  5 mins <br /> 3. Automatically logged out once the platform is closed <br /> 4. Admin user authentication and authorization must be secured <br /> using following techniques ip whitelisting, hashed password, <br /> strong password policies, and MFA (multi factor authentication)  |

<hr />

**Epic**: Goal Management <br />
**User story id**: US#3 <br />
**Story points**: 8 <br />

| Category | Content |
|---|---|
| User Story Summary | Manage User Goal  |
| User Story Description | As a user i want to create a career goal o that i can set my goal over specific period of time |
| Task | 1. Create ERD <br /> 2. Create Wireframe <br /> 3. BE Development <br /> 4. FE Development <br /> 5. System Integration Test  |
| Definition of Done | 1. **>= 90%** Unit Test Coverage <br /> 2. **0%** Code Smell on Sonarcube <br /> 3. Code reviewed  |
| Acceptance Criteria | 1. mandatory field : goal name, goal description and goal category <br /> 2. goal category must be based on master data  <br /> 3. goal category master data should be editable by user <br /> |

<hr />

**Epic**: Milestone Management <br />
**User story id**: US#4 <br />
**Story points**: 8 <br />

| Category | Content |
|---|---|
| User Story Summary | Manage user goal's milestone  |
| User Story Description | As a user i want to create important milestone for my career goal so that i can see the runway or path to achieve the goal |
| Task | 1. Create ERD <br /> 2. Create Wireframe <br /> 3. BE Development <br /> 4. FE Development <br /> 5. System Integration Test  |
| Definition of Done | 1. **>= 90%** Unit Test Coverage <br /> 2. **0%** Code Smell on Sonarcube <br /> 3. Code reviewed  |
| Acceptance Criteria | 1. mandatory field: milestone name, miltestone description <br /> 2. should be associated with one or more goal <br /> 3. should have tangible indicator: percentage of task completed <br />   |

<hr />

**Epic**: Task Management <br />
**User story id**: US#5 <br />
**Story points**: 8 <br />

| Category | Content |
|---|---|
| User Story Summary | Manage user milestone's task  |
| User Story Description | As a user i want to add new task to my milestone |
| Task | 1. Create ERD <br /> 2. Create Wireframe <br /> 3. BE Development <br /> 4. FE Development <br /> 5. System Integration Test  |
| Definition of Done | 1. **>= 90%** Unit Test Coverage <br /> 2. **0%** Code Smell on Sonarcube <br /> 3. Code reviewed  |
| Acceptance Criteria | 1. mandatory field: task name, task description, task category <br /> 2. task category should came from master data 3. task category should be editable based on user preferences <br /> 4. task must be associated with one or more milestone <br /> |

## How to Estimate the Development Time

Sum of all the user story story point are:

    5+8+8+8+8  = 37

based on the agreed assumption, 13 story points is equal to 1 sprint, hence for 37 story points it will be done in at least **3 sprint** (rounded from 2.8) which is 15 man days.

# Next Steps

from the detailed user stories information above, it should be ready to for creating **logical** and **physical** entity relationship diagram (ERD) process as all of the neccessary information are already avaialble such as business rule and user story description