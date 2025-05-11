---
layout: posts
author: Degananda Ferdian
categories: Containerization
series-code: HSD001
excerpt: Must used debugging command to check openshift and bootkube status during bootstrapping process
tags: OKD Kubernetes
topics: OKD
subtitle: Hello world subtitle of this post
ptype: Review
background: Installing OKD (especially single node with user provisioned infrastructure) is challenging. There are some important command that need to be used to debug the boostrapping process
objective: to understand list of command for checking cluster error information during bootstrapping process
deliverables: List of command
---

# List of must use debugging command 

List of command to debug OKD Installation

## Overall process log

    journalctl -f

this will tailing the openshift logging (verbose). 

## Checking all neccesary process for OKD SNO

    crictl ps -a

this will list all services needed. If -a removed, it will return running only services.

    Its recommended to regularly execute the command during boostrapping process in order for identifying which services that has issues.

## Checking API Status

    curl -k https://localhost:6443/version

## Checking container logs

    crictl logs <container_id>

## Checklit bootkube logs for boostrapping

    journalctl -u bootkube.service -b -f

## API Server Logs

    journalctl -u kube-apiserver -f

## Namespace check

to check whether the domain name server is accesible. Bootstrapping process use FQDN to interact and communicate with the Kube API manager.

    nslookup api.<cluster name>.<domain>.com
    nslookup api-int.<cluster name>.<domain>.com
    nslookup any.apps.<cluster name>.<domain>>.com