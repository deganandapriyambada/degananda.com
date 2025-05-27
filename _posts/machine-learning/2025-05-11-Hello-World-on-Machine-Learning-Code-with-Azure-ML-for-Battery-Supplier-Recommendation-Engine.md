---
layout: posts
author: Degananda Ferdian
categories: ml
series-code: HSD001
excerpt: Hello Machine Learning. First step on writing ML Code on Battery Supplier / Procurement recommendation use cases.
tags: ml azure-ml regression
topics: ml azure-ml regression
subtitle: Hello world subtitle of this post
ptype: Issue
background: Trying machine learning for the first time. Attempt to create "hello world" like in microservices world.
objective: to traing a model and expose the model in an API
deliverables: Article, Ilustration
---

# ML Algorithms Categories

    Classification Algorithms will be used on this article as its relatively simple algorithm and suitable for "hello world" that require simplicity.

## What is ML for BE Developer

![postimage80](/assets/images/2025-05/ml.png)
[ML in nutshell for Backend Developer](/assets/images/2025-05/ml.png){: .center-image }

imagine on a POST API that receieve data, apply business logic and (data service) store the data on databases. Machine learning workflow is similar (not same!). ML will receive tons of data set as input, train the model using selected algoritm and the output is a trained model.

## Regression

<u>Objective:</u> to predict number (continuous value)

<u>(Simplified) Flow:</u> have a sets of number, predict what is the next number in some span period of time
.
<u>sample use cases:</u> Weather forecast, sales forecast, house price forecast.

## Classification

<u>Objevtive:</u> Predict a category / give a label.

<u>(Simplified) Flow:</u> have a sets on number and the <b>pre-identified category / label</b> on the number, predict the category based on given number

<u>Sample use cases:</u> human health diagnosis, machine health diagnosis

## Clustering (Anti of Classification)

<u>Objective:</u> to identify a group of number <b>without any predefined label</b>

<u>(Simplified) Flow:</u> have a sets of number and classify the cluster/group based on similarities

## Dimentional Reduction 

<u>Objective:</u> Simplyfying data before training

<u>(Simplified):</u> a data sets has 1000 parameter/faeture, reduce into 2-3 **important** feature without losing critical information.

## Deep Learning

<u>Objective:</u> To mimic human brain for vision and language

<u>(Simplified) Flow:</u> Have sets of connected data / linked data then identify the pattern.

<u>sample use cases:</u> Face recognition, speech to text, GEN AI.

# Use Cases

    the Topic for Hello ML is about Battery

## What is Battery?!

Battery is a devices or hardware that able to convert trasmit the stored chemical energy into electric energy and <b>store the electric energy</b>. The electric energy is stored on a component <u>cell</u> ("battery cell").

## Battery Component (Simplified)

    Charging Process -> [Ingress] Cathode -> [Router] Eletrolyte -> Discharging Process -> [Egress] Anode -> Device (that will use the battery)

There are three main component that reside on a battery
- (top) **Cathode** / Positive Terminal: Incoming Electron during charging will come to cathode then it stored on the battery cell. Basically cathode is the "Ingress" before the respond will be sent to the client.
- (Middle) **Electrolyte**: a Transport layer/Router that can carry ION (atom or molecul that has electricity) between anode and cathode
- (bottom) **Anode** / Negative Terminal: a current will be flow in to the anode to device cirtcuit. Basically an "Egress"  (from the perspective of device that use the battery)

## Battery Performance Evaluation

    Source: https://www.batterypowertips.com/what-to-consider-when-evaluating-battery-performance-faq/

Typically to evaluating a battery performance can use following (telemetry data)

- 1.Cell level
- 2.Module Level
- 3.Pack level
- 4.Energy Density
- 5.Power Density
- 6.C Rate
- 7.Cycle Life
- 8.Charge / Discharge Efficiency
- 9.Self Discharge Rate
- 10.Operating Temperature
- 11.Thickness
- 12.Calendering Pressure

# Use Cases Details

![postimage100](/assets/images/2025-05/battery.svg)
[Battery Supplier Recommendation Engine](/assets/images/2025-05/battery.jpg){: .center-image }


a classification will be based From those 12 feature or metrics. 

    As a buyer or manufacturer that require to buy a battery from certain vendor need a tools to decide the supplier during procurement. 

buyer or manufacturer need a list of supplier that can provide the best performance battery for them.

## Input

- (Buyer/manufacture defined preferences) Supplier Name
- (Buyer/manufacture defined preferences) Battery Chemistry (Li-Ion, LFP, NCA, NMA, etc)
- (Buyer/manufacture defined preferences) Environmental Condition(Humidity, Ambient temperature, Dust exposure), Altitude and Pressure
- (Buyer/manufacture defined preferences) Battery Performance Grade
- (Reference from market) 12 feature / metrics.

## Output

- Buying Recommendation based on Battery performance and Buyer preferences

## Execution Steps

- 1.Generate data sets with 12 feature (labelled)
- 2.Classify those 12 feature into battery performance grade : Premium, Standard, Utiltiy

those perfromance grade will be used by vendor/manufacturer to determine their needs.

| No | Battery Performance Grade | Application   |
|:--------:|:-------:|:------:|
| 1 | Premium  |  EV, Medical Devices, Aero Spaces | 
| 2 | Standard  |  Consumer Electronics | 
| 3 | Utility  |  Powerbank, flashlight | 

- 3.Get a market data:  List of battery supplier, List of battery Chemistry and Environmental factor (Humidity, Ambient temperature, Dust exposure) that applicable in manufacturing
- 4.Retrain the model with additional market data
- 5.Build API so buyer can input following data to the API : Supplier Name, Environmental Factor and Performance grade.
- 6.Output of the API will be list of eligible battery specs.


# Pre-Requisites

## Needed Cloud Resources
- Provision azure machine learning instances
- Provision compute engine for azure ML 

## Hello World

![postimage100](/assets/images/2025-05/azureml.jpg)
[ML Helloworld on Azure ML Studio](/assets/images/2025-05/azureml.jpg){: .center-image }


on azure machine learning studio, create a notebook and create a file called <u>hello.py</u>

wrote following script

```python
    print("Hello Machine Learning world!! ")
```