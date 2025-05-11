---
layout: posts
author: Degananda Ferdian
categories: ML
series-code: HSD001
excerpt: Given sets of battery performance metrics, classify the feature based on the battery grade. Each grading will determine the application of battery. Highest grade will go to EV factory. Lowest grade goes to toys manufacturer.
tags: ML Azure-ML Classification
topics: GO-Lang Installation
subtitle: Hello world subtitle of this post
ptype: Issue
background: Manufacturing company that use battery as their product BOM will need to source a battery from a correct supplier.
objective: to create machine learning model for battery grading.
deliverables: Article, Source Code,  Ilustration
---

# Article Pre-Requisite

- 1. Hello-World-on-Machine-Learning-Code-with-Azure-ML-for-Battery-Supplier-Recommendation-Engine

# Generate Data Sets

## Feature list

    a Mockdataset. Dataset will be generated using AI. Its not retrieved actual data from the industries. 

a battery perfromance grading will be determined on following features 

- 1.Cell level: Capacity/energy at single cell level (Wh or mAh)
- 2.Module Level: Performance at module level (Wh)
- 3.Pack level: Total energy at pack level (Wh or kWh)
- 4.Energy Density: Wh/kg
- 5.Power Density: W/kg
- 6.C Rate: Charge/discharge rate (e.g., 1C = full charge in 1 hour)
- 7.Cycle Life: Number of full charge-discharge cycles
- 8.Charge / Discharge Efficiency: % efficiency
- 9.Self Discharge Rate: % lost per month
- 10.Operating Temperature: Min–max °C
- 11.Thickness: Thickness of electrode (micrometers)
- 12.Calendering Pressure: Pressure applied during electrode manufacturing (MPa)


## Data Sets

![postimage100](/assets/images/2025-05/dataset.jpg)
[a Mock Data set for Battery specs and pre defined grading](/assets/images/2025-05/dataset.jpg){: .center-image }

    in real world scenario, data sets will be provided by the industry expert. bad data set will result in bad ML model. Resulting in false positive or false negative. Garbage In -> Garbage Out

download here : battery_dataset_dirty_200.csv

# Data Cleansing

# Exploratory Data Analysis