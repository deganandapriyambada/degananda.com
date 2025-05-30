---
layout: posts
author: Degananda Ferdian
categories: ml
series-code: HSD001
excerpt: List of Paramete and Algorithm that commonly used to predict Battery State of Charge (SOC) based on the best practices.
tags: ml battery battery-soc
topics: battery-soc prediction battery-prediction
subtitle: Hello world subtitle of this post
ptype: Issue
background: a Battery capacity information is critical for researcher/manufacturer and end consumer depend on the cases. End consumer will need those information to plan their battery usage and researcher/manufacturer will need to create the most efficient battery's SOC during the simulation.
objective: to understand on how to compute battery SOC using pre defined sets of parameter and alogirthm that commonly used on the best practices.
deliverables: Article,  Ilustration, Source Code
---

# Definition of SOC

SOC is standds for state of charge. It show the number of remaining eletricity capacity of the battery and relative to the battery aging.  On Eletric vehicle cases, SOC show the remaining "fuel" of the vehicles because it indicates the electricity power/energy left on the battery pack.

Generally, SOC is represented using percentage (%) unit.

    100% SOC means the battery has full capacity and 0% mean the battery doesnt have any electricity left. It can't be used to power eletronic devices.

Over state of charging might impact the battery aging which translate into poor durability of battery. Hence, its  important to know the real value of SOC so that discharge can be commited and battery aging will be slowed down.

## Impact of Miscalculated SOC

- **Safety Impact**: Over charging the battery can cause fire on lithium-ion battery
- **Performance Imapct**: While preventing battery aging is not possible, slowing down battery aging is denitely possible. Its widely known that over charging battery will directly affect the battery aging or life span. Thats why in modern mobile phone, they have automatic electricity discharge at certain of SOC percentages to slow down the battery aging.
- **Operational Issues**: Imagine running an industrial machine/tools that powered by battery and suddently the tools is out of usage due to no eletricity left on the battery due to false negative/positive SOC percentage information It would affect the production chain leading to the reduced profit and unltimately can reduce revenue.
    
On modern MES/MOM platform that utilize SOC as their one of primary parameter on their analytics engine, the miscalculation of SOC can lead into bad decision making. Because wrong SOC data will affect the report that  generated by AI/ML/Statistical Model.

    In Short, SOC percentage value need to be calculated properly to prevent those catasthropic condition.

# Different Way to calculate SOC

##  Coulomb counting

Coulomb counting is executed online. This technique allow to compute battery SOC during the battery usages. It will measure how much eletric charge (Q) that flow in and flow out of the battery over some specific time. User will be able to see battery SOC in real time.

<p>
$$
SOC_{t} = SOC_{t_0} \pm \frac{1}{Q_{nominal}} \int_{t_0}^{t} I(\tau) \, d\tau
$$
</p>

Formula Breakdown

<p> \( SOC_{t} \) is the <b>updated state of charge</b> (% Percentage) </p>
<p> \( SOC_{t0} \) is the <b>state of charge of initial time  (% Percentage) </b>.</p>
<p> \( I(\tau) \) is Current at time. </p>
<p> \( Q_{nominal} \) is Nominal Capacity of the Battery (Ah or Column) </p>
<p> \( \int_{t_0}^{t} I(\tau) \, d\tau \) is total charge transferred between t0 and tt. </p>

Lets say the initial SOC is 100%. Each time electric charge is flow in or flow out the number of SOC percentage will be updated accordingly.

<script id="MathJax-script" async src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js"></script>

## Script: Predict SOC Using Coulomb Counting

{% jupyter_notebook "/assets/notebook/battery.soc.coulomb.ipynb" %}


## Extended Kalman Filter (EKF)	

    EKF Widely used by EV (Electric vehicle) manufacturer such as GM and Tesla

EKF is used to predict future state of system given by noisy measurement. Nosiy measurement meaning that the data that captured on the system is not fully trusted.

On battery cases, data such as voltage, current, temperature are captured using sensors which is really sensitive and has certain margin of error. Also, usually the unit of those data (voltage, current and temperature) are digitalized. Converting from analog to digital is involving rounding process, which introducing another noise. Thats the reason why EKF (Extended kalman filter) is commonly used on EV industries to predict battery state of charge (SoC)

EKF will make prediction and continously update those predictive based on the current measurement which is really suitable for SOC computation as the prediction need to be continously updated once in a while.  Kalman filter is used to predict linear data (straight) for example: a mathemical formula to determine distances distances (t) = speed * t where the speed is **constant** (constata, linear to time) resulting in straight line graph/plot

 On other hand, those same formula can be also non linear. distances (t) speed * t, where the speed and time are **variables** and resulting in curve plot/graph.


# ML Computed SOC Prediction

a prediction alogrithm will be used to train the model to determine battery SOC. A huge data quality dataset is needed to be able to use this approach with pre-defined labelled SOC (usually computed using **Coulomb counting**)

## Parameter List for ML Generated SOC

Parameter list:

- Voltage (v)
- Current (i)
- Temperature (T)
- SOC Label ( from: Coulomb counting )

## Available Algorithm

There are various algorithm to predict SOC using above parameter. Some of them Are:

1. Neural Network
2. Linear Regression
3. Gradient Boosted Trees / Random Forest
4. Etc

