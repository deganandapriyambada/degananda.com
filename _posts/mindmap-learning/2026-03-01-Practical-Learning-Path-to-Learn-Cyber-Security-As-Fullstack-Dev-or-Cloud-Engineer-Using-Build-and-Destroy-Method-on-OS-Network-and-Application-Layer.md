---
layout: posts
author: Degananda Ferdian
categories: mindmap-learning
series-code: CSEC001
excerpt: On Generative AI era where LLM (large language model) is the key technology foundation, data become one of the most important asset for an organization. Extensive web scrapping are used to mine publicly available data in order to be fed to the AI model making cybersecurity skills and knowledge are important for system implementor.
tags: cybersecurity learning-path
background: Industry 4.0 and digitalization era honeymoon period are over. Now, its shifting into AI (artificial intelligence era) especially on generative AI distruption. The needs of cybersecurity implementation or assessment are surging to help organization protect their digital assets in AI era.
objective: to understand how to acquire minimum essential cyber security skills as system implementor (software engineer/cloud engineer/fullstack dev)
deliverables: Mindmap
typora-root-url: ./../../../
---


# Cybersecurity learning path for System Implementor

Its been a while ever since industry 4.0 or digitalization become booming and massive where every company racing to market their product in the digital world. The peak of software engineering era was ended 2 years ago (around 3 years after covid 19).

Attached learning path is focused on practical side of cyber security instead of the theoritical area (complementary). Designed for software engineer who already has experience on building the system / system implementation using build and attack approach.

![postimage80](/assets/images/2026-03/cybersecurity1.jpg)
[Cybersecurity learning path for system implementor](/assets/images/2026-03/cybersecurity1.jpg){: .center-image }

Below are the simulation infrastructure stack

| Category | Stack | Judgement |
|---|---|---|
| Operating System | Ubuntu server LTS | Most of startup start with ubuntu server <br /> and it has minimum default security protection compared to enterprise linux (RHEL, etc) <br /> best for learning purposes (and free to use!)  |
| Attacker Machine | Any | Doesnt really matter as long as the penetration-tools can run on that distro/OS, but the recommendations is to use kali linux as its has pre-installed security assessment tools. |
| On prem/VM | VM | For easy time machine/ISO recovery when something goes wrong |

## Key Learnings Consideration

The learning paths is designed to be heavy on the practical approach with less theory as its intended for system implementator instead of cyber security practitioners. The first step or odd step will focus on the **system hardening** and then followed with an attempt to **exploting the vulnerability**. Its like a practical roleplay between system implementor/maintainer vs intruder (hacker/cracker).

There are three stages of the learning

1. OS level security - focus on the operating system (linux) security configuration such as privilages control (authorization and authentication) 
2. Network level security - focus on the http protocol as its the most common network layer due to widely used on web applications.
3. Application level security - discuss various attack pattern on web services.

below is the topics per stages

| Stages                     | Topic                                                        |
| -------------------------- | ------------------------------------------------------------ |
| OS Level Security          | 1. Securing authentication and authorization process on ubuntu server |
| Network Level Security     | 1. Apache and Nginx hardening<br />2. Controlling network access via firewall (software level) |
| Application Level security | experimenting various attack methods for web based services including:<br />1. IDOR<br />2. LFI (Local file inclusion)<br />3. JWT Bruteforce<br />4. XSS<br />5. CSRF<br />6. RFI (remote file inclusion)<br />7. SQL Injection |

note that cybersecurity has wide scope. The learning path only cover super small portion of end to end cybersecurity guidelines. The path is intended to give high level cybersecurity guidelines for system implementor, just to give basic awareness of potential threats
