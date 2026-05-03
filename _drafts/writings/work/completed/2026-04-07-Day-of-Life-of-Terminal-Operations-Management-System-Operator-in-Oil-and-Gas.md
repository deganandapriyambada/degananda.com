# Terminal Operations Management Role on Off-shore Upstream Oil and Gas Facilities

In the context of off-shore oil adn gas facilities supply chain, terminal operations management system (TOMS) is mainly responsible for managing the gas or crude oil loading from the storage to the vessel. 

Loading is a process to move LNG or crude oil from the floating storage to the vessel (tanker ship). There is **no LNG or crude oil unloading process** on the off-shore upstream oil and gas facilities as it is their main product.

there are four main LNG business area managed on terminal operations management

1. LNG storage
2. Cargon handling including LNG loading to the vessel, mooring, berthing and bunkering
3. Lifting managemnet (plan & schedule LNG export delivery)
4. Custody transfer (ensure the delivered hydrocarbon product quantity is exactly match with the amount stated on the contract) to avoid any financial impact to both buyer of producer.

## Day to day activities of Terminal Operations Management System Operator

Below are the day to day activities of TOMS operator from the beginning of the shift until the shift is ended.

System of Record on TOM:

1. Bill of Ladding
2. Tank Inventory Reconcilliation Sheet
3. Inventory Gain/Loss
4. Tank Lineup Sheet

## 1.Vessel Registration

| Information        | Source System          | Target System                  | Inbound/Outbound | Frequency |
| ------------------ | ---------------------- | ------------------------------ | ---------------- | --------- |
| Vessel Master Data | Master Data Manamgenet | Terminal Operations Management | Inbound          | On Demand |

## 2.Inventory planning

| Information           | Source System                  | Target System                             | Inbound/Outbound | Frequency     |
| --------------------- | ------------------------------ | ----------------------------------------- | ---------------- | ------------- |
| Tank Gaunging Report  | Plant Data Management          | Terminal Operations Management            | Inbound          | Near Realtime |
| Tank Inventory Report | Terminal Operations Management | Integrated Logistics                      | Outbound         | Hourly        |
| Tank Inventory Report | Terminal Operations Management | Integrated Logistics                      | Outbound         | Hourly        |
| Tank Inventory Report | Terminal Operations Management | Integrated Activity Planning & Scheduling | Outbound         | Hourly        |
| Cargo Nomination      | Sales Planning                 | Terminal Operations Management            | Inbound          | On Demand     |
| Lifting Plan          | Integrated Logistics           | Terminal Operations Management            | Inbound          | On Demand     |

## 3.Terminal facilities readiness

| Information                         | Source System         | Target System                  | Inbound/Outbound | Frequency |
| ----------------------------------- | --------------------- | ------------------------------ | ---------------- | --------- |
| Loading Arm Inspection Checklist    | Inspection Management | Terminal Operations Management | Inbound          | On Demand |
| ESD(emergency shutdown) test record | Inspection Management | Terminal Operations Management | Inbound          | On Demand |
| Lifting Schedule                    | Integrated Logistics  | Terminal Operations Management | Inbound          | On Demand |

## 4.Review berthing schedule

| Information                          | Source System                             | Target System                             | Inbound/Outbound | Frequency |
| ------------------------------------ | ----------------------------------------- | ----------------------------------------- | ---------------- | --------- |
| Loading facility readiness checklist | Inspection Management | Terminal Operations Management            | Inbound          | On Demand |
| Cargo Movement Plan                 | Integrated Activity Planning & Scheduling | Terminal Operations Management | Inbound          | On Demand |

## 5.Execute berthing and mooring

| Information                      | Source System                  | Target System                             | Inbound/Outbound | Frequency     |
| -------------------------------- | ------------------------------ | ----------------------------------------- | ---------------- | ------------- |
| Operation Manual                 | Work Instruction               | Terminal Operations Management            | Inbound          | On Demand     |
| Vessel Delay Deviation           | Terminal Operations Management | Integrated Activity Planning & Scheduling | Outbound         | Near Realtime |
| Vessel ETA                       | Integrated Logistics           | Terminal Operations Management            | Inbound          | Near Realtime |
| Actual Berthing Timestamp Record | Terminal Operations Management | Integrated Logistics                      | Outbound         | On Demand     |
| Actual Mooring Timestamp Record  | Terminal Operations Management | Integrated Logistics                      | Outbound         | On Demand     |

## 6.Safety clearance

| Information                 | Source System             | Target System                  | Inbound/Outbound | Frequency |
| --------------------------- | ------------------------- | ------------------------------ | ---------------- | --------- |
| Operation Manual            | Work Instruction          | Terminal Operations Management | Inbound          | On Demand |
| Ship-Shore Safety Checklist | Process Safety Management | Terminal Operations Management | Inbound          | On Demand |

## 7.Execute custody transfer

| Information                                | Source System                  | Target System                         | Inbound/Outbound | Frequency     |
| ------------------------------------------ | ------------------------------ | ------------------------------------- | ---------------- | ------------- |
| Operation Manual                           | Work Instruction               | Terminal Operations Management        | Inbound          | On Demand     |
| Meter Proving Report                       | Plant Data Management          | Terminal Operations Management        | Inbound          | Near Realtime |
| Actual Validated Custody Transfer quantity | Terminal Operations Management | Hydrocarbon Accounting (Mass Balance) | Inbound          | Neartime      |

## 8.Execute loading

| Information                 | Source System                  | Target System                  | Inbound/Outbound | Frequency     |
| --------------------------- | ------------------------------ | ------------------------------ | ---------------- | ------------- |
| Operation Manual            | Work Instruction               | Terminal Operations Management | Inbound          | On Demand     |
| Opening Gauge Report        | Plant Data Management          | Terminal Operations Management | Inbound          | Near Realtime |
| Vessel Port Call Operations | Terminal Operations Management | Integrated Logistics           | Outbound         | On Demand     |
| Loading Completion Records  | Terminal Operations Management | ERP                            | Outbound         | Daily         |
| Loading Completion Records  | Terminal Operations Management | Integrated Logistics           | Outbound         | Daily         |
| Loading Rate                | Plant Data Management          | Terminal Operations Management | Inbound          | Near Realtime |

## 9.Hydrocarbon product quality check

| Information                       | Source System                  | Target System                  | Inbound/Outbound | Frequency |
| --------------------------------- | ------------------------------ | ------------------------------ | ---------------- | --------- |
| Operation Manual                  | Work Instruction               | Terminal Operations Management | Inbound          | On Demand |
| Laboratory Test Report            | Lab System                     | Terminal Operations Management | Inbound          | On Demand |
| Custody Meter Records             | Plant Data Management          | Terminal Operations Management | Inbound          | On Demand |
| Product Quality Release Statement | Terminal Operations Management | Integrated Logistics           | Outbound         | On Demand |

## 10.Custody transfer quality validation

| Information          | Source System         | Target System                  | Inbound/Outbound | Frequency     |
| -------------------- | --------------------- | ------------------------------ | ---------------- | ------------- |
| Operation Manual     | Work Instruction      | Terminal Operations Management | Inbound          | On Demand     |
| Tank Gaunging Report | Plant Data Management | Terminal Operations Management | Inbound          | Near Realtime |

## 11.Issue cargo related administration document

| Information                      | Source System                   | Target System                  | Inbound/Outbound | Frequency     |
| -------------------------------- | ------------------------------- | ------------------------------ | ---------------- | ------------- |
| Operation Manual                 | Work Instruction                | Terminal Operations Management | Inbound          | On Demand     |
| Cargo Quality Certificate        | Engineering Document Management | Terminal Operations Management | Inbound          | On Demand     |
| Custody Transfer Quantity Report | Plant Data Management           | Terminal Operations Management | Inbound          | Near Realtime |
| Bill of Ladding                  | Terminal Operations Management  | ERP                            | Outbound         | On Demand     |
| Cargo Manifest                   | Terminal Operations Management  | Integrated Logistics           | Outbound         | On Demand     |
| Billing & Invoice Status         | ERP                             | Terminal Operations Management | Inbound          | On Demand     |

## 12.Inventory reconciliation

| Information                          | Source System                          | Target System                         | Inbound/Outbound | Frequency |
| ------------------------------------ | -------------------------------------- | ------------------------------------- | ---------------- | --------- |
| Inventory & Product Movement         | Terminal Operations Management         | Hydrocarbon Accounting (Mass Balance) | Outbound         | Hourly    |
| Tank Inventory Reconcilliation Sheet | Terminal Operations Management         | Integrated Logistics                  | Outbound         | Daily     |
| Inventory Gain/Loss Statement        | Terminal Operations Management         | Hydrocarbon Accounting (Mass Balance) | Outbound         | Daily     |
| Tank Lineup Sheet                    | Terminal Operations Management         | Integrated Logistics                  | Outbound         | Daily     |
| Reconcilled Volume                   | Hydroncarbon Accounting (Mass Balance) | Terminal Operations Management        | Inbound          | Daily     |

## 13.Execute unmooring, unberthing and deperature

| Information                         | Source System                  | Target System                  | Inbound/Outbound | Frequency |
| ----------------------------------- | ------------------------------ | ------------------------------ | ---------------- | --------- |
| Operation Manual                    | Work Instruction               | Terminal Operations Management | Inbound          | On Demand |
| Operational Status & Handover Notes | Terminal Operations Management | Shift Handover                 | Outbound         | On Demand |
