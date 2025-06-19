---
layout: posts
author: Degananda Ferdian
categories: architecture
series-code: none
excerpt: List of standard and best practice that can be applicable for modern industrial IT-OT System.
tags: itot assessment
topics: assessment
subtitle: Hello world subtitle of this post
ptype: News
background: At least every 5 years, an organization need to renew or validate their existing ITOT blueprint, especially to check whether the blueprint still following latest cutting-edge ITOT technology.
objective: to understand different standards, best practices and methodologies to assess modern ITOT architecture on Industry
deliverables: Article and Illustration
hidden: false
---

# Standards

IT Part
## Dr. Kenneth C. Laudon and Dr. Jane P. Laudon, whose “Management Information Systems” 5 Information System Component

OT
ISA-95: Enterprise-Control System Integration
ISA/IEC 62443: Industrial Automation and Control Systems Security

“Industrial Automation and Control System Security Principles” – by Ronald L. Krutz

ITOT
ISA-95 & ISA-99 (i.e., IEC 62443)
NIST SP 800-53 & NIST CSF
Industrial Internet Consortium (IIC) Frameworks:
IIRA (Industrial Internet Reference Architecture)
IISF (Industrial Internet Security Framework)
Very comprehensive frameworks covering architecture and security of converged systems.


Excellent and important question — you're absolutely right to seek foundational or canonical references for OT and IT/OT Convergence, similar to how “Management Information Systems” provides that foundation for IT.

Here's the truth: while IT has been formalized academically for decades (MIS, CS, IS), OT and IT/OT convergence are more engineering- and industry-driven, and not yet centralized into a single foundational textbook like Laudon’s MIS.

That said, there are foundational references and bodies of knowledge — they just come from industrial standards, engineering disciplines, and cybersecurity domains rather than academic IS curricula.

🔧 Foundational References for OT (Operational Technology)
📘 1. ISA / IEC Standards
ISA-95: Enterprise-Control System Integration

Defines levels of automation systems (Level 0–4), interfaces between control and enterprise systems.

Highly foundational for understanding how OT systems are structured and how they interact with IT.

ISA/IEC 62443: Industrial Automation and Control Systems Security

The gold standard for OT cybersecurity and architecture.

Defines roles, system zones/conduits, and maturity levels.

📘 2. Books
“Industrial Automation and Control System Security Principles” – by Ronald L. Krutz

A practical intro to securing OT environments. Good for newcomers from IT.

“Cybersecurity for Industrial Control Systems: SCADA, DCS, PLC, HMI, and SIS” – by Tyson Macaulay & Bryan Singer

Excellent for understanding how traditional OT systems work and where cyber risks emerge.

“Practical Industrial Internet of Things Security” – by Sravani Bhattacharjee

Focuses on OT security in modern IIoT-enabled environments.

📘 3. NIST Publications
NIST SP 800-82 Rev 2: Guide to Industrial Control Systems Security

Very readable and practical. Covers architecture, threats, and controls specific to ICS/SCADA/PLC systems.

🔄 Foundational References for IT/OT Convergence
There’s no single textbook yet — but convergence is heavily covered in whitepapers, playbooks, and industry frameworks.

📘 1. Industry Frameworks and Standards
ISA-95 & ISA-99 (i.e., IEC 62443)

Use these together: ISA-95 defines the layers, and ISA-99/IEC 62443 defines how to secure the integration.

NIST SP 800-53 & NIST CSF

Include extensive references to cross-domain controls.

Industrial Internet Consortium (IIC) Frameworks:

IIRA (Industrial Internet Reference Architecture)

IISF (Industrial Internet Security Framework)

Very comprehensive frameworks covering architecture and security of converged systems.

📘 2. Books & Reports
“Securing the Industrial Internet of Things (IIoT)” – by Anne Hardy (ed.), Industrial Internet Consortium

Good vendor-neutral overview of convergence patterns, architecture, and risks.

“IT/OT Convergence: Bridging the Divide” – by ARC Advisory Group

Not a book per se, but a well-respected industry report that lays out convergence models and governance.

Gartner, Forrester, or IDC Reports

While behind paywalls, these often describe maturity models and trends in convergence strategies for oil & gas and manufacturing.

🏗️ Suggested Foundational Structure
If you're trying to build a framework or methodology based on the best available knowledge, use this hybrid model:

Layer	Reference
Conceptual (IT/OT Architecture)	ISA-95, NIST SP 800-82
Security (Cyber + Physical)	IEC 62443, NIST 800-53
Governance	COBIT (for IT), adapted to OT using ISA-95 Level 3/4 interface
Engineering Context	IEC 61508/61511 (Functional Safety), API Standards
Emerging Convergence Models	IIC's IIRA + IISF

🎯 Summary
No single "OT or IT/OT MIS textbook" yet exists — because the field is still maturing.

Instead, industrial standards (ISA, NIST, IEC) + domain-specific books + industry frameworks (IIC, ARC) fill the role.

For an IT-trained audience, these resources provide the depth needed to truly understand and assess OT and convergence layers.

Would you like a curated reading list or a visual stack model (e.g., how ISA-95, 62443, NIST all layer together in OT/ITOT)?
