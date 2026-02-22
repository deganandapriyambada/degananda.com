---
layout: posts
author: Degananda Ferdian
categories: product
series-code: TLNT001
excerpt: Acceptance criteria is powerful for detailing out user story. Combining it with relevant information from five information component would potentialy reduce the gap between software delivery team and business user.
tags: acceptance-criteria user-story
background: One of the classic chicken and egg problem on software engineering is the alignment of system design and business requirement that often mismatch due to information disturbance/misunderstanding.
objective: to understand how to minimize gap between business user expectation with system design
deliverables: article & illustration
---

# Correlation Between Software Engineering and Information System

Software engineering is an end to end technical process on software development covering from plan, design, build, test until roll out the system. Software engineering has deep correlation with information system.

Information system (IS) is a holistics system concept within an enterprise organization that combine people, data, software, hardware and process into single operating model. Software engineering tend to focus on the delivery side, while IS (information system) also touching the management side such as audit, governance, standard operating procedure and risk management which are not really incorporated during software engineering.

&mdash; hence, software engineering is a subset of information system especially for the software part.

## How Information System Concept can Sharpen User Story Definition During Software Engineering Process ?

![postimage100](/assets/images/2026-02/erd2.jpg)
[Adding 5 component of IS on user story AC can reduce gap between IT and business](/assets/images/2026-02/erd2.jpg){: .center-image }

Any software whether its B2B , B2C or even development tools software can't escape the reality that such software will operated/supervised/utilized by human.

a general SDLC (software development life cycle) doesnt really involve human aspect except during requirement gathering phases. A BA (business analyst) often use **their own interpretation** to convert the business requirement from user to functional requirement or user story.

This is where information concept where the five core component of IS can be injected into the SDLC, especially during the design and development phases.

Instead of only focuses on the system capability when writing the user story which often vague and lack of depth. Adding five level of acceptance criteria based on five core component of IS will be game changer as it add the depth of **requirement details** to avoid misalignemnt between all the key stakeholder from different business department, IT department and top/middle management.

&mdash; For enterprise project, user story with depth details is required as it will be executed using waterfall methodology (development will fully based on existing documentation in form of FRD/functional requirement document as well as TRD/technical requirement document).

same concept (injecting 5 component of IS to acceptance criteria) might not applicable when doing agile SDLC as its the opposite from the agile manifesto (communication over documentation).

in the end it will be back to the solution architect or the project management preferences and the overall situation.

## Five level of acceptance criteria based on IS Component for user story writings

Below are the rule of thumb on how each IS component can be integrated to user story acceptance criteria

- **People**: Focus on people governance aspect - basically the RACI. for example: who can execute the user story? who will get reported? who define the config? etc.
- **Data**: Identify all the neccesary data that required to execute the user story and fullfill the persona goal as well as the data output. If possible also identify the data sources.
- **Process** : Define business process flow (including the integration and interoperability) to execute the user story as the references for developer when building the system (FE or the BE). business rules on each of process must also be defined such as data validation rule, formatting, etc.
- **Software** : Non functional requirement (NFR) for software such as architecture style (EDD, synchronous request response, synchronous remote procedure call, ODS, etc) or even browser/operating system compatibility.
- **Hardware** : Non functional requirement (NFR) for infrastructure (latency, reliability, response time, security, etc).

note: above rules is not strict & forcing. It a general consensus within the team. Shall be modified based on the project characteristics.

## Who will add the acceptance criteria?

Usually the acceptance criteria will be drafted by business analyst and solution architect. Non technology related acceptance criteria such as people, data and process will be handled and written by business analyst.

Solution architect will do the technology related (non functional requirement) acceptance criteria including software and hardware.

On most software engineering project that use agile, there will be a dedicated sprint called as "design sprint". It is where BA and SA collaborate to work on the user story.

## Which Acceptance Criteria is Needed for ERD based on Five Component of Information System

Each ERD type has different acceeptance criteria. Conceptual ERD only require process, data and people acceptance criteria as it representing the strategical business entity modelling.

Conceptual ERD must representing the logical operating model (LOM) of the system. Highly tied with the to be business process (how each module inside the system will interact as well as the sequence flow) within the system.

Logical ERD is the oppposite of conceptual ERD. When conceptual ERD require business alignment, logical ERD is more focused on enriching the technology related context. For example, how will the authentication data model will looks like? how the architecture will affect the ERD? for example event driven architecture will require an entity called event history to store and log any pub(publish) - sub (subscribe) activity outcome to ensure the data integrity within one journey.

Hence, logical ERD require software and hardware acceptance criteria or commonly known as non functional requirement.

Those NFR doesnt neccesary to be defined during the user story definition itself as it often combined with the logical ERD creation activity because the SA need to define the overall application/infrastructure architecture and align it with the logical ERd.

&mdash; However, its not a strict and forcing rule to add the NFR while doing logical ERD, all depend on the project manager/SA preferences.

# Enriching user story details with People, Data and Process Acceptance Criteria

Below are the milestoneku user story list with additional acceptance criteria related to non technology aspect such as people, data and process.

    Process AC -> Data AC -> People AC

it is recommended to start with process then following with data because data will highly depend on the defined process.

Note: AC is acceptance criteria

US#1 - User Management

| Category | Description | 
|---|---|
| User story | As a user i want to be able to login into milestoneku platform so that i can start managing my milestone | 
| Process AC | 1. Consumer User go to login page <br /> 2. user choose the login method (gmail auth) <br /> 3. user click login <br /> 4. (success) redirected to the milestoneku user dashboard <br />5. (success) consumer will be asked to input user details if its fire time login <br /> 6. (failed) show popup about login failure | 
| Data AC | **Input field** for consumer login <br /> 1. email <br /> 2. nickname <br /> 3. occupation <br /> **business rules** <br /> 1. email must be valid  | 
| People AC | Consumer user must not be able to access administrator dashboard and vice versa | 
| Software AC | 1. consumer authentication is done through firebase authentication <br /> 2. support both web browser and mobile browser <br /> 3. decoded token must contain user id, user type, refresh token & token <br /> 4. n layered architecture <br /> 5. presentation, business logic & data access is done using nodejs | 
| Hardware AC | login under 500ms  | 

<hr />

US#2 - User Management

| Category | Description | 
|---|---|
| User story | As an Admin i want to login to the admin dashboard to manage the SaaS | 
| Process AC | 1. admin go to administrator login page <br /> 2. input username and password <br /> 3. (success) redirected to admin dashboard <br /> 4. (failed) show pop up about login failure | 
| Data AC | **input field** for admin login <br /> 1. email <br /> 2. password <br /> **buisness rules** <br /> 1. email must be valid  | 
| People AC | Administrator user must not be able to access consumer dashboard and vice versa | 
| Software AC |1. administrator authentication will use custom oauth2 <br /> 2. administrator password must be hashed <br /> 3. Only specific IP can access the administrator login page <br /> 4. Administrator login can only be accessed using private network/VPN <br /> 5. support both web browser and mobile browser <br /> 7. decoded token must contain user id, user type, refresh token & token <br /> 8. n layered architecture <br /> 9. presentation, business logic & data access is done using nodejs | 
| Hardware AC | login under 500ms  | 

<hr />

US#3 - Goal Management

| Category | Description | 
|---|---|
| User story | As a user i want to create a career goal o that i can set my goal over specific period of time  | 
| Process AC | 1. consumer go to goal page <br /> 2. click new goal button <br /> 3. input neccesary details about the goal <br /> 4. (success) redirected to goal list page, recently created goal will be displayed <br /> 5. (failure) display the error message explaining why the transaction is failed  | 
| Data AC | **input field** for Goal <br /> 1. goal name <br > 2. goal description <br /> 3. goal category  <br /> 4. target completion date <br /> **business rules** <br /> 1. goal type must be selected from the existing dropdown <br /> 2. date format: yyyy-mm-dd <br /> 3. consumer must be able to create and manage their own goal type | 
| Software AC | 1. Read and write database must be separated (CQRS) <br /> 2. Synchronous RPC (remote procedure call), no EDD <br /> 3. Validate token <br /> 4. Index must be implemented on the database <br /> 5. n layered architecture <br /> 6. presentation & business logic (nodejs) <br/> 7. data access layer (java)  | 
| Hardware AC | average of CRUD operations is done under 500ms | 

<hr />

US#4 - Milestone Management

| Category | Description | 
|---|---|
| User story | As a user i want to create important milestone for my career goal so that i can see the runway or path to achieve the goal | 
| Process AC | 1. consumer go to milestone page <br /> 2. click add new mile stone <br /> 3. consumer select goal <br /> 4. consumer add neccesary details of the miltestone <br /> 5. (success) redirected to milestone list page, recently added milestone will be shown <br /> 6. (failure) display the error message explaining why the transaction is failed  | 
| Data AC | **input field** for Milestone <br />  1. selected goal <br /> 2. milestone name <br /> 3. milestone type <br /> 4. milestone description <br /> 5. quantified KPI (key performance indicator) <br /> 6. target KPI (key performance indicator) <br /> 7. target completion date   | 
| Software AC | 1. Read and write database must be separated (CQRS) <br /> 2. Synchronous RPC (remote procedure call), no EDD <br /> 3. Validate token <br /> 4. Index must be implemented on the database <br /> 5. n layered architecture <br /> 6. presentation & business logic (nodejs) <br/> 7. data access layer (java) | 
| Hardware AC | average of CRUD operations is done under 500ms  | 

<hr />

US#5 - Task Management

| Category | Description | 
|---|---|
| User story | As a user i want to add new task to my milestone  | 
| Process AC | 1. consumer go to task page <br /> 2. click new task button <br /> 3. input neccesary field to create the task <br /> (success) redirected to task list page, recently added task will be shown | 
| Data AC | **input field** <br /> 1. selected milestone <br /> 2. task name <br /> 3. task description <br /> 4. target completion date <br /> 5. status <br /> 6. task type <br /> **business rule** <br /> 1. default status: not started <br /> 2. target completion date format: yyyy-mm-dd <br /> 3. milestone must be selected from the avaialble dropdown <br /> 4. consumer must be able to add new task type | 
| Software AC | 1. Read and write database must be separated (CQRS) <br /> 2. Synchronous RPC (remote procedure call), no EDD <br /> 3. Validate token <br /> 4. Index must be implemented on the database <br /> 5. event driven architecture (EDA) <br /> 6. utilize apache kafka as message broker <br /> 7. coded using rust and go <br /> 8. display success message on the milestoneku UI once the transaction is completed | 
| Hardware AC |  average of pub/sub operations is done under 250ms as it ASYNC  | 