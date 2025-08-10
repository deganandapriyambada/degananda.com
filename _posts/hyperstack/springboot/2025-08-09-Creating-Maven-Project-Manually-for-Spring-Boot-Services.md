---
layout: posts
author: Degananda Ferdian
categories: java
series-code: HSD001
excerpt: Springboot project with maven as the builder tools  can be initiated in two ways. Through bootstrapping tools like start.spring.io or manual setup.
tags: spring springboot java maven
topics: spring
ptype: News
background: Most convinient way to start a springboot project is throught start.spring.io website. The tools will automatically create the project skeleton and neccesary configuration file (eg pom.xml if using maven). Alternatively, it can also be done manually
objective: to create springboot project skeleton (boilerplate) and all neccesary configuration manually using maven
deliverables: Article, Illustration
---


# Maven is More Popular than Gradle on Enterprise Web Services

Most of the spring boot java web services (eg: Backend API/Microservices based on Spring Boot) for enterprise is done using maven build tools beacuase maven was originally founded on 2004 while gradle is just there after 2009. 

<script type="text/javascript" src="https://ssl.gstatic.com/trends_nrtr/4116_RC01/embed_loader.js"></script>
<script type="text/javascript">
trends.embed.renderExploreWidget("TIMESERIES", {"comparisonItem":[{"keyword":"spring boot maven","geo":"","time":"2024-08-09 2025-08-09"},{"keyword":"spring boot gradle","geo":"","time":"2024-08-09 2025-08-09"}],"category":0,"property":""}, {"exploreQuery":"q=spring%20boot%20maven,spring%20boot%20gradle&hl=en&date=today 12-m,today 12-m","guestPath":"https://trends.google.com:443/trends/embed/"});
</script>

The popularity of maven over gradle on enterprise services is also backed up with recent google trends data (as of 9 august 2025)

    Moreover, gradle is often used as for mobile development especially for android application.

Maven is used due to the following benefit:

1. it manage the **project dependencies** and **package management** (all packages are stored on maven central repositories, can be public or private)
2. Compile from java source code to binary and run it
3. Package the application (either WAR or JAR)
4. Publish and manage the artifact on repositories

## Requirement to Integrate Maven on the Project

![postimage100](/assets/images/2025-08/maven3.jpg)
[Project skeleton of Maven with Springboot](/assets/images/2025-08/maven3.jpg){: .center-image }


A specific project skeleton is expected by maven

1. src/main/java => location of the java source code files
2. src/main/resource => location of the config
3. pom.xml on the project root

ensure maven has been installed on the system

via brew

    brew install maven

on chocolately

    choco install maven

to validate whether maven is installed, execute following command on the terminal

    mvn --version

![postimage100](/assets/images/2025-08/maven1.jpg)
[Check Whether maven is installed on the system](/assets/images/2025-08/maven1.jpg){: .center-image }

it should return the maven version that currently installed to the system

# Write the code

## Preparing the POM.XML

POM is stands for (project object model) written in XML format. Contains all neccesary configuration of the maven project

### Name space and declaration

Maven will expect project tags on beginning and the of the POM.XML files. Its need to be declared using latest POM Schema version possible (Currently 4.0.0 which is been there since 2004)

```xml
<project 
    xmlns="http://maven.apache.org/POM/4.0.0"
    xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
    xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 
    https://maven.apache.org/xsd/maven-4.0.0.xsd">
```

### Model version

this need to be aligned with the MXL definition on project tags. It is recommended to use latest version as possible.

```xml
<modelVersion>4.0.0</modelVersion>
```

### Project Config

Four item need to be defined here:
1. project name space (groupId). Usually start with com.{project_name}
2. artifactId : {project_name} (Name of the JAR/WAR file after build completed)
3. version : version of the packages/project. Become handy during for release management.
4. Pacaking : either JAR or WAR. for springboot its usually JAR


``` XML
<groupId>com.example</groupId>
<artifactId>demo</artifactId>
<version>0.0.1-SNAPSHOT</version>
<packaging>jar</packaging>
```

### Metadata

Describe the project information and name

1. name : {project_name}
2. description : a short and brief description about the project

```
<name>demo</name>
<description>Manual Spring Boot App</description>
```

### Maven specific parent POM (Project object model)

Beacuse the project is designed to be sprint boot apps, it need to referenced the Spring boot project POM as the parent. Meaning the **project is based on spring boot.**.

```
<parent>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-parent</artifactId>
    <version>3.3.3</version>
    <relativePath/>
</parent>
```

replace the 3.3.3 with desired spring boot version. Leave the relative path as is, so it will look up at maven central repositories.

### Java Version

Specify the java version. Should be aligned with the specific java version that installed on the server machine.

```xml
<properties>
    <java.version>17</java.version>
</properties>
```

maven will build the project based on those specific java version. hence, it is really important to match the java version between development machine and server machine

### Depedencies

As the Parent POM defined using spring boot, some package need to be defined. The only mandatory module is **Spring boot web start**. All of those package (dependency) need to be wrapped in depedencies tags

```xml
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-web</artifactId>
</dependency>
```

(optional) in case need hot reload
```xml
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-devtools</artifactId>
    <scope>runtime</scope>
    <optional>true</optional>
</dependency>
```

(optional) unit testing using JUnit

```xml
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-test</artifactId>
    <scope>test</scope>
</dependency>
```

### tomcat web server

project will be packaged as executeable jar that compatible with tomcat

```xml
<build>
    <plugins>
        <plugin>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-maven-plugin</artifactId>
        </plugin>
    </plugins>
</build>
```

full version of the pom.xml

```xml
<project xmlns="http://maven.apache.org/POM/4.0.0"
         xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
         xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 
         https://maven.apache.org/xsd/maven-4.0.0.xsd">

    <modelVersion>4.0.0</modelVersion>

    <groupId>com.milestoneku</groupId>
    <artifactId>milestoneku</artifactId>
    <version>0.0.1-alpha</version>
    <packaging>jar</packaging>

    <name>milestoneku</name>
    <description>Backend Services for Milestoneku SaaS: A milestone mangement.</description>

    <parent>
        <groupId>org.springframework.boot</groupId>
        <artifactId>spring-boot-starter-parent</artifactId>
        <version>3.3.3</version> 
        <relativePath/> 
    </parent>

    <properties>
        <java.version>21</java.version>
    </properties>

    <dependencies>
        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-web</artifactId>
        </dependency>
        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-devtools</artifactId>
            <scope>runtime</scope>
            <optional>true</optional>
        </dependency>
        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-test</artifactId>
            <scope>test</scope>
        </dependency>
    </dependencies>
    <build>
        <plugins>
            <plugin>
                <groupId>org.springframework.boot</groupId>
                <artifactId>spring-boot-maven-plugin</artifactId>
            </plugin>
        </plugins>
    </build>
</project>
```

## Create main application

align with the groupId defined on the POM.XML

```xml
<groupId>com.milestoneku</groupId>
```

hence the main apps source code would be here

/src/main/java/com/milestoneku/MainApp.java

```java
package com.milestoneku;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class MainApp {
    public static void main(String[] args) {
        System.out.println("Hello World!");
        SpringApplication.run(MainApp.class, args);
    }
}
```

## Compile, Build and Run The Maven Project

![postimage100](/assets/images/2025-08/maven2.jpg)
[Build into Executable JAR](/assets/images/2025-08/maven2.jpg){: .center-image }


build to jar

    mvn clean package

![postimage100](/assets/images/2025-08/maven4.jpg)
[Apps is started and Hello World is shown on console](/assets/images/2025-08/maven4.jpg){: .center-image }

run the app

    mvn spring-boot:run