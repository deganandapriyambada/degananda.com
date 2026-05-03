---
layout: posts
author: Degananda Ferdian
categories: engineering-with-python
series-code: n/a
excerpt: Kalman filter is often paired with coulomb counting method to compute battery SOC (state of charge). Kalman filter has role to correct the estimated SOC from coulomb counting computation.
tags: python battery-engineering
background: SOC (state of charge) is one of the most critical paramter for consumer as it determines the energy left from the battery. Consumer need that SOC information to charge their devices (for example EV car or smart phone) before the devices is out of battery which can affect their activities.
objective: To understand how to incorporate coulomb counting and kalman filter to estimate and predict battery SOC
deliverables: Article & Illustration
typora-root-url: ./../../../
---


# The Importances of Accurate Battery State of Charge (SOC) for Consumer

State of charge (SoC) is one of critical parmater of battery especially for the electric car consumer because their main concern during the drive is the remaining battery charge (usually shown in percentage units with 100% as fully charged and zero percent for no more electrical power left).

## Dataset

Publicly available dataset is used and it can be fetched from following links:

1. filename: 555_Dis_0p5C.csv, can be downloaded at https://data.mendeley.com/datasets/cp3473x7xv/3

Data assumptions based on the experiment description:

1. Battery is charged after each test means the SoC is close to 1.0 or 0.99 before its discharged at 0.5c
2. Battery cell capacity 3 ah
3. Minimum Voltage 3.7v
4. Maximum voltage 4.2v
5. Dataset has been ordered based on the timestamp (ascending, older to newer) - means the first row shall have 0.99 SOC

## Project Setup

Create new conda project

	conda create --name battery-soc-kalman-filter python=3.12 

![postimage100](/assets/images/2026-05/kalman2.jpg)
[Create conda project](/assets/images/2026-05/kalman2.jpg){: .center-image }

activate the conda project

	conda active battery-soc-kalman-filter

![postimage100](/assets/images/2026-05/kalman3.jpg)
[Activate conda project using CLI](/assets/images/2026-05/kalman3.jpg){: .center-image }

install kernel for jupyer so the **conda environment** (dedicated python core libraries for that specific conda project) can be registered. Note that the package installation process must be done **once the conda environment has been activated**. Otherwise the kernel can't be registered to jupyter notebook.

	conda install ipykernel

![postimage100](/assets/images/2026-05/kalman4.jpg)
[Install ipykernal through conda](/assets/images/2026-05/kalman4.jpg){: .center-image }

or it can also be installed using pip install

	pip install ipykernel

once the installation of ipkernel is completed, execute following command to ensure the package installed properly on conda environment

	pip list | grep "ipykernel"

it shown return the ipykernel library version on the console 

![postimage100](/assets/images/2026-05/kalman5.jpg)
[validate the installation status of ipykernel packages](/assets/images/2026-05/kalman5.jpg){: .center-image }

register the kernel

	python -m ipykernel install --user --name battery-soc-kalman-filter --display-name "Python (battery-soc-kalman-filter)"


![postimage100](/assets/images/2026-05/kalman6.jpg)
[register new kernel that utilize python 3.12 from the newly created conda environment to jupyter notebook](/assets/images/2026-05/kalman6.jpg){: .center-image }

launch jupyter lab (dont forget to open new terminal **without conda environment**) and open it inside the conda environment folder source directory

	jupyter lab

![postimage100](/assets/images/2026-05/kalman7.jpg)
[Launch jupyterlab from console or cli](/assets/images/2026-05/kalman7.jpg){: .center-image }

now change the kernel into the newly created kernel (in this case, the kernel name is battery-soc-kalman-filter) then we're all set.

![postimage100](/assets/images/2026-05/kalman8.jpg)
[change to newly created kernel that use python 3.12](/assets/images/2026-05/kalman8.jpg){: .center-image }

&mdash; python version 3.12 is recommended for data science as it has the most compatability with many data science packages like tensorflow, etc.

## Kalman Filter Method

kalman filter is a method to estimate or predict or mesaure **indirect** battery SOC (state of charge) based on following telemtry parameter / tags

1. voltage (v)
2. current (ampere)
3. temperature (celcius)

Utilizing python to estimate battery SOC using pandas

below are the steps to estimate battery SOC using several python libraries

## Install pandas & matplotlib

Open a console with activated conda environment and execute following command

	conda install pandas

![postimage100](/assets/images/2026-05/kalman9.jpg)
[Install pandas to load and transform csv in dataframe](/assets/images/2026-05/kalman9.jpg){: .center-image }

and below is the command to install matplotlib

	pip install matplotlib

![postimage100](/assets/images/2026-05/kalman10.jpg)
[Install matplotlib for data visualization](/assets/images/2026-05/kalman10.jpg){: .center-image }

## Remove unnecessary data

Kalman filter method only utilize three battery tags/telemtry including voltage, current and temperature.

load csv into pandas dataframe 

```python
import pandas as pds
battery_telematics_dataset = "./dataset/555_Dis_0p5C.csv"
battery_telematics_dataframe = pds.read_csv(battery_telematics_dataset)
print(battery_telematics_dataframe.head())
```

remove unncesary column from the data frame and should only retain the battery telematics data

```python
cleansed_telematics_dataframe : pds.DataFrame = battery_telematics_dataframe.drop(["Step", "Status", "Prog Time","Step Time", "Cycle", "Cycle Level", "Cnt", "Procedure", "WhAccu", "Capacity", "Unnamed: 14"], axis=1)
dischargetelematics_dataframe : pds.DataFrame = cleansed_telematics_dataframe[cleansed_telematics_dataframe["Current"] < 0].reset_index(drop=True)
print(dischargetelematics_dataframe.head())
```

## Coulomb counting SOC estimation

Kalman filter method require a pre-estimated battery SOC because kalman filter is focus on **re-evaluating and correct the pre-estimated SOC** and often paired with coulomb counting method. 

```python
battery_cell_capacity = 3.0         
sampling_time = 1/60     
initial_soc = 0.99

def estimate_soc(prev_soc, current):
    negated_current = -current
    estimated_soc = prev_soc - (negated_current*sampling_time)/battery_cell_capacity
    return estimated_soc

prev_soc = None
for i, row in dischargetelematics_dataframe.iterrows():
    if i == 0:
        dischargetelematics_dataframe.at[i, "soc_coulomb_counting"] = 0.99
        prev_soc = 0.99
    else:
        now_soc = estimate_soc(prev_soc, row["Current"])
        dischargetelematics_dataframe.at[i, "soc_coulomb_counting"] = now_soc
        prev_soc = now_soc
print(dischargetelematics_dataframe.head())
```

## Coulomb Counting SOC correction with kalman-filter

Kalman filter genrally has lower corrected soc value compared to kalman filter because it accomodate drifting (correction of cumulative error) parameter.

```python
battery_voltage_min = 3.7
battery_voltage_max = 4.2
uncertainty = 1e-4   # P
process_noise = 1e-5 # Q_k
measurement_noise = 1e-3 # R_k

def ocv(soc_coulomb_counting):
    return battery_voltage_min + soc_coulomb_counting * (battery_voltage_max - battery_voltage_min)

def kalman_filter(soc_coulomb_counting, now_voltage):
    predicted_uncertainty = uncertainty + process_noise
    predicted_voltage = ocv(soc_coulomb_counting)
    voltage_span = (battery_voltage_max - battery_voltage_min)
    kalman_gain = predicted_uncertainty * voltage_span / (voltage_span * predicted_uncertainty * voltage_span + measurement_noise)
    corrected_soc = soc_coulomb_counting + kalman_gain * (now_voltage - predicted_voltage)
    updated_uncertainty = (1 - kalman_gain * voltage_span) * predicted_uncertainty
    return corrected_soc, updated_uncertainty

for i, row in dischargetelematics_dataframe.iterrows():
    if i == 0:
        dischargetelematics_dataframe.at[i, "soc_kalman_filter"] = row["soc_coulomb_counting"]
    else:
        adjusted_soc, uncertainity = kalman_filter(row["soc_coulomb_counting"], row["Voltage"])
        dischargetelematics_dataframe.at[i, "soc_kalman_filter"] = adjusted_soc

print(dischargetelematics_dataframe.head())
```

## Visualization

Both of coulomb counting SOC and kalman filter SOC will be displayed on different line in same chart to show the differences. 

```python
dischargetelematics_dataframe["Time Stamp"] = pds.to_datetime(
    dischargetelematics_dataframe["Time Stamp"]
)

import matplotlib.pyplot as plt

plt.figure(figsize=(10,5))

plt.plot(dischargetelematics_dataframe["Time Stamp"],
         dischargetelematics_dataframe["soc_coulomb_counting"],
         label="Coulomb Counting SOC")

plt.plot(dischargetelematics_dataframe["Time Stamp"],
         dischargetelematics_dataframe["soc_kalman_filter"],
         label="Kalman Filter SOC")

plt.legend()
plt.xticks(rotation=45)
plt.grid(True)
```

below are the visualization result

![postimage100](/assets/images/2026-05/kalman1.jpg)
[Coulomb counting SOC vs Kalman Filter SOC Result](/assets/images/2026-05/kalman1.jpg){: .center-image }

## Jupyter notebook source code

below are the complete jupyter notebook source code

{% include notebook/battery.kalman.filter.md %}