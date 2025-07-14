---
layout: posts
author: Degananda Ferdian
categories: cloud
series-code: HSD001
excerpt: Solve several common issue on microsoft azure function
tags: azure azure-function functoin-apps
topics: azure
ptype: News
background: azure function is one of the serverless computation provided by azure native component. It has powerful performance and capability especially to trigger event from other azure native component such as eventhub, serivce bus, etc.  
objective: to identify several common installation problem of azure function that usually encountered on Microsoft Windows. 
deliverables: Article
---

Azure function can be run locally on windows OS using various IDE (integrated desktop environment). Most straightforward IDE is VSC (Visual studio code).

    Despite VSC is the official IDE for function app, it can still be executed locally using other IDE such as : Intellij and Visual Studio.

**VSC (Visual studio code)** will be used on this artcile

# Component Pre-requisites

There are three main component that need to be installed before azure function can be ran locally.

## Azure Login In VSC

Install azure resource extension on VSC(Visual studio code) to integrate VSC with azure environment. 

![postimage100](/assets/images/2025-07/az-function6.png)
[Azure Resources extension on VSC to authenticate into azure subscriptions](/assets/images/2025-07/az-function6.png){: .center-image }
    
Account details need to be provided once the extension is installed, hence the VSC will be authenticated to the azure subscriptions

## Azure function core tools on Windows

get the installer for azure core function tools for windows on following site

    https://github.com/Azure/azure-functions-core-tools/blob/v4.x/README.md#windows

scroll down on the readme.md files and find the download links.

![postimage100](/assets/images/2025-07/az-function1.png)
[Azure Function core tools for windows](/assets/images/2025-07/az-function1.png){: .center-image }

its recommended to use the latest version of azure function (Currently as this article is written, the last version is v4) for best performance and stability.

## (Optional) Core function tools for NodeJS

Azure function can be run using different programming language such as .NET, python and NodeJS. In order to run the NodeJS version of azure function, additional core function tools on NPM (Node package manager) need to be installed.

    Of course the NodeJS should be the pre-requsites before installing core function tools on NPM

On the same links as previous steps, scroll down to find the command to install azure function core tools for nodejs

    npm i -g azure-functions-core-tools@4 --unsafe-perm true

Its recommended to check whether the azure function core tools has been installed on the environment 

    npm list -g azure-functions-core-tools --depth=0

![postimage80](/assets/images/2025-07/az-function2.png)
[Check if azure core function tools has been installed on NPM](/assets/images/2025-07/az-function2.png){: .center-image }

if the above command return "-- (empty)", it means that azure core functions tools is not yet installed.

# Installation Validation

Ensure two command below are successfully installed **before creating azure function project locally**.

## (Windows) Core function tools

execute following command on the terminal/powershell

    func

![postimage100](/assets/images/2025-07/az-function4.png)
[Azure Function core tools on CLI](/assets/images/2025-07/az-function4.png){: .center-image }


if the function returning a CLI command list for "func" then the installation is success.

## (NPM) Core Function tools

![postimage80](/assets/images/2025-07/az-function3.png)
[(After NPM Install) Check if azure core function tools has been installed on NPM](/assets/images/2025-07/az-function3.png){: .center-image }

check the NPM list and find whether core function tools has been successfully installed or not

    npm list -g azure-functions-core-tools --depth=0

# Create Azure Function Project Locally

    Sample for Eventhub Trigger

## Create Project

Initiating Typescript Project

    func init TestFATypescript --worker-runtime typescript --model V4

Initiating the trigger

move to the functionapp directory that created on previous step (TestFATypescript)

    cd TestFATypescript

create the trigger (follow the window), the tools will automatically create the neccesary files.

    func new

Configure the localSettings

```json
{
  "IsEncrypted": false,
  "Values": {
    "FUNCTIONS_WORKER_RUNTIME": "node",
    "ehConnectionSttring" : "<your EH Connection string>, ge tit from azure portal Shared Access key",
    "AzureWebJobsStorage": "<your FA web job storage>"
  }
}
```

there are two way to run the function locally.

## (option 1) Run the function locally via Func

execute following command

    func host start --verbose

![postimage80](/assets/images/2025-07/az-function7.png)
[Azure function eventhub trigger on local windows via func](/assets/images/2025-07/az-function7.png){: .center-image }

## (Option 2)  Run the function locally via NPM

execute following command

    npm run start

![postimage80](/assets/images/2025-07/az-function8.png)
[Azure function eventhub trigger on local windows using NPM](/assets/images/2025-07/az-function8.png){: .center-image }


# Common Issue

## Could not load file or assembly

### Problem

If more than version of azure core function tools are installed on same system and has version conflict following issue will be encountered

    Could not load file or assembly 'Microsoft.Azure.WebJobs.Script.Abstractions, Version=1.0.0.0, Culture=neutral, PublicKeyToken=3c5b9424214e8f8c'. The system cannot find the file specified.

### Solution

Its either uninstall the core function tools @ NPM or core function tools on the windows.

![postimage80](/assets/images/2025-07/az-function5.png)
[Uninstall azure function core tools on windows](/assets/images/2025-07/az-function5.png){: .center-image }

If nodejs azure function is used, then its adviseable to uninstlal core function tools on windows via installation wizard.

## Failed to stop host instances

### Problem

    [2025-07-03T04:18:15.640Z] Failed to stop host instance '65fa3372-bf7e-431a-8179-05589ef67830'.
    [2025-07-03T04:18:15.641Z] Microsoft.Azure.WebJobs.Host: The host has not yet started.

Above message is generic error message which dependent on the trigger used.

In order to get the specific error message, kindly use verbose command parameter

    func host start --verbose

For example, below is the error message for eventhub trigger after verbose command parameter is activated.

    [2025-07-03T04:18:15.510Z] Worker process started and initialized.
    [2025-07-03T04:18:15.633Z] A host error has occurred during startup operation '5e7bba85-e832-4053-bff1-46cafb87d1da'.
    [2025-07-03T04:18:15.633Z] Microsoft.Azure.WebJobs.Host: '%connection%' does not resolve to a value.

### Resolution

From above error message, it seems the local settings is not properly configured as the %connection% can't resolve value from the settings file.

To solve the issue, a proper local settings json need to be added.

(below are specific solution for eventhub trigger)

```nodejs
import { app, InvocationContext } from "@azure/functions";

export async function testTrigger(messages: unknown | unknown[], context: InvocationContext): Promise<void> {
    if (Array.isArray(messages)) {
        context.log(`Event hub function processed ${messages.length} messages`);
        for (const message of messages) {
            context.log('Event hub message:', message);
        }
    } else {
        context.log('Event hub function processed message:', messages);
    }
}

app.eventHub('testTrigger', {
    connection: 'ehConnectionSttring',
    eventHubName: 'eventhub-name',
    cardinality: 'many',
    consumerGroup: 'eventhub-consumer',
    handler: testTrigger
});
```

local.settings.json

```json
{
  "IsEncrypted": false,
  "Values": {
    "FUNCTIONS_WORKER_RUNTIME": "node",
    "ehConnectionSttring" : "<your EH Connection string>, ge tit from azure portal Shared Access key",
    "AzureWebJobsStorage": "<your FA web job storage>"
  }
}
```

## node_modules\azure-functions-core-tools\bin/func ENOENT

### Problem

```
Error: spawn C:\Users\degananda.ferdian\Documents\Solution Architect\AZ-FA\TestFATypescript\node_modules\azure-functions-core-tools\bin/func ENOENT
    at ChildProcess._handle.onexit (node:internal/child_process:285:19)
    at onErrorNT (node:internal/child_process:483:16)
    at process.processTicksAndRejections (node:internal/process/task_queues:90:21)
Emitted 'error' event on ChildProcess instance at:
    at ChildProcess._handle.onexit (node:internal/child_process:291:12)
    at onErrorNT (node:internal/child_process:483:16)
    at process.processTicksAndRejections (node:internal/process/task_queues:90:21) {
  errno: -4058,
  code: 'ENOENT',
  syscall: 'spawn C:\\Users\\degananda.ferdian\\Documents\\Solution Architect\\AZ-FA\\TestFATypescript\\node_modules\\azure-functions-core-tools\\bin/func',
  path: 'C:\\Users\\degananda.ferdian\\Documents\\Solution Architect\\AZ-FA\\TestFATypescript\\node_modules\\azure-functions-core-tools\\bin/func',
  spawnargs: [ 'start' ]
}
```

this is issue is happened due to the malformated azure core function tools inside the node_modules. Specifically because the core function tools are failed to be extracted (**still in form of the zip**)

### Solution

Uninstall the azure function core tools on the **NPM locally**

    npm uninstall azure-functions-core-tools

Reinstall it on **NPM locally**

    npm install azure-functions-core-tools --save-dev

Ensure the node_modules/azure-functions-core-tools extracted properly.

![postimage80](/assets/images/2025-07/az-function9.png)
[properly extracted azure function core tools on node_modules](/assets/images/2025-07/az-function9.png){: .center-image }

