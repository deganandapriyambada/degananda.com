# Corrision Is the Mortal Energy of Almost All Mechanical Equipment

Most of industry equipment still dominated by the heavy usage of metal(steel, alloy or aluminium) due to the sturdiness, strength, high temperature tolerance, repairability, conductivity, and durability on harsh production environments.

Corrosion is a material degradation of specifically for metal components through checkmical or electrochemical reactions between the metal and its working environment. Any metal exposed to the air (oxygen) will be corroed at some point due to the oxidation process. No wonder most of the houses fence are corroded because those fence are placed out the house and directly exposed to the air.

## Impact of Corrosion to the Industry Equipment

Main problem with corroded metal is the losing of its **structural integrity** (the ability of material structure to withstand its intended load on the desired working environment). Imagine a situation where furnance collapsed due to the metal lose its structural integrity because of extreme corrosion, might ended up in eitehr nearmiss or an accident.

Apart from structural integrity loses, below are the impact of corrosion to industry equipment

1. Safety hazard - loss of structural integrity is directly affect the metal strength and sturdiness. Any industrial equipment who can't operate within their normal condition will automatically reduce the HSSE compliance by increasing the likelyhood of an accident to be occured.
2. Alter the equipment usage - a highly precised CNC machine will loss its precision due to the corrosion because a rust/corroded metal can increase the friction level out of the acceptable level.
3. High maintenance cost - unmanaged and unmonitored rust will require more corrective maintenance which  directly implies to the needs of sparepart and labor to fix the rust to prevent any accident. Moreoer, the production schedule will be impacted because of frequent corrective maintenance.

## Various Method to Detect Metal Corrosion

Most common way to notice corrosion is to the for the **rust** by using visual inspection method. a Heavility degraded metal will have thich rust spreaded all over the metal. However, there are various way to detect corrosion instead of just by checking the rust such as:

1. visual inspection - camera, human eyes,
2. Non destructive testing - ultrasonic thicness measurement/ultrasonic testing (UT), eletromagnetic testing (ET) to measure metal losses, thermal/infrared testing (IRT) and radiographic testing (RT)
3. weight losses coupon using specific metallic material (destructive approach, genrally not recommended)

a corrosion management system can help to detect, record, currate and analyze industrial equipment corrosion

# Corrosion Management System process

below are the typical process within corrosion management system

## 1.Determine corrosion strategy

| Information | Source System                   | Target System                    | Inbound/Outbound | Frequency |
| ----------- | ------------------------------- | -------------------------------- | ---------------- | --------- |
| OEM Manual  | Engineering Document Management | Corrosion and Erosion Monitoring | Inbound          | On Demand |

## 2.Identify Degradation pattern or corrosion circuit

| Information                      | Source System                   | Target System                    | Inbound/Outbound | Frequency |
| -------------------------------- | ------------------------------- | -------------------------------- | ---------------- | --------- |
| P&IDS (Pipe and instrumentation) | Engineering Document Management | Corrosion and Erosion Monitoring | Inbound          | On Demand |
| PFD (Process Flow Diagram)       | Engineering Document Management | Corrosion and Erosion Monitoring | Inbound          | On Demand |
| Operating Condition              | Engineering Document Management | Corrosion and Erosion Monitoring | Inbound          | On Demand |

## 3.Define Control Procedure and IOW (Integrity operation window, sets of parameter threshold before degradation start) 

| Information | Source System                    | Target System                     | Inbound/Outbound | Frequency |
| ----------- | -------------------------------- | --------------------------------- | ---------------- | --------- |
| IOW Action  | Corrosion and Erosion Monitoring | Operations Performance Management | Outbound         | On Demand |

## 4.Determine corrosion critical location per equipment

| Information                             | Source System                    | Target System         | Inbound/Outbound | Frequency |
| --------------------------------------- | -------------------------------- | --------------------- | ---------------- | --------- |
| Asset Corrosion Matrix & Corrosion Loop | Corrosion and Erosion Monitoring | Inspection Management | Outbound         | On Demand |

## 5.Design Corrosion Monitoring Program

| Information               | Source System                    | Target System                   | Inbound/Outbound | Frequency |
| ------------------------- | -------------------------------- | ------------------------------- | ---------------- | --------- |
| Corrosion Risk Assessment | Corrosion and Erosion Monitoring | Engineering Document Management | Outbound         | On Demand |
| Corrosion Monitoring Plan | Corrosion and Erosion Monitoring | Inspection Management           | Outbound         | On Demand |

## 6.Corrosion program execution, review & approval

| Information           | Source System                    | Target System                    | Inbound/Outbound | Frequency |
| --------------------- | -------------------------------- | -------------------------------- | ---------------- | --------- |
| Equipment Criticality | Reliability Centered Maintenance | Corrosion and Erosion Monitoring | Inbound          | On Demand |

## 7.Plan and design Corrosion Mitigation Program

| Information            | Source System                          | Target System                    | Inbound/Outbound | Frequency |
| ---------------------- | -------------------------------------- | -------------------------------- | ---------------- | --------- |
| Process Parameter      | Work Instruction                       | Corrosion and Erosion Monitoring | Inbound          | On Demand |
| Fluid Composition Data | Hydroncarbon Accounting (Mass Balance) | Corrosion and Erosion Monitoring | Inbound          | On Demand |

## 8.Plan and schedule corrosion monitoring program

| Information                                       | Source System                    | Target System                             | Inbound/Outbound | Frequency |
| ------------------------------------------------- | -------------------------------- | ----------------------------------------- | ---------------- | --------- |
| Manpower Availability                             | Integrated Logistiscs            | Corrosion and Erosion Monitoring          | Inbound          | On Demand |
| Equipment Maintenance Status                      | Reliablity Centered Maintenance  | Corrosion and Erosion Monitoring          | Inbound          | On Demand |
| Resource Allocation Plan for Corrosion Monitoring | Corrosion and Erosion Monitoring | Integrated Activity Planning & Scheduling | Outbound         | On Demand |

## 9.Monitor equipment corrosion

| Information           | Source System                    | Target System                     | Inbound/Outbound | Frequency |
| --------------------- | -------------------------------- | --------------------------------- | ---------------- | --------- |
| Thickness Measurement | Corrosion and Erosion Monitoring | Asset Performance Management      | Outbound         | On Demand |
| Thickness Measurement | Corrosion and Erosion Monitoring | Operations performance Management | Outbound         | On Demand |
| Work Permit           | Permit To Work                   | Corrosion and Erosion Monitoring  | Inbound          | On Demand |

## 10.Review corrosion program and mitigation program effectiveness

| Information                              | Source System                    | Target System                     | Inbound/Outbound | Frequency |
| ---------------------------------------- | -------------------------------- | --------------------------------- | ---------------- | --------- |
| Corrosion Mitigation Effectieness Report | Corrosion and Erosion Monitoring | Operations Performance Management | Outbound         | Daily     |

## 11.Detect degradation trend or corrosion excursion

| Information     | Source System                    | Target System    | Inbound/Outbound | Frequency     |
| --------------- | -------------------------------- | ---------------- | ---------------- | ------------- |
| Corrosion Alert | Corrosion and Erosion Monitoring | Event Management | Outbound         | Near Realtime |
| Erosion Alert   | Corrosion and Erosion Monitoring | Event Management | Outbound         | Near Realtime |

## 12.Determine action item or corrective action

| Information                 | Source System                    | Target System                     | Inbound/Outbound | Frequency |
| --------------------------- | -------------------------------- | --------------------------------- | ---------------- | --------- |
| Corrosion  Anomalies Report | Corrosion and Erosion Monitoring | Operations Performance Management | Outbound         | Daily     |
| Corrective Action Plan      | Corrosion and Erosion Monitoring | Shift Handover                    | Outbound         | Daily     |

## 13.Schedule corrective maintenance or inspection if needed

| Information        | Source System                    | Target System                    | Inbound/Outbound | Frequency |
| ------------------ | -------------------------------- | -------------------------------- | ---------------- | --------- |
| Work Order Request | Corrosion and Erosion Monitoring | Reliability Centered Maintenance | Outbound         | Daily     |

## 14.Monitor overall equipment structural integrity corrosion condition over a dashboard

| Information            | Source System                    | Target System                     | Inbound/Outbound | Frequency |
| ---------------------- | -------------------------------- | --------------------------------- | ---------------- | --------- |
| Asset Integrity Record | Corrosion and Erosion Monitoring | Operations Performance Management | Outbound         | Daily     |

## 15.Daily and monthly corrosion erosion montiroing report

| Information            | Source System                    | Target System                    | Inbound/Outbound | Frequency |
| ---------------------- | -------------------------------- | -------------------------------- | ---------------- | --------- |
| Regulatory Requirement | Engineering Document Management  | Corrosion and Erosion Monitoring | Inbound          | On Demand |
| Compliance Report      | Corrosion and Erosion Monitoring | Regulatory System                | Outbound         | On Demand |

