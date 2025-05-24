---
layout: posts
author: Degananda Ferdian
categories: ML
series-code: HSD001
excerpt: Generate dataset for Battery SOC prediction using Pybamm based on several scenarios and use cases.
tags: ML Battery SOC
topics: Prediction of Battery SOC
subtitle: Hello world subtitle of this post
ptype: Issue
background: Predicting SOC using ML(machine learning) will require at least thousands of dataset (higher is better) 
objective: to Generate battery behavior (voltage, temperature, current and Coulomb Counting SOC) data set.
deliverables: Article,  Ilustration, Source Code
---

# Data Set Consideration for Battery SOC Prediction

## Q - Battery Capacity

SOC is measured using **Coulomb counting** approach where Battery Capacity (Q) is one of the key parameter. Below is the formula of SOC measurement using Coulomb counting

$$ SOC_{t} = SOC_{t_0} \pm \frac{1}{Q_{nominal}} \int_{t_0}^{t} I(\tau) \, d\tau $$


Q is one of the computation variable. Hence, Generated dataset from pybamm should specific for a target battery model capacity. Each variant of Q need to have dedicated dataset. 

    Q (Battery Capacity) is changing based on the battery aging**. capacity will  be gradually reduced from 100% to 90% .. 80% etc. 

Each scenario might need dedicated dataset.

## I - Current

Power-Current relationship

$$ P = V \cdot I \quad \Rightarrow \quad I = \frac{P}{V} $$

C-Rate Definition

$$ C\text{-rate} = \frac{I}{Q} \quad \Rightarrow \quad I = C\text{-rate} \cdot Q $$


Based on above equation, The higher charging rate (C-Rate) will resulting in higher Current(I) and finally increase the eletricity drained from battery. Simulating Charging rate (C-Rate) and Current (I) would be quite difficult as its depend on several variables such as Voltage (V), Power (P) and Capacity (C)

    Pybamm can come in handy to generate simulated data for battery behavior

Those variable will be computed and simulated by pybamm using mathematical modelling.

# Dataset Generation Scenario

## Use Cases Scope

SoC Prediction will based on Hyndai Ionic 5 information that available on the internet.

- **Battery capacity**: 77.4 KwH
- **Chemistry**: Lithium Ion
- **Q (Ah)**: 128 Ah

Since the model param used is **Chen2020**,  **5 Ah will be used**.

## Paramter

    Battery Model is Lithium Ion SPM with Chen2020 Model Input parameter

Below is the updated / Overrided Parameter

| No | Parameter | Type |  Sources   |
|:--------:|:-------:|:------:|:------:|
| 1 | Battery Capacity (Q)  | Model Input | Set to 5 | 
| 2 | SoC  | Model Output | Computed using Coulomb Counting | 

## Variation

a total of 40 dataset are generated to cater battery aging scenario up to 40% loss or 60% battery capacity. 

    Dataset is generated per 1% capacity decrease from the initial value  

Major EV OEM suggest to replace the battery at 70~80% capacity.

| Variant | Capacity (%) | Q (Ah) |
|---------|---------------|--------|
| 1       | 100           | 5.00   |
| 2       | 99            | 4.95   |
| 3       | 98            | 4.90   |
| 4       | 97            | 4.85   |
| 5       | 96            | 4.80   |
| 6       | 95            | 4.75   |
| 7       | 94            | 4.70   |
| 8       | 93            | 4.65   |
| 9       | 92            | 4.60   |
| 10      | 91            | 4.55   |
| 11      | 90            | 4.50   |
| 12      | 89            | 4.45   |
| 13      | 88            | 4.40   |
| 14      | 87            | 4.35   |
| 15      | 86            | 4.30   |
| 16      | 85            | 4.25   |
| 17      | 84            | 4.20   |
| 18      | 83            | 4.15   |
| 19      | 82            | 4.10   |
| 20      | 81            | 4.05   |
| 21      | 80            | 4.00   |
| 22      | 79            | 3.95   |
| 23      | 78            | 3.90   |
| 24      | 77            | 3.85   |
| 25      | 76            | 3.80   |
| 26      | 75            | 3.75   |
| 27      | 74            | 3.70   |
| 28      | 73            | 3.65   |
| 29      | 72            | 3.60   |
| 30      | 71            | 3.55   |
| 31      | 70            | 3.50   |
| 32      | 69            | 3.45   |
| 33      | 68            | 3.40   |
| 34      | 67            | 3.35   |
| 35      | 66            | 3.30   |
| 36      | 65            | 3.25   |
| 37      | 64            | 3.20   |
| 38      | 63            | 3.15   |
| 39      | 62            | 3.10   |
| 40      | 61            | 3.05   |

# Script to Generate Batch Battery Dataset

## Install pybamm and Pandas

```python
%pip install pybamm
%pip install pandas
```


## Generate Dataset (40 Variant)


1. Running simulation for Variant 1 with Q = 5.0 Ah  
2. Running simulation for Variant 2 with Q = 4.95 Ah  
3. Running simulation for Variant 3 with Q = 4.9 Ah  
4. Running simulation for Variant 4 with Q = 4.85 Ah  
5. Running simulation for Variant 5 with Q = 4.8 Ah  
6. Running simulation for Variant 6 with Q = 4.75 Ah  
7. Running simulation for Variant 7 with Q = 4.7 Ah  
8. Running simulation for Variant 8 with Q = 4.65 Ah  
9. Running simulation for Variant 9 with Q = 4.6 Ah  
10. Running simulation for Variant 10 with Q = 4.55 Ah  
11. Running simulation for Variant 11 with Q = 4.5 Ah  
12. Running simulation for Variant 12 with Q = 4.45 Ah  
13. Running simulation for Variant 13 with Q = 4.4 Ah  
14. Running simulation for Variant 14 with Q = 4.35 Ah  
15. Running simulation for Variant 15 with Q = 4.3 Ah  
16. Running simulation for Variant 16 with Q = 4.25 Ah  
17. Running simulation for Variant 17 with Q = 4.2 Ah  
18. Running simulation for Variant 18 with Q = 4.15 Ah  
19. Running simulation for Variant 19 with Q = 4.1 Ah  
20. Running simulation for Variant 20 with Q = 4.05 Ah  
21. Running simulation for Variant 21 with Q = 4.0 Ah  
22. Running simulation for Variant 22 with Q = 3.95 Ah  
23. Running simulation for Variant 23 with Q = 3.9 Ah  
24. Running simulation for Variant 24 with Q = 3.85 Ah  
25. Running simulation for Variant 25 with Q = 3.8 Ah  
26. Running simulation for Variant 26 with Q = 3.75 Ah  
27. Running simulation for Variant 27 with Q = 3.7 Ah  
28. Running simulation for Variant 28 with Q = 3.65 Ah  
29. Running simulation for Variant 29 with Q = 3.6 Ah  
30. Running simulation for Variant 30 with Q = 3.55 Ah  
31. Running simulation for Variant 31 with Q = 3.5 Ah  
32. Running simulation for Variant 32 with Q = 3.45 Ah  
33. Running simulation for Variant 33 with Q = 3.4 Ah  
34. Running simulation for Variant 34 with Q = 3.35 Ah  
35. Running simulation for Variant 35 with Q = 3.3 Ah  
36. Running simulation for Variant 36 with Q = 3.25 Ah  
37. Running simulation for Variant 37 with Q = 3.2 Ah  
38. Running simulation for Variant 38 with Q = 3.15 Ah  
39. Running simulation for Variant 39 with Q = 3.1 Ah  
40. Running simulation for Variant 40 with Q = 3.05 Ah


```python
import pybamm
import pandas as pd
from pybamm import BaseModel
from IPython.display import display

## [1] Doyle Fuller Newman [2] Single Particle Model (SPM) [3] Single Particle Model with Electrolyte (SPMe)
availableModel = ["DFN", "SPM", "SPME"]
selectedModel = availableModel[0]
model: BaseModel

# Choose model
match selectedModel:
    case "DFN":
        model = pybamm.lithium_ion.DFN()
    case "SPM":
        model = pybamm.lithium_ion.SPM()
    case "SPME":
        model = pybamm.lithium_ion.SPMe()

# List of capacities from 5.0 Ah to 3.05 Ah in 1% steps
capacity_variants = [round(5.0 * (1 - i / 100), 2) for i in range(40)]

# Final DataFrame to store all results
all_results = pd.DataFrame()

# Loop through all capacity variants
for variant_num, cap in enumerate(capacity_variants, start=1):
    print(f"Running simulation for Variant {variant_num} with Q = {cap} Ah")

    selectedInputParameter = pybamm.ParameterValues("Chen2020")
    selectedInputParameter.update({
        "Nominal cell capacity [A.h]": cap
    })
    
    experiment = pybamm.Experiment(
        [
            (
                "Charge at C/2 until 4.2 V",
                "Discharge at C/5 for 2 hours or until 2.5 V"
            )
        ],
        period="1 second"
    )

    sim = pybamm.Simulation(model, experiment=experiment, parameter_values=selectedInputParameter)
    
    try:
        sim.solve()
    except Exception as e:
        print(f"Simulation failed for Q = {cap} Ah: {e}")
        continue  # skip to the next variant

    # Prepare data collection
    output_variables = ["Time [s]", "Current [A]", "Voltage [V]", "X-averaged cell temperature [K]",
                        "BatteryCapacity", "TimeDiff", "CapacityDiff", "SOC"]
    
    data = {}
    num_rows = len(sim.solution["Time [min]"].entries)

    for var in output_variables:
        if var == "TimeDiff":
            timeDiffValues = [0] + [
                sim.solution["Time [s]"].entries[i] - sim.solution["Time [s]"].entries[i - 1]
                for i in range(1, num_rows)
            ]
            data[var] = timeDiffValues
        elif var == "BatteryCapacity":
            data[var] = [cap] * num_rows
        elif var == "CapacityDiff":
            capacityDiffValues = [0]
            for i in range(1, num_rows):
                deltaCapacity = sim.solution["Current [A]"].entries[i] * (timeDiffValues[i] / 3600) * -1
                capacityDiffValues.append(deltaCapacity)
            data[var] = capacityDiffValues
        elif var == "SOC":
            soc_values = [1]
            for i in range(1, num_rows):
                soc_values.append(soc_values[i - 1] + (data["CapacityDiff"][i] / cap))
            data[var] = soc_values
        else:
            data[var] = sim.solution[var].entries

    df = pd.DataFrame(data)
    df["Variant"] = variant_num
    all_results = pd.concat([all_results, df], ignore_index=True)

# Save to CSV
all_results.to_csv("batch_battery_simulation.csv", index=False)
display(all_results)
```


<script id="MathJax-script" async src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js"></script>
