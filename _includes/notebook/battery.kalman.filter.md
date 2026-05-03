import pandas and load dataset into dataframe


```python
import pandas as pds
battery_telematics_dataset = "./dataset/555_Dis_0p5C.csv"
battery_telematics_dataframe : pds.DataFrame = pds.read_csv(battery_telematics_dataset)
print(battery_telematics_dataframe.head())
```

                 Time Stamp  Step Status  ...   WhAccu   Cnt  Unnamed: 14
    0  11/5/2018 9:24:54 AM    28    DCH  ...  0.71189  14.0          NaN
    1  11/5/2018 9:25:54 AM    28    DCH  ...  0.60916  14.0          NaN
    2  11/5/2018 9:26:54 AM    28    DCH  ...  0.50682  14.0          NaN
    3  11/5/2018 9:27:54 AM    28    DCH  ...  0.40478  14.0          NaN
    4  11/5/2018 9:28:54 AM    28    DCH  ...  0.30295  14.0          NaN
    
    [5 rows x 15 columns]


Remove unncesary column and retain only discharge telematics row


```python
cleansed_telematics_dataframe : pds.DataFrame = battery_telematics_dataframe.drop(["Step", "Status", "Prog Time","Step Time", "Cycle", "Cycle Level", "Cnt", "Procedure", "WhAccu", "Capacity", "Unnamed: 14"], axis=1)
dischargetelematics_dataframe : pds.DataFrame = cleansed_telematics_dataframe[cleansed_telematics_dataframe["Current"] < 0].reset_index(drop=True)
print(dischargetelematics_dataframe.head())
```

                 Time Stamp  Voltage  Current  Temperature
    0  11/5/2018 9:24:54 AM  4.12328 -1.49925     38.38286
    1  11/5/2018 9:25:54 AM  4.10457 -1.49925     38.59318
    2  11/5/2018 9:26:54 AM  4.09075 -1.49670     38.69834
    3  11/5/2018 9:27:54 AM  4.07980 -1.49925     38.38286
    4  11/5/2018 9:28:54 AM  4.07103 -1.49925     38.38286


coulomb counting SOC estimation


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

                 Time Stamp  Voltage  Current  Temperature  soc_coulomb_counting
    0  11/5/2018 9:24:54 AM  4.12328 -1.49925     38.38286              0.990000
    1  11/5/2018 9:25:54 AM  4.10457 -1.49925     38.59318              0.981671
    2  11/5/2018 9:26:54 AM  4.09075 -1.49670     38.69834              0.973356
    3  11/5/2018 9:27:54 AM  4.07980 -1.49925     38.38286              0.965027
    4  11/5/2018 9:28:54 AM  4.07103 -1.49925     38.38286              0.956697


Correct the estimated SOC from coulomb counting with kalman filter


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

                 Time Stamp  Voltage  ...  soc_coulomb_counting  soc_kalman_filter
    0  11/5/2018 9:24:54 AM  4.12328  ...              0.990000           0.990000
    1  11/5/2018 9:25:54 AM  4.10457  ...              0.981671           0.977053
    2  11/5/2018 9:26:54 AM  4.09075  ...              0.973356           0.968221
    3  11/5/2018 9:27:54 AM  4.07980  ...              0.965027           0.959529
    4  11/5/2018 9:28:54 AM  4.07103  ...              0.956697           0.950953
    
    [5 rows x 6 columns]


Convert Timestmap to HH:II format and Visualize It


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


    
![png](estimate-battery-soc_files/estimate-battery-soc_9_0.png)
    



```python

```
