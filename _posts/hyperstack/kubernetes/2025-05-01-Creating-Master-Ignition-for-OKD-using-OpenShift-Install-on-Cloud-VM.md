---
layout: posts
author: Degananda Ferdian
categories: Containerization
series-code: HSD001
excerpt: How to Prepare OKD (Origin community distribution for Kubernetes) Master igintion for SNO (Single Node OKD)
tags: OKD Kubernetes
topics: OKD
subtitle: Hello world subtitle of this post
ptype: Draft
background: Nowdays, the digital system backbone is shifting from traditional VM into container (on top of VM or Baremetal) to achieve more agility, versatality, scalability and availability. 
objective: to understand how to install OKD using openshift-installer on cloud VM with UPI Approach.
deliverables: article & illustration
---

Installation will be done using UPI <u>(User Provisioned Infrastrcuture)</u> approach

# Pre-Requisite Steps

Make sure the installation program is ready. If not please refer to the previous article: 
[preparing OKD installation program using openshift-install]({{ site.baseurl }}{% link _posts/hyperstack/kubernetes/2025-05-01-Preparing-OKD-Origin-Community-Distribution-for-Kuberentes-Installation-Program-on-Cloud-VM.md %})

# Setup DNS (Domain Name Server)

    During the article series, Digital Ocean will be used as the Cloud VM Provider. Spesific step and configuration might be slightly different. however the overall steps would be similar.

## Procure a domain name

![postimage80](/assets/images/2025-05/ns.jpg)
[Nameserver repointing to Digitalocean DNS](/assets/images/2025-05/ns.jpg){: .center-image }

OKD needs **domain name** to be attached into  several (mandatory; SNO for this case) sub domain name. Buy domain from any domain provided any change the DNS (Domain name server) pointing to digitalocean.

    ns1.digitalocean.com
    ns2.digitalocean.com
    ns3.digitalocean.com

repoint those DNS on the domain provider control panel/administration panel **name servers**

    milestoneku.com will be used as the domain name on this article.

nameserver adjustment might take a while(minutes to hour). its recommended to regularly checking the nameserver on the domain provider administration panel 

## Add required subdomain for OKD SNO

![postimage80](/assets/images/2025-05/ns2.jpg)
[DNS record for OKD SNO](/assets/images/2025-05/ns2.jpg){: .center-image }


    Following subdomain configuration is for SNO(single node OKD) installation. Single VM will be used master plane and worker nodes.

| No | Data | Default Value | Direct to |
|:--------:|:-------:|:------:|
| 1   | API Record  | api.okd.milestoneku.com | VM/Droplets IP   | 
| 2   | Wildcard API Record  | *.apps.okd.milestoneku.com | VM/Droplets IP   |

# Config Preparation

## Checking Open Port

    Port opening will be done at the later stage of installation. Can Skip for Now.

OKD use following port to communicate. Ensure those port are reachable.

**SNO configuration (Single Node OKD)**

only following three port need to be open to public, because internal communication will be done locally (withi the single node).

| No | Port | Use | isPublic |
|:--------:|:-------:|:------:|
| 1 | 6443  | to access kubernetes api | yes   | 
| 2 | 80  | router/apps/console | yes  |
| 3 | 443  | router/apps/console (if using SSL) | yes  |

multi cluster OKD might have different configuration because there will be several VM within the clusters.

## Create and Configure install config.

    openshift-install create install-config

## Choose Platform (Skippable)

![postimage80](/assets/images/2025-05/install1.jpg)
[Choose any platform. Later going to be replaced](/assets/images/2025-05/install1.jpg){: .center-image }

choose whatever platform that available on the prompt. it going to be replaced using "none" later on the yaml file because the OKD is installed on top of digital ocean (not listed). If this step provide error, just skip it.

## Manually create yaml file

create a directory (replace the meruyacluster with your clustername)

    mkdir meruyacluster

create install-config.yaml with following content

```
apiVersion: v1
baseDomain: mydomain.com
metadata:
  name: okd
platform:
  none: {}
controlPlane:
  name: master
  replicas: 1
  platform: {}
compute:
  - name: worker
    replicas: 0
    platform: {}
pullSecret: '<your-pull-secret-here>'
sshKey: |
  ssh-rsa AAAAB3...your-public-key... user@host
```

replace following lines with server configuration
- **basedomain**: change to the procured domain name
- **sshkey** : change to the public ssh key that used for accessing the server via SSH 
- leave the other as default value. it already configured for SNO (single node OKD).

to view public ssh key simply execute this command on local machine(laptop/pc that used to access the server)

    cat ~/.ssh/id_rsa.pub

and to generate pull secret

![postimage80](/assets/images/2025-05/pullsecret.jpg)
[Pull secret from redhat](/assets/images/2025-05/pullsecret.jpg){: .center-image }


1. create account on redhat (free dont worry) and login
2. go to following url:  https://console.redhat.com/openshift/install/pull-secret
3. copy the pull secret

create the install-config.yaml and put the config value on it (excute below command on the cluster directory)

    nano install-config.yaml

## Generate manifest

    openshift-install create manifests

on the same folder that has install-config.yaml execute following command to generate manifest

    Manifest is a extended install-config.yaml that already enriched with various configuration for OKD. Basically its like a installation template for OKD.


![postimage80](/assets/images/2025-05/manifest.jpg)
[Generated Manifest](/assets/images/2025-05/manifest.jpg){: .center-image }

if the creation is success, it will create a new folder called "manifest".

## Create ignition config

![postimage80](/assets/images/2025-05/ignition.jpg)
[Generated Ignition Files for master, bootstrap and worker](/assets/images/2025-05/ignition.jpg){: .center-image }

execute following command

    openshift-install create ignition-configs

only master ignition (master.ign) that will be used due to the SNO (Single node OKD) approach

# Receiving OKD Master Ignition file SNO
## master.ign

on previous step, master.ignition (master.ign) has been created. following command will reboot FCOS with those master.ign

master.ign is located on following path (for this case)

    /var/home/core/meruyacluster2

download that master.ign and spin up new cluster, but during the booting please ensure that the master.ign is attached on useer data.

use following command to download

    scp core@<your server IP>:/<path to the ignition file>/master.ign .

# Next Step

## Spin up new droplet with FCOS and Master ignition.

master ignition is ready to be attached during new droplet/VM spin off.
