---
layout: posts
author: Degananda Ferdian
categories: architecture
series-code: RELEARNSWE01
excerpt: Safety and Environmental Telematics data from IoT devices can be captured using edge gateway while surroundings data on the cloud can be captured through Web Scrapping and API Integration.
tags: iot d2c c2d
topics: iot
ptype: Issues
background: There are various way to collect enviromental and safety data from surroundings. 
objective: to create a data pipeline which support device to cloud data acqusition and cloud to cloud data acquisition
deliverables: article & illustration
---

# Capture Environmental and Safety Data

a Good architecture need to be able to incorporate various way of data aquisition strategies.

<hr />

First method to capture safety and environemntal telematics data (or also known as sensor readings data) by using iot devices and transmitted to cloud through different data transmission protocol.

The second method is to get the data from social media such as X(formerly known as twitter), Thread, Facebook, Instagram etc using a technique called web scrapping or web harvesting.  

    Web scrapping has a grey area on the data privacy. Always check the platform policy before harvesting the data.

Its often find safety or environemntal news on the city on those platform because anyone can post anything (not limited to specific content/category).

The last method (but not least) is getting the environmental and safety data through 3rd party provider. For example, weather information on specific country or city are available on weather.com and they provide API(Applicatio programming interface) for the data integration mechanism.

&mdash; The architecture should be able to capture those data using various method and support various protocol (agnostics)

## Environmental & Safety Information Data Sources 

Below are the environmental and safety information that will be captured automatiicaly to the platform from various source and acquisition method.

Apart from the auto-generation method, user will also have option to submit their report.

### Environmental

| No | Information | Data Source | Aquisition Method |
------------|----------|---------------|---------------|
| 1 | Temperature | IoT Devices (Pi) | Device/Edge to Cloud |
| 2 | Humidity | IoT Devices (Pi) | Device/Edge to Cloud |
| 3 | Weather Forecast | Weather platform | Web Scrapping |

### Safety Information

| No | Information | Data Source | Aquisition Method |
------------|----------|---------------|---------------|
| 1 | Fire Incident | X | Web Scrapping |
| 2 | Theft Incident | X | Web Scrapping |
| 3 | Damaged Road | X | Web Scrapping |
| 4 | Flood Incident | X | Web Scrapping |

### (Trivia) Lifestyle Information

to improve the user experience and reach the audience, the platform will also capture lifestyle information arround the city. 

| No | Information | Data Source | Aquisition Method |
------------|----------|---------------|---------------|
| 1 | Event | Event/Ticket Selling Platform | Web Scrapping |
| 2 | Discount | X, Discount Platform, E-Commerce | Web Scrapping |
| 3 | New Store/Place Openings | X | Web Scrapping |

# SudutKota - a unified news platform for Jakarta (Indonesia)

SudutKota (in english: Cities corner) is a platform where people can get up to date information about safety, environment and life style from other people post on different media. 

    In shorts: its an aggregator engine for safety, environemntal and lifestyle information

As the pilot experimental project, the data will be limited for Jakarta (Indonesia) region.

# L0 High Level Data Acquisition Architecture

Below are the architectural principles that will be used:

1. lambda architecture (batch and streaming segregation)
2. layered event driven architecture
3. Medallion / Lakehouse

it will be deployed on azure cloud using a combination of cloud native component and opensource component which deployed on Container.