# The Importance of Energy on Oil and Gas

Energy is the ability to do any action. In context of oil, energy play a critical role. Without sufficient energy the productions and operations can't be executed. Energy is required to empower the all neccesary equipment/machines within the oil and gas facilities in order to process the nature gas from well head up to the export.

Available energy on oil and gas facilities are not unlimited, especially for offshore platform. Unlike onshore platform where the energy can be pumped in from nearby powerplant, onshore platform relies on solely **self-generated energy using onboard gas turnbine**. The hydrocarbon products are shared to powerup the platform equipment as well as exported to the buyer/stakeholder. The more energy used means less hydrocarbon product for the stakeholder and ultimately ended up with **lower profit**. Hence, energy management and optimization are one of critical process on the offshore oil and gas platform to ensure exact energy allocation requirement is fullfilled for operations and productions equipment **wihout any excess or shortage of energy.**

	All process across the value chain require different amount of energy. Energy management must be able to plan the energy distribution precisely.

Apart from energy distribution, energy management also responsible for **monitoring** the whole energy consumption and energy requirement across all the process/value chain. These capabilities are available within **energy management system** (EMS). EMS is not just a software, it combine both OT (operational technology) and IT (information technology) capabilities due to the heavy reliances with OT system and has many interfaces with the control system such as ICSS/DCS/SCADA.

# Energy Management System Process

below are the typical energy management process on oil and gas 

## 1.Capture Energy Consumption

| Information             | Source System         | Target System     | Inbound/Outbound | Frequency     |
| ----------------------- | --------------------- | ----------------- | ---------------- | ------------- |
| Energy Consumption Rate | Plant Data Management | Energy Management | Inbound          | Near Realtime |
| Flare Volume            | Plant Data Management | Energy Management | Inbound          | Near Realtime |
| Fuel Gas Consumption    | Plant Data Management | Energy Management | Inbound          | Near Realtime |
| Steam & Power Usage     | Plant Data Management | Energy Management | Inbound          | Near Realtime |

## 2.Monitor Energy Usage

| Information                            | Source System                | Target System                     | Inbound/Outbound | Frequency     |
| -------------------------------------- | ---------------------------- | --------------------------------- | ---------------- | ------------- |
| Shift Logbook                          | Shift Handover               | Energy Management                 | Inbound          | Hourly        |
| Production Alarm                       | Plant Performance Management | Energy Management                 | Inbound          | Hourly        |
| Energy & Utility Available Constraints | Energy Management            | Integrated Production Planning    | Outbound         | Daily         |
| Energy KPI Metrics                     | Energy Management            | Operations Performance Management | Outbound         | Near Realtime |

## 3.Optimize operations to reduce energy usage

| Information                           | Source System                     | Target System                     | Inbound/Outbound | Frequency     |
| ------------------------------------- | --------------------------------- | --------------------------------- | ---------------- | ------------- |
| Energy Consumption                    | Plant Data Management             | Energy Management                 | Inbound          | Near Realtime |
| Equipment Efficiency Deviation        | Operations Performance Management | Energy Management                 | Inbound          | Hourly        |
| Energy optimization recommendation    | Energy Management                 | Operations Performance Management | Outbound         | Daily         |
| Energy Optimization Simulation Result | Integrated Asset Modelling        | Energy Management                 | Inbound          | On Demand     |

## 4.Review Actual Energy Consumption Against Target Production

| Information                           | Source System                               | Target System                               | Inbound/Outbound | Frequency     |
| ------------------------------------- | ------------------------------------------- | ------------------------------------------- | ---------------- | ------------- |
| Daily Production Report               | Plant Performance Management                | Energy Management                           | Inbound          | Near Realtime |
| Production Data                       | Plant Data Management                       | Energy Management                           | Inbound          | Near Realtime |
| Production Schedule                   | Integrated Activity Planning And Scheduling | Energy Management                           | Inbound          | Daily         |
| Production Plan                       | Integrated Production Planning              | Energy Management                           | Inbound          | Daily         |
| Constrained Energy & Utility Schedule | Energy Management                           | Integrated Activity Planning And Scheduling | Outbound         | Daily         |
| Energy vs Production Deviation Report | Energy Management                           | Operations Performance Management           | Outbound         | Daily         |

## 5.Monitor and Control Gas Distribution

| Information                | Source System         | Target System                  | Inbound/Outbound | Frequency     |
| -------------------------- | --------------------- | ------------------------------ | ---------------- | ------------- |
| Operation Manual           | Work Instruction      | Energy Management              | Inbound          | On Demand     |
| Gas System Constraint      | Energy Managment      | Integrated Production Planning | Outbound         | Daily         |
| Gas Network Operating Data | Plant Data management | Energy Management              | Inbound          | Near Realtime |

## 6.Monitor and Control Steam and Power System

| Information                      | Source System         | Target System                     | Inbound/Outbound | Frequency     |
| -------------------------------- | --------------------- | --------------------------------- | ---------------- | ------------- |
| Operation Manual                 | Work Instruction      | Energy Management                 | Inbound          | On Demand     |
| Steam & Power Network Data       | Plant Data management | Energy Management                 | Inbound          | Near Realtime |
| Loading Balancing Recommendation | Energy Management     | Operations Performance Management | Outbound         | Hourly        |

## 7.Energy Intensity Report

| Information                   | Source System                         | Target System                | Inbound/Outbound | Frequency |
| ----------------------------- | ------------------------------------- | ---------------------------- | ---------------- | --------- |
| Operation Manual              | Work Instruction                      | Energy Management            | Inbound          | On Demand |
| Mass Balance Sheet            | Hydrocarbon Accounting (Mass Balance) | Energy Management            | Inbound          | Hourly    |
| Energy monitoring KPI metrics | Energy Management                     | Plant Performance Management | Outbound         | Daily     |
| Energy monitoring KPI metrics | Energy Management                     | HSSE Monitor & Measure       | Outbound         | Daily     |
| Emission Target               | Energy Management                     | HSSE Monitor & Measure       | Outbound         | On Demand |
| Energy Index of Equipment     | Energy Management                     | Plant Performance Management | Outbound         | Daily     |
| Energy Index of Equipment     | Energy Management                     | Asset Performance Management | Outbound         | Daily     |

## 8.Energy Usage vs Emission Reporting

| Information                | Source System         | Target System                     | Inbound/Outbound | Frequency     |
| -------------------------- | --------------------- | --------------------------------- | ---------------- | ------------- |
| Operation Manual           | Work Instruction      | Energy Management                 | Inbound          | On Demand     |
| Flare & Vent Data          | Plant Data Management | Enegy Management                  | Inbound          | Near Realtime |
| Calculated Emission        | Enegy Management      | HSSE Monitor & Measure            | Outbound         | Daily         |
| Monthly Emission Reporting | Energy Management     | Operations Performance Management | Outbound         | Daily         |

## 9.Plan Optimization With Maintenance Team

| Information                  | Source System                    | Target System                    | Inbound/Outbound | Frequency |
| ---------------------------- | -------------------------------- | -------------------------------- | ---------------- | --------- |
| Operation Manual             | Work Instruction                 | Energy Management                | Inbound          | On Demand |
| Equipment History            | Reliability Centered Maintenance | Energy Management                | Inbound          | Daily     |
| Work Order Request           | Energy Management                | Reliability Centered Maintenance | Outbound         | Daily     |
| Maintenance Plan             | Reliability Centered Maintenance | Energy Management                | Inbound          | On Demand |
| Equipment Maintenance Status | Reliability Centered Maintenance | Energy Management                | Inbound          | On Demand |

## 10.Energy Demand Forecast

| Information                   |      | Source System                    | Target System                  | Inbound/Outbound | Frequency |
| ----------------------------- | ---- | -------------------------------- | ------------------------------ | ---------------- | --------- |
| Operation Manual              |      | Work Instruction                 | Energy Management              | Inbound          | On Demand |
| Historical Energy Consumption |      | Plant Data Management            | Energy Management              | Inbound          | Daily     |
| OEM Manual                    |      | Engineering Document Management  | Energy Management              | Inbound          | On Demand |
| Turnaround and Overhaul Plan  |      | Reliability Centered Maintenance | Energy Management              | Inbound          | On Demand |
| Energy Demand Forecast        |      | Energy Management                | Integrated Production Planning | Outbound         | Daily     |

## 11.Energy to Production Performance Report

| Information                   | Source System     | Target System                         | Inbound/Outbound | Frequency |
| ----------------------------- | ----------------- | ------------------------------------- | ---------------- | --------- |
| Energy Consumption Report     | Energy Management | Plant Performance Management          | Outbound         | Daily     |
| Energy Efficiency KPI Metrics | Energy Management | Plant Performance Management          | Outbound         | Daily     |
| Energy Consumption Report     | Energy Management | Hydrocarbon Accounting (Mass Balance) | Outbound         | Daily     |
