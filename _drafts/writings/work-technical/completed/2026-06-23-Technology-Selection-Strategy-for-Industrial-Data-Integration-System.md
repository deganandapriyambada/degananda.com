# The Role of Industrial Data Integration System

Automation becoming a new normal in greenfields facilities. Almost every sector has some degree of automation including production, operations, HSSE or even maintenance. Automation involving systems that reside on ISA95 level 0 (fiedl devices like sensor or actuator) up to lvl 2 (supervisory control like SCADA/DCS/ICS) as it should be able to acquire data from the equipment and give command to it (control).

Once the data is acquired by SCADA, then it will be stored on the OT timeseries database which is called as plant historian. All process data from operations and productions including the alarm and event will be contextualized and saved on historian databases. Many organization stop at this stage. They feel "content" about the capabilities of historian because it can already trigger alarm and show some dashboard / KPI (key performance indicator) which is not wrong as it enough for most OT personnel or operator.

However, for some who sit on managrial level (tactical/strategical), those OT data is absolutely required for some analytics tools to support the organization decision making. For example, HSSE department might need gas surveillance data to be fed into their HSSE analytics tools which **usually reside on the cloud** to classift dangerous area so that they can plan proper HSSE plan. At this stage, **industrial data integration system is needed to be purchased and deployed** on the OT.

Note: some organization use following terms "ITOT convergence system" to describe industrial data integration system that focus on bridging OT and IT.

Industrial data integration is software that reside on edge (typically at 3.5) that become between OT and IT. it could connect with various OT systems that reisde on lvl 3 (historian) or 2.5 (OPC-UA) or also often called as **edge gateway**. Industrial data integration system responsible for forwarding the OT data which already captured by lv 3 site operations system like historian or lv 2.5 OPC server towards the enterprise network (cloud or on-premises).

Million dollar question &mdash; Which industrial data integration system is the best on the market? the answer is "all depends on the organization situation and conditions". No architecture is perfect (flawless), there is just fit architecture.

## Key Criteria for Selecting Industrial Data Integration System

Before defining the technology selection criteria, its important to understand the type of industrial data integration for ITOT purposes:

A.**Industrial Connectivity Platform**: Focus on OT protocol translation and connectivity towards IT. player: kepware, n3uron, litmus edge
B.**IIoT Data Platform**: Industrial connectivity platform+contextualization+visualization+data modelling. Player: highbyte, ignition, greengrass + iot sitewise
C.**Flow Control**: Customizeable OT data flow management framework (**high flexibility**). Player: Node-RED, greengrass

Here are the practical **functional criteria** that need to be checked before selecting industrial data integration system

Criteria#1: Must be able to connect with L2.5 System

| No   | Parameter               | Passed      |
| ---- | ----------------------- | ----------- |
| 1    | OPC-UA Client Connector | (yes or no) |

Criteria#2: Must be able to connect with L3 System (ideally compatible with the major historian provider)

| No   | Parameter                                                    | Passed      |
| ---- | ------------------------------------------------------------ | ----------- |
| 1    | Compatible with Aveva Historian <br />(through their prefered integration approach) | (yes or no) |
| 2    | Compatible with PHD Historian <br />(through their prefered integration approach) | (yes or no) |
| 3    | Compatible with Exaquantum Historian <br />(through their prefered integration approach) | (yes or no) |
| 4    | Compatible with Siemens Historian <br />(through their prefered integration approach) | (yes or no) |
| 5    | MQTT client connector                                        | (yes or no) |
| 6    | REST API connector                                           | (yes or no) |

Criteria#3: must have OOTB key features as following

| No   | Parameter                                 | Passed      |
| ---- | ----------------------------------------- | ----------- |
| 1    | Auto browser OPC-UA address space and tag | (yes or no) |
| 2    | Persistent Buffer                         | (yes or no) |
| 3    | Replayability                             | (yes or no) |

Criteria#4: must have cloud integration readiness (for advanced AI usecases that require hyperscaler)

| No   | Parameter                     | Passed      |
| ---- | ----------------------------- | ----------- |
| 1    | Compatible with AWS Iot Core  | (yes or no) |
| 2    | Compatible with Azure Iot Hub | (yes or no) |

Criteria#5: must have data transformation & computation capabilities

| No   | Parameter                                                    | Passed      |
| ---- | ------------------------------------------------------------ | ----------- |
| 1    | Data Modelling with ISA95 hierarchical tags                  | (yes or no) |
| 2    | Aggregating a sets of tags for period of time (seconds or mins or hours) | (yes or no) |
| 3    | Filtering (apply some business logic)                        | (yes or no) |

Criteria#6: Must be secured

| No   | Parameter                                 | Passed      |
| ---- | ----------------------------------------- | ----------- |
| 1    | Secured Conenction (TLS, X506 cert, etc)  | (yes or no) |
| 2    | Diode behavior (outbound from Lvl 3 only) | (yes or no) |

Criteria#7: Must be have centralized devops as the edge will be deployed all over the region/provinces/multiple site

| No   | Parameter              | Passed      |
| ---- | ---------------------- | ----------- |
| 1    | Centralized Deployment | (yes or no) |
| 2    | Containerization       | (yes or no) |

## The Decision Tree to Select Industrial Data Integration System

As per stated criteria on previous section, below is the logical decision tree model for the selection process.

1. Identify the existing OT ecosystem on the organization (OT architecture, list of system used on the OT)
2. create an analysis on the existing OT ecosystem and functional capabililities. see the gap and see the area that has been fullfilled (check the overlapping functionalities/criteria)
3. check the organization IT strategy for the industrial data integration system (is there requirement for vendor agnostics? specific requirement to support specific hyperscaler? etc)
4. create a score matrix for the industrial data integration platform category **depending on the organization needs and existing condition**. for example: if the OT department has been invested on aveva ecosytem, industrial connectivity platform generally should have higher score than the IIoT data  platform as aveva already has some overlapping capabilities.
5. create a score matrix for the functional criteria
6. create a combined score matrix (industrial data integration system category + functional criteria).
7. assess each of the industrial data integration system candidate.
8. if the proposed industrial data integration system pass the minimum score threshold which agreed by the organization then it can be selected as potential candidate.
9. perform cost benefit analysis, if the candidate on fill little gap of the existing OT ecosystem but require high investment (time & money) then might decide to just leverage the existing ecosystem (if possible, if not then procurement is made into sense.)

