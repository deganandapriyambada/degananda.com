---
layout: posts
author: Degananda Ferdian
categories: infrastructure
series-code: HSD001
excerpt: Step by step to install Ansible tools on local machine
tags: ansible automation
topics: ansible
subtitle: Hello world subtitle of this post
ptype: Review
background: Terraform can only provision resources such as VM. But the package that need to be installed and configured inside the VM can't be automated by terraform. Thats where Ansible play handy.
objective: to install ansible on local machine
deliverables: article & illustration
---


# What is Ansible

Ansible is a tools that can help automating the package or application installation inside a virtual machine or server.

    Fortunately, Ansible is opensources. it is widely used by community for development or production task. For VM related taks automation, Ansible only require SSH key from the remote target host.

For example ansible can help maintaining operating system configuration, deploy pre-defined sets of application on VM (Eg: MEAN Stack, Kibana+prometeus stack, etc)

# Installing Ansible

there are two ways to install ansible.

1. Install via OS package manager such as (brew for mac, dnf for fedora or apt for debian/ubuntu based)
2. Install via PIP (Python package manager)

## Best installation method

both are the same. But in terms of simplicity, installing via OS package manager would be easier as the dependency(including the specific python binary and version that used by ansible) has been handled already.

On other hand, installing via PIP would require managing the virtual environment. 

    python -m vnev ansible-env

Its recommended to create new python virtual environment specifically for ansible to prevent issue on other python apps/library.

or better to use conda/miniconda (recommended)

# Installing using Conda/MiniConda/Anaconda

## Create conda environment for ansible

    its recommended to use python version 3.1x (3.11,3.12, 3.13 or higher). Ensure its the stable one.

create new conda environment

    conda create --name ansible-tools python=3.11

![postimage100](/assets/images/2025-05/ansible1.jpg)
[Creating dedicated conda virtual environment for Ansible](/assets/images/2025-05/ansible1.jpg){: .center-image }

## Activate the Ansible environment

switch and active to the newly created environment for conda

    conda active ansible-tools

to check the conda's environment list can be done using following command

    conda env list

## Install Ansible

![postimage100](/assets/images/2025-05/ansible2.jpg)
[Install ansible using conda-forge](/assets/images/2025-05/ansible2.jpg){: .center-image }

use following command to install ansible on conda

    conda install -c conda-forge ansible

## Validate ansible installation

![postimage100](/assets/images/2025-05/ansible3.jpg)
[Check if ansible installed properly on PIP or python library](/assets/images/2025-05/ansible3.jpg){: .center-image }

validate whether ansible has been installed on the python library

    pip list | grep ansible

![postimage100](/assets/images/2025-05/ansible4.jpg)
[check ansible version on the console](/assets/images/2025-05/ansible4.jpg){: .center-image }

check ansible version on console.

    ansible --version

# Installing using PIP

it would have similar steps with conda/miniconda/anaconda.

## Create python virtual environment

    python -m vnev ansible tools

## Active the virtual environment

change directory to the virtual environment directory

    cd <to_the_virtual_environment_director>

activate the environment (for Mac OS/linux)

    source ./bin/activate

or for windows

    .\Scripts\Activate

## Install Ansible using PIP

command to install ansible via PIP

    python3 -m pip install --user ansible