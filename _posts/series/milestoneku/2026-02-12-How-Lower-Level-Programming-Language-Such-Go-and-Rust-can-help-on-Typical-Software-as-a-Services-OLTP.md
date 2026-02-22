---
layout: posts
author: Degananda Ferdian
categories: programming
series-code: TLNT001
excerpt: Java is the most matured modern programming language for backend. However, rust, nodejs and golang are slowly filling up the niche use cases that java could not excel at.
tags: landscape
background: Backend system is one of the most critical component of any software as it server as the backbone of all business logic. It is important to choose the most fit programming language depending on the project nature.
objective: To identify the market segment among top four programming language for backend development
deliverables: article & illustration
---

![postimage100](/assets/images/2026-02/erd3.jpg)
[Nodejs, java, golang and rust has different strength and positioning, best way is to utilize all of them depend on the situation and usecases](/assets/images/2026-02/erd3.jpg){: .center-image }

# NodeJS and Java are like daily car while Golang and Rust is more for circuit purposes.

An analogy in car type context for current big four programming language such as nodejs, java, go and rust is like comparing typical daily toyota SUV with BMW-M series.

&mdash; Both car types serve different purposes and excel on their strength at various situation.

## NodeJS and Java Are Like Toyota SUV for Daily Commuting Car

NodeJS and java are like our **daily commuting car** such as toyota/ford/honda SUV due to the intensive support & sparepart availability all over the country. Moreover, it has super rich support ecosystem (workshop, repair-kit, distributor) that can be used when in needs (customization, after sales, tuning, etc) and used by majority of poeple that we dont have to worry about the maintenances as well as the reliability.

Daily commuting car characteristics (Nodes & Java)

1. Rich ecosystem support.  Majority of car workshop can maintain and tune the car as well as wide aftermarket brand (apart from the OEM) to support the sparepart availability (either for maintenance or customization).
2. User friendly, doesnt require much tuning and maintenance. Even someone who doesnt know anything about car engine will be fine.
3. Decent speed. Enough for overtaking others in highway but not in circuit.

## Rust and GO are like BMW M series for Racing Car

In other hand, GO and rust are like BMW M Series and completely different beast. It meant for circuit racing. Typically, BMW M series is not the daily commuting car for most of the people because the general supporting ecosystem are not available across all area within the country. Poeple are less "secure" while driving the BMW M series to country side, worrying about workshop/sparepart availability on that region in case something goes wrong with the car.

BMW M series car characteristics (Nodes & Java)

1. Limited ecosystem support (not all workshop within the country can repair or tune BMW M series, it requrie specialized workshop and spareparts)
2. Non User friendly, usually marketed for car enthusiast that really into car engien tuning and car maintenance.
3. High speed. Enough for racing in circuit.

However, Even BMW M series is insane fast, it has insanely high speed and high torque compared to toyota SUV but the engine is less reliable (require lot of tuning, extra maintenance) and has limited customization option.

Toyota SUV has wide variety of after market parts from wheels, mirror, seat, exhaust from multi vendor (rich ecosystem). Of course, BMW-M series can be modified but the vendor who can provide the sparepart are limited.

&mdash; Does BMW-M series is better than typical toyota SUV car? **NO**, it all goes down to the purposes and the situation. **Its better if we own both** as it excel different usage

Same analogy can be applied to Nodejs,java,golang and rust. We should not stick with one programming language, it should **depend on the use cases**. This practice is called polyglot programming. Maximizing each programming language strength to achieve to most optimum quality of software with acceptable development time.

<hr />

Similar with car that has different engine configuration (number of cylinder, mounting/positioning, volume of cylinder), each programming language also has their own engine characteristics, making them excels on their own segments or use cases.

### NodeJS Characteristics

An **intepretted** programming language.

- Single threaded Eventloop V8 engine will interpret and compile it immediatly using JIT (just in time) approach.
- Asynchronous design with Non Blocking I/O (reading files or network request or any input-output  operations) **wont blocking** the other process. 
- Has garbage collection
- Bad for CPU intensive usecases

### Java Characteristics

**Non native** compiled programming language through JVM

- Compiled java code to bytecode and run it inside JVM (java virtual machine) using JIT (just in time) approach.
- Has garbage collection
- Intensive multi threading (unlike NodeJS)
- Good for CPU intensive task due to the intensive multi threading.

### Rust Characteristics

**Natively compiled** programming language

- Rust file will be compiled and will be executed without the needs of virtual machine like java (JVM)
- **Deterministic memory management** (hence, no garbage collectors)
- Give C++ control  without the needs to write complex memory management
- **execellent** for both CPU & I/O intensive task

### GO Characteristics

**Natively compiled** programming language

- golang file will be compiled and will be executed with an embedded runtime
- has garbage collector
- good for both CPU & I/O intensive task

# Positioning of NodeJS, Java, Go and Rust in today software engineering landscapes

Below are the practical best practices on how each of the programming language incorporated to the system.

## Feature Comparison

Feature comparison between NodeJS, Java, Golang and Rust

| No | Aspect | Best in Slot | Alternatie BiS | Remarks | Judgement |
|---|---|---|---|---|---|
| 1 | Best Performance | Rust | Golang | higher throughput & lower latency <br /> Golang and Rust are low level programming, <br /> hence its faster comapred to nodejs and java | Rust doesnt have garbage collector and zero cost abstraction |
| 2 | Concurrency | Golang | Rust | BiS programminng language with good concurrey means it has <br /> Built in lightweight concurrency frameworks, <br /> the language take care of it. | GO has goroutines while rust has async + thread concept. |
| 3 | Ecosystem Maturity <br /> & Community Support | Java | NodeJS | Matured programming language has wide job market <br /> and extensive community documentation & library | Java and NodeJS are the most mature programming language. <br /> widely adopted by enterprise or startup |

## Usage Comparison

Below is how each language excel on their own segment.

&mdash; rather than debating which one is the best, it would be better to utilize each language on specific condition & purpose as each of the language has their own strength

| No | Typical Usage | Best in Slot | Remarks |
|---|---|---|---|
| 1 | Web Development | NodeJS | NodeJS is built on top of v8 javascript engine, <br /> making nodejs is the most versatile programming language <br /> as it can be used for frontend  and backend <br /> (or even mobile frontend with react native) |
| 2 | Enterprise System | Java | Java has been on the industry for around 30++ years, <br /> most of banking backend are backed up by java.  |
| 3 | Digital Core <br /> eg: load balancer, network apps or <br /> or basically any critical system that require high throughput    | Rust | Rust is low level programming language <br /> with no garbage collector has literally zero runtime cost high level asbtraction |
| 4 | Scaleable microservices <br /> with okay-ish development time | Golang | Go might not be as fast as rust, <br /> but the syntax is less complex compared with rust <br /> enabling developer to ship the product faster but with comparable performance with Rust |