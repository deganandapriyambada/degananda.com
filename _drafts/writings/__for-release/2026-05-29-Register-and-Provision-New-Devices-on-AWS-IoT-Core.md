---
layout: posts
author: Degananda Ferdian
categories: industrial-iot
series-code: n/a
tags: iot aws
excerpt: Field devices need to be registered on the AWS IoT Core devices management which called as things services before it can connect with the gatewway using MQTT, AMQP or HTTP.
background: Internet of things concept is allowing field devices to connect with cloud analytics through secured internet network.
objective: To understand how to register and provision new devices on AWS IoT Core.
deliverables: Article
typora-root-url: ./../../../../
---

# What is AWS IoT Core

AWS IoT Core is managed gateway for internet of things communiations that support several protocols such as HTTP, MQTT and AMQP. AWS IoT core support both D2C (device to cloud) and C2D (cloud to devices or alos known as send command) scenario because IoT core is also providing SDK (software development kit) to allow IoT engineer to interact with IoT core services from provisioning, security, send or receive command and updating firmware.

As a central hub between physical hardware and AWS analytics component, IoT core has following features

**Message Broker**: Built in MQTT broker for UNS (unified namespaces) operations to allow multiple subscriber interacting with realtime sensor or telemtry data.

**Cloud Gateway**: Allow field devices to send the tags or telemtry data using HTTP, MQTT or AMQP

**Edge Gateway**: IoT Core can be integrated with AWS greengrass (edge runtime) to enrich the protocol support, especially OT protocl such as OPC-UA, Modbus and others (can be customized to accepted any protocol because greengrass is code framework, not a managed services)

**Rule engine**: Evaluate incoming tags data using SQL like syntax to allow message filtering (for example: reject malformated data, only accept tags with certain threshold)

**Devices Shadow**: Contextualize and enrich incoming tags data with the asset information (for example: store and enrich the equipment number of particular telemetry)

**Devices Management**: Manage end to end devices provisioning life cycle from registration, certificate management for each devices or devices group and connection management
**Security Management**: flawless built-in security layer including devices policies, x509 certificate and TLS

# Steps to Provision IoT Gateway on AWS using IoT Core

Below are the steps to provision aws iot core

## login to the aws console

![Login to AWS](/assets/images/2026-08/iotcore1.jpg){: .postimage80 }
[Login to AWS](/assets/images/2026-08/iotcore1.jpg){: .center-image }

login to the AWS console by accessing following links

	https://signin.aws.amazon.com/

or create new account account if not yet registered.

once login is successful, the page will be redirected to the aws dashboard.

on the search page, search for "iot core"

![Search for the iotcore services](/assets/images/2026-08/iotcore3.jpg){: .postimage80 }
[Search for the iotcore services](/assets/images/2026-08/iotcore3.jpg){: .center-image }

click on the iot core dropdown menu.

dont forget to choose the server region to ensure the lowest latency possible which is measured based on the IoT devices location.

![Choose the nearest available aws cloud region from your field devices location](/assets/images/2026-08/iotcore4.jpg){: .postimage80 }
[Choose the nearest available aws cloud region from your field devices location](/assets/images/2026-08/iotcore4.jpg){: .center-image }

## Create thing group

next step is to create the thing group. Click on the "create thing group"

choose static thing group as we wanted to assign or de-assign the things to things group manually not by query.

![Create things group](/assets/images/2026-08/iotcore5.jpg){: .postimage80 }
[Create things group](/assets/images/2026-08/iotcore5.jpg){: .center-image }

things group is basically the logical grouping for the devices which depending on the use cases. 

On fleet maangement systen, the devices is usually grouped per fleet name. Hence the things group should be named as the fleet name.

input the thing group name

![Adjust things group parameter](/assets/images/2026-08/iotcore6.jpg){: .postimage80 }
[Adjust things group parameter](/assets/images/2026-08/iotcore6.jpg){: .center-image }

if the thing group creation is success, the thing group name will be listed under the thing groups list.

![Things group creation process is succeed](/assets/images/2026-08/iotcore7.jpg){: .postimage80 }
[Things group creation process is succeed](/assets/images/2026-08/iotcore7.jpg){: .center-image }


## Register device / thing

on the AWS IoT menu, choose "things" sub-menu under the "All devices" menu

![Select things menu on the aws console sidebar](/assets/images/2026-08/iotcore8.jpg){: .postimage80 }
[Select things menu on the aws console sidebar](/assets/images/2026-08/iotcore8.jpg){: .center-image }

then click on the create things button

![Create things button located on the top right of the screen](/assets/images/2026-08/iotcore9.jpg){: .postimage80 }
[Create things button located on the top right of the screen](/assets/images/2026-08/iotcore9.jpg){: .center-image }

choose create single thing

![Choose create single thing if you want to register single devices](/assets/images/2026-08/iotcore10.jpg){: .postimage80 }
[Choose create single thing if you want to register single devices](/assets/images/2026-08/iotcore10.jpg){: .center-image }

input the thing name. Usually its the devices identifier. On fleet management cases, the name should be the devices IMEI or the VIN (vehicle identification number)

![Input things name](/assets/images/2026-08/iotcore11.jpg){: .postimage80 }
[Input things name](/assets/images/2026-08/iotcore11.jpg){: .center-image }

choose the thing group

![(Optional) assign the things to existing things group](/assets/images/2026-08/iotcore12.jpg){: .postimage80 }
[(Optional) assign the things to existing things group](/assets/images/2026-08/iotcore12.jpg){: .center-image }

leave the others configuration as default for now (eg: no devices shadow)

skip both certificates and policy configuration. it will be configured on the next article and click create thing button

![Skip certificate creation process, we can do it later on](/assets/images/2026-08/iotcore13.jpg){: .postimage80 }
[Skip certificate creation process, we can do it later on](/assets/images/2026-08/iotcore13.jpg){: .center-image }

if the thing creation is success, then the device name or thing name should appear under the things list page

![Things is successfully created on aws iot core](/assets/images/2026-08/iotcore14.jpg){: .postimage80 }
[Things is successfully created on aws iot core](/assets/images/2026-08/iotcore14.jpg){: .center-image }

