---
layout: posts
author: Degananda Ferdian
categories: Java
series-code: HSD001
excerpt: Describe springboot characteristics, differentiation betweeen spring boot and Java EE also The Quick step to setup, install and configure springboot based on official documentation
tags: spring springboot java
topics: spring
subtitle: Hello world subtitle of this post
ptype: News
background: What is the avaialble capabilities of IoT Platofrm MLP (Minimum loveable product)
objective: to identify basic and core capabilities of IoT Platform based on market standard
deliverables: Article, Comparison Analysis & Illustration
---

# What is Spring Boot
Java syntax itself is already complex compared to other programming language such as python, ruby, nodejs and etc. Now imagine, a java project without Common framework is headache especially in an enterprise. a Framework can simplify, orchestrate and structurized the project strucure.

    Spring is one of the most popular (apart from java EE) and stable java framework that available on the Market.   

# Differences between Spring and Java Enterprise Edition

## Java EE
Java EE(enterprise edition) is the standard extension for Java SE (Standard edition) which expand the capability of Java SE to support enterprise apps development. Offering sets of "enterprise feature" such as : web services, distributed computing and scalable services, multi tiered and reliable services.

    Those enterprise capability will be available as Java EE API (Application programming interfaces) that can be utilized by developer to create enterprise application especially for backend

## Spring Boot
Similar with Java EE (or now can also be called as Jakarta EE), Sprintboot is also an extension to Java SE (Standard Edition) which offering the enterprise grade API that can be used to build enterprise application. 

    Spring claimed that the syntax on spring as well as the code management is way more simpler compared to the Java EE. Its their main offering. Thats why nowdays, there are more modern project are based on spring compared to Java EE unless its a legacy apps.

Java EE and spring boot has similar component that provide specific functionality. 

| No | Feature | Java EE | Spring Boot |
|:--------:|:-------:|:------:|:------:|
| 1 | Develop web application (MVC where BE and FE become one) |  Servlet API  | Spring MVC |
| 2 | DB peristor  |  Java persistence API (JPA) | Spring data JPA |
| 3 | Business logic encapsulation  |  Enterprise java beans (EJB) | @service, @component |
| 4 | Template engine |  JSP  | Thymeleaf / FreeMarker / Mustache |
| 5 | FE Rendering |  JSF (Java server faces)  | Done in combination of API+ modern FE framework such as react, angular, etc |

## Others Comparison

Apart from the functionality apple to apple mapping, here are the generic comparison between springboot and Java EE or Jakarta EE

| No | Feature | Java EE | Spring Boot |
|:--------:|:-------:|:------:|:------:|
| 1 | Company Behind it  |  Oracle / Eclipse | VMWare|
| 2 | Concept Modelling  |  Servlet, JSP, EJB, CDI | @Component, @Services, @Controller, Spring Beans |
| 3 | Server  |  Glassfish, Wildfly and Payara | Tomcat, Jetty and Netty |
| 4 | Depedency Injection  |  CDI(Contexts and Depedency Injection) | Spring IOC Container|
| 5 | Messaging Support  | JMS (java messaging system) | Spring JMS, Spring cloud stream (kafka, ActiveMQ and RabbitMQ) |
| 6 | Build tools  |  Maven & Gradle |  Maven & Gradle |
| 7 | Deployment  |  WAR file deployed to app server |  JAR file deployed to app server |

# Installation
## Preparation
there are several library and supporting application that need to be installed prior to the starting of apps development using spring boot.

- **JDK** : java development kit. Spring official recommend to use BellSoft Liberica JDK
- **IDE** : integrated development kit. Eclipse (With spring tools), Intellij IDEA or Visual studio code (with spring boot expansion pack) are widely used by spring developer. Free feel to choose depend on the Project preferences. For this article, VSC will be used.

## Download links for the prep tools

Java development Kit (JDK)

    https://bell-sw.com/pages/downloads/


Visual Studio Code (VSC)

    https://code.visualstudio.com/download

Visual studio code extension for java

![postimage100](/assets/images/2025-04/vscjava1.jpg)
[Java extension for VSC](/assets/images/2025-04/vscjava1.jpg){: .center-image }

    https://marketplace.visualstudio.com/items?itemName=vscjava.vscode-java-pack

Visual studio code extension for spring boot

![postimage100](/assets/images/2025-04/vscjava2.jpg)
[Springboot extension for VSC](/assets/images/2025-04/vscjava2.jpg){: .center-image }

    https://marketplace.visualstudio.com/items?itemName=vmware.vscode-boot-dev-pack

# Checking and Validation before Development
Once all the four tools has been installed, a validation can be executed to check whether those tools has been installed properly to the machine.

## JDK Checking
to validate whether JDK has been properly installed can simplfy use **javac** command. Javac is stands for java compiler. JDK is responsible to compile java files into byte code (java .class files) and later this binary class file can executed by JVM (Java virtual machine)

    javac -version

![postimage100](/assets/images/2025-04/javac.jpg)
[Execute Javac version to check JDK installation status](/assets/images/2025-04/javac.jpg){: .center-image }

if JDK is installed, then the command line should output the version number of java compiler that currently installed as shown in images above. 

*<u>Please restart the command line before exeucting javac if the JDK is recently installed.</u>

## IDE Checking
Since, VSC is used, simply search for java and spring boot extension on the VSC extension manager. It should shown installed if the extension installation and integration to VSC are done.

simplest way to check is it via command line.

    code --list-extensions | grep "java"

and

    code --list-extensions | grep "spring"

if both of the command line return extension name that associated with it then the installation is successful.

# Starting Hello World Project

## Create project using Spring Project Builder (start spring)

![postimage100](/assets/images/2025-04/springbuilder.jpg)
[Speedup spring development with Start Sping project Builder](/assets/images/2025-04/springbuilder.jpg){: .center-image }

open start.spring.io and configure project. For this case we will use **Maven** as the builder and then **java** as the language with springboot 3.4.4

    dont forget to adjust the java version on the builder according to the installed JDK version

start.spring.io is a project builder that can create the first cut of spring boot boilerplate given from our defined configuration above.

![postimage100](/assets/images/2025-04/springhw.jpg)
[completed spring project boilerplate or skeleton is automatically created](/assets/images/2025-04/springhw.jpg){: .center-image }

once done, click generate and the web will automatically zip the preconfigured project files.

## Run the Program using gradle

add a @RestController and @SpringbootApplication Annotation and create a new route (/hello)

```java
package com.test.hello.world.helloworld2;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@SpringBootApplication
@RestController
public class Helloworld2Application {

	public static void main(String[] args) {
		SpringApplication.run(Helloworld2Application.class, args);
	}

	@GetMapping("/helloworld")
	public String helloworld(){
		return "hello world";
	}


}
```

![postimage100](/assets/images/2025-04/gradlehelloworld.jpg)
[Run GET REST API with Springboot and gradle](/assets/images/2025-04/gradlehelloworld.jpg){: .center-image }


execute using following command

    ./gradlew bootRun

if the command is executed for the first time, it will download first the gradle package.

dont forget to add the artifact depedencies for the spring-boot-starter-web on the **build.gradle files**

	implementation 'org.springframework.boot:spring-boot-starter-web'

after adding dependencies, project need to be rebuild using

    gradlew clean build

usually it will also require the restart of IDE/ VSC.

go to localhost:8080/helloworld to access the GET API

![postimage100](/assets/images/2025-04/helloworldapi.jpg)
[call the helloworld GET API](/assets/images/2025-04/helloworldapi.jpg){: .center-image }

## Run the program using maven

![postimage100](/assets/images/2025-04/mavenhelloworld.jpg)
[Run GET REST API with Springboot and maven](/assets/images/2025-04/mavenhelloworld.jpg){: .center-image }

execute using following command ,it will make the springboot run tomcat server and listen HTTP with port 8080

    ./mvnw spring-boot:run

similar with gradle, if the mvn is executed for the first time, it will download first the maven package.

Once the build is completed and no error detected, spring boot will automatically run tomcat (a webserver) that will immediately listen http Port 8080 and make /helloworld accessible.

dont forget to add the depedencies fot the @GetMapping and @RestController on the pom files. those package are coming from following artifact : spring-boot-starter-web. make sure the scope is not test

```xml
 	<dependency>
		<groupId>org.springframework.boot</groupId>
		<artifactId>spring-boot-starter-web</artifactId>
	</dependency>
```

after adding dependencies, project need to be rebuild using

    mvnw clean build

usually it will also require the restart of IDE/ VSC

go to localhost:8080/helloworld to access the GET API

![postimage100](/assets/images/2025-04/helloworldapi.jpg)
[call the helloworld GET API](/assets/images/2025-04/helloworldapi.jpg){: .center-image }

## Appendix

# Build.gradle

```
	plugins {
	id 'java'
	id 'org.springframework.boot' version '3.4.4'
	id 'io.spring.dependency-management' version '1.1.7'
}

group = 'com.helloworld3'
version = '0.0.1-SNAPSHOT'

java {
	toolchain {
		languageVersion = JavaLanguageVersion.of(21)
	}
}

repositories {
	mavenCentral()
}

dependencies {
	implementation 'org.springframework.boot:spring-boot-starter'
	implementation 'org.springframework.boot:spring-boot-starter-web'
	testImplementation 'org.springframework.boot:spring-boot-starter-test'
	testRuntimeOnly 'org.junit.platform:junit-platform-launcher'
}

tasks.named('test') {
	useJUnitPlatform()
}
```


# Pom.XML (for Maven)

```xml
<?xml version="1.0" encoding="UTF-8"?>
<project xmlns="http://maven.apache.org/POM/4.0.0" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
	xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 https://maven.apache.org/xsd/maven-4.0.0.xsd">
	<modelVersion>4.0.0</modelVersion>
	<parent>
		<groupId>org.springframework.boot</groupId>
		<artifactId>spring-boot-starter-parent</artifactId>
		<version>3.4.4</version>
		<relativePath/> <!-- lookup parent from repository -->
	</parent>
	<groupId>com.test.hello.world</groupId>
	<artifactId>helloworld2</artifactId>
	<version>0.0.1-SNAPSHOT</version>
	<name>helloworld2</name>
	<description>Demo project for Spring Boot</description>
	<url/>
	<licenses>
		<license/>
	</licenses>
	<developers>
		<developer/>
	</developers>
	<scm>
		<connection/>
		<developerConnection/>
		<tag/>
		<url/>
	</scm>
	<properties>
		<java.version>21</java.version>
	</properties>
	<dependencies>
		<dependency>
			<groupId>org.springframework.boot</groupId>
			<artifactId>spring-boot-starter</artifactId>
		</dependency>

		<dependency>
			<groupId>org.springframework.boot</groupId>
			<artifactId>spring-boot-starter-web</artifactId>
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