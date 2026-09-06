## Objectives

We are building low-code web scrapper which can be configured and deployed via website. Those scrapper will collect html source code of target site url **without bypassing any authentication wall** and **respecting their robots.txt** to avoid any privacy issue.

## User Stories

## Job List

There are two main jobs which has business logic and must be **reuseable** 

1. web crawling
2. web scrapping (parsing)

apart from the main jobs, we will have enabler jobs including

1. file mover
2. data ingestor to database (in this cases is postgresql)
3. log agent

all of these jobs will be managed by back office user interface. No orchestrator job is required because the workflow is fixed (web crawling -> web scrapping -> process the data into factual data -> load to the databases).

## Definition of reuseable-jobs 

Reuseable jobs has different meaning and requirement dependning on the nature of the project. In our cases, both of web scrapping and parsing jobs must be **deployable without code update** and **manageable through CLI** in order to **control the deployment through UI**. those are are definition of "reuseable-jobs" for our project.