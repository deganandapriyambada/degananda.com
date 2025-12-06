🧱 🔥 Comprehensive List of Architectural Patterns
🧊 1. Layered Patterns
Pattern	Description
Layered Architecture (N-tier)	Separates system into layers (UI, business, data) — most common in enterprise systems
Monolithic Architecture	Entire app deployed as a single unit
Client-Server Architecture	Clients request services from centralized servers
Model-View-Controller (MVC)	Separates concerns: UI (View), Logic (Controller), and Data (Model)
Model-View-ViewModel (MVVM)	Popular in frontends like WPF or Angular — separates view from model via viewmodel

🧰 2. Component-Based / Modular Patterns
Pattern	Description
Microservices	System split into small, independent services
Service-Oriented Architecture (SOA)	Similar to microservices but more tightly coupled and enterprise-focused
Plugin Architecture	System allows extension via dynamically loaded plugins
Modular Monolith	A monolith structured with strict module boundaries — stepping stone toward microservices

⚡️ 3. Event-Driven & Reactive Patterns
Pattern	Description
Event-Driven Architecture (EDA)	Components communicate via events — decoupled and scalable
CQRS (Command Query Responsibility Segregation)	Separate read and write paths for scalability and clarity
Event Sourcing	Store system state as a sequence of domain events rather than current state
Reactive Architecture	Focuses on responsiveness, elasticity, and asynchronous message passing

🛡 4. Clean and Domain-Centric Patterns
Pattern	Description
Domain-Driven Design (DDD)	Organize software around the business domain, with layers like Entities, Repositories, Services
Hexagonal Architecture (Ports and Adapters)	Isolate core domain logic from outside systems (UI, DB, APIs) via adapters
Clean Architecture	A stricter version of Hexagonal; inner circle = pure business logic
Onion Architecture	Similar to Clean Architecture; domain core in the center, with concentric layers around it

🌐 5. Distributed & Cloud Patterns
Pattern	Description
Serverless Architecture	System composed of stateless functions in the cloud (e.g., AWS Lambda)
Backend for Frontend (BFF)	Custom backend layer for each frontend type (mobile/web)
API Gateway	Central entry point to APIs for routing, auth, throttling, etc.
Service Mesh	Infrastructure layer for service-to-service communication (e.g., Istio, Linkerd)
Sidecar Pattern	Deploy helpers (e.g., logging, security) alongside app containers
Strangler Fig Pattern	Gradually replace a legacy system by routing new features to new services

🧪 6. Data and Integration Patterns
Pattern	Description
Repository Pattern	Abstracts access to data sources from domain logic
Data Mapper Pattern	Maps between in-memory objects and database schemas
Shared Database Pattern	Multiple services share a single database (usually discouraged in microservices)
Database per Service	Each microservice has its own database (preferred in microservices)
Publish-Subscribe	Event messages are broadcast to multiple subscribers
Command Pattern	Encapsulates actions/commands as objects for flexible handling

🧠 Summary by Category
Category	Example Patterns
Classic Application	Layered, Monolith, MVC
Modern Web/Cloud	Microservices, Serverless, API Gateway, BFF
Domain-Oriented	DDD, Clean, Onion, Hexagonal
Scalability	CQRS, Event-Driven, Event Sourcing, Pub/Sub
Modular Systems	Modular Monolith, Plugin, Component-based
Cloud-Native Infra	Service Mesh, Sidecar, Strangler Fig