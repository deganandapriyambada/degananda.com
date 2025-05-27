---
layout: posts
author: Degananda Ferdian
categories: infrastructure
series-code: HSD001
excerpt: Step by step to install terraform CI (Continuous integration) tools on local machine
tags: terraform automation
topics: terraform
subtitle: Hello world subtitle of this post
ptype: Review
background: Just Maintaining multiple environment such as DEV, SIT, UAT and PROD would be headache. Now imagine duplicating and migrating it. Thats where terraform come in play.
objective: to install terraform CI (continuous integration) tools on local machine
deliverables: article & illustration
---


# What is Terraform

Terraform is a tools that can help to automate resources provisioning, whether its on cloud or on premises. 

    Terraform instroducing a new programming concept called as IaC which stands for infrastructure as code. All the provisioned resources are deployed and configured through a code.

Backthen, resources such as virtual machine, app services, aws amplify are provisioned and configured manually. For example, a project need VM with 2 gigs of ram and 2 vCPU on Azure Cloud. First step to spin up the VM would be accessing azure portal, go to the VM section, input the VM details and wait until the VM is provisioned. Once the VM provisioned, all neccesary configuration (eg: domain name, additional disk/storage, etc) will be applied manually.

## Supported Platform

Terraform support most of the major cloud provider such as :

1. AWS (Amazon web services)
2. GCP (Google cloud platform)
3. Microsoft Azure
4. Digital ocean
5. Alibaba cloud
6. IBM Cloud

apart from those public cloud provider, terraform also supporting the surrounding development environment. Starting from github, gitlab as repository. Jenkins as CICD tools.  Kubernetes for containerization, DataDog for monitoring ops and etc.

# Installing Terraform

there are several steps that need to be done before terraform can be successfully installed.

## Installation for Mac OS

Terraform is available on brew package manager. 

    brew tap hashicorp/tap
    brew install hashicorp/tap/terraform

updating homebrew to add terraform repo

![postimage100](/assets/images/2025-05/terra1.jpg)
[Add terraform repo to brew package manager](/assets/images/2025-05/terra1.jpg){: .center-image }

installing terraform

![postimage100](/assets/images/2025-05/terra2.jpg)
[Install terraform via brew on Mac OS](/assets/images/2025-05/terra2.jpg){: .center-image }

## Installation for windows

just download the latest stable binary from terraform websites. For example as of 28 May 2025.

    https://releases.hashicorp.com/terraform/1.12.1/terraform_1.12.1_windows_386.zip

## Installation on Linux

Installation method will be depend on the linux distribution (debian/fedora/rhel/coreos/centos/etc)

example for debian / ubuntu server.

    wget -O - https://apt.releases.hashicorp.com/gpg | sudo gpg --dearmor -o /usr/share/keyrings/hashicorp-archive-keyring.gpg
    echo "deb [arch=$(dpkg --print-architecture) signed-by=/usr/share/keyrings/hashicorp-archive-keyring.gpg] https://apt.releases.hashicorp.com $(grep -oP '(?<=UBUNTU_CODENAME=).*' /etc/os-release || lsb_release -cs) main" | sudo tee /etc/apt/sources.list.d/hashicorp.list
    sudo apt update && sudo apt install terraform

# Validating the Installation

![postimage100](/assets/images/2025-05/terra3.jpg)
[Validating Terraform Installation Status](/assets/images/2025-05/terra3.jpg){: .center-image }


to ensure terraform is successfully installed, following command need to be executed.

    terraform --version

if the installation is success then it will return version number and operating system architecture