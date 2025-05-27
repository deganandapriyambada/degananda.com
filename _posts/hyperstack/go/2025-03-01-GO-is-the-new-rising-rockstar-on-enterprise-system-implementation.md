---
layout: posts
author: Degananda Ferdian
categories: go
series-code: HSD001
excerpt: GO Lang is become popular in the last five years. Lets try to install and learn GO Lang.
tags: go-Lang
topics: go-lang installation
subtitle: Hello world subtitle of this post
ptype: News
background: try and handson on GO-Lang
objective: to install GO-Lang on Mac using different method
deliverables: Article, Ilustration
---

# Go-Lang in last 5 Years
Despite the reside of python due to the age of AI/ML (Artificial intelligence & Machine learning), GO is become a choice for an enterprise or startup to build their backend system. 

<script type="text/javascript" src="https://ssl.gstatic.com/trends_nrtr/4017_RC01/embed_loader.js"></script> <script type="text/javascript"> trends.embed.renderExploreWidget("TIMESERIES", {"comparisonItem":[{"keyword":"/m/09gbxjr","geo":"SG","time":"today 5-y"},{"keyword":"/m/0bbxf89","geo":"SG","time":"today 5-y"},{"keyword":"/m/05z1_","geo":"SG","time":"today 5-y"},{"keyword":"/m/07sbkfb","geo":"SG","time":"today 5-y"}],"category":0,"property":""}, {"exploreQuery":"date=today%205-y&geo=SG&q=%2Fm%2F09gbxjr,%2Fm%2F0bbxf89,%2Fm%2F05z1_,%2Fm%2F07sbkfb&hl=en","guestPath":"https://trends.google.com:443/trends/embed/"}); </script>

As you may see from above diagram, its quite shocking that GO become more popular on search engine compared to NodeJS. Eventhough it still below the popularity of Python and Java which i believe its not an apple to apple comparison.

    Python is really popular for their AI/ML capabiliities and java is ahead because most of the legacy system that has been built from 90s till now are mostly done in Java.

hence, i think its fair to say that golang is rising if we compare between nodejs and go popularity on google search.

## Industry Point of View
I work on consulting industry for the past 8 Years, in the last 2 years we are seeing more and more new project for across different industry are choosing GO as their backend core system application. 

This may also be an additional backup statement towards the data pointed by google trends above. GO is raising for a reason. There are **two key take away** that make GO is really popular on today industry scene.

    Simplicity and Performance

Syntax wise, GO is much lean compared to their predecessor such as Java & .NET which for some poeple or organization see as a benefit (note that: different organization may see this as a downside as well).

## The Big Apps that use Go Lang

There are hundreds of startup and enterprise app that already use golang especially for their backend services. Most of them are technology company. Some popular one are: 

- Kubernetes
- Docker
- Soundcloud
- Twitch
- Netflix

There are even several companies in banking industries that strated to use golang in their banking system such as : paypal, american express and so on. 

# GO is Faster than Java

In terms of performance, GO is better compared to java and .NET. There are **hundreds of literature** which conclude that GO is better than Java/.NET in the performance.

Here is the TLDR; which make GO is faster than Java

## Interpretation and Compliation

![postimage100](/assets/images/2025-03/go-6.jpg)
[GO directly compile and interpret to OS](/assets/images/2025-03/go-6.jpg){: .center-image }


GO doesnt need JVM to interpret and compile the code. Go will build (interpret and compile) the code directly into machine binary code. this is one of the factor that made go is faster than java.

## Thread Management

![postimage100](/assets/images/2025-03/go-7.jpg)
[Go vs Java Thread Management](/assets/images/2025-03/go-7.jpg){: .center-image }

Java use a thread that managed by OS. One apps thread on java will be mapped to one OS's kernel thread (one to one mapping). Meanwhile Golang actually use thread inside their own runtime (GO runtime). Multiple go runtime can be handled by several OS thread. More efficient compared to java's thread. 
    
    As per several experiment, switching thread context from JVM to the OS is consume more resources (memory & CPU) comparing to with managing internal thread inside the GO runtime.

# Installing GO on Development PC/Laptop

![postimage100](/assets/images/2025-03/go-1.jpg)
[Supported OS by GO](/assets/images/2025-03/go-1.jpg){: .center-image }

GO can be easily installed on our development laptop by download and run the installer that provided by GO.

    https://go.dev/dl/

Choose the operating system that you currently working with and follow the wizard installation.

## Verifying the installation

go to console and type following command

    go version

![postimage100](/assets/images/2025-03/go-3.jpg)
[Check whether go is installed on the Machine](/assets/images/2025-03/go-3.jpg){: .center-image }


if the console returning the current version of go that installed on our machine then the installation is complete.

## Hello world

create a new package

![postimage100](/assets/images/2025-03/go-4.jpg)
[Create GO package](/assets/images/2025-03/go-4.jpg){: .center-image }

    go mod init packagename/index

this command will create go mod file to ensure the project has depedency tracker. if you come from nodejs background, it would be similar with **NODEJS package.json** or in Java (Maven - **POM.XML**) or java(Gradle - **Build.gradle**)  / depend on the build system choosen for Java.

write a go script to print "hello world" on the console.

    package main
    import "fmt"

    func main(){
        fmt.Println("hello World")
    }

to run the go script use following syntax

    go run .

![postimage100](/assets/images/2025-03/go-5.jpg)
[run and execute GO script](/assets/images/2025-03/go-5.jpg){: .center-image }

it will automatically find main package and run the script.