**SDBMS Battery Simulation**

Install Pybamm on Jupyer


```python
%pip install pybamm
%pip install pandas
```

Initiating PyBamm


```python
import pybamm
from pybamm import BaseModel
from pprint import pprint
```

Choose Battery Chemical & Model


```python
## [1] Doyle Fuller newman [2] Single Particle Model (SPM) [3] Single Particle Model with Electrolyte (SPMe)
availableModel = ["DFN","SPM", "SPME"]
selectedModel = availableModel[0]
model : BaseModel

match selectedModel:
    case "DFN":
        model : BaseModel = pybamm.lithium_ion.DFN()
    case "SPM":
        model : BaseModel = pybamm.lithium_ion.SPM()
    case "SPME":
        model : BaseModel = pybamm.lithium_ion.SPMe()
        

```

Print Available Model Input Parameter.
Input Parameter = predefined config / parameter for physical, chemical and electrochemical properties of battery.


```python
modelInputParameters = list(pybamm.parameter_sets)
pprint(modelInputParameters)
```

Display Selected Model input parameter value


```python
selectedInputParameter =  pybamm.ParameterValues("Chen2020")
## DFN => Chen2020, Ai2020. SPME = Marquis2019, SPM = Marquis2019
pprint(selectedInputParameter)
```

Get Q (Battery Capacity)


```python
batteryCapacity = selectedInputParameter['Nominal cell capacity [A.h]']
maxVoltage = selectedInputParameter['Open-circuit voltage at 100% SOC [V]']
pprint(batteryCapacity)
pprint(maxVoltage)
```

Print Available Model Output Parameter


```python
availableOutputModelVariable = model.variable_names()
pprint(availableOutputModelVariable)
```

Available Instructions

- "Discharge at 1C for 0.5 hours",
- "Discharge at C/20 for 0.5 hours",
- "Charge at 0.5 C for 45 minutes",
- "Discharge at 1 A for 90 seconds",
- "Charge at 200mA for 45 minutes",
- "Discharge at 1 W for 0.5 hours",
- "Charge at 200 mW for 45 minutes",
- "Rest for 10 minutes",
- "Hold at 1 V for 20 seconds",
- "Charge at 1 C until 4.1V",
- "Hold at 4.1 V until 50 mA",
- "Hold at 3V until C/50",

Run Simulation


```python
experiment = pybamm.Experiment(
    [
        (
            "Charge at 1 C until 4.2 V",
            "Discharge at C/0.5 for 2 hours or until 2.5 V"
        )
    ],
    period="1 second"  # <-- This sets data points every 1 second
)
sim = pybamm.Simulation(model, experiment=experiment, parameter_values=selectedInputParameter)
sim.solve()
```

Visualize


```python
#pybamm.dynamic_plot(sim)
```

Custom Plot with Selected Model Result Parameter


```python
output_variables = ["Time [s]", "Current [A]", "Voltage [V]", "X-averaged cell temperature [K]"]
sim.plot(output_variables=output_variables)
```

Store to pandas data frame and Compute SOC


```python
import pandas as pd
output_variables.append("TimeDiff")
output_variables.append("CapacityDiff")
output_variables.append("SOC")
data = {}
num_rows = len(sim.solution["Time [min]"].entries)

for var in output_variables:
    if var == "TimeDiff":
        timeDiffValues = []
        for i in range(num_rows):
            if i == 0:
                timeDiffValues.append(0)
            else:
                prevTime = sim.solution["Time [s]"].entries[i-1]
                currentTime = sim.solution["Time [s]"].entries[i]
                deltaTime = currentTime - prevTime
                timeDiffValues.append(deltaTime)
        data[var] = timeDiffValues
    elif var == "CapacityDiff":
        capacityDiffValues = []
        for i in range(num_rows):
            if i == 0:
                capacityDiffValues.append(0)
            else:
                deltaCapacity =  sim.solution["Current [A]"].entries[i]*(timeDiffValues[i]/3600)*-1
                capacityDiffValues.append(deltaCapacity)
        data[var] = capacityDiffValues
    elif var == "SOC":
        soc_values = []
        for i in range(num_rows):
            if i == 0:
                soc_values.append(1)
            else:
                ## Compute using Coulomb Counting
                updatedSOC = soc_values[i-1]+(capacityDiffValues[i]/batteryCapacity)
                soc_values.append(updatedSOC)
        data[var] = soc_values
    else:
        data[var] = sim.solution[var].entries
        
simulationOutputDf = pd.DataFrame(data)
display(simulationOutputDf)
simulationOutputDf.to_csv("simulation_output_coulomb.csv", index=False)
```

Plot voltage component


```python
sim.plot_voltage_components()

```


```python
pprint("end")
```
