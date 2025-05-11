---
layout: posts
author: Degananda Ferdian
categories: Product
series-code: CUSTOM001
excerpt: Market research activity need to be started before starting a B2C (Business to Customer) product. There are several form of the research. MVP is one of it.
tags: Product
topics: Product
subtitle: Hello world subtitle of this post
ptype: Issues
background: a Market validation is required before full burst invesment on product development to reduce potential risk.
objective: to launch a bare minimum MVP for Personal Milestone Management Platform.
deliverables: article & illustration
---

    The fastest way to conduct market research is by releasing the product as soon as possible.

# Why does it Matter?

Releasing MVP in the simplest form of the product can be a good way to start market research. While the functionality is a bare minimum and might leave not good impression to the customer it has two beneficial trade off:

- 1.**Honest user feedback**: Usually market research is done using survey. Releasing a bareminimum functional MVP let the potential user gave feedback from actual product rather than based on assumption (questionare/interview)
- 2.**Actual User Story Definition**: Rather than developing a product roadmap using fabricated user requirement, its better to get the requirement from the actual user that tried the product.

## a Bareminium Feature

    Start with an Assumption: The Main persona for peronal milestone management is a graduated bachelor with age range of 22-28 Years of Age. The assumption will be validated using MVP.

a personal milestone management platform that target a young undergradute with age 22-25 which going to help land their dream achievement (mainly: <b>job</b>, alternatively: <b>idealism</b>) need to cater following capabilities:

- 0.Onboarding / Registration Flow (Absolutely needed)
- 1.Manage milestone for personal growth
- 2.Progress Tracking
- 3.Notification system that will remind critical mileston due date.
- 4.(dataset) an Access to list of activity (habit, course & training )

# Development & Deployment Strategy

    a MVP ideally should be launched as soon as possible with following caveat: How the apps can be shared without feeling embarassed (due to lack of feature / UI/UX). It should be launched quick with bare minimumc core feature and user experience.

## Technology Stack

in order to launch the MVP in timespan of 8 weeks(40 Working Days) with single fullstack dev (writer), Below are the technology stack that will be used for milestoneku.com 

    Please note that the following stack actually not ideal for MVP. it was referenced from enterprise apps (most close but lighter, cant afford the cost OKD/OCP) for educational purposes. 

Engine should be replaced with cloud native component such as Azure App services, AWS App runner.

| No | Category | Technology Stack   |
|:--------:|:-------:|:------:|
| 1 | Engine  |  K3S | 
| 2 | Backend  |  Java Springboot & Python Flask | 
| 3 | Frontend  |  React | 
| 4 | FE Buildtool  |  Vite | 
| 5 | Repository | Github |
| 6 | CI/CD | Jenkins |
| 7 | CSS | Scratch |
| 8 | Load Balancer | HAProxy |
| 9 | Databases | PostgreSQL |


## Application Architecture

![postimage100](/assets/images/2025-05/milestoneku.svg)
[MVP Apps Architecture for Milestoneku](/assets/images/2025-05/milestoneku.jpg){: .center-image }

    Apps will be hosted on digitalocean (BE) and AWS (FE). Some of the component are placed within same VM to optimize the budget.

Springboot will be used to serve core business logic and data server API while flask will be used to serve API that related with recommendation because hoping the MVP will have good user traction and start to incorporate ML stuff.

    infrastructure deployment will be executed using terraform (resource provisioning) and ansible (configuration)

## Bill of Material


| No | Bill Category | Monthly Cost |  Assumption   |
|:--------:|:-------:|:------:|:------:|
| 1 | AWS Amplify  |  $0 | Free due to the MVP wont reach the amplify quota. 5000 mins build; 5 gb CDN storage; 500K request per month or +- 16K Request per day | 
| 2 | DO VM#4 Jenkins (On/Off)  |  $12 | SG Basic Regular 1vCPU 2gb of RAM | 
| 3 | DO VM#1 Load Balancer  |  $4 | SG Basic Regular 1vCPU 512 of RAM | 
| 4 | DO VM#3 K3S, PostgreSQL  |  $18 | SG Basic Regular 2vCPU 2gb of RAM | 

total (without jenkins): <b>$22</b> / Month <br />
total (with jenkins): <b>$34</b> / Month

    Most likely jenkins will be used for initial setup only just to demonstrate the CI/CD to reduce the cost (limited budget.)

## Timeline

<link  rel="stylesheet"  type="text/css"  href="/assets/css/dganttchart-style.css">
<div id="myganttchart"></div>
<script  src="/assets/js/dganttchart.min.js"></script>
<script>
            let data = [
                {
                    "startDate": "2025-03",
                    "endDate": "2025-04",
                    "itemName": "Build FE"
                },
                {
                    "startDate": "2025-03",
                    "endDate": "2025-04",
                    "itemName": "Backend Development"
                },
                {
                    "startDate": "2025-03",
                    "endDate": "2025-08",
                    "itemName": "User Traction Monitoring"
                },
            ];

            let separator = [
                {
                    index: 0,
                    separatorName: "Development"
                },
                {
                    index: 2,
                    separatorName: "Test the water"
                }
            ]
            var myChart = new DGanttChart("myganttchart", data, separator);            
</script>
