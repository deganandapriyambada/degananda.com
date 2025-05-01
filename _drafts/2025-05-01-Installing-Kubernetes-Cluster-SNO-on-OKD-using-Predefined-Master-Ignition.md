---
layout: posts
author: Degananda Ferdian
categories: Containerization
series-code: HSD001
excerpt: How to Install OKD Cluster on FCOS using predefined master ignition.
tags: OKD Kubernetes
topics: OKD
subtitle: Hello world subtitle of this post
ptype: Draft
background: Nowdays, the digital system backbone is shifting from traditional VM into container (on top of VM or Baremetal) to achieve more agility, versatality, scalability and availability. 
objective: to understand how to install OKD cluster using FCOS master ignition.
deliverables: article & illustration
---

Installation will be done using UPI <u>(User Provisioned Infrastrcuture)</u> approach for SNO (Single Node OKD)

# Pre-Requisite Steps

Make sure previous steps is done. If not please refer to the previous article: 
1. [preparing OKD installation program using openshift-install]({{ site.baseurl }}{% link _posts/hyperstack/kubernetes/2025-05-01-Preparing-OKD-Origin-Community-Distribution-for-Kuberentes-Installation-Program-on-Cloud-VM.md %})
2. [Creating master ignition file for OKD SNO]({{ site.baseurl }}{% link _posts/hyperstack/kubernetes/2025-05-01-Creating-Master-Ignition-for-OKD-using-OpenShift-Install-on-Cloud-VM.md %})

at this rate, a **master.ign** and **install-config.yaml** should be ready.

# Droplet Provisioning

![postimage80](/assets/images/2025-05/okdinstall.svg)
[Infrastructure Architecture](/assets/images/2025-05/okdinstall.jpg){: .center-image }

there will be two droplet (VM) used for the cluster installation

- 1) Watcher VM. basically droplet to execute the openshift-install. This VM will be used to monitor the install progress at the OKD server.
- 2) OKD Cluster Server. a VM that will be used to deploy the OKD cluster

Watch VM will connect to the OKD Cluster service using public domain name and monitor the installation status/progress. Each of the VM should have different specs

## Watcher VM Specs
watcher doesnt require big resources. As long as it can execute openshift-install for creating manifest and ignition from install-config.yaml its enough. 

**Below are the suggested specs**

- OS : Fedora Core OS (FCOS)
- RAM : 2 Gigs
- CPU : 2 vCPU

    Ensure that the VM specs has openshift-install binary installed on the $PATH. Otherwise, watching the installation progress of OKD cluster would be impossible.

## OKD Cluster VM Specs

    Dont provision the second droplet/VM before the watcher VM already in places!. Because the droplet spinoff for the cluster will require the master ignition to be attached.

this is where the OKD cluster will be installed using SNO (Single node OKD) mode. Hence, it require a vertically scaled VM.

**Below are the suggested specs**

- OS : Fedora Core OS (FCOS) with pre-attached master ignition
- RAM : 32 Gigs
- CPU : 8 vCPU

# Watcher VM (a recap)

## Component needed

openshift-install and openshift client are installed. Openshift install is used to generate manifest and master ignition while openshift client will be used for monitoring. it has "oc" and "kubectl" tools for watching progress/monitoring progress.

**Download binary**

Openshift install

    curl -L -o openshift-install-linux-4.15.0-0.okd-2024-03-10-010116.tar.gz https://github.com/okd-project/okd/releases/download/4.15.0-0.okd-2024-03-10-010116/openshift-install-linux-4.15.0-0.okd-2024-03-10-010116.tar.gz

Openshift Client

    curl -L -o openshift-client-linux-4.15.0-0.okd-2024-03-10-010116.tar.gz https://github.com/okd-project/okd/releases/download/4.15.0-0.okd-2024-03-10-010116/openshift-client-linux-4.15.0-0.okd-2024-03-10-010116.tar.gz

**Move openshift-install, oc and kubectl to $PATH and extract it**

    sudo mv openshift-client-linux-4.15.0-0.okd-2024-03-10-010116.tar.gz /usr/local/bin
    sudo mv openshift-install-linux-4.15.0-0.okd-2024-03-10-010116.tar.gz /usr/local/bin

**Extract**

    sudo tar -xvf openshift-client-linux-4.15.0-0.okd-2024-03-10-010116.tar.gz
    sudo tar -xvf openshift-install-linux-4.15.0-0.okd-2024-03-10-010116.tar.gz

**Validation**

    execute openshift-install, oc and kubectl from any directories. If no error meaning all those three component has been successfully installed.

# Exposing bootsrap ignition file to public http

    http need bo exposed to that the OKD server can access the bootstrap ignition files.

install python3 on toolbox(basically an development container) because FCOS doesnt come with python3 by default.

    enter development container
    toolbox create
    toolbox enter
    sudo dnf install -y python3

move to the folder that actually has bootstrap ignition

    cd /var/home/core/meruyacluster
    python3 -m http.server 8080

or run in background: 

    nohup python3 -m http.server 8080 > http.log 2>&1 &

![postimage80](/assets/images/2025-05/exposehttp.jpg)
[bootstrap ignition file is exposed to public for it to ](/assets/images/2025-05/exposehttp.jpg){: .center-image }

test it by opening browser and try to access {watcher ip}/bootstrap-in-place-for-live-iso.ign


# Manifest and Master Ignition creation 

ensure master.ign for SNO has been created with following command from **the install-config.yaml** (this just recap from previous article/steps)

create manifest

    openshift-install create manifests


create master.ign

    openshift-install create single-node-ignition-config

# Installing OKD Cluster on the 2nd Droplet

## Add new FCOS live ISO

to be able to inject the boostrap.ignition configuration during the installation of FCOS, a live FCOS image needed. Below is the latest FCOS Live OS image

    https://builds.coreos.fedoraproject.org/prod/streams/stable/builds/39.20240316.3.0/x86_64/fedora-coreos-39.20240316.3.0-live.x86_64.iso
    

## Spin up new droplet

create a new droplet with FCOS custom image with minimum of 8 gigs of ram and 8 vCPU.

## Check whether bootstrap ignition file is accessible

below is the location of bootstrap ignition.

      http://157.245.146.69:8080/bootstrap-in-place-for-live-iso.ign

ensure the ign can be accessed (return http status 200)

## Access to OKD Droplet via SSH

execute following command

    ssh core@ip

## Add second disk for the OKD cluster installation

![postimage80](/assets/images/2025-05/disk.jpg)
[additional block storage for OKD cluster](/assets/images/2025-05/disk.jpg){: .center-image }

procure new block storage with minimum of 100 gb sizes and attach to the droplet

dont forget to unmount the disk before install the cluster

    sudo umount /dev/sda


## Install FCOS to disk using ignition

![postimage80](/assets/images/2025-05/install-cluster.jpg)
[OKD cluster installation in progress ](/assets/images/2025-05/install-cluster.jpg){: .center-image }

install FCOS using prefined boostrap ignition that created on previous step

    sudo coreos-installer install /dev/sda --ignition-url http://157.245.146.69:8080/bootstrap-in-place-for-live-iso.ign --insecure-ignition

meanwhile waiting for the installation, its advised to check the digital ocean DNS. ensure its pointed correctly to the OKD droplet based on the previous guide.

once he install completed, remount the /dev/sda

    mount -o discard,defaults,noatime /dev/disk/by-id/scsi-0DO_Volume_kembanganstorage /mnt/kembanganstorage


reboot

    sudo reboot

