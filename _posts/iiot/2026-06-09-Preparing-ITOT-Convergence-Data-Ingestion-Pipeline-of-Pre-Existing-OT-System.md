---
layout: posts
author: Degananda Ferdian
categories: industrial-iot
series-code: n/a
excerpt: Process for acquiring data from L3 OT system such as OPC server or historian and transmit it into IT network is called as ITOT convergence which commonly reside on L3.5 under ISA95 standard.
tags: itot-convergence iot
background: OT system is delicate area that require precise implementation strategy due to the interconnectivity between OT system and the actual production equipment such as compressor, valve, pipeline or even the power generator. One small mistake in OT control system can lead into catastrophic incident.
objective: To identify the neccesary information from OT system before implementing ITOT convergence middleware 
deliverables: Article & Illustration
typora-root-url: ./../../../../
---

# What is ITOT Convergence

ITOT convergence is a system which reside between operational technlogy (OT) environment with information technology (IT) environment and commonly reside on the level 3.5 of ISA95 as it connect the two separate environment. OT should not be prone to cyberattack and infact it must not communicate with external network especially on the internet as it might poses serious threat because if the OT system attacked, it could harm the physical facilities and might cause HSSE near misses, incident or even accident.

OT data such as operations data, process data, alarm or events, can only be transmitted to the IT layer through the ITOT convergence system which isolated on the DMZ(demilitarized zone) network. Only specific ip addresses and subnet can connect to the OT network.

## When ITOT convergence Data Ingestion Pipeline is Designed?

ITOT convergence has main function to bridge OT and IT which serve as data ingestion pipeline. OT has various data sources such as ICS (industrial control system), ICSS (integrated control and safety system), DCS (distributed control system), SCADA(supervisor control and data acquisition system) and so on. Those data sources will be connected into a system called as historian (also known as plant historian) which located on the site.

Modern facilities usually already came with the OT and historian system because those two system is also included during the FEED (frontend engineering design) phase as the physical facilities need to have integration with the OT system for control and monitoring purposes.

However, the ITOT convergence part where the OT data getting pused to the IT network are not commonly built dan designed during FEED phase because the IT infrastructure part which reside on the headquarter or cloud are usually done after the FEED part is done and before RTS (ready to start-up).

## 6 Things to Consider When Designing ITOT Convergence System

ITOT convergence system will always based on **the pre-existing OT system** and must comply with their respective interfaces as the historian has different brand such as Aveva PI, Honeywell PHD and so on. Those vendor also has ITOT convergence solution which can ingest the OT data to the IT side (usually cloud). However, its not rare that organization will use different ITOT convergence solution from different brand or even custom made ITOT convergence especially for specific use cases like advanced analytics where the historian vendor doesnt have strong footprint/portfolio.

Below are the six things to be considered during requirement gathering for designing IT/OT Convergence System

1.**List OT system component**: Without knowing the existing OT system component it will be difficult to determine the interface point between the OT system with ITOT convergence system. For exampe, on a PI System made by aveva, the components who can forward message from their PI system into cloud or external system called as PI Web API. Hence, all of the OT system component need to be listed and analyzed.

2.**OT system architeture**: To determine where the IT/OT convergence system will reisde. is it going to deployed on the level 3.5 or even level 4? all will depend on the existing OT architecture. Each organization might have different design and preferences.

3.**Sensor and Tags Inventory:** To identify the required tags that need to be transmitted to the cloud/IT network as not everything is needed for particular use cases.

4.**Sensor datasheet**: each sensor might have different data format and calculation rules based on its brand or the manufacturer. Those sheet can be the baseline requirement for creating the normalization function which is also the reponsibility of ITOT convergence system. Eventhough the normalization can be done on cloud, it will add additional computation cost. Some of the cost and computation overhead can be shifted into the edge.
5.**Event & alarm inventory**: To identify the required alarm or event that required for the particular use cases.
6.**Cycle time**: ITOT convergence system need to be scaleable and reliable. Each tags will have cycle time or also known as TPS(transaction per second). Those number can be used to calculate the hardware specs and to decide the architecture pattern (eg: if the TPS is too high, then microservices with event driven architecture might be considered)

those six consideration must be communicated to the client during the design phases or even before the project is started to optimize the timeline.