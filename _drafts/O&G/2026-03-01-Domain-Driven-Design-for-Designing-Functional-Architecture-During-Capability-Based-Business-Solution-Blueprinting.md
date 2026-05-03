# Functional Architecture in Context of Solution Blueprinting

Functional architecture is a representation of business capabilities interaction for specific solution blueprint and industry. It focuses **value-driven** capabilities building blocks instead of process-driven building blocks.

Below are the sample of capabilities that commonly found in operations of oil and gas LNG upstream industry.

| No | Capability |
|---|---|
| 1 | Shift handover & log management |
| 2 | Management of Change |
| 3 | Production Planning |
| 4 | Production Scheduling |
| 5 | Asset Reliability & Maintenance |
| 6 | Sales Allocation |
| 7 | Sales Planning |
| 8 | Logistics Management |
| 9 | Hydrocarbon billing & accounting |

Bounded Context: Forecast To Plan

1. Sales allocation

Bounded Context: Order to Cash

2. Sales Planning
3. Production Planning 

Bounded Context: Plan to Produce

1. Production Scheduling
2. Shift handover & log management 

Bounded Context: Plan to Maintain

1. Asset reliability & Maintenance
2. Management of Change

Bounded Context: Inventory to Deliver

1. Logistics Management

Bounded Context: Project to profit

1. Hydrocarbon billing & accounting 



# Define bounded context

Bounded context is a domain boundary with specific to certain terms, case and condition without any ambiguity.

For example, Management of change (MOC) domain might have different meaning on different industry. On oil and gas MOC is used to manage asset modification which require overhaul or turnaround. Meanwhile, management of change in software engineering industry and specificly during agile development means backlog prioritization and interative development in several sprints

    Same domain might be intepreted differently between different people depend on their background.

Bounded context must be written using "common language"  or also known as ("ubiquitous language") to share same understanding between business user and software engineer understands.

# Applying Domain Driven Bounded Context on Functional Architecture

<-- kash sample deg -->