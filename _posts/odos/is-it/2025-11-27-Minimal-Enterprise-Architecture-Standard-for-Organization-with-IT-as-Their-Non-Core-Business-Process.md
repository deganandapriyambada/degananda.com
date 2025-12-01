# Organization Enterprise Architecture Complexity

Each organization has different enterprise architecture style, it usually heavility influenced based on their core business process. 

For example, an oil and gas company and telecomuniation coompany typically has completely different enterprise architecture framework.

## Oil & Gas vs Telco Enterprise Architecture

| Industry | IT Enterprise Architecture | OT Enterprise Architecture |
|---|---|---|
| Telco | Complex & Depth | Minimal |
| Oil & Gas | Minimal | Complex & Depth |

Oil and gas company (upstream) core business process is natural resources (oil & gas) exploration & production, while telco company main process business is providing information technology services.

Due to the nature of the business process, telco company will have complex & depth enterprise architecture which govern almost all aspect from infastructure level all the way to the application layer. 

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

Following is the typical minimal enterprise architecture framework/guideline for an organization which not use IT as their main business process:

- **Background**: Why organization need the Enterprise Architecture
- **Scope**: Scope of the governed enterprise architecture level
- **SDLC**: Software Development Life Cycle 
- **Integration Architecture**: Typically exist for organization with many sub holding. it govern how the sub holding IT infrastructure/application layer is integrated with the holding IT systems
- **Access Management**: How access is managed on infrastructure/application level.
- **Change Management/DAB**: govern the deployment process to cater new patch/updates.
- **Software Upgrade/Patching Management**: Devops Process
- **Incident Management**: process to manage issue (incident) encountered on the application/IT infrastructure
- **Maintenance**

## Scope

# Improvement Opportunity Analysis

Note: below analysis will use manufacturing/oil & gas industry assessment which heavily concerned about their operation technology (OT) reliability, scalability & security.

