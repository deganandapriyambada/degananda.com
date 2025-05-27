---
layout: posts
author: Degananda Ferdian
categories: cloud
series-code: AZBSC001
excerpt: Deep dive on the advantages and disadvanteges of deploying virtual machine (VM) on the cloud vs on premises virtual machine.
tags: azure vm virtual-machine azure-vm
topics: azure
subtitle: Hello world subtitle of this post
ptype: News
background: Nowdays more companies are trying to cut their operation cost and trim the fat on their headcount. One of the approach is to have a slim IT Organization.
objective: to understand how a virtual machine on the cloud can reduce opeartional cost.
deliverables: Article
---

# What is Virtual Machine (VM)
As the name stands, VM which stands for virtual machine is a computer inside a computer. Basically its just any physical computer which has processor / CPU (Central processing unit), RAM (read access memory) and storage to store their files that reside virtually on **exsiting computer which is configured and act as the host of the virtual machine**. 

## Virtualization is The Key Technology Enabler of Virtual Machine

![postimage80](/assets/images/2025-04/VM-Host-and-Guest-OS.svg)
[Host OS and Guest OS interation on Virtualization](/assets/images/2025-04/What-IS-Virtual-Machine.png){: .center-image }

the main computer will act as host to perform **virtualziation**. a virutalization is a process of creating a software / virtual based computer with dedicated amount of CPU, Memroy and storage which borrowed from the host physical computer.

    Imagine your physical computer has 4 CPU, 16 Gigs of ram and 1000 GB of storage. you can actually make several VM from those resources. lets say, VM#1 has 1 CPU, 1 Gigs of tam and 100 gb of storage and same with the 2nd computer. Meaning now the host computer only has 2 CPU, 12 gigs of ram and 800 gb storage left.

Nowdays, the host VM can also be a computer that exist on the cloud and resides on their data center. Their customer can create any number of VM without worrying on the virtualization setup, connectivity, hardware procesurement, hardware maintenance and other operational stuff to run a virtualization.

## Environment Isolation

a virtual machine that exist inside the host computer has their own dedicated environment. Meaning, the software that installed inside the VM has nothing to do and can't interfare with the process on the host computer. This environment called as a **Guest OS**. an Operating System that run on the host operating system which enabled by virtualization technology.

    Host operating system and the guest operating system can use different type of OS. Guest OS can be a windows server, ubuntu serverl, RHEL, etc.

a virtual machine is partitioned from the rest of host computer system making a complete isolation between host and guest but there are some process that are shared between host and guest. for example the Network I/O and computer power (CPU, RAM, Storage). Imagine an Apartment tower which has several apartment inside it.  The apartment will shared same eletrical installion, water installation, space and the system arround it. But the interior is totally different per apartment. 

# Virtual Machine Technology Stack

![postimage60](/assets/images/2025-04/VM-Stack.svg)
[Non virtualized baremetal layer structure](/assets/images/2025-04/VM-Stack.jpg){: .center-image }

    Virtualized Baremetal and non virtualized baremetal has different component.

Unlike virtualized VM, standard baremetal can only have single operating system that exist on the server. Alternatively, Virtualized baremetal can have different OS (guest) inside the server.

there are several VM Component that build the whole virtualization architecture. 

- Networking layer (**layer-1**) which will enable communication across the data center and connect baremetal to any physical surroundings(SAN Storage, other LAN, router, etc) or virtual surroundings (apps)
- Physical server/bare metal (**Layer-2**) ,basically the tower server or rack server which include the physical resources inside it such as : RAM, CPU, Motherboard Etc 
- Operating system (**Layer-3**) the brain of virtualization. It will enable the server to able to create virtual machine.
- Virtual machine (**Layer-4**) inside the virtualization OS, there will be the VM images which will have their own application stack.

## References Architecture for VM

![postimage100](/assets/images/2025-04/VM-references-architecture.svg)
[Three common VM references architecture used on industry](/assets/images/2025-04/VM-references-architecture.jpg){: .center-image }

There three different architecture references for a VM. First is, **Hypervisor based VM**, most popular stack is using VMWare. Second, **containerized VM**. Most popular stack is kubernetes. Last one is **combination of hypervisor and containerization** (Containerized virtual machine). Container can be installed inside the guest OS on top of Hypervisor.

# Benefit of using Virtual Machine (VM)

## Complete Isolation with Independent OS and Apps Stack

for standard non tech savy user that use a computer for their daily routines such as creating power point, send email, listening to music, watch youtube virtual machine might not have any advantages. But for a company that has a lot of needs to build application virtual machine has a huge advantages.

Usually an enterprise system consist of different application on different platform. For Example - identity server they might use windows OS, mail server that able to send email using SMTP provider will be hosted on linux and then for some industrial software their might run on some legacy linux OS.

    Now imagine as the head of IT department, if you have to manage different physical server with different OS and application stack it will be headache and its going to be really hard to maintain it.

Virtualization technology and VM can help to partition the host OS into different virtual machine. Each virtual machine is basically called as a computer file or **an image**.

## Comparison

Below are the comparison between those three VM Architecture. Each of the architecture has their own advantages and disadvantages. it will excel on different use cases and scenario.

| No | VM Architecture | Player | Key Advantages | Disadvantages |
|:--------:|:-------:|:-------:|:-------:|
| 1 | Virtualization (Traditional) | VMWare, Redhat virtualization |  Complete Host-Guest OS isolation, Support for any OS |  Heavy, because each VM has guest OS |
| 2 | Containerization | Kubernetes, Openshift  |  Lightweight, better performance due the absent of Guest OS |  Host and container shared same OS, less flexibility for legacy apps |
| 3 | VM on Container | Kubernetes on VMWare | Improved security (compared to container engine on baremetal) Good for enterprise that require multi tenancy |  More latency due to the more layer stack. |

## Best in Slot per: Usecase 

- **Legacy Apps** -> Tranditional Virtualization due to the varity of OS that can be installed on the guest. Legacy apps usually run on different and old operating system version. Meanwhile container engine (the core of  containerization) shared same OS with the baremetal OS. can't run OS inside the container.
- **Containerization** -> Modern application that moving towards microservices architecture
- **VM on Container** -> (Best in both world) Enterprise application on big organization because usually each sub holding or function might have different requirement and there is a requirement to still run legacy apps while the newly developed apps will be in modern architecture that suitable with containerization.

## Portable and Migrate-able.

Each VM image can be ported into different virtualization hypervisor. So if company decide to migrate from one hypervisor techology provider to others there will be minimum to none migration effort. Beacuse the guest OS has been packaged (including the apps dependencies) into an images which can easily be installed on different hypervisor system

In other hand, migrating non virtualized operating system would be really painful. All the application stack need to be installed from scratch and need to ensure the dependencies are already in places since the application are not packaged into an image.

## Scalability

thanks to the virtualization technology by hypervisor, horizontally and vertically scale a server can be done easily. resources are shared between guest OS and host OS. Adding new physical server (horizontal scale) and new host OS can increase the number of resources that can be utilized across all VM. Same goes with add more RAM, storage and CPU (Vertically scale) on one of the physical server will also increase the computing power of all VM.

## Reduce Cost

a single dedicated baremetal without virtualization is not really effective in terms of the utilized capacity vs actual benefit given from the application. Its going to be really hard to distribute the computing power based on the criticality of application. 

    on virtualizatioh technology, each of VM can be independently scaled based on the computing power demand, criticality and prioritization.

it will ensure the physical server to be fully utilized effectively and to be efficient. 

## Increased Security

Host OS and guest OS only share their network I/O, ram, CPU and storage. The other component are completely segregated. meaning if there is security breach on the guest OS, the main host OS are completely secured and threatened from any activities happened on the guest OS.

# VM On the cloud vs On Premises

Virtual machine (VM) on the cloud have some advantages and disadvantages compared with virtual machine on premises. Each of setup is has different use cases. Data ownership is one of it. eventhough cloud provider already stated that that they are not going to touch and peek the data, some companies still seeing this as a risk. Especially on finance industry like banking.

## Advantages of having VM on the cloud

**Easy to setup and maintenance with only few people**

to setup a virtual machine on premises need a lot of setup on different area. From hardware, network, software and human resources. a hardware need to be procured, installed on data center same goes with the networking component like router, switch, cabling etc. Meanwhile having VM on cloud eliminate the needs of hardware setup and reducing a lot of effort on the network settings and software settings.

    Generally, in order to config and setup a development/production environment on the cloud require less people than configuring development/production environment on premises

**Unlimited scaling anytime**

Virtualization of the host computer will be managed by cloud provider including the hardware capacity. Having virtual machine on the cloud will give agility to scale up and scale down anytime without worrying about the resources capacity **in no time**. Meanwhile on premises, procurement and installation process of addtional RAM / Storage / CPU will take sometime.

    The only scaling limit is the credit card limit it self.

on Cloud VM can be provisioned and deployed across different countries all over the world. It will beneficial financial benefit for a company that has multi national business. Not needed to setup different data center on different countries.

**Realiability**

Having virtual machine on cloud not only buy the virtual machine computing power. it come with service level agreement (SLA) that provided by cloud provider. a Company that decided to use cloud not need to think about the maintenance of the hardware. it already guaranteed by the cloud provider.

**Cost saving**

In order to be able to reduce cost of  virtual machine on cloud, there are several key points to be executed. Otherwise it will just ended up more expensive than virtual machine on premises.

- properly size the VM and Enable the auto scaling and auto downscale based on workload. this will ensure the computing power that were used is efficient based on the actual computing power requirement.
- shutdown (or destroy) on unnecessary virtual machine that not used. For example, during the development, there might be several VM dedicated for performance testing. once the test is done, it really advised to downscale or even destroy the VM. If, there is a worry regarding the VM re-setup for future testing, considering automated cloud provisioning such as terraform might a good choice.
- use Spot virtual machine. For non timebound (basically non production workload) specific workload such as : development, testing, quality assurance that not needed to be completed at specific time, Spot Virtual machine is good choice.  Spot virtual machine offer cheaper pricing because the computing power is used based on unsed resources by the cloud provided. the spot virtual machine will be deployed if the unused resources are available.

    **Spot virtual machine doesnt have any availability and reliability SLA (Service level agreement)**

## Disadvantages of having VM on the Cloud

**Data security**

This will really depend on the trust to the cloud provider. Having VM on the cloud meaning all the network I/O and some data on the disk are going to be available on the cloud. 

**Cost add up on the cloud**

Cloud provider will not only offer virtual machine services solely. There are some additional cloud native services like CI/CD, logging, monitoring and others that can be integrated to the virtual machine. Using extensive cloud native feature will add additional monthly cost.
    it is really important to selectively use cloud native capability. Always calculate the cost and benefit before deciding on using new cloud native feature (which usually the solution also available on premises/custom build inside the apps/VM)

**Opex Vs Capex Dilemma**

VM on the cloud will incur operational expense (Opex) because the pay model is usage based fees. The more computing power used, the more cost are billed monthly.

Meanwhile virtual machine on premises will incur the capital expense (Capex) for hardware maintenance. The cost is not based on the computing power used, but more on the maintenance cost and setup cost of the hardware.

# Azure Virtual Machine Key Feature Offering

| No | Capability | Description |
|:--------:|:-------:|:-------:|
| 1 | Automatic Scaling  |  VM scaling (ram,storage and cpu) can be done automatically based on demand and pre-defined schedule. For example, auto scale from 1 CPU to 2 CPU if the CPU usage is above 70%. | 
| 2 | Special Hardware  |  Virtualization technology, hypervisor design and hardware are developed by Microsoft. It is very optimized especially to integrate with other azure cloud native resources | 
| 3 | Built in Backup and restore  |  Critical business virtual machine can be easily configured to have disaster recovery solution to ensure zero no none data loss and rapid backup. | 
| 4 | Multiple OS Support | Diverse choice of the Most of cloud provided have this capability. |
| 5 | Built in monitoring | All neccesary VM monitoring tools are already available (Application insight and azure monitor) without any configuration needed. |
| 6 | VM with GPU | Azure VM can be attached with GPU for AI/ML Use Cases. |