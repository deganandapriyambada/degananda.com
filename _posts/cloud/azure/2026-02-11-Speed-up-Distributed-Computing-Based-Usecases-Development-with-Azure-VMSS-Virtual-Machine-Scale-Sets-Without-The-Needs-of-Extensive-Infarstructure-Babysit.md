---
layout: posts
author: Degananda Ferdian
categories: cloud
series-code: AZBSC001
excerpt: Azure virtual machine scale sets or often called as VMSS is a service to centrally manage and orchestrate multiple identical virtual machine. Deployment of single images can be automatically executed into several virtual machine on various zones or region. Saving tons of time and operation resources.
tags: azure virtual-machine scale-sets
topics: azure
ptype: News
background: High availability and redudancy virtual machine are the golden standard for any production system especially for distributed competing workloads that require multiple sets virtual machines to serve high throughput client request
objective: to understand how to manage multiple sets of identical virtual machine using azure VMSS.
deliverables: Article
---

# Easily Manage grouped of virtual machines using Azure VMSS with same specs and configuration

![postimage100](/assets/images/2026-01/az-vmss1.jpg)
[Azure VMSS - virtual machine scale sets references architecture](/assets/images/2026-01/az-vmss1.jpg){: .center-image }

Azure virtual machine scale sets, or in short Azure VMSS is a **services to provision a group of virtual machine with identical specs and configuration under a pre configured load balancer** allowing developer to not worry about their virtual machines scalability configuration.

The virtual machines that was provisioned through VMSS can be configured to automatically scale based two following factors including pre-defined schedule or incoming traffic volume. VMSS support both horizontally (adding new VM with identical hardware specs and confguration) and vertically scale (increase hardware specs including CPU, RAM or storage to all virtual machines on the same group/VMSS).

Apart from scalebility and replicability, azure VMSS can be configured to provision or deploy the VM into separate availability zones or region which will ensure high availability (HA) for the services. When one availability zones or region is down, the load balancer will automatically route incoming requests to the active servers outside the impacted zones/regions.

## Key Capabilities of Azure VMSS

Below are summarized capability of Azure VMSS 

1. Provision **a sets** or a group virtual machine (up to 1K VM) with identic specs and configuration
2. Distributed the VM provisioning location into one or more availability zones
3. Automated scale based on volume or schedule

&mdash; So.. What kind of use cases suitable for these capabilities of Azure VMSS?

## Scaling Agility

A single VM which not provisioned through VMSS has limited **automated** scaling options. It only capable of automateitcally increase the server resources vertically (RAM, CPU and Storage). In contrast, VMSS can automatically remove or add new VM instances (horizontal scale) depending on the traffic volume or demand.

Such ability will be handy when dealing with dyanmic throughput environment and need to optimize or save the infrastructure cost by automatically minimizing the number of provisioned virtual machine when the traffic is low.

# Typical Business Usecases that uses Azure VMSS

Below are the two most common business use cases that definitely can be accelerated by azure VMSS.

## Distributed Computing

**Distributed computing** is the most typical use cases that can greatly benefited with azure virtual machine scale sets (VMSS) capabilities becasue distributed computing will require to utilize a sets of virtual machine to complete the business transaction/logic as the transaction will be broadcasted or distributed into different virtual machine to achieve  high reliability, high throughput and high reliability.

Most common distributed computing use is a high throughput backend REST API server that serve B2C frontend/customer facing channel (can be web app or mobile app) on various industry (e-commerce, banking, telco, etc).

for a back offices application that serves B2B (business to business) use cases such as order management, production planning and so on are generally not get much benefit from Azure VMSS as the number of request throughput are usually low (unless there is an requirement to make it high availability, if HA is a requirement azure VMSS is the best in slot solution)

## Machine Learning Training

VM provisioned through Azure VMSS can be equipped with GPU (Graphical processing unit) such as like Nvidia A100 & RTX 5000 series to allow data scientist to train their model (Assuming the training will be GPU intensive instead of GPU intensive).

&mdash; Typically these ML will solve engineering or process simulation complex problem or even LLM (large language model training).