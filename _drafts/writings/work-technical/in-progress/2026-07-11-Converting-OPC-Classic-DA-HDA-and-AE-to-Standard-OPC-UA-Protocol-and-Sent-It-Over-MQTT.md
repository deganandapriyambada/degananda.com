# The Relationship between SCADA and OPC DA

Supervisory control and data acquisition or also known as **SCADA** is a system which consisted of hardwares and softwares to monitor, control and collect data from sensors and actuators. Scada is the bridge between field devices (L0 on the ISA95, for example: temperature sensors, valve control actuators, etc) , PLC (programmable logic controller), RTU (remote terminal unit) or HMI and operators.

	In short, SCADA is the brain for data capture, data logging/store and data visualization (in form of alarm or trends in HMI)

Some scada manufacturers like mitsubishi combine both SCADA and HMI (human machine interfaces) that can directly collect, store (short term) and monitor data from field devices or PLC through modbus protocol and compute the conditions based monitoring (CBM) then trigger an alarm or action.

Once the field devices data and alarm (SCADA generated) is captured, it will be stored on the **SCADA local historian**. Those **data can be shared with other OT system and IT system through OPC DA (data access) protocol**.

## Why OPC DA still used in 2026?

