---
layout: posts
author: Degananda Ferdian
categories: software-engineering-updates
series-code: n/a
excerpt: Manufacturing process involve the usage of casting mold to ensure all the product from different production batch has same quality and specifications to cut the production time and maintain the quality. Same goes with software engineering, boilerplate is used to ensure all developer across the team has same system architectural foundation and can focus on writting the business logic.
tags: authentication authorization
background: Both manufacturing and software engineering are a process to turn raw material into either semi finished goods (SFG) or finsih goods (FG). Software engineering turn business problem (raw material) into digital solution in form of web, mobile apps or a desktop app.
objective: To Understand the similar between manufacturing and software engineering in the context of process reuseability for maintaining product quality and specifications
deliverables: Article
typora-root-url: ./../../../../
---

# The Similarities Between Software Engineering and Manufacturing

Manufacturing is a process of turning raw material to semi finished goods or finished goods. Example on raw material to SFG(semi finished goods) scenario, steel manufacturer process raw iron ore on a furnance and turned it into steel plate. Those steel plate will be used by heavy equipment manufacturer to create vessel for vehicle.

Software engineering is a process of understanding business problem then create a **digital solution** in form of software (mobile apps, web, desktop based apps, backend system).

Both manufacturing and software engineering are processing a things and enrich it with additional beneficial feature. On software engineering, business problem will be extracted into user stories. Then, each of user stories will be solutioned and automated using "code" as software engineering is mainly focus on helping business through automation of repetitive task to improve the organization business process efficiency.

If **manufacturing has casting mold**, then **software engineering has boilerplate**. In cases of steel manufacturer, the raw iron will be put on a casting mold to ensure the steel plate has same specifications in every production batch and maintaining its quality. The same principle is also applied in software engineering, the code structure (or often called as boilerplate) will ensure every pieces of code on all systems has same specifications to ensure its maintainability and agility. 

If every user story require a new code structure, the development team will need to spend more time to define different code structure on each solution. It will delay the release cycle and directly impact with the organization digital transformation plan. Same code structure on every user story will greatly increase the development team efficiency.

Imagine an inhouse made enterprise system without standardized boilerplate, every apps on the digital system will have its own way to manage their code structure, terminology, readability causing the team who maintain the system to struggle and spend more time understanding the system structure as they have to study every system structure. The same code structure across all user story solution will make development team to focus on writing business solution code instead of focusing on the code structure. making the software shipment faster.

Below are the similarities between casting mold on manufacturing and boilerplate in software engineering

1. Both "casting mold" and "boiler plate" are a template to ensure every goods/solution produced has same/standardized specifications to maintain the quality.
2. Reuseable template will increase the production efficiency (less time to make goods/solution).
3. Casting mold reduce manual fabrication and boileplate reduce repetitive writing of code structure so that software engineer can focus write the business solution logic. 

## The Role of Boilerplate in Software Engineering

There are only two kind of code in software engineering. First type of code is system foundation line of code which focus on the core system such as HTTP listener, database connection, code structure (where to put model, utility, data access object, etc) and so on. Second type of code is business logic code that translate business requirement and business process into piece of code to make more efficient through automated validation, automated data input, automated aggregation and even artificial intelligence. **Business logic code will be added on top of the system foundation.**

Boilerplate is a standardized system foundational code structure that can be reused on other solutions **to ensure the same architectural pattern**. The standardization will ensure developer are speak in the "same languages", so that they dont debate where to put the code or how to structurize the project and can **focus on solving the business problem**.

For example, below is the code to initiating "express js" library to create HTTP based REST API.

```javascript
	const express = require('express')
	const services = express()
	app.listen(8888)
```

Now if every developer need to add such system foundation code in every API, it will consume a lot of their time where as developer should focus to write business solution. It is recommended to put all system foundation code on a boilerplate to ensure same architectural consistency.

## Common Archetypes of Boilerplate on Modern Software Engineering

 There are different archetypes of boilerplate depending on its function such as :

1. Structural Boilerplate - Define the project folder structure, class declaration
2. Configuration Boilerplate -  Framework specific boilerplate. For exampe, nodejs has package.json, ruby has Gemfile
3. Boostrap Boilerplate - Object initialization such as expressjs intialization.
4. Data Structure Boilerplate - Logical representation of business object and technical object
5. Data Access Boilerplate - Repeated CRUD operations boierplate
6. Error handling boierplate - Standardized error handling across the projected
7. CI/CD boilerplate - Repeated deployment and provisioning process on application and infrastructure level

Combination of those boilerplate archetypes will be combined into a **"framework"**. Hence, every framework will have different boilerplate. Its all depends on the created architectural decision and preferences.

Below are the common framework on both backend and frontend side of software engineering

| Framework                     | Type (Backend/Frontend)                     | Project Folder Structure                                     |
| ----------------------------- | ------------------------------------------- | ------------------------------------------------------------ |
| Layered Architecture (N-Tier) | Backend                                     | 1. /Controller<br />2. /Service<br /><br />3. /DAO (data access object)<br /><br />4. /Model<br />5. /Route |
| MVC (Model View Controller)   | Monolithic Fullstack (backend and frontend) | 1. /Controller<br />2. /Models<br />3. /Views                |
| Clean Architecture            | Backend                                     | 1. /Domain<br />2. /Usecases<br />3. Interfaces<br />4. Infrastructure |
| Hexagonal Architecrture       | Backend                                     | 1. /Core<br />2. /Ports<br />3. /Adapters                    |
| Feature Based                 | Backend                                     | /payment<br /> 1. controller<br /> 2. services<br /> 3. DAO  |
| Domain Driven                 | Backend                                     | /bounded-context<br />1. /payment<br />2. /ledger            |
| Component Based               | Frontend                                    | /Page<br /> 1. /Navigation<br /> 2. /Sidebar<br /> 3. /Footer<br /><br /> 4. /Modal |
| Redux                         | Frontend                                    | 1. /Dispatch<br />2. /reducer<br />3. /state<br />4. /render |
| MVVM                          | Frontend                                    | View <-> ViewModel <-> Model                                 |
| Atomic Design                 | Frontend                                    | Atoms -> Molecules -> Organism -> Template -> Pages          |
| Micro Frontend                | Frontend                                    | /frontend-apps<br />1. /billing-apps<br />2. /account-apps<br />3. /pos-apps |

note: those are the common framework on modern software engineering. Each organization might have their own framework. There is no best framework. It all depend on the business requirement and team condition. Thre is only best fit framework to specific conditions.
