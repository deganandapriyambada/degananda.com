# The Difference Between OT and IT Ecossytem Component

Operation technology (OT) ecosystem component is different compared with information technology ecosystem (IT) due to the nature of the process. OT responsible to automate, control and monitor overall production, oporations, maintenance and HSSE process where as IT is mostly used for back office task such as reporting, planning, scheduling and analytics.

Based on information system components theory, both OT and IT has exactly same component structure which are people, process, data, hardware and software. However, the system are completely different, just like north pole and south pole eventhough both OT and IT are ran on top of underlying baremetal (server, network peripheral) infrastructure.

For example in manufacturing industry, OT has direct interfacing (controlling and monitoring) with production machine such as rotating equipment, compressor, valve, cutting/bending machine,etc. Meanwhile, IT system only interact with existing internal IT system and external IT system (eg: regulatory system, banking system). Based on those differences, OT poses more HSSE risk which can affect accident (death of operator/personnel) because OT can control the production equipment.

Due to the critical HSSE aspects, OT system component has wide variances compared with IT system components which resulting in more complex governance and enterprise architecture compared with IT counterparts. OT blends information technology and engineering (mechanical, chemical, etc).

## Typical OT System Component

OT system commonly governed and archicted using ISA95 and purdue model where each of system that grouped based on functioanlity) is separaeted by six different layer.

1. L0 (production equipment): field devices including sensor and actuator
2. L1 (controlling): PLC (programmable logic controller)
3. L2 (monitoring & supervising): SCADA (supervisor control and data acquisition), HMI
4. L3 (operations management system): MOM, MES (manufacturing execution system), historian
5. l4 (enterprise resource planning): IT System

If security layer is incorporated to the ISA95 and purdue model, two additional layer will be introduced which are L2.5 and L3.5. Those layers are called as **DMZ(demilitarized zone)** because it literally gatekeeping the danger zones. Security breach on L2 and L3 can cause catastrophic event on the plant especially at L2 because the attacker gain control of the machine.

	Physical and logical firewall is installed at DMZ (L2.5 and L3.5)

Based on those layer, below are the typical system component of OT on an organization with **primitive technology adoption maturity** where OT is mostly isolated from IT.

| No   | Layer | System Component      | Description                                                  | Key Player                                      |
| ---- | ----- | --------------------- | ------------------------------------------------------------ | ----------------------------------------------- |
| 1    | L2    | Scada                 | Plant wide supervision and data collection<br />logs plant wide historical data into historian <br />through industrial protocol. | Aveva Wonderware, Siemens winCC, etc            |
| 2    | L2    | HMI                   | Local machine control and monitoring. <br />Read current state to the local PLC <br />with limited storage (inside the HMI) | Alot                                            |
| 3    | L2    | OPC Server            | Translate OT protocol from various hardware vendor<br />into standardized software to software(**system level**) protocol/language such as OPC UA and DA | Kepware/kepserverx, Matrikon OPC                |
| 4    | L2.5  | OPC Server Aggregator | Aggregate data from multiple OPC UA server on L2<br /> which need to be passed to the L3<br /> *) optional, historian can directly access L2 OPC server | Kepware/kepserverx                              |
| 5    | L3    | MES                   | Manufacturing execution system: track and control production (production order, material, recipe creation steps, work instruction, work order) | Siemens Opcenter                                |
| 6    | L3    | MOM                   | Superset of MES which also cover the other pilar (based on ISA95) <br />such as : LIMS, quality operations management, maintenance operation management <br />and inventory operations management | Siemens Opcenter, SAP DM, <br />Honeywell forge |
| 7    | L3    | Local Historian       | Database that used to store time series operations data, productions data, <br />alarm and event. Has longer data retention compared to SCADA. | Osisoft PI System                               |

Note: L0 and L1 are excluded because its the actual production equipment and controlling.

On an organization with **matured OT technology** aoption where **OT is "connected" with IT**, the system componet is slightly adjusted with following new system component

| No   | Layer  | System Component | Description                                                  | Key Player          |
| ---- | ------ | ---------------- | ------------------------------------------------------------ | ------------------- |
| 1    | 2      | Protocol Gateway | Translate OT protocol to another OT protcool at **device to device level** | Anybus              |
| 2    | 3.5    | Edge Gateway     | Responsible to send the OT data to cloud gateway             | Greengrass, nodered |
| 3    | 4 (IT) | Cloud Gateway    | Receive OT data from Edge gateway then route it into data lake | Iothub, IoT Core    |

## Archetypes of ITOT Convergence Using AWS Cloud Native

There ar four archetypes of ITOT integration using AWS IoT Stack (hybrid cloud native)

**First Archetypes**: Greengrass as edge gateway

**Second Archetypes**: Greengrass as transparent gateway

**Thired Archetypes**: IoT Sitewise as edge gateway

**Fourth Archetypes**: Nodered as transparent gateway (no greengrass, direct to iotcore)

Which are the best? "FIT" is the only acceptable word during architecture selection decision. It can be viewed and assessed from multiple angles as follow:

| Parameter          | Archetypes A                                                 | Archetypes B                                                 | Archetypes C           | Archetypes D                                                 |
| ------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ---------------------- | ------------------------------------------------------------ |
| OT Data Broker     | Greengrass                                                   | Nodered                                                      | IoT Sitewise Edge      | Node Red                                                     |
| Edge Gateway       | Greengrass                                                   | Greengrass                                                   | IoT Sitewise           | Node Red                                                     |
| Cloud Gateway      | IoT Core & Kinesis                                           | IoT Core & Kinesis                                           | IoT Core               | IoT Core                                                     |
| Customization      | Full Control                                                 | Limited Control <br />(depdendent on the available of nodered package) | Limited                | Limited Control <br />(depdent on available of nodered package) |
| Supported Protocol | MQTT, Modbus, OPC-UA, etc<br /> Dependent on the available library on the programming language. | MQTT, Modbus, OPC-UA, etc<br /> depdendent on the available of nodered package) | MQTT, Edge             | MQTT, Modbus, OPC-UA, etc <br />depdendent on the available of nodered package) |
| Maintainabiility   | Fully maintained by IT                                       | OT manage nodered, IT management greengrass                  | Fully maintained by IT | OT manage nodered, IT IoT Core                               |

organization need to do inside-out assessment to find out the most fit ITOT convergence architecture. Its recommended to create an evergreen architecture where the architecture is evolving from basic (stage-0), intermediate (stage-1) and keep evolving (stage-n, continuous) 
