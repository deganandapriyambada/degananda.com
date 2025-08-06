---
layout: posts
author: Degananda Ferdian
categories: agenticai
series-code: AGENTIC01
excerpt: One of powerful to query data nodes relationship is GraphDB. Known for the best tools to finding root cause analysis. 
tags: neo4j graphdb
topics: agenticai
ptype: News
background: Machine utilization is one of critical KPI on production department. If machine is breakdown, whole production chain will be delayed. Resulting in revenue loss.
objective: to Install NEO4J on Mac OS for storing data nodes relationship at graph DB, so its can be further analyzed to find root cause analysis (RCA).
deliverables: article & illustration
---

# System Requirement

Neo4J running on top of JVM (Java Virtual Machine) with ARM64 (eg: pple Silicon) or x86_64 (Intel / AMD) SOC(processor) Architecture.

    Apart from the baremetal version, NEO4J has cloud version which is called as NEO4J Aura.

Because its running on JVM, cross-platform compatibility is great. Be it on a docker, baremetal, container or virtualmachine. All Those deployment environment are supported.

# Checking Pre-Requisites

## Java Development Kit (JDK)

Two java distribution platform are supported by neo4j (openJDK or zuluJDK). Both require minimum version at least 21 ++

Download OpenJDK Version 21+ for Neo4J

    https://openjdk.org/

Download ZuluJDK Version 21+ for Neo4J

    https://www.azul.com/downloads/?package=jdk#zulu

<hr />

To Check java version and distribution platform execute following command

    java --version

expected responses

```
openjdk 21.0.7 2025-04-15 LTS
OpenJDK Runtime Environment (build 21.0.7+9-LTS)
OpenJDK 64-Bit Server VM (build 21.0.7+9-LTS, mixed mode, sharing)
```

for example on above cli response, it indicating the local machine is running openJDK version 21.0.7 which is compatible with Neo4J requirement.

## Get Neo4J Installer for Mac

Neo4J has two build version. Community edition and enterprise. For development purposes it is recommended to use the community edition but with one caveat. It only support single databases instances with limited resources utilization (4 gigs of ram).

However, it should be sufficient for development. While enterprise edition is more suitable for production environment which require scalability (vertically and horizontally)

get the neo4J installer from below links

    https://neo4j.com/deployment-center/

choose community edition and appropriate operating system (OS) type.

## Validating the Neo4J installer

Each version of neo4j installer has sha256 hash. This can be used to validate the installer data integrity. Downloaded file sha256 value should match with sha256 value that shown on the websites (unique per version/edition/os type).

for example on neo4j for mac version 2025.07.1 (tar) has following sha256 value.

    09a0bca676b2b4c2b539d9fe4736dadc9dd844f566b50912da918fa14da8416e

execute following command to get the sha256 value of downloaded installer

    shasum -a 256 /path/to/your/file

![postimage100](/assets/images/2025-08/neo1.jpg)
[Checking Sha256 hash value of Neo4J file ](/assets/images/2025-08/neo1.jpg){: .center-image }


ensure its match with the sha256 value from website

# Neo4J Installation

## Extraction

it is recommended to create a specific folder that hold neo4j system on non-root directory.

    mv neo4j-community-2025.07.1-unix.tar.gz /Users/<user>/neo4j/

change directory to the target folder

    cd <location_of_folder>

extract the tar

![postimage100](/assets/images/2025-08/neo2.jpg)
[Extract Neo4J archived installer (tar) ](/assets/images/2025-08/neo2.jpg){: .center-image }

    tar -xf mv neo4j-community-2025.07.1-unix.tar.gz

## Add System Path (recommended)

it is recommended to add the neo4j system folder to the environment variable to get the ease of starting the neo4j anywhere from the terminal without the need to change directory to the neo4j on each execution.

temporary adding

    export NEO4J_HOME=/path/to/_<NEO4J_HOME> 

permanent adding to the PATH (zsh)

    echo 'export NEO4J_HOME=/path/to/_<NEO4J_HOME>' >> ~/.zshrc

change .zshrc to .bash_profile if using bash terminal.

restart the terminal

    source ~/.zshrc

confirm the path added properly

    echo $NEO4J_HOME

it should return the folder path of neo4j system folder.

## Start neo4J server and client

there are two option to start neo4j. To ran on background and ran on console. 2nd option is preferred for development, while the first option (background running) is suitable for deployment phases.

run as console

![postimage100](/assets/images/2025-08/neo3.jpg)
[Neo4J successfully started as console app (non background) ](/assets/images/2025-08/neo3.jpg){: .center-image }

    $NEO4J_HOME/bin/neo4j console

run as background

    $NEO4J_HOME/bin/neo4j start.

## Open Neo4J Browser

![postimage100](/assets/images/2025-08/neo4.jpg)
[Login to Neo4J Databases via Neo4J web client](/assets/images/2025-08/neo4.jpg){: .center-image }

Once the Neo4J Started properly (follow previous steps), the databases can be viewed and managed thorugh neo4j web client.

![postimage100](/assets/images/2025-08/neo5.jpg)
[Query neo4J using cypher query on the browser ](/assets/images/2025-08/neo5.jpg){: .center-image }

Open **http://localhost:7474** and login using neo4j:neo4j (username:password)

Note: after first time login, the system will ask to change password (for security purposes).



