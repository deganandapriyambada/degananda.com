# What is Logistics Management in Context of Oil and Gas

Generally, logistics as a **noun** means all neccessary material/goods/resources that used during the whole process value chain (not solely for production), thus, logistics management is a process to ensure all process value chain receieve the neccesary good/material/resources by plan, schedule, monitor and control the journey of the goods/material/resources.

Logistics management require tight coordinaton and collaboration with other operations entity such as warehouse management, productions, maintenance, transportation as well as human resource management. In fact, logistics management are the central orchestrator because all the goods/material/resources are planned and controlled by logistics.

Each industry has different logistics component because it highly depend on their business process and nature of the industry.

# Logistics Management System (LMS)

Below are the typical process of logistics management system

## 1.Determine movement plan

| Information                    | Source System        | Target System                  | Inbound/Outbound | Frequency |
| ------------------------------ | -------------------- | ------------------------------ | ---------------- | --------- |
| Vessel Schedule                | Integrated Logistics | Terminal Operations Management | Outbound         | On Demand |
| Cargo Shipment Request Details | Contract Management  | Integrated Logistics           | Inbound          | On Demand |
| Cargo Volume Details           | Contract Management  | Integrated Logistics           | Inbound          | On Demand |
| Movement Plan                  | Integrated Logistics | Terminal Operations Management | Outbound         | Daily     |

## 2.Schedule alignment with production, maintenance and commercial

| Information                  | Source System                             | Target System                  | Inbound/Outbound | Frequency     |
| ---------------------------- | ----------------------------------------- | ------------------------------ | ---------------- | ------------- |
| Maintenance Plan             | Realibility Centered Maintenance          | Integrated Logistics           | Inbound          | On Demand     |
| Maintenance Schedule         | Realibility Centered Maintenance          | Integrated Logistics           | Inbound          | On Demand     |
| Custom Clerance Document     | Integrated Logistics                      | Terminal Operations Management | Outbound         | On Demand     |
| Production Schedule          | Integrated Activity Planning & Scheduling | Integrated Logistics           | Inbound          | Daily         |
| Lifting Plan                 | Integrated Logistics                      | Terminal Operations Management | Outbound         | On Demand     |
| Lifting Schedule             | Integrated Logistics                      | Terminal Operations Management | Outbound         | On Demand     |
| Inventory/Tank Stock         | Terminal Operations Management            | Integrated Logistics           | Inbound          | Near Realtime |
| Production Allocation Record | Production Allocation                     | Integrated Logistics           | Inbound          | Daily         |

## 3.Administration Control

| Information    | Source System        | Target System                  | Inbound/Outbound | Frequency |
| -------------- | -------------------- | ------------------------------ | ---------------- | --------- |
| Cargo Manifest | Integrated Logistics | Terminal Operations Management | Outbound         | On Demand |

## 4.Marine Logistics Coordination

| Information                 | Source System                  | Target System        | Inbound/Outbound | Frequency |
| --------------------------- | ------------------------------ | -------------------- | ---------------- | --------- |
| Vessel ETA Notice           | Fleet Management               | Integrated Logistics | Inbound          | On Demand |
| Vessel Arrival Notification | Fleet Management               | Integrated Logistics | Inbound          | On Demand |
| Port Arrival Notice         | Terminal Operations Management | Integrated Logistics | Inbound          | On Demand |
| Weather Report              | External Data Source           | Integrated Logistics | Inbound          | On Demand |

## 5.Aviation Logistics Coordination

| Information                   | Source System        | Target System        | Inbound/Outbound | Frequency |
| ----------------------------- | -------------------- | -------------------- | ---------------- | --------- |
| Aircraft ETA Notice           | Fleet Management     | Integrated Logistics | Inbound          | On Demand |
| Aircraft Arrival Notification | Fleet Management     | Integrated Logistics | Inbound          | On Demand |
| Weather Report                | External Data Source | Integrated Logistics | Inbound          | On Demand |

## 6.POB coordination

| Information  | Source System        | Target System                             | Inbound/Outbound | Frequency |
| ------------ | -------------------- | ----------------------------------------- | ---------------- | --------- |
| POB Register | Integrated Logistics | Integrated Activity Planning & Scheduling | Outbound         | Daily     |
| POB Register | Integrated Logistics | Shift Management                          | Outbound         | Daily     |

## 7.Personel Movement Tracking

| Information            | Source System        | Target System                     | Inbound/Outbound | Frequency |
| ---------------------- | -------------------- | --------------------------------- | ---------------- | --------- |
| Personnel movement log | Integrated Logistics | Operations Performance Management | Outbound         | Daily     |

## 8.Track Cargo Movement

| Information         | Source System    | Target System        | Inbound/Outbound | Frequency |
| ------------------- | ---------------- | -------------------- | ---------------- | --------- |
| Cargon Tracking Log | Fleet Management | Integrated Logistics | Inbound          | Daily     |

## 9.Adjust marine logistics plan (if constraint is found)

| Information            | Source System                  | Target System        | Inbound/Outbound | Frequency |
| ---------------------- | ------------------------------ | -------------------- | ---------------- | --------- |
| Port Congestion Notice | Terminal Operations Management | Integrated Logistics | Inbound          | On Demand |

## 10.CCS Logistics Coordination

| Information         | Source System    | Target System        | Inbound/Outbound | Frequency |
| ------------------- | ---------------- | -------------------- | ---------------- | --------- |
| Cargon Tracking Log | Fleet Management | Integrated Logistics | Inbound          | Daily     |

## 11.Align logistics plan with subsurface and integrity program

| Information       | Source System                             | Target System        | Inbound/Outbound | Frequency |
| ----------------- | ----------------------------------------- | -------------------- | ---------------- | --------- |
| Equipment Request | Integrated Activity Planning & Scheduling | Integrated Logistics | Inbound          | Daily     |

## 12.Priotize emergency request (if any)

| Information       | Source System    | Target System        | Inbound/Outbound | Frequency     |
| ----------------- | ---------------- | -------------------- | ---------------- | ------------- |
| Emergency Request | Event Management | Integrated Logistics | Inbound          | Near Realtime |
| Incident Report   | Event Management | Integrated Logistics | Inbound          | Near Realtime |

## 13.Define Logistics recovery plan (if delay happened)

| Information               | Source System                  | Target System        | Inbound/Outbound | Frequency     |
| ------------------------- | ------------------------------ | -------------------- | ---------------- | ------------- |
| Terminal Operations Delay | Terminal Operations Management | Integrated Logistics | Inbound          | Near Realtime |
| Logistics Incident Report | Integrated Logistics           | Event Management     | Outbound         | Near Realtime |

## 14.Track logistics cost and budgeting

| Information          | Source System             | Target System             | Inbound/Outbound | Frequency |
| -------------------- | ------------------------- | ------------------------- | ---------------- | --------- |
| Charter Invoice      | Sell & Invoice Production | Integrated Logistics      | Inbound          | On Demand |
| Cost Tracking Record | Integrated Logistics      | Sell & Invoice Production | Outbound         | Daily     |
| Demurrage Record     | Integrated Logistics      | Sell & Invoice Production | Outbound         | Daily     |

## 15.Integrate logistics plan with production and sales

| Information     | Source System        | Target System                  | Inbound/Outbound | Frequency |
| --------------- | -------------------- | ------------------------------ | ---------------- | --------- |
| Vessel Schedule | Integrated Logistics | Terminal Operations Management | Outbound         | Daily     |

## 16.Reconcillation between planned and actual logistics activity execution

| Information                  | Source System        | Target System                         | Inbound/Outbound | Frequency |
| ---------------------------- | -------------------- | ------------------------------------- | ---------------- | --------- |
| Logistics Performance Report | Integrated Logistics | Operations Performance Management     | Outbound         | Daily     |
| Logistics Performance Report | Integrated Logistics | Plant Performance Management          | Outbound         | Daily     |
| Logistics Performance Report | Integrated Logistics | ERP                                   | Outbound         | Daily     |
| Logistics Performance Report | Integrated Logistics | Hydrocarbon Accounting (Mass Balance) | Outbound         | Daily     |
