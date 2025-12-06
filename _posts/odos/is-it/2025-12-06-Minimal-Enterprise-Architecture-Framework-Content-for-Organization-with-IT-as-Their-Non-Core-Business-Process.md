---
layout: posts
author: Degananda Ferdian
categories: is-it-terminology
series-code: n/a
excerpt: The level of governance depth between non IT centric organization and an organization who use IT as their core business process such as banking and telco are totally different. a Minimal enterprise architecture combined with some portion of ITOM and ITSM guideline are enough to support non IT centric organization like oil and gas or manufacturing.
tags: enterprise-architecture
background: Nowdays, information technology (IT) become one of supporting backbone for many business. Majority of the business process are done through combination of operation technology and information technology (digitalization). It force organization to create a standard guideline to manage their IT and OT process.
objective: to understand the usual embarked guideline on non IT centric company such as manufacturing and oil and gas.
deliverables: article
--- 

# Organization Enterprise Architecture Complexity

Each organization has different enterprise architecture style, it usually heavility influenced based on their core business process. 

For example, an oil and gas company and telecomuniation coompany typically has completely different enterprise architecture framework.

## Oil & Gas vs Telco Enterprise Architecture

| Industry | IT Enterprise Architecture | OT Enterprise Architecture |
|---|---|---|
| Telco | Complex & Depth | Minimal |
| Oil & Gas | Minimal | Complex & Depth |

Oil and gas company (upstream) core business process is natural resources (oil & gas) exploration & production, while telco company main process business is providing information technology services.

Due to the nature of the business process, telco company will have complex & depth enterprise architecture which govern almost all aspect of the end to end IT operation. Ranging from infastructure level(L0) all the way to the enterprise application layer (L4) if based on the ISA95

In other hand, oil and gas company tend to have minimal enterprise architecture as IT(information technology) is not their main core business process. IT in oil and gas industry is act as support tools for production. Mostly used for data acquisition and monitoring.

However, the OT(Operation technology) side of oil and gas company is more complex compared to the telco company because the oil production utilize various sophisticated engineering machine. Thats why oil and gas OT enterprise architecture tend to be more complex compared to the telco company.

<hr />

## Company with depth & complex IT & OT Architecture?

| Industry | IT Enterprise Architecture | OT Enterprise Architecture |
|---|---|---|
| Banking | Complex & Depth | Complex & Depth |

yes, banking industry especially the leading bank on a certain nation usually has their **own datacenter** and **IT is used as core business process** on **banking industry**, causing the organization to create depth & complex enterprise architecture for the OT and IT.

# Minimal Enterprise Architecture 

Organization with IT as supporting tools tends(not the core business process) to only govern some certain area such as infrastructure & networking and not really govern the enterprise level part (application used on the office level/**outside the plant**) because the enterprise application layer usually outsourced to the vendor as managed packaged application.

&mdash; organization tend to mix between EA(enterprise architecture), ITOM(Information technology operating model) and ITSM (information technology service management).

## Combining EA, ITOM and ITSM as ITOT process philosophy

![postimage100](/assets/images/2025-12/EA.svg)
[High level data flow for OCR Technologies](/assets/images/2025-12/EA.jpg){: .center-image }

Idelly, the EA document is combining three difference IT governance type such as : EA itself, ITOM and ITSM. Each of  five component of information system whcih consist of : hardware, software, data, process and people will be governed by one or more IT governance type.

| No | Guideline | Type | Example |
|---|---|---|---|
| 1 | Hardware | EA, ITOM | Infrastructure Architecture, Network Architecture, <br /> Network operation tools, bill of material |
| 2 | Software | EA, ITOM | SDLC, Integration architecture, <br /> Application Architecture,  DevSecOps |
| 3 | Data | EA, ITOM | Data flow diagram, Entity relationship diagram (ERD) |
| 4 | Process & People | ITSM | Access management, Change management, Patching management <br /> Incident management, maintenance standard operation procedure |

Following is the typical minimal enterprise architecture guideline for an organization which **not use IT as their main business process**:

Overview

- **Background**: Why organization need to govern enterprise Architecture. Usually referring to the organization policy.
- **Scope**: Scope of the document

Enterprise Architecture (EA) & ITOM (IT Operating Model)

- **SDLC**: Software Development Life Cycle (SDLC)
- **Integration Architecture**: Typically exist for organization with many sub holding. it govern how the sub holding IT infrastructure/application layer is integrated with the holding IT systems
- **Network Architecture**: standard network architecture to connect application server, databases server, network component like switch, router, firewall and security enforcement.

ITOM

- **DevSecOps**: Infrastructuring monitoring and observation. Typicall has three level of monitoring. L1 can be done by anyone as it based on available system health dashboard. L2 and L3 are done by developer who has the technical domain knowledge of the application.

ITSM (IT Service Management)

- **Access Management**: How access is managed on infrastructure/application level.
- **Change Management**: govern the deployment process to cater new patch/updates.
- **Patching Management**: Standard operating procedure to prepare the patch.
- **Incident Management**: process to manage issue (incident) encountered on the application/IT infrastructure, including the SLA (service level agreement)
- **Maintenance**: standard operating procedure to perform maintenance on their system (operating system level,software, network or infrastructure).
- **Operation Procedure**: Case by case guideline for the end user to operate the software or application. Usually also complimented with RACI(Responsibility, accountability, Consult and Informed) Matrix

note: patching management, incident management and maintenance usually will be governed by release management guideline.

EA, ITSM and ITOM

- **Release Management**: guideline to prepare end to end readiness checklist from all component of information system (hardware, software, people, process and data)