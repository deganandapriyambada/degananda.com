---
layout: posts
author: Degananda Ferdian
categories: coding-docs
series-code: n/a
excerpt: Just like NodeJS, ruby has two mechanism on resolveing the ruby library dependencies, its either using global package dependencies or local one through the Gemfile.lock
tags: debug dependencies
background: Jekyll is ruby based SSG (static site generated) and naturally all the coding principles, syntax as well as dependencies management will follow ruby bundler behavior/mechanism.
objective: To debug and understand jekyll dependencies issue during deployment
deliverables: Article & Illustration
typora-root-url: ./../../../../
---

# Every Software Architecture Has Its Own Focus Area

Modern software engineering bring many architecture in one places to met the business requirement. Each platform architecture will be different from one to another. Big SaaS like facebook or netflix apply microservices concept in order to ensure the system scalability can handle the massive user bases where as SaaS with super niche user base like maintenance management SaaS might start with monolithic as their target user are low and to reduce the development cost overhead.

Both of the platform are applying correct architecture. Microservices is not better than monolithic. Its all depend on the case and scenario. However, if the goal is **maximum scalability**, for sure microservices is better than monolithic.

## Modern Software Architecture Key Components

When software engineer use "architecture" terms, they are actually referring to **combination of following software design archetypes**:

1. Infrastructure Architecture - Focus on physical architecture
2. System Architecture - focus on the **underlying technology stack and data flow at digital core level**. Digital core is set of systems that act as the technology foundation during integration or data exchange stages. Infrastructure architecture will **grealy influence** the hardware specs and network design choices.
3. Application Architecture - focus on logical representation strategy of business object and technical object on application level. Application architecture will direct affect at **application source code** with small implication to hardware specs.
4. Coding Design Pattern - purely focus on **source code structure** and has no implication to the hardware specs or network design
5. Coding Principles - focus on standardizing "**code writing**" style between all developers within same team/project/organization and has no implication to the hardware specs or network design

the combination is often called as **system architecture** which consist one selected architecture from each archetypes. 

Below are the differences between these four archetypes.

| Parameter                              | Physical Architecture                                        | System Architecture                                          | Application Architecture                                     | Coding Design Pattern                                        | Coding Principle        |
| -------------------------------------- | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ----------------------- |
| Deliverable                            | Network Architecture, Physical Architecture                  | Integration Architecture, Logical Architecture               | Business and technical object Representation on as backend Services | Source Code Structure                                        | Coding Standardization  |
| Common Pattern                         | Container Based, VM-based, Baremetal, Serverless, Serverless Architecture, Cloud Base, Hybrid Cloud, Multi Cloud | Monolithic, Microservices, Service oriented architecture (SOA), Event Driven Architecture (EDA), CQRS, SAGA Pattern | MVC, MVVM, MVP, Viper, Layered Architecture.                 | Factory Method, Abstract Factory, Singleton, Observer Pattern, Bulder Pattern | SOLID, Clean Code, KISS |
| Scopeo                                 | Enterprise Wide                                              | Platform                                                     | Application level                                            | class                                                        | team consensus          |
| Main Concern                           | Cost of Infrastructure, Security, Scalability, Reliability   | Scaleability, Reliability, Security Data Integrity, Cost of Development | Domain Separation, Modualrity,Services Representation alignment with business | Code Reuseability                                            | Code Readability        |
| Impact on hardware specs               | Major                                                        | Major                                                        | No Impact                                                    | No Impact                                                    | No Impact               |
| Impact on Development Cost (headcount) | Minimal                                                      | Major                                                        | Minimal                                                      | Minimal                                                      | Minimal                 |

## Best Practices Software Engineering Archtypes Combination Based on Usecases

There is **no silver bullet on software engineering practices**. Any software architectural decision can goes bad or went really good depending on the architect sense, experience and the overall team capability. 

Even a traditional monolithic with MVC (model view controller) is still better than complicated microservices with EDD architecture for b2b business platform like maintenance management which generally have low output as it only used by maintenance team.

In the end, there is best software architecture, its more on **correct architecture on the right places**.

&mdash; Each design pattern can be combined to tackle particular technical (team size, team capability) or business constraint (budget, cost).

Below are the practical combination of software engineering architecture archetypes on various use cases.

**Case A**: Non Mission Critical B2B application to plan,schedule and monitor maintenance program across all plant and the organization has company policites to **restrict** any data going out to cloud.

| Parameter        | Situation |
| ---------------- | --------- |
| Budget           | Minimum   |
| Throughput       | Low       |
| Mission Critical | No        |

note: mission critical means the software must be up 24/7 with minimum (to none) issues.

on such scenario following architecture combination are the best fit: monolithic, MVC, on prem VM based, without any coding design pattern and principle due to low throughput and not require high reliability as the application is more focus on helping user to input data to the system with minimum analyics (eg: maintenance reminder, sparepart stock check) 

**Case B**: Mission Critical B2B application for core banking with high security requirement

| Parameter         | Situation |
| ----------------- | --------- |
| Budget            | Maximum   |
| Throughput        | Very high |
| Mission Critical  | Yes       |
| Business Critical | Yes       |

On this scenario, following is the best fit architecture: container based on top of VM for maximum security, microservices, EDA (event driven architecture), Service Oriented Architecture (ESB style, to cater legacy system integration), SAGA, modern coding design pattern and principle to increase code readability and reuseability using factory method and SOLID.

Above architecture combination will have high system scalability, reliability, security and code re-useability but with high development effort and infrastructure cost.

Each solution architect might have different point of view and preferences. All will depend on the organization/team condition and situation. Nothing is wrong and nothing is right
