---
layout: posts
author: Degananda Ferdian
categories: industrial-iot
series-code: n/a
tags: methane
excerpt: There are two main pillar system under ITOT convergence area. First is industrial data integration platform which responsible to fetch OT data from L3 or L2 to the cloud. Second one is hyperscaler (the cloud) to provide the hyperscaled infrastructure for big-data analytics.
background: Nowdays, in th era of AI, ITOT convergence become a mandatory system component to integrate OT network with IT network in secure, resilient and scalable way.
objective: To understand ITOT convergence ecosystem for industrial internet of things.
deliverables: Article
---

# Purdue Model: Standard Industrial OT System Architecture

While IT architecture has fancy system design pattern like microserivces, event-driven, monolithic, microfrontend and service oriented architecture, OT world has completely different architectural point of view as it comprises both industrial equipment such as compressor, valve, pipeline, PLC, production machine, etc and industrial system such as SCADA, DCS, ICSS and so on where **IT are mostly only deal with server and software.**  Hence, it create a diversed architectural style and pattern.

Due to the safety risk of altering and controlling equipment, a strict layered security is introduced on the OT (operation technology) area. Even a small hacking attempt to modify the PLC logic which often connected directory to the sensors and actuators can disrupt production process or even cause HSSE incident or worse an accident. Hence, in early 1990s, OT engineers council led by Theodore J. Williams introduce a framework called as **"the purdue model"** which specifically address those risk by enforcing strict security goverment on the OT  automation side which utilize computers and has intersection to the IT network system.

Purdue model is often combined with ISA95 in the actual practices. While purdue model standardizing the network segmentation for maximum cyber security protection, ISA95 is governing the data and **information that can be passed from one layer to another layer**.

## Practical Purdue Model Framework

Purdue model is a framework which **govern** the architecture of OT network layering or segmentation based on the functionality. Two distinct devices that doesnt have same group function **can't exist in same network** to ensure strict data access and enforcing maximum security.

Below are the six network layer as per purdue model guidelines:

**L0**: [OT] Physical process (sensor, actuator, field devices)

**L1**: [OT] Basic control (PLC, RTU, SIS/safety instrumented system)

**L2**: [OT] Supervisory control (SCADA, DCS, ICSS, ICS)

**L3**: [OT] Site Operations (MES, MOM, Historian, IT/OT Bridge)

**L3.5**: [IT/OT] Demilitarized zone for ITOT convergence. NO direct IT to OT is allowed. Only OT to IT.

**L4**: [IT] Enterprise network(ERP, CRM, etc)

**L5**: [IT] External Network (cloud/etc)

## ITOT Convergence Middleware on lv 3.5

Eventhough purdue model not mentioning about lv 3.5, in the real practice, those layer is exist to host ITOT convergence middleware that has reponsibility to collect data from lv 3 historian or OPC-UA server and forward it to the cloud/IT network with or without any business logic (just pass through the data to cloud/IT network). 

Those middleware will integrate OT data to IT network (for example to iot gateway or data lake) and often placed under DMZ(demilitarized zone) as it require super strict security. IT network should not be able to control the OT system to prevent security breach that can affect operations and productions.

## Key player on ITOT Convergence Middleware

Below are the player on ITOT convergence middleware / Edge Gateway segment / Industrial Data Integration

| Category                             | Software                         | Maturity  | Advantages                                                   | Disadvantages                                                |
| ------------------------------------ | -------------------------------- | --------- | ------------------------------------------------------------ | ------------------------------------------------------------ |
| AWS - Hyperscaler                    | AWS IoT Greengrass, AWS IoT Core | High      | Strong cloud native especially on AWS environment            | Lack of pre-existing OT Model                                |
| Azure - Hyperscaler                  | Azure IoT Edge, Azure IoTHuB     | High      | Strong cloud native especially on Azure environment          | Lack of pre-existing OT Model                                |
| Industrial Data Integration Platform | KEPServerEX                      | Very High | Rich industry protocol connector (pre-existed), proven reliability, <br />can be integrated to hyperscaler (AWS/Azure) | Limited OT modelling <br /> Still better than hyperscaler solution |
| Industrial Data Integration Platform | HighByte                         | Very High | Rich industry protocol connector (pre-existed), proven reliability, <br />can be integrated to hyperscaler (AWS/Azure) | Small ecosystem                                              |
| Industrial Data Integration Platform | Ignition                         | Very High | Rich industry protocol connector (pre-existed), proven reliability, <br />can be integrated to hyperscaler (AWS/Azure) | beyond than just an industrial data integration              |

Note: eventhough azure and AWS are the leaders in the OT markets, some big brand such as VW (volkswagen) & shell publicly mentioned about their success story of implementing hyperscaler as their ITOT convergence middleware especially for certain analytics use cases that use hyperscaler (cloud).

Native hyperscale is preferred if only if the only use cases is just to collect process, event and alarm data from OT and integrate it the hyperscaler iot gateway (AWS iotcore or azure iothub) unless it require following use cases:

1. standardized asset modelling using UNS (unified namespace) that base on ISA95 model.
2. multisite industrial data standardization
3. cross vendor OT environment (different PLC brand, scada brand, ICS brand, etc)
