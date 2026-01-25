SDBMS Battery Simulation

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
- #"Hold at 3V until C/50",

Run Simulation


```python
experiment = pybamm.Experiment(
    [
        (
            "Discharge at C/10 for 10 hours or until 3.3 V",
            "Rest for 1 hour",
            "Charge at 1 A until 4.1 V",
            "Hold at 4.1 V until 50 mA",
            "Rest for 1 hour",
        )
    ]
)
sim = pybamm.Simulation(model, experiment=experiment, parameter_values=selectedInputParameter)
startDuration = 0
endDuration = 3600 #in second
sim.solve([startDuration, endDuration])
```

Visualize


```python
pybamm.dynamic_plot(sim)
```

Export Plot to HTML (for slider feature)

Custom Plot with Selected Model Result Parameter


```python
output_variables = ["Time [min]", "Electrolyte concentration [mol.m-3]", "Voltage [V]"]
sim.plot(output_variables=output_variables)
```

Plot voltage component


```python
sim.plot_voltage_components()

```


```python
pprint("end")
```


```python

```
