---
layout: posts
author: Degananda Ferdian
categories: cloud
series-code: AZIOT001
excerpt: Build edge custom module images using docker specifically for ARM64 CPU Architecture 
topics: azure iot iiot edge docker
ptype: News
background: Edge run time can be run on various machine type. Ranging from baremetal to virtual machine. Some of baremetal are using ARM64 CPU Architecture such as Nvidia Jetson or Raspberry Pi 4.
objective: To specifically build NodeJS edge custom module for ARM CPU Architecture.
deliverables: Article
---

# IoT Edge Runtime on Linux

Azure IoT Edge runtime is run on top containerized system. It supprot Docker or kubernetes. To ensure the images can be run on ARM64 CPU architecture, selective docker based image need to be set properly.

<hr />

## Supported NodeJS based images for ARM and X86_x64

Some NodeJS docker base image that support both X86_64 and ARM 64 CPU Architecture are : 

1. node:{version} - support both CPU architecture based on debian.
2. node:{version} -slim  - support both CPU architecture based on debian with minimal packages(if compared to the normal node:18). Best for edge devices as it usually comes with low storage/computing poewr. 
3. node:{version}-{codename} = support both CPU architecture with fully fledged debian OS. Suitable for AI/ML use cases that require some C++ packages.

# Identify Target Build for ARM

For example, node:18-bullseye base image can be ran on both CPU architecture. However, specific command is needed to ensure the target build architecture is correct.

## Check Baremetal CPU Architecture

before build the edge custom module, it is recommended to check the target baremetal CPU architecture in order to avoid mismatch architecture.

the usual error raised by edge module if its encountered CPU Architecture mismatch is shown  below

```
exec /usr/local/bin/docker-entrypoint.sh: exec format error
exec /usr/local/bin/docker-entrypoint.sh: exec format error
```

Hence, checking target server/devices/ architecture before building specific edge module on the ACR is generally recommended.

    It also good to differentiate the images version and tag for different CPU Architecture.

for example: 
1. (intel/amd) my-edge-router:0.0.1amd64 
2. (arm) my-edge-router:0.0.1arm64 

execute following command to check server/device/baremetal CPU architecture

linux

    uname -a

or

    lscpu

possible output from above command

- x86_x64 indicates the machine running on either linux or amd
- aarch64 meaning the CPU architec is ARM64 (64 bit of ARM)
- armv71 is ARM32 (32 bit of ARM)
- i686 is intel 32 bit

sample output from nvidia jetson

```
uname -a
Linux sdv-desktop 5.15.148-tegra #1 SMP PREEMPT Mon Jun 16 08:24:48 PDT 2025 aarch64 aarch64 aarch64 GNU/Linux
```

from above response, it shown that the baremetal is run on top of **ARM64** (ARM 64 Bit) CPU/Processor.

# Build the Azure IoT Edge Custom Module Docker Images

In order to able to run the edge module on ARM64 machine, a specific docker build command need to be executed.

## Identify the host machine CPU Architecture

depend on the host machine CPU Architecture the docker command might be different. Host machine is a machine where we run the docker build.

for example, this is the local machien that used to build the image

```
root@test-tfjs-node:~# uname -a
Linux test-tfjs-node 5.10.0-33-amd64 #1 SMP Debian 5.10.226-1 (2024-10-03) x86_64 GNU/Linux
```

<hr />

Hence, the scenario would be 
- host machine : Linux(debian), AMD64
- target CPU build : ARM64 (for Nvidia Jetson)
- Base nodejs image : node:18-bullseye (fully fledged debian to run tensorflow natively on metal with C++) 

## Install pre-requisites packages

recommended way to perform multi CPU platform build is to use docker buildx. It is an extension of standard docker build which has capabilities to build the images for different platform.

### Install DockerX

check if the host machine (where docker builder/buildx is running) has dockerx

    docker buildx version

![postimage100](/assets/images/2025-08/arm1.jpg)
[Checking whether docker buildx has been installed on the host machine](/assets/images/2025-08/arm1.jpg){: .center-image }

for example from above images, it shown that the builder machine already has docker buildx installed.

if buildx is not installed, the docker need to be upgraded

    sudo apt-get update
    sudo apt-get install docker-ce docker-ce-cli containerd.io

buildx is always included on newer version of docker.

## Install QEMU emulation

qemu is used for multiplatform / cross platform build.

use following command to install qemu

    docker run --rm --privileged tonistiigi/binfmt --install all

## Build

![postimage100](/assets/images/2025-08/arm2.jpg)
[Install and activate QEMU for Docker Buildx](/assets/images/2025-08/arm2.jpg){: .center-image }

integrate QEMU to the docker buildx

    docker buildx create --name multiarch-builder --use

activate the QEMU on dockerbuildx for it to be ready to build images on multiple platform / cross platform

    docker buildx inspect --bootstrap


### Native build (followed the host architecture)

```
sudo docker build --no-cache -t module-name:version .
sudo docker tag module-name:version sdbmsedge.azurecr.io/module-name:version
sudo docker push sdbmsedge.azurecr.io/module-name:version
```

### Multiplatform Build (follow configured target architecture)

one liner command (simplified)

    docker buildx build --platform linux/arm64 --no-cache -t sdbmsedge.azurecr.io/module-name:version --push .

sample versioning for amd/intel and arm64

amd 64 (intel processor 64 bit or amd 32 bit)

    docker buildx build --platform linux/amd64 --no-cache -t sdbmsedge.azurecr.io/ml-tensorflow:1.0.0_amd64 --push .

arm 64 bit

    docker buildx build --platform linux/arm64 --no-cache -t sdbmsedge.azurecr.io/ml-tensorflow:1.0.0_amd64 --push .
