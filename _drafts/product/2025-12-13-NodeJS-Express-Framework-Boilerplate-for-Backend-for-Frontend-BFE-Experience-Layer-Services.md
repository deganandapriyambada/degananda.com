Backend services architecture has been evolving in past few years.

One of the most well known backend services style which adopted by many start up is **BFE** (backend for frontend) architecture pattern/style.

# Backend for Frontend

BFE (backend of frontend), is an architecture style where the backend services is solely focus to serve the the front end needs. 

for example, a SaaS platform has two sales channel: web frontend and mobile apps, BFE will match the required data model dan business requirement needed by for **each frontend**.

BFE services or also known as experience services is located **between frontend services and backend domain services**.

## Characteristics of BFE

Below is the rule of thumb to applied on the backend services to become BFE / experiences services:

1. Specifically built per frontend channel (one BFE per channel)
2. BFE require correspending frontend consumer, if there is no FE channel on the platform, there is no reason to build BFE
3. Materialized response - WYSIWYG; what you see is what you get. instead of calling multiple API, BFE ideally should have everything is one fetch (lazy load still acceptable).
4. BFE **should not directly interact with the databases** 
5. BFE will call one or more domain services to fetch or make a transaction using various protocol (depending on the domain services interface) from REST, gPRC, GraphQL, SOAP, etc.
6. BFE will transform the data from domain services with following transformation scope: sorting, filtering, payload transformation, data masking, data enrichment and UI-validation. Pure presentation business rule.
7. usually cached
8. stateless
9. has correspending frontend version.
10. Role based access control
11. platform based access control
12. rate limiting
13. focus on UI-driven orchestration (presentation), **highly related with read scenario** while saga orchestrator is more focus on write transaction.

## Boiler Plate