---
layout: posts
author: Degananda Ferdian
categories: Containerization
series-code: HSD001
excerpt: How to Prepare OKD (Origin community distribution for Kubernetes) Installation Program on cloud virtual machine for learning/testing purposes.
tags: OKD Kubernetes
topics: OKD
subtitle: Hello world subtitle of this post
ptype: Review
background: Nowdays, the digital system backbone is shifting from traditional VM into container (on top of VM or Baremetal) to achieve more agility, versatality, scalability and availability. 
objective: to understand how to prepare OKD installation program (openshift installer) on cloud VM using openshift-install mode.
deliverables: article & illustration
---

    OKD is the community version of red hat openshift container platform (OCP). Anyone can deploy OKD on their baremetal or cloud platform.

# Minimum Computing Resources
## Number of required VM
a Cluster of OKD need minimum of 3 virtual machine (VM). Contain at least 1 Master (Control plane) and two worker nodes. Each of them should have 4 vCPU, 16 gigs of RAM and 120 gb of Storage. So in total, it require 12 vCPU (Virtual CPU), 48 Gigs of RAM and 360 gbs fo storage.

    Master plane node is responsible for the central of the cluster. it has following main component: gateway, scheduler/orchestrator and controller manager. In other hand, Worker Nodes is basically the an instances where the apps services will be deployed in container (also called as a pods). main worker component: kuberlet/task listener and runtime.
 
But for learning or testing purposes, OKD can be deployed on single host / virtual machime (VM) and require a minimum of 1 master plane and two worker nodes. which has 4 vCPU, 32 gigs of RAM and 360 gb of storage.   

## Minimum Cloud VM Specifications for OKD on Development/Testing
OKD will be run on following specification:

- Operating System : Fedora CoreOS (FCOS)
- CPU: 8 vCPU
- RAM: 32 gigs
- Storage: 360 gb of storage.

note: a VM with less resources can still run OKD but it will be really slow. 

# OKD Installation Method and Steps

    a cloud VM (Virtual machine) will be used on this article. Any public VM provider of your choice can be used as long as it can use fedora coreOS(FCOS) as the guest OS.

there are at least four way to install OKD

- 1) Assisted installer - most easy one, a web based installer is provided. free doesnt require redhat subscription. It will bootstrap the installation process by pre configuring most the of component.
- 2) Agent based installer - if the environment doesnt have internet connectivity, agent based installer can generate discovery image and has everything that needed to install OKD. 
- 3) **IPI** (Installer provided infrastructure) Based - basically an IaaS (Infrastructure as a services), only provided by several cloud provider such as AWS, Azure and GCP. All the installation proces swill be handled by their platform (eg: Azure Portal)
- 4) **UPI** (User provided infrastructure) - Full manual setup. OKD installer only provide the cluster installation.  other component such as LB, server, network config will not be provided.

Choose the installation method suit with the objective and environment condition/specs.

    On this article, Option number 4 will be used (UPI/User provided infrastructure) as the objective is to learn how to install OKD.
 
## Prcoure the Cloud VM

![postimage80](/assets/images/2025-05/vm.jpg)
[a Virtual Machine on Digital Ocean](/assets/images/2025-05/vm.jpg){: .center-image }

Ensure a cloud VM with Fedora CoreOS (FCOS) already provisioned with the minimum specs (8 vCPU++, 32 gigs of RAM).

    Dont forget to destroy the VM after the learning process is done. Unless, you want to get to break your wallet !

## Download the installation program.

openshift-install program is managed on public git. Below is the links to the OKD releases.

    https://github.com/okd-project/okd/releases

as of 1 May 2025, the latest stable release is version 4.17

    https://github.com/okd-project/okd/releases/tag/4.17.0-okd-scos.0

depend on the guest OS specs, choose the correct installer. On this case, a **Fedora Core OS** with AMD CPU is used. version **4.16.x** will be used because it has specific installer program for FCOS.

![postimage80](/assets/images/2025-05/vm3.jpg)
[Fedora Core OS / FCOS](/assets/images/2025-05/vm3.jpg){: .center-image }


    Fedora Cloud edition !==== Fedora Core OS. FCOS can be download from here: https://fedoraproject.org/coreos/download?stream=stable.

by default Fedora Core OS use **core@ip** instead of root@ip which commonly used for other distribution(ubunbtu server, generic fedora, etc).

Use following command to determine to correct specs.
**CPU Architecture**

![postimage80](/assets/images/2025-05/vm2.jpg)
[CPU Architecture used on the VM](/assets/images/2025-05/vm2.jpg){: .center-image }

    uname -m

if it return x86_x64 meaning its AMD64

![postimage80](/assets/images/2025-05/vm4.jpg)
[Complete hostname of Fedora Core OS](/assets/images/2025-05/vm4.jpg){: .center-image }

complete host information

    hostnamectl


hence based on above information, the installer would be this one:

    https://github.com/okd-project/okd/releases/tag/4.15.0-0.okd-2024-03-10-010116 

- (installer) openshift-install-linux-4.15.0-0.okd-2024-03-10-010116.tar.gz
- (client) openshift-install-linux-4.15.0-0.okd-2024-03-10-010116.tar.gz

the first one (installer) will be used for this article.

![postimage80](/assets/images/2025-05/vm5.jpg)
[Installer binary Downloaded](/assets/images/2025-05/vm5.jpg){: .center-image }


    curl -L -o openshift-install-linux-4.15.0-0.okd-2024-03-10-010116.tar.gz https://github.com/okd-project/okd/releases/download/4.15.0-0.okd-2024-03-10-010116/openshift-install-linux-4.15.0-0.okd-2024-03-10-010116.tar.gz

# Execute the installation program

## Move the installation binary to $PATH folder

move the installer on the $PATH directory. to view $PATH directory use following command

    echo $PATH 

    sample return: /var/home/core/.local/bin:/var/home/core/bin:/usr/local/bin:/usr/bin:/usr/local/sbin 

it means:

    /var/home/core/.local/bin -> if the OKD installation program will be installed only for "core" user
    /usr/local/sbin -> widely installed (recommended, require root access/SUDO)

move it (sample based on echo $PATH)

    sudo mv openshift-install-linux-4.15.0-0.okd-2024-03-10-010116.tar.gz /usr/local/bin

## Extract the binary

![postimage80](/assets/images/2025-05/vm6.jpg)
[Extracted openshift installer on $PATH](/assets/images/2025-05/vm6.jpg){: .center-image }

the installed in archived using tar format. 

    sudo tar -xvf openshift-install-linux-4.15.0-0.okd-2024-03-10-010116.tar.gz

## Validating the Installation program

try to run below command from any path (because the binary installed as system wide, not localized on specific user)

    openshift-installer 

if the installer is ready to run, it should return the list of command that available in openshift-installer.

![postimage80](/assets/images/2025-05/vm7.jpg)
[Openshift installer is ready to be used](/assets/images/2025-05/vm7.jpg){: .center-image }



