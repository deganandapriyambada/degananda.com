---
layout: posts
author: Degananda Ferdian
categories: Azure
series-code: ITOTB001
excerpt: AZ900 is an exam to obtain Microsoft azure fundamental(and general) certification which is really important for cloud practitioner that has interest in microsoft product. The certification is needed before proceed to more advanced and specialized certification 
tags: Azure
topics: Azure
subtitle: Hello world subtitle of this post
ptype: Draft
background: a Need to understand the scope of AZ900 certification
objective: to strategize on how to pass AZ900 microsoft azure fundamental certification
deliverables: Article & Ilustration
---
# The Importance of AZ-900 Assessment Scope
Before taking any exam or assessment, its crucial to understand the assessment scope in order to couple the learning process. Otherwise, we will ended up over study or downplay the preparation phase and eventually will ended up to fail the test due to expectation mismatch between exam prep and the actual assessment.

Moreover, we do have limited time to prepare for the exam, especially if the exam taken by a person who is also working in their weekdays and try to get their azure certificate in their mean time.

Hence, it is really important to strategize and optimize the limited amount that we have by understanding the exam scope so we can properly plan the learning process and focus on the exam key point.
# Exam scope of Azure Fundamental
There are several hint that given by Microsoft to pass Azure Fundamental (AZ-900) exam. It is divided into several key category
- Skill - certain skillset that required to pass the exam
- Azure Component Knowledge Proficiency - bare minimum understanding level of certain azure component that related to the exam theme
- Inter Component Knowledge Proficiency - ability to interlink between one azure component with other azure component. Usually it linked with a process that need to be followed.

    Most the exam question are revolved arround such topics: General Cloud concept (25-30%), Azure Architecture+Azure Services (35-40%), Azure Management & Azure Governance (30-35%)

# Azure Component Knowledge Proficiency

AZ-900 is an exam that test the fundamental knowledge of cloud in general and Microsoft azure in particular. Some of the advanced certification require AZ-900 because its the fundamental for most (if not all) of certification branch in Microsoft Azure. Generally the certification is prepared for those who are on following software engineering concentration area : **Software development**, **Database Management**, **Infrastructure management**

There are Three Main Azure Component Category That Need to Be Mastered on AZ-900

## Azure Compute
Azure compute is focused on the application development, deployment and containerization.

consist of  following component:
- Azure VM (Virtual Machine, Linux VM, Windows VM)
- Azure VM Scale Sets
- AKS (Azure Kubernetes Services)
- Azure kubernetes fleet manager
- Azure redhat open shift
- Azure App Configuration
- Paas Compute (Azure Logic Apps, Azure App Services)
- Server Less Compute (Azure Function)
- High Performance & Specialized Compute (Azure Batch, Azure Cycle Cloud)
- Edge & Hybrid Computing (Azure stack hub and Azure Stack Edge)
- Azure Container Insight
- Azure Virtual Desktop
- Azure Compute Fleet
- Azure Spot Virtual Machine
- Azure Spring Apps
- Azure VMWare Solution
- Azure Batch
- Azure Cloud Services
- SQL Server on VM
- App services for Static Web Apps
- Windows Server
- Azure Dedicated Host
- Azure VM image Builder
- Azure Container Instances
- Azure Container Apps
- Web App for Container
- Azure Service Fabric
- Azure Container Registry
- Azure Container Storage

## Networking
Focus on how to connect and secure azure cloud component internally or bridging between on premises application with azure native cloud.
consist of  following component:
- Azure Virtual Network
- Azure Subnet
- Azure Peering
- Azure DNS
- Azure VPN Gateway
- Azure Express Route
- Public and Private Endpoints
- Azure App gateway
- Azure load balancer
- Azure Bastion
- Azure DDoS Protection
- Azure DNS
- Azure Firewall
- Azure CDN
- Azure WAF (Web Application firewall)
- Azure Front Door
- Azure Network Function Manager
- Azure Virtual network manager
- Azure NAT Gateway
- Azure programmable connectivity
- Azure Private Link
- Azure firewall manager
- Network Watcher
- Traffic Manager
- Virtual Network
- Virtual WAN

## Storage
focus on various type of storage that can fulfill business requirement.
consist of  following component:
- ADLS (Azure Data Lake Storage)
- Archieve Storage
- Azure Backup
- Azure Managed Lustre
- Azure Data Share
- Azure Files
- Azure Blob Storage
- Azure Databox
- Azure Disk Storage
- Queue Storage
- Azure Elastic SAN
- Storage Account
- Storage Explorer
- Azure Container Storage

## Databases
- Azure managed redis
- Azure cache for redis
- Azure data factory
- Azure database for Maria DB
- Azure SQL Databases
- Azure Migration Services
- Azure SQL Edge
- Azure SQL Managed Instances
- Azure managed instances for Apache Cassandra
- Azure Confidential ladger
- Azure Cosmos DB

## Messaging/Integration
Focus on integrating **cloud-to-cloud** and **on-premises-to-cloud** integration of application, data and process.
- Azure Service bus
- Azure Event hub
- Azure Data Factory
- Azure API management
- Azure Event Grid
- Azure Health Data Services
- Azure Web Pub/Sub

    it is highly recommended to at least understand the high level functionality and architecture of each azure component that listed above. it will give expose the azure product to the examinee and increase their familiarity.

# Passing grade measurement

we have to at least score more than 700 in order able to pass the exam. Here are the mapping between exam topics and measured skill taken from micorosft official website (Source: https://learn.microsoft.com/en-us/credentials/certifications/resources/study-guides/az-900)

    there are almost 60 topics that need to be studied, if you plan to take the exam in 1 month, then at least 2~3 topics per day need to be covered. 

| No | Measured Skill | Measured Parameter |
|:--------:|:-------:|:-------:|
| 1 | Describe Cloud Computing  |  Define cloud Computing | 
| 2 | Describe Cloud Computing  |  Describe shared Responsibility Model | 
| 3 | Describe Cloud Computing  |  Define cloud Model: including public, private and hybrid | 
| 4 | Describe Cloud Computing  |  Identify appropriate use cases for each model | 
| 5 | Describe Cloud Computing  |  Describe consumption base model | 
| 6 | Describe Cloud Computing  |  Compare cloud pricing model | 
| 7 | Describe Cloud Computing  |  Describe serverless | 
| 8 | Describe Benefit of Using Cloud Services  |  Benefit of high availability and Scalability on the cloud | 
| 9 | Describe Benefit of Using Cloud Services  |  Benefit of reliability and predictability on the cloud | 
| 10 | Describe Benefit of Using Cloud Services  |  Benefit of security and governance on the cloud | 
| 11 | Describe Benefit of Using Cloud Services  |  Benefit of manageability on the cloud | 
| 12 | Describe Cloud Services Type |  Infrastructure as Services (IaaS) | 
| 13 | Describe Cloud Services Type |  Platform as Services (IaaS) | 
| 14 | Describe Cloud Services Type |  Software as Services (SaaS) | 
| 15 | Describe Cloud Services Type |  Identify appropriate use cases for each cloud services type (IaaS, SaaS and Paas) | 
| 15 | Describe the Core Architectural component of azure | Describe azure region, region pairs and sovereign region | 
| 16 | Describe the Core Architectural component of azure | Describe availabiliy zone |
| 17 | Describe the Core Architectural component of azure | Describe azure data center | 
| 18 | Describe the Core Architectural component of azure | Describe azure resources and resources group | 
| 19 | Describe the Core Architectural component of azure | Describe subscriptions | 
| 20 | Describe the Core Architectural component of azure | Describe management group | 
| 21 | Describe the Core Architectural component of azure | Describe the hierarchy of resources group, subscription and management group | 
| 22 | Describe Azure compute and networking services | Compare compute types, including container, VM and functions | 
| 23 | Describe Azure compute and networking services | Describe virtual machine option : Azure VM vs Azure Virtual Machine sets, availability sets and Azure virtual desktop | 
| 24 | Describe Azure compute and networking services | Describe required resources for virtual machine | 
| 25 | Describe Azure compute and networking services | Describe application hosting options (Web apps vs container vs virtual machine) |
| 26 | Describe Azure compute and networking services | Describe virtual networking (Azure virtual network, virtual subnet, peering, DNS, VPN Gateway, Express route) |
| 27 | Describe Azure compute and networking services | Define public and private endpoint | 
| 28 | Describe Azure Storage Services | Compare azure storage services | 
| 29 | Describe Azure Storage Services | Describe storage tier | 
| 30 | Describe Azure Storage Services | Describe redudancy options | 
| 31 | Describe Azure Storage Services | Describe storage account options and storage types | 
| 32 | Describe Azure Storage Services | identify option for moving files: AzCopy, azure data share, Azure file sync, Azure Storage Explorer | 
| 33 | Describe Azure Storage Services | Describe migration option (Azure migrate and Azure databox) | 
| 34 | Describe Azure identity, access and security | Describe directory services in azure (Ad/Entra ID and Entra Domain Services) |
| 35 | Describe Azure identity, access and security | Describe authentication method in azure (Single sign on/SSO, Multi Factor Authentication/MFA and Passwordless) |
| 36 | Describe Azure identity, access and security | Describe External identities in Azure B2B/business to business and B2C/business to customer |
| 37 | Describe Azure identity, access and security | Describe Microsoft entra conditional access |
| 38 | Describe Azure identity, access and security | Describe Azure role based access control |
| 39 | Describe Azure identity, access and security | Describe concept of Zero trust |
| 40 | Describe Azure identity, access and security | Describe purpose of defense in depth model|
| 41 | Describe Azure identity, access and security | Describe microsoft defender for cloud |
| 42 | Describe Azure identity, access and security | Describe microsoft defender for cloud |
| 43 | Describe cost management in  Azure | Describe factor that can affect cost in Azure |
| 44 | Describe cost management in  Azure | Compare azure pricing calculator vs TCO(Total cost ownership) calculator |
| 45 | Describe cost management in  Azure | Describe Cost management capabilities on azure |
| 46 | Describe cost management in  Azure | Describe Purpose of tags |
| 47 | Describe feature and tools in Azure for governance and compliance | Describe the purpose of Microsoft pureview |
| 48 | Describe feature and tools in Azure for governance and compliance | Describe the purpose of Azure Policy |
| 49 | Describe feature and tools in Azure for governance and compliance | Describe the purpose of Resources Lock |
| 50 | Describe feature and tools in Azure for managing and deploying azure resources | Describe the azure portal |
| 51 | Describe feature and tools in Azure for managing and deploying azure resources | Describe the azure cloud shell: Azure CLI and Azure powershell |
| 52 | Describe feature and tools in Azure for managing and deploying azure resources | Describe the purpose of Azure Arc|
| 53 | Describe feature and tools in Azure for managing and deploying azure resources | Describe Infrastructure as Code (IaC) |
| 54 | Describe feature and tools in Azure for managing and deploying azure resources | Describe ARM (Azure resource manager) and ARM Templates |
| 55 | Describe monitoring tools in azure | Describe the purpose of azure advisor |
| 56 | Describe monitoring tools in azure | Describe the purpose of azure service health |
| 57 | Describe monitoring tools in azure | Describe the purpose of azure monitor: Log analytics, azure monitor alerts and application insight |

# Pre-exam training from microsoft
there at least three (optional) training that can be taken before taking the actual AZ900 Certification, those are : 
- Microsoft Azure fundamental: Describe Cloud Concept
- Microsoft Azure fundamental: Describe azure architecture and services
- Microsoft azure fundamental: Describe azure management and governance

    all of those training are provided by microsoft. Its recommended to take all the training before taking actual exam. Some of the exam question are potentially taken from the training material.

# Exam Dry Run
Microsoft provide an sandbox environment where we can actually try to took the test (dry run). 

    AZ900 Sandbox Exam: https://go.microsoft.com/fwlink/?linkid=2226877