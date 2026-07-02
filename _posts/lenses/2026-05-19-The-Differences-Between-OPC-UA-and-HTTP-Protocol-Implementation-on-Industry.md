---
layout: posts
author: Degananda Ferdian
categories: lenses
series-code: n/a
excerpt: Data is the new oil. Most of organization have realize those concept. Nowdays, OT data not only stayed at historian but instead it integrated to the cloud for further analytics proceesing. OPC-UA is the protocol which can bridge between IT and OT world or also known as IT OT convergence.
tags: itot opcua
background: OT system is different with IT systems in terms of the data acquisition strategy. At big scale manufacturing industry, one facilities can have thousans of equipment. Hence, a specific protocol that can carry the asset model or asset context is required and those protocol are called as OPC UA
objective: To understand the differences between OPC UA and HTTP as well as getting to know the role of OPC UA in IT to OT integration.
deliverables: Article & Illustration
typora-root-url: ./../../../
---

# OPC UA is the Brige between OT and IT

![Typical Archtiecture of ITOT Convergence with OPC-UA and Hyperscalers](/assets/images/2026-06/opcua1.jpg){: .postimage80 }
[Typical Archtiecture of ITOT Convergence with OPC-UA and Hyperscalers](/assets/images/2026-06/opcua1.jpg){: .center-image }

OPC (open platform communication) unified architecture or also known as OPC UA is TCP/IP based protocol that was introduced to public 2006 with main functionality for data acquisition from various OT (operation technology) data sources to the IT (information technology). OPC UA is standarized & independent (non vendor centric) protocol. Thats why the O in OPC in stands for **open** and regulated under IEC62541 standards.
	
	OPC UA is known for OT to IT convergence, however it could also be used for OT to TO communication.

OPC UA bridging the secured data exchange from various OT data producer including (but not limited to): PLC, SCADA, DCS or ICSS to the IT server (can be cloud or on premises IT infrstructure) or to another OT endpoint with extensive security defense mechanism ranging from X.509 certificate, token and password based authentication. 

Unline HTTP which operate using client-server architecture, **OPC-UA can be applied on top of pub-sub** (publish and subscribe) architecture which enable high through data ingestion from OT with strong resiliency.

Note: OPC UA can also done using client-server approach. It will all depend on the implementation use cases.

## OPC UA Standard for ITOT Convergence Data Acquisition

As a standard protocol communication for OT-IT, OPC defines standard for following cases:

1. Data Access - reading variable from the OT devices/equipment/system or write the variable
2. Alarms - OT alarms format is standardized by OPC UA
3. Event - OT event format is standardized by OPC UA
4. Historical Data 
5. Information modelling - OPC UA defines the standard asset hierarchy
6. Secured Authentication - There are three supported authenticaiton process such as : token, x506 certificate and password-based auth.

Note: eventhough OPC UA is standard communication protocol, not all equipment / OEM support it. In the end, it all depend on the equipment compatability. However, it is highly recommended to use OPC UA as standard data exchange protocol for ITOT convergence on new greenfield facilities.

OPC UA can act as server and client. OPC UA server is the one who reponsible to collect data from the OT devices (PLC/SCADA/DCS/ICSS) and OPC UA client is the data consumer or subscriber from OPC UA server.

## The Differences between OPC UA and HTTP

HTTP is the most populuar (known by almost all IT person) protocl that heavily used on IT area. OPC UA and HTTP are different beasts. Below are key differences aspect between OPC UA and HTTP protocol

| Aspect                 | HTTP                                                         | OPC UA                                             |
| ---------------------- | ------------------------------------------------------------ | -------------------------------------------------- |
| Area of Implementation | Backend API, Cloud Application                               | Industrial Internet of Things (IIoT)               |
| Architecture           | Client-Server                                                | Pub sub and client-server                          |
| Data Structure         | JSON (javascript object notation) or XML                     | OPC UA binary (encoded), OPC UA Json or OPC UA XML |
| Statefulness           | Stateless. Each request is an independent session<br /> (However, it can become stateful using the help of cookie or sessions) | Stateful                                           |
| Security               | PKI (public key infrastructure)                              | TLS/SSL encryption                                 |

