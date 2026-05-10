---
layout: posts
author: Degananda Ferdian
categories: jekyll
series-code: n/a
excerpt: Just like NodeJS, ruby has two mechanism on resolveing the ruby library dependencies, its either using global package dependencies or local one through the Gemfile.lock
tags: debug dependencies
background: Jekyll is ruby based SSG (static site generated) and naturally all the coding principles, syntax as well as dependencies management will follow ruby bundler behavior/mechanism.
objective: To debug and understand jekyll dependencies issue during deployment
deliverables: Article & Illustration
typora-root-url: ./../../../../
---

# The Differences Between Physical ERD vs Logical ERD

The target audience and purposes between physical ERD and logical ERD are **different** but they are dependent on one to another. Infact, logical ERD is helping to bridge between business user or functional team (business analyst, product owner or UI/UX designer) and technology implementor. Physical ERD must be created once the business team agree with the logical data model (logical ERD).

Below are differences between physical and logical ERD in various aspects

| Parameter | Logical ERD | Physical ERD |
| --------- | ----------- | ------------ |
|           |             |              |

# Converting Logical to Physical ERD Approach

Below are the step by step to convert following logical ERD to physical ERD

![postimage100](/assets/images/2026-05/perd1.jpg)
[Milestoneku.com stage-0 logical ERD](/assets/images/2026-05/perd1.jpg){: .center-image }

## Domain and Entity Scoping

Depending on the agreed SDLC (softwre development life cycle) during the project, the approach to convert logical into physical ERD might be different. On waterfall scenario, all of the logical table will need to be converted into physical DDL (data definition language) where as on agile, usually the conversion will be done on several sprint. For example, on sprint one, only user and role domain are converter into physical ERD. Then, on 2nd sprint, the next domain will be picked up.

SDLC will impact the project execution results. Rigid waterfall process will ensure the ERD to be freezed at the beginning on the projects, making business user or functional team can't revise the business logic at will. High chance that the end product will not satify the business.

In otherhand, on agile scenario, the physical and logical ERD might be revised every sprint. Technical team and business team will keep aligning the refining the ERD with actual business needs. Based on our experiences, **ERD is a living collaborative document** and should be driven by collaboration of business and technical team. It must be able to get updated to improve the quality of product as long as its feasible technically (not breaking the whole apps/server or causing major refactoring which require huge effort).

Below are the entity scope used on this artcle

1. User
2. Role

## Identifying the Entity Attrbiute Data Type

