---
layout: posts
author: Degananda Ferdian
categories: backend-engineering
series-code: HSD001
excerpt: Server resources nowdays is getting cheaper. However, its not unlimited. A bad code will ended up in O(N^2) complexity causing scalability issue especially during high traffic when the Microservices processing a lot of data
tags: be be-engineering performance-engineering
topics: be-engineering
subtitle: Hello world subtitle of this post
ptype: Review
background: Code is the foundation of application architecture. The business logic is written on the code level. Bad code (scalability & resiliency ) will impact the whole architecture.
objective: to understand various strategies of backend performances improvement
deliverables: Article, Source Code,  Ilustration
---

# SOLID Principles

# References



    #	Area	Commonly Referred As
    1	Data Structures	Data Structure Design or Algorithmic Foundations
    2	Algorithm Design & Complexity Awareness	Algorithmic Complexity Analysis or simply Algorithm Design
    3	Memory Usage & Space Complexity	Memory Optimization or Space Complexity Management
    4	Concurrency & Parallelism	Concurrent Programming or Multithreading/Asynchronous Programming
    5	Caching & Memoization	Cache Optimization or Computation Reuse
    6	Efficient I/O Operations	I/O Optimization (Disk, File, Network I/O)
    7	Profiling & Benchmarking	Performance Profiling or Code Instrumentation
    8	Code Quality (Linters, Static Analysis)	Code Quality & Maintainability
    9	Language-Specific Performance Tricks	Low-Level Optimization or Language-Level Tuning

https://www.ibm.com/think/topics/data-structure

# Data Modelling
Your approach to translating business requirements into an ERD (Entity-Relationship Diagram) is quite mature and aligns well with established best practices in solution architecture, especially in consulting environments like Accenture. It’s systematic, user-centered, and scalable. Here’s a breakdown of how your method compares to current industry best practices and whether anything could be improved or modernized:

✅ Strengths in Your Approach
User-Centric Requirement Translation

Translating business needs into persona-based user stories is an excellent practice. It ensures traceability and aligns well with Agile/Scrum and Design Thinking methodologies.

Contextual Entity Modeling

Differentiating object contexts (e.g., performance vs. interior for cars) before assigning parameters shows deep architectural thinking. This is critical in complex domain modeling and is similar to Domain-Driven Design (DDD) principles.

Parameter Extraction from Wireframes

Mapping screens to entities and extracting parameters helps in maintaining UI-UX alignment with the data layer. This is especially useful for NoSQL (materialized view) and frontend-optimized designs (e.g., Firebase or serverless apps).

Flexible ERD Modeling

Acknowledging that SQL and NoSQL demand different modeling strategies shows adaptability, which is essential in hybrid and polyglot persistence environments.

Awareness of Scope Creep

Your note about user story expansion affecting project scope, and the role of PO/Scrum Master, reflects strong cross-functional understanding.

🚨 Potential Gaps or Modernization Areas
1. Event-Driven Architectures (EDA) & CQRS
Now Common: In distributed systems (especially microservices), data models are often split into Read and Write models (CQRS).

Write model: normalized for integrity

Read model: denormalized for performance (similar to your NoSQL view)

Event sourcing can replace or supplement traditional CRUD-based ERD models.

Improvement: You can mention these patterns as alternatives to traditional ERD when dealing with high-scale systems.

2. API-First and Schema-First Design
Tools like OpenAPI/Swagger, GraphQL SDL, or gRPC Protobufs are often used before ERDs are modeled—especially in teams practicing API-first development.

Improvement: Integrate ERD modeling with API schema design to ensure smooth API/data interface alignment.

3. Entity Versioning & Temporal Modeling
Often overlooked: entities change over time. Best practices now involve versioned data models or temporal tables (SQL) to track changes, especially for audit/compliance.

Improvement: Add temporal dimension or versioning strategy to your ERD if change tracking matters.

4. Security Context
You mention login/authentication, but modern systems often enforce role-based access (RBAC) or attribute-based access (ABAC) within the data model.

Improvement: Define UserRole, Permissions, or contextual access metadata in the ERD.

5. Data Privacy & Compliance (GDPR/CCPA)
Personal data fields (like email, profile photo) need tagging for privacy, anonymization, or deletion.

Improvement: Add metadata for PII/PHI compliance.

✅ Summary of Best Practices Alignment
Category	Your Approach	Still Best Practice?	Enhancement Ideas
User Story-Based Modeling	✅ Yes	✅	Add DDD if needed
Contextual Object Modeling	✅ Yes	✅	Use Bounded Contexts
Wireframe-Based Param Extraction	✅ Yes	✅	Integrate API Schema
SQL vs NoSQL Modeling	✅ Yes	✅	Add CQRS discussion
Normalization/Denormalization	✅ Yes	✅	Add event handling
Authentication Modeling	✅ Partial	⚠️ Limited	Add roles & auth context
Change Tracking	❌ Not Mentioned	❌	Add temporal/versioning
Privacy & Compliance	❌ Not Mentioned	❌	Add data tagging strategy

🏁 Final Verdict
Your approach is solid and reflects enterprise-level understanding of system design, especially in early-phase solution architecture. It's still very relevant today. To further modernize:

Introduce CQRS/Event Sourcing concepts for scalability.

Integrate API contract-first development.

Plan for privacy, security, and entity evolution.

Let me know if you'd like me to provide an ERD example based on one of your user stories, or show how the same model would look in SQL vs. NoSQL vs. event-driven format.

----

networking from scratch

what is the best way to learn networking from basic? 


ChatGPT said:
To learn networking from the basics, follow a layered, hands-on approach that mirrors how networks are actually built (e.g., using the OSI or TCP/IP models). Here's a proven roadmap with resources and key concepts:

🧱 Step-by-Step Guide to Learning Networking
1. Understand the Fundamentals
Start with the why and how of networking:

What is a network?

Types: LAN, WAN, MAN, PAN

Difference between switches, routers, modems, firewalls

Basic devices: clients, servers

📘 Resources:

Free book: Computer Networking: Principles, Protocols and Practice

YouTube: NetworkChuck - Intro to Networking

2. Learn the OSI & TCP/IP Models
These models help you understand what happens when data travels through a network.

OSI Layers: Physical, Data Link, Network, Transport, Session, Presentation, Application

TCP/IP Stack: Link, Internet, Transport, Application

Protocols like HTTP, TCP, UDP, IP, ARP, DNS, DHCP

📘 Resource:

Cisco's OSI Model Explained

3. Dive into IP Addressing and Subnetting
Crucial for understanding how devices communicate:

IPv4 & IPv6

Subnetting and CIDR

Public vs private IPs

NAT, DHCP

🧮 Use practice tools:

Subnetting Practice

YouTube: David Bombal’s subnetting series

4. Understand Core Protocols
Learn how the internet really works:

DNS: Domain to IP

DHCP: IP assignment

TCP vs UDP: Reliable vs fast

HTTP/S: Web traffic

ICMP: Ping/traceroute

🔧 Hands-On:

Use ping, tracert/traceroute, nslookup, dig, ipconfig/ifconfig, netstat

5. Set Up Your Own Network (Simulated or Real)
This is where you solidify everything.

Use Cisco Packet Tracer (free) or GNS3

Build a virtual network: Connect routers, switches, PCs

Assign IPs, configure routing, test connectivity

6. Learn Security Basics
Every network has vulnerabilities. Learn:

Firewalls

VPNs

Port scanning (e.g., with nmap)

Basic intrusion detection

📘 Bonus Resource: TryHackMe (has beginner-friendly networking labs)

7. Optional: Get Certified or Go Deeper
Consider certifications if you want structure or career credentials:

CompTIA Network+ – Best for beginners

Cisco CCNA – More in-depth, job-focused

Wireshark – Learn to analyze traffic (use Wireshark to inspect packets)

🔁 Practice Makes Perfect
Use these tools regularly:

ping, traceroute, curl, telnet, netstat, nmap, Wireshark

Simulate attacks or breakdowns and try debugging

Would you like a beginner-friendly curriculum with weekly goals and project ideas?