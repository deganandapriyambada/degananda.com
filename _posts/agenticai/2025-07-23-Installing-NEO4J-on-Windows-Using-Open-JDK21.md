---
layout: posts
author: Degananda Ferdian
categories: agenticai
series-code: AGENTIC01
excerpt: Neo4J is one of the most popular graphDB. Known for its capabilities to tranverse on millions of node in relatively fast. Suitable to detecting relationship reasoning between different node.
tags: agentic-ai neo4j graphdb
topics: agentic-ai
ptype: Issues
background: Neo4J is a graphDB which has free community edition. Good for learning and personal development, Eventhrough its limited only single cluster.
objective: To install and prepare environment of NEo4J on windows using X86_X64 SOC Architecture
deliverables: article
---

# System Requirement
## Java Development Kit

    following specs are written as of 23rd july 2025

Neo4J only support two kind of JDK (Java development kit) for windows operating system

1. OpenJDK version 21 - https://openjdk.org/projects/jdk/24/
2. ZuluJDK version 21 - https://www.azul.com/downloads/?architecture=x86-64-bit#zulu

## Verifying JDK Installation

once the installation completed, check the java version and java_home and ensure the distribution name is openjdk (liberica) or zulu/azul

check java version

    java --version

expected output

![postimage100](/assets/images/2025-07/neo4j1.jpg)
[Checking Java Installation Status](/assets/images/2025-07/neo4j1.jpg){: .center-image }


```
PS C:\Users\degananda.ferdian> java -version
openjdk version "21.0.6" 2025-01-21 LTS
OpenJDK Runtime Environment (build 21.0.6+10-LTS)
OpenJDK 64-Bit Server VM (build 21.0.6+10-LTS, mixed mode, sharing)
```

check java home

    echo $env:JAVA_HOME

expected output (should be pointed to the libericaJDK folder)

![postimage100](/assets/images/2025-07/neo4j2.jpg)
[Determine JDK Distribution](/assets/images/2025-07/neo4j2.jpg){: .center-image }


    C:\Program Files\BellSoft\LibericaJDK-21\

# Download the latest release of Neo4J

go to following page 

![postimage100](/assets/images/2025-07/neo4j3.jpg)
[Choosing NEO4J Installer for Windows Community Edition](/assets/images/2025-07/neo4j3.jpg){: .center-image }



    https://neo4j.com/deployment-center/

Scroll down a little bit and find the latest release of NEO4J distrubution. Its called as a **graph db self managed**. There is also cloud version of Neo4j called Neo4j aura. Fully managed by Neo4J team. 

    Choose the community variant (Windows executeable) of Neo4J Self managed graph Db for personal uses.

Click the download community button and wait until the whole zip file is completed downloaded.

## UnZip the Neo4J Installer file

Before extracting the zip file, it is recommended to validate SHA256 between the local zip and stated sha256 on neo4j website (deployment center) to **ensure the installer are not corrupted**.

    Get-FileHash -Algorithm SHA256 "C:\path\to\your.zip"

![postimage100](/assets/images/2025-07/neo4j4.jpg)
[Extracted Neo4J Installation Files & Folder](/assets/images/2025-07/neo4j4.jpg){: .center-image }


Move the installer (zip) to any desired folder. and Extract the zip

## Add Neo4J to Environment PATH

Current step objective is to make neo4j executeable binary can be called in the terminal. In order to achieve that the windows environment path need to be configured.

Open a terminal (powershell is preferred), go to the folder which store the extracted neo4J file and get the fullpath

    pwd

or use following command if "pwd" return truncated folder path

    (Get-Location).Path

for example

```
PS C:\Users\degananda.ferdian\Documents\Solution Architect\Neo4J\neo4j-community-2025.06.2-windows> pwd

Path
----
C:\Users\degananda.ferdian\Documents\Solution Architect\Neo4J\neo4j-community-2025.0...
```

go to windows and search for edit system environment variable
and choose environment then click new on user variable (use system variable if NEO4J should be accessible for all user). 

Add following path

```
 (variable name) = NEO4J_HOME
 (variable value) = C:\Users\degananda.ferdian\Documents\Solution Architect\Neo4J\neo4j-community-2025.06.2-windows\neo4j-community-2025.06.2
```

As shown in below image

![postimage100](/assets/images/2025-07/neo4j1.jpg)
[Add NEO4J Path on Windows System(User) Environment Varaiable](/assets/images/2025-07/neo4j1.jpg){: .center-image }


# Start Neo4J

## Check if NEO4J avaialble on Path

close any terminal/powershell and reopen it. then, execute following command

    echo $env:NEO4J_HOME

it result return the complete directory path of the NEO4J files that configured on previous step.

```
PS C:\Users\degananda.ferdian> echo $env:NEO4J_HOME
C:\Users\degananda.ferdian\Documents\Solution Architect\Neo4J\neo4j-community-2025.06.2-windows\neo4j-community-2025.06.2
```

## Start NEO4J

![postimage100](/assets/images/2025-07/neo4j6.jpg)
[Starting up NEO4J from console](/assets/images/2025-07/neo4j6.jpg){: .center-image }


execute following command to start NEO4J in port 7474

    & "${env:NEO4J_HOME}\bin\neo4j.bat" console

## Access Neo4J on Browser

![postimage100](/assets/images/2025-07/neo4j7.jpg)
[Login to NEO4J Dashboard via web browser](/assets/images/2025-07/neo4j7.jpg){: .center-image }

open any browser of you choice and go to below url

    http://localhost:7474

set protocol and ip to

    neo4j://localhost:7687

login with following username and password (default credential, as we dont speficy it during the path configuration)

    neo4j:neo4j
