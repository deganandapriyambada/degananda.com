---
layout: posts
author: Degananda Ferdian
categories: nodejs
series-code: HSD001
excerpt: there are at least five mandatory component to be added and configured on the express project framework from the environment variables all the way up to the test script.
tags: nodejs express
background: a Proper nodejs express project structure can help the whole team to gain more productivity as the source code are well organized and make debugging easier.
objective: to understand one of references for nodejs with express framework project structure
deliverables: Article
---

# No Omnipotent of ExpressJS Project Skeleton

&mdash; Generally, There is no official & omnipotent express js project structure or project skeleton.

The NodeJS communities have different style and preference to organiza the project structure or usually called as nodejs project boilerplate. Each organization or lead developer might have their own business requirement to met. Resulting in varies available express js project boilerplate or folder skeleton that available on the internet.

However, eventhough there is no omnipotent best practices set on the express js framework, any developer lead should set a standard project skeleton on their organization to increase the productivity of their team.

# Project Skeleton References

below is one of nodejs product structure references.

```json
project-root/
├── .git/
├── .gitignore
├── .env
├── package.json
├── server.js
│
├── src/
│   ├── config/
│   │   ├── index.js
│   │   └── index.test.js
│   │
│   ├── middleware/
│   │   ├── auth.middleware.js
│   │   ├── auth.middleware.test.js
│   │   ├── error.middleware.js
│   │   └── error.middleware.test.js
│   │
│   ├── utils/
│   │   ├── db.js
│   │   ├── db.test.js
│   │   ├── date.util.js
│   │   ├── date.util.test.js
│   │   ├── file.util.js
│   │   └── file.util.test.js
│   │
│   ├── services/
│   │   ├── user/
│   │   │   ├── model/
│   │   │   │   ├── user.model.js
│   │   │   │   └── user.model.test.js
│   │   │   ├── dto/
│   │   │   │   ├── user.dto.js
│   │   │   │   └── user.dto.test.js
│   │   │   ├── dao/
│   │   │   │   ├── user.dao.js
│   │   │   │   └── user.dao.test.js
│   │   │   ├── service/
│   │   │   │   ├── user.service.js
│   │   │   │   └── user.service.test.js
│   │   │   ├── interface/
│   │   │   │   ├── user.interface.js
│   │   │   │   └── user.interface.test.js
│   │   │   └── route/
│   │   │       ├── user.route.js
│   │   │       └── user.route.test.js
│   │   │
│   │   ├── post/
│   │   │   ├── model/
│   │   │   │   ├── post.model.js
│   │   │   │   └── post.model.test.js
│   │   │   ├── dto/
│   │   │   │   ├── post.dto.js
│   │   │   │   └── post.dto.test.js
│   │   │   ├── dao/
│   │   │   │   ├── post.dao.js
│   │   │   │   └── post.dao.test.js
│   │   │   ├── service/
│   │   │   │   ├── post.service.js
│   │   │   │   └── post.service.test.js
│   │   │   ├── interface/
│   │   │   │   ├── post.interface.js
│   │   │   │   └── post.interface.test.js
│   │   │   └── route/
│   │   │       ├── post.route.js
│   │   │       └── post.route.test.js
│   │   │
│   │   └── comment/
│   │       ├── model/
│   │       │   ├── comment.model.js
│   │       │   └── comment.model.test.js
│   │       ├── dto/
│   │       │   ├── comment.dto.js
│   │       │   └── comment.dto.test.js
│   │       ├── dao/
│   │       │   ├── comment.dao.js
│   │       │   └── comment.dao.test.js
│   │       ├── service/
│   │       │   ├── comment.service.js
│   │       │   └── comment.service.test.js
│   │       ├── interface/
│   │       │   ├── comment.interface.js
│   │       │   └── comment.interface.test.js
│   │       └── route/
│   │           ├── comment.route.js
│   │           └── comment.route.test.js
│   │
│   └── routes.js
│   └── routes.test.js
```
## Project initialization

at this stage, a baseline of expressjs project should be populated.

1. .git file intitiated
2. package.json
3. .gitignore (**important**, keep the source code on the repositories as minimal as possible and has no dependency with developer configuration)
4. .env - environemnt variables, keep all configuration on this file such as endpoint url, port, etc. do not store sensitive security information here
5. setup secure key management outside express. for example azure keyvault, etc.

component number 1 until 4 should be added on the project root level.

## Source Code

typically there are five type of source code

1. Services (business logic!)
1. Services/Model
3. Services/DTO (Data transfer object)
4. Services/DAO (Data access object)
5. Services/Interfaces
6. Route (controller logic when handling route)

depending on the project requirement and dev lead preferences, each of the source code type should have their own directory under **src** folder.

&mdash; business logic should be put on the services folder.

server.js or app.js(any name will do) should be the file name to intiate the express instances.

## Middleware

all middleware used on the project should stored on dedicated folder under src and injected on server.js

for example, lets say there are 3 route (/, /news and /admin). inject the authenticatio middleware on the server.js at same time when importing and activating the route to keep the code simple and clean.

note: it can also be separated from server/app.js and then imported to the server/app.js then inject it to each of the applicable route.

## Utils

All utilities functionality which can be reused by services or dao should be placed under utils folder inside src folder.

for example:

1. database connection initilization
2. date formatter
3. file manager
4. and so on..

## Test File for Unit Testing

    it is recommended to have test file with .test.js prefixes.

each of source code that require unit test should have corresponding .test.js file 