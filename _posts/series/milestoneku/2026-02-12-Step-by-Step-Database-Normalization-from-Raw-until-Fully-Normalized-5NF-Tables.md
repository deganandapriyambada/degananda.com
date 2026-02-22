---
layout: posts
author: Degananda Ferdian
categories: database
series-code: TLNT001
excerpt: Normalized data model especially at relational database design could prevent potential long running or slow query. While, abnormal data model on RDBMS will slowdown the system performance.
tags: erd normalization
background: Backend system performance is determined by various factor, not just the developer's code efficiency. Database design also play an important factor that affect the whole backend system performance.
objective: To understand how to normalize a table from the non formal form into fourth normal form.
deliverables: article & illustration
---

# The Importance of Normalization on RDBMS Data Modelling

![postimage100](/assets/images/2026-02/normalization1.jpg)
[Normalization flow from 0NF all the way up to 4NF, table is breaked down into more smaller and non redudant table](/assets/images/2026-02/normalization1.jpg){: .center-image }

Database normalization is a process to deconstruct and destructure of existing tabular data, ensuring no potential perfromance issue / bottle neck caused by the data structure on the RDBMS (relational database relationship) due to the some rigid mechanism of RDBMS including join, forign key, referential integrity and primary key.

    abnormal database structure on RDBMS may contribute to slowness on the system.
    
note: in contrast with RDBMS, noSQL database require the opposite: de-normalization as the data are stored in document instead of tabular format

# The characteristics of RDBMS

Before understanding on why RDBMS require normalized data strucutre, it is important to deep dive into RDBMS characteristics as shown below

## Tabular Structure 

RDBMS is adopting tabular data format. Any kind of data that will be ingested to RDBMS must be strcutured using table format.

a table must have have following **core component** 

1. table name
2. list of columns (or often called as fields or attributes, both refering to same thing)

## Cardinality of Table and Field

There two distinct cardinality concept on RDBMS based on its component.

- Cardinality on column means the uniqueness of the value on these column.
- Cardinality on table means the relationship between two tables. It determine how those two table are interact/being queried as RDBMS allow to join more than one table into **temporary in memory-table** through sql query. 

There are three types of table cardinality:

1. one-to-many (represented as 1-n)
2. many-to-one (represented as n-1)
3. many to many (represented as n-n)

for many to many table cardinality, an intermediary table must be created in between because **many to many can't be physically modelled** on RDBMS. It has to be normalized from n-to-n into

1. 1-n (first table to the intermediary table)
2. n-1 (intermediary table to the first table)

table cardinality can be achieved by relating two table using these primary key. The primary key of source table (A) will become foreign key on the destination table (B)

## Primary Key

Each row of RDMBS table is designed to have logical uniqueness altough row duplication can be forced (depend on case by case).

Generally, duplicated row on same table indicates data quality issue caused by logical faliure on OLTP system (online transactional processing) such as double data entry or  missing de-duplication business logic on the API.

Primary key is unqiue identifier per row on RDBMS(relational database management system). It prevent exactly same same row record to be inserted/updated on the table.

&mdash; However, data in the row (often called as tuples) with different primary key but has exactly same value for other field/column/attributes are still considered as **logically duplicated**.

## One fact per Table 

The core foundation rule of RDBMS is to design the database model to only host/store **single fact per table**.

For example, a fact about student class assignment data **can't be mixed** with school financial data in single table as both of them are completely different factual information.

## Definition of Fact Table on RDBMS

There are various definition of fact table in the context of relational database data modelling. Those differences  might cause information disturbances among the team who involved on ERD (entity relationship diagram) design and can lead into non-standarized database structure. 

&mdash; It is recommended to refer from the foundation theories on RDBMS.

The inventor of relational database, Edgar F. Codd, define a **fact able** (or basically a **single table on RDBMS**) with following trait:

1. a single table must represent one factual information
2. must have primary key
3. a factual information in single table can be represented with **all non key attributes/column/field** (basically non primary key column) **must depend on the primary key**

Those definition must be carried out during ERD (entity relationship diagram) design and table normalization process to avoid potential performance bottleneck from the data structure.

## The Aftermath of Abnormal Database Structure on RDBMS

take a look following example

# Step by Step to Normalize a Table From 1NF all the way up to 4NF

4NF is the software engineering target standard for normalizing a table.

Below is the business rules that derrived from the previous characteristics of RDBMS (relational database management system) as well as the practical rulen for normalization strategy. Each of rule must be applied during specific normalization phase

    1NF => 2NF => 3NF => BCNF => 4NF

Suppose we have following sample data about personal milestone in one table

| email | name | goal | milestone | task | priority |
|---|---|---|---|---|--|
| degananda.ferdian@gmail.com | Dega | Become profesional cloud solution architect | Pass azure AZ-900 exam  | Learn .net programming, learn about azure VMSS, learn about azure entraID  | top priority | 
| degananda.ferdian@gmail.com | Dega | Physically and Mentally Healthy | BMI  between 18 ~ 24,9 | Daily weight lifting at gym, intermittent fasting, sleep before 12 pm and wake at 8 am  | less priority | 

&mdash; Normalization has single main objective:

    Design a good relational data model that wont break the system perfromance without losing the cardinality among the tables to ensure the alignment with business entity relationship.

## List of RDBMS Key Types

There five RDBMS concept that will be used on normalization theory 

- **determinant**: An attribute/field/column that determine other attribute/field/column as **functional dependency** (A determine B, A is the determinant)
- **composite key**: combination of more than one attribute/field/column (doesnt need to be unique)
- **super key**: any attribute/column/field or combination from one or more attribute/column/field that can guarantee the uniqueness of row.
- **candidate key**: candidate key is a super key that no longer unique if one or more attribute from that superkey is removed. if the super key is only consist of one attribute, then its already a condidate key. condidate key is also often called as **mini superkey**.
- **primary key**: the **choosen one from candidate key** that will be used to guarnatee the uniqueness of row. 

a primary key is derrived from condidate key instead from super key to reduce data structure complexity. a complex data structure might evolve into technical debt and potentialy performance issue (more index size, more joining attribute on the SQL queries).
    
## 1NF 1st Normal Form -  Normalization Business Rules

![postimage100](/assets/images/2026-02/normalization2.jpg)
[0NF to 1NF cheatsheet](/assets/images/2026-02/normalization2.jpg){: .center-image }


1NF normalization is focused on removing a list on every table column/attribute/field.

1NF normalization rules:

1. Each field/attribute/column value must not have have list of value. 
2. Only non-list value is accepted

<hr /> 

check if sample table is passing the 1NF rule.

the sample table is violating 1NF due to 

1. there are list on the **task** column/attribute/field

**1NF solution**: Split into mutliple rows

| email | name | goal | milestone | task | priority |
|---|---|---|---|---|--|
| degananda.ferdian@gmail.com | Dega | Become profesional cloud solution architect | Pass azure AZ-900 exam  | Learn .net programming | 
| degananda.ferdian@gmail.com | Dega | Become profesional cloud solution architect | Pass azure AZ-900 exam  | learn about azure VMSS | 
| degananda.ferdian@gmail.com | Dega | Become profesional cloud solution architect | Pass azure AZ-900 exam  | learn about azure entraID | 

now the sample table is already normalized into **1NF** 

at this rate, the data model still not ready for development as it might introduce OLTP complexity (need to update 3 rows to update goal or milestone )

## 2NF 2nd Normal Form - Normalization Business Rules

![postimage100](/assets/images/2026-02/normalization3.jpg)
[1NF to 2NF cheatsheet](/assets/images/2026-02/normalization3.jpg){: .center-image }

Note: Skip from 1NF to 3NF directly, the primary key **is NOT a composite key**

2NF focus on identifying one or more factual information from a table then separate it into multiple table (remove partial dependency)

2NF business rules

1. 1NF business rules must be applied as the pre-requisite (table already in 1NF form)
2. all non key (primary key or candidate key or super key) value must **fully depend with both of the composite key** and **cannot be partial dependency**.

note: composite key is combination of two or more attribute into single primary key.

<hr /> 

Before normalizing 1NF table to its 2NF form, we have to decide the **primary key** from these sample table.

note: key can be added/enriched from external data.

**super key** list

1. email,
2. email, name (composite key)
3. user_id,
4. user_id, name
4. user_id, email (composite key)
5. user_id, email, name (composite key)

**candidate key** (the most minimum superkey):

1. email,
2. user_id

**primary key** 

primary key cant solely derived from candidate key (minimal superkey), there is another rule to determine primary key

first: PK must be unique and immutable (can't be reassigned). At maany scenario, email can be re-assigned into another employee (incase of shared email for system operations)

second: PK size/length must limited to improvement sql query performance.

hence, the primary key would be **user_id**

| user_id | email | name | goal | milestone | task | priority |
|---|---|---|---|---|---|--|
| 1 | degananda.ferdian@gmail.com | Dega | Become profesional cloud solution architect | Pass azure AZ-900 exam  | Learn .net programming | 
| 1 | degananda.ferdian@gmail.com | Dega | Become profesional cloud solution architect | Pass azure AZ-900 exam  | learn about azure VMSS | 
| 1 | degananda.ferdian@gmail.com | Dega | Become profesional cloud solution architect | Pass azure AZ-900 exam  | learn about azure entraID | 

check if the sample table is passing 2NF rule

1. <i class="fa fa-check-square" aria-hidden="true"></i> name is dependent on user_id all non key must be fully dependent on the composiste key.

above rule is passed because there is **no composite key**, no need to split the table as the sample table (with enrichment of user_id) already become **2NF**.


## 3NF 3rd Normal Form - Normalization Business Rules 

![postimage100](/assets/images/2026-02/normalization4.jpg)
[2NF to 3NF cheatsheet](/assets/images/2026-02/normalization4.jpg){: .center-image }

&mdash; from here onwards (3NF-BCNF-4NF), apart from the theoritical concept, the normalization will also **heavily influenced by the business logic/entity relationship** between each entity.

3NF is focus on eliminating one or more non key attribute that dependent on the non key attribute (remove transitive dependency)

3NF business rules

1. 2NF business rules must be applied as the pre-requisite (table already in 2NF form)
2. non key attribute (field that not considered as primary key) must not dependent with other non key attribute or **the non key attribute (B) are part of candidate key** These rule often called as non transitive dependencies.

<hr />

at this stage (2NF to 3NF, determining the relationship between attribute is a **must**). 

note: the relationship definition is vary depend purely on the business scenario/business case, no mathematical formula.

check if the sample is passing 3NF 

below condition is violating 3NF main rule : non key attribute not depend with other non key attribute

1. <i class="fa fa-times-circle" aria-hidden="true"></i> milestone determine goal (functional dependency, milestone -> goal, A-> B, milestone is determinant and goal is dependent with cardinality of one[goal] to many[milestone])
2. <i class="fa fa-times-circle" aria-hidden="true"></i> task determine milestone (functional dependency, task-> milestone)
3. <i class="fa fa-times-circle" aria-hidden="true"></i> goal will determine priority
4. <i class="fa fa-times-circle" aria-hidden="true"></i> name determine email 

below are the passed condition

1.  <i class="fa fa-check-square" aria-hidden="true"></i> user_id determine name
2.  <i class="fa fa-check-square" aria-hidden="true"></i> user_id determine email
3.  <i class="fa fa-check-square" aria-hidden="true"></i> user_id determine goal, as every user goal is different.

**3NF solution**: Split into multiple table (user, goal, milestone, task)

below is the 3NF form of the sample table. 

table: user

| user_id | email | name |
|---|---|---|
| 1 | degananda.ferdian@gmail.com | Dega |

table: goal

| user_id | goal_id | goal | priority |
|---|---|---|---|
| 1 | 1 | Become profesional cloud solution architect | top priorty |

note: goal_id, goal and priority are under same entity ("goal")

table: milestone

| goal_id | milestone_id | milestone | 
|---|---|---|
| 1 | 1 | Pass azure AZ-900 exam  | 

note: milestone_id and milestone are under same entity ("milestone")

table: task

| milestone_id | task_id | task | 
|---|---|---|
| 1 | 1 | learn about azure .net programming  | 
| 1 | 2 | learn about azure VMSS | 
| 1 | 3 | learn about azure entraID  | 

note: task_id and task are under same entitiy


## BCNF Boyce codd normal form -  Normalization Business Rules

&mdash; some poeple often called BCNF as 3.5 NF

the **best performance primary key** only has one attribute (candidate key with single attribute)

BCNF Business Rules:

1. 3NF business rules must already be applied (table already in 3NF form)
2. for every available functional dependency on the table, the **determinant must be a condidate key/superkey/primary key** , can also be rephrased : every non key attribute must only depend on the superkey(determinant)
3. A->B, A must be super key / candidate key / primary key with A = determinant, B = dependent

<hr />

there are two identified functional dependency

1. milestone -> goal
2. task -> milestone

rule: A->B, A must be super 

case: milestone -> goal

table: milestone

| goal_id | milestone_id | milestone | 
|---|---|---|
| 1 | 1 | Pass azure AZ-900 exam  | 

above table already passed BCNF <i class="fa fa-check-square" aria-hidden="true"></i>, as **milestone_id is the primary key** and **goal_id is the foreign key**

same goes to the following case : task-> milestone

table: task

| milestone_id | task_id | task | 
|---|---|---|
| 1 | 1 | learn about azure .net programming  | 
| 1 | 2 | learn about azure VMSS | 
| 1 | 3 | learn about azure entraID  | 


task_id is the primary key and milestone_id is the foreign key.

**BCNF solution**: nothing to do here as the table already passing BCNF

<hr />

![postimage100](/assets/images/2026-02/normalization5.jpg)
[3NF to to BCNF cheatsheet](/assets/images/2026-02/normalization5.jpg){: .center-image }

however, below is the example when 3NF is not BCNF.

it must met following rules:

1. non key attribute/field/column must not dependent each or allow non key attribute (non attribute A -> non attribute B) to be dependent with other non key attribute as long as the B **its part of primary key/candidate key/super key**. in simple terms: on 3NF, especially at case of A->B for, non key functional dependency is allowed as long as B is part of candidate key.

| goal_id | milestone_id | milestone | measurement_tools | auditor_department |
|---|---|---|---|---|
| 1 | 1 | Pass azure AZ-900 exam  | Key Perfromance Indicator | Department A |

assume

there is specific auditor department for each **milestone and goal**

super key:

1. milestone_id
2. milestone_id, goal_id, auditor_department
3. milestone_id, auditor_department

candidate key

1. milestone_id
2. auditor_department

choosen primary key:

1. milestone_id

measurement tools (A) -> auditor_department (B)

Above table is met 3NF but not BCNF due to following reasons:

1. pass 3NF because even auditor_department and measurement_tools dependent (measurement tools (A) -> auditor_department (B)), B is part of candidate key
2. breaking BCNF because measurement tools is not the primary key/super key/candidate key.

## 4NF Normalization Business Rules

4NF concept is heavily relied on MVD (multi valued dependencies). MVD is a list of non key attribute that dependent to same determinant, **but these non key attribute doest depend on each other**.

4NF Business Rules:

1. BCNF business rules must already be applied (table already in BCNF form)
2. 4NF table = BCNF table with one addtional rules:  each attribute on the MVD(multi valued dependencies) **must have dependencies** with the other non key attributes.

<hr />

these table already in form of 4NF as there is no MVD

table: user

| user_id | email | name |
|---|---|---|
| 1 | degananda.ferdian@gmail.com | Dega |

user table is already 4NF as there is **no MVD**  (multi value dependency)
 
table: goal

| user_id | goal_id | goal | priority |
|---|---|---|---|
| 1 | 1 | Become profesional cloud solution architect | top priorty |

goal table is already 4NF as there is **no MVD**  (multi value dependency)

table: milestone

| goal_id | milestone_id | milestone | 
|---|---|---|
| 1 | 1 | Pass azure AZ-900 exam  | 

milestone table is already 4NF as there is **no MVD**  (multi value dependency)

table: task

| milestone_id | task_id | task | 
|---|---|---|
| 1 | 1 | learn about azure .net programming  | 
| 1 | 2 | learn about azure VMSS | 
| 1 | 3 | learn about azure entraID  | 

task table is already 4NF as there is **no MVD** (multi value dependency)

**4NF solution**: nothing to do here as the table already passing 4NF rules,

<hr />

![postimage100](/assets/images/2026-02/normalization6.jpg)
[BCNF -> 4NF cheatsheet](/assets/images/2026-02/normalization6.jpg){: .center-image }

However, below is the example BCNF table that not pass 4NF rule

| goal_id (FK) | milestone_id (PK) | milestone | measurement_tools | supervisor |
|---|---|---|
| 1 | 1 | Pass azure AZ-900 exam  | key performance indicator | Budi |

above table:

1. BCNF as all of the non key attribute are dependent on the PK
2. Not 4F as there is MVD (multi valued depenendency) that not dependent on each other.
3. both supervisor and measurement_tools are dependent to the milestone
4. supervisor and measurement tools are not dependent (assuming the supervisor assignment is based on milestone and the department)

# The Anomaly: Materialized View

![postimage100](/assets/images/2026-02/normalization7.jpg)
[Materialized view is denormalization approach to create a UI based RDBMS table, polar opposite of normalization](/assets/images/2026-02/normalization7.jpg){: .center-image }

note: materialized view can also be applied to noSQL database such as mongodb, dynamodb, cosmosdb, documentdb, etc.

Software engineering is evolving. Relational database was founded on 1970. Between that year untill now (2026), there has been many innovation that revolves arround RDBMS especially on performance tuning area.

on late 1990s, a concept called materialized view is introduced and adapted widely.

materialized view is the anti normalization and often called as denormalized table. table attribute/column/field must be aligned with the UI (user interfaces) to avoid any SQL joing.

the purposes of materialized view is to completely remove join and improve **read performance** (with the consequences of additional write orchestration).