---
layout: posts
author: Degananda Ferdian
categories: Product
series-code: CUSTOM001
excerpt: the beginning of product development until software engineering phases. Build a hybrid web based and mobile application to manage personal growth milestone. 
tags: Product
topics: Product
subtitle: Hello world subtitle of this post
ptype: Issues
background: a tech consultant should understand software development life cycle.
objective: to demonstrate end to end software development life cycle with actual execution.
deliverables: article & illustration
---

# Short Product Description

![postimage80](/assets/images/2025-04/Milestoneku.svg)
[Apps Jargon](/assets/images/2025-04/Milestoneku.jpg){: .center-image }


**Milestoneku** or "My Milestone" in english. Philosophically, it means a personal growth "milestones" lighthouse. a **tools** and **social media** for <i>career growth guidance</i>, <i>reflective assessment</i> and <i>milestone marker</i>.

# Key Jargon

you're not defined based on your race, your physique, your salary or your education degree. you're what you're. its shaped by tremendous of unique life experience and archievement. Craft your growth milestone with milestoneku.com. keep alive.

# Project Information
this project will cover end to end process of software delivery life cycle (SDLC) from the begininng until product roll out on production. On this preliminary phases, business requirement and technology design are not yet discovered. Eventually, the writings will arrived at that point. This is an living article.

## Project Background Assumption
a research from Frontpage.LK mentioned at least **78% of worker** globally are **stuck professionally**. **Milestoneku** product will try to solve the problem by providing a digital enabler that can help professional worker to continue grow their potential.

## Project Goal
to ship Web based, android and IOS apps that is production (**MVP**) ready and can be widely used by Indonesian Millenials or Gen-Z professional worker for educational purposes.

## Technology Scope & Expectation
Because this project is mainly used to demonstrate actual software development life cycle and for educational purposes, all the technology stack used on the project will based on current latest modern architecture for an enterprise (for sure will be **overkill**). for Example: event driven architecture, SAGA orchestration and microserivces with agnostics backend services etc

## Project Deliverable
The project will covering all deliverables across all phase in the software development life cycle.
- Market research result
- User Persona
- Business Model Canvas
- User Story Definition (USD)
- Figma Wireframe
- L1, L2, L3 Architecture
- ERD
- Test Cases
- Source Codes
- Automation Script(test, CI/CD, provisioning, etc)
- Test Report
- Control tower concept in form of Monitoring tools

# Methodology

![postimage90](/assets/images/2025-04/SDLC.svg)
[a classic waterfall SDLC tailored for B2C project](/assets/images/2025-04/SDLC.jpg){: .center-image }


a classic waterfall SDLC will be choosen for this project assuming all business **requirement will be fixed and locked** during the initial phase of the project.

    each develirables mentioned on previous point will be covered during the SDLC phases.

# Project Phases
## Planning
Focus: on to understand how's the market condition and defining the product key capability as an MVP (minimum viable product)
Business Objective: To craft and define a sets of Epic and user story that is ready to be developed and sell to potential customer.

<u>Three main activities:</u>

- **Market reserach**: to Gather all neccesary information about the market. For example : Insight on the industry, market size, target audience
- **GTM Strategy**: Defining user persona and strategies for apps launch.
- **Requirement gathering**: Extension of market research activity and GTM. defining a sets of KEY feature of the apps that align with market condition and go to market strategy in form of EPIC and User Stories Definition (USD)

## System Design
Converting business requirement into actual technical requirement design (TRD) 
Business Objectives: Create some technical documentation that ready to be passed to development team. in short: a blueprint to make the software engineering happen.

<u>Four main activities:</u>

- **UI/UX Design**: create a wireframe using figma that translate business requirement into user journey per persona. Scope will be dramatically limited because its only a MVP
- **System Architecture**: draw a high level application architecture with two additional layer from it( L2 and L1 that has more details)
- **Database modelling** : translate wireframe and business reqiurement(user story/epic) into ERD (Entity relationship diagram). ERD can be applied for both SQL and NoSQL database.s
- **Test Case defitinion** : Project will incorporate TDD approach. Test case will be defined prior to the development phases.

## Implementation
Build the application according to the system design (previous phases before implementation). All activities on this phases will be the **actual scripting and coding**.

<u>Three main activities:</u>

- **Coding** : Creating boilerplate for the frontend, backend and mobile apps until coding. In Short: Make the apps up and running on development stages
- **DevSecops** : Preparing, plan and creating a sets of devops tools. From CI/CD pipeline until resources provisioning automation.
- **TestAutoamtion** : some of the test that already defined from test case definition activities will be converter into actual automation test script. Jmeter will be used for backend. Katalon or playwright will be used on the frontend web and mobile apps. Only some of the critical test cases that will be automated to make the testing time efficient.

## Testing
Execute the automation testing and manual functional testing. The output of this activities is test result. Need to ensure all test script defined at system design phases are 100% passed (100% success and 0% fail).

## Deployment & Monitoring
Run the CICD pipeline and ensure it can deploy the code to production as well as publishing the apps on Playstore, appstore and the web apps is accessible via internet.

<u>Two main activities:</u>

- **Deployment** : Ensure the CICD pipeline can be run and able to deploy the code (backend & frontnend) properly without any issues.
- **Post deployment monitoring** : Configure and create a sets of monitoring tools can be used as L1,L2 and L3 control tower. Starting from collecting logs , visualize to dashboard and automated alert+alarming.

