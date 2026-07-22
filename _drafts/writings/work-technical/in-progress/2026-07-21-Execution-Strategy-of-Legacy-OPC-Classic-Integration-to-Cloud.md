# The Urge of OPC Classic Invention

OPC (was known as OLE for process control) Classic is industrial communication protocol which was introduced on 1996 by OPC foundation. Many major facilities still use OPC classic especially on legacy oil and gas facilities that has been around for ages. Before the invention of OPC classic, each industrial system manufacturer wrote their own driver. Resulting in a complex situation for industrial automation because of the protocol differences which require custom connector and business logic.

OPC classic come with one mission: **to standardize industrial automation protocol**. With the help of OPC Classic and the commitment from manufacturer ecosystem to standardize their driver/protocol, connecting software applications like SCADA or HMI (human machine interfaces) with field devices such as PLCs (programmable logic controller) or sensor become seamless.

## Implementation Strategy to Integrate OPC UA to HQ Network Through Internet of  Things Approach

Depending on the existing OT (operation technology) architecture landscape and constraint the strategy might be different. First scenario is where the business and IT team decided to create separate network for the industrial internet of things (separated from historian network) using middleware software like opc ua tunneler, edge gateway (AWS greengrass, Azure, iotedge, telegraf) in ensure maximum security because the segregated network will ensure IT component wont be able to control the main SCADA-Historian system from the internet.

Based on such scenario, below are industrial internet of things implementation checklist with segregated network from the main control system/SCADA using standard system to system protocol (in this case is OPC UA or MQTT can also be an alternative).

1. Establish new network connection setup (different interfaces)
2. Install dedicated instances OPC UA tunneller for specific OPC DA that will be exposed through IIoT data pipeline
3. Install EdgeGW (centralized or decentralized)
4. Separate OPC Classic network, OPC UA tunneller network and edge gateway network.
5. Secure the network (OT, DMZ and IT) using strict security control (firewall, security group)

## Industrial Internet of Things Data Flow From Legacy OPC DA Server

Sensors typically would be controlled and monitored by PLC (programmable logic controller). Each of PLC then will be supervised by SCADA system. Operator will able to see the monitoring status of the field devices which already has PLC and has been connected into the SCADA.

	Most of legacy SCADA system use OPC DA (especially the older version)

Usually there are two options of data acquisition from SCADA. First is historian route and second is **the internet of things route.**  Both route should not be mixed due to the integration nature. Internet of things often done using streaming approach while historian is more on batch integration through batch integration (historian to historian).

Data from SCADA that use OPC DA protocol can be extracted using OPC UA tunneller. It will read the tags data from windows DCOM component and convert it into OPC UA over TCP protocol which also already exposed on the OPC UA server namespaces. So, the edge middleware that reside on IT network (assuming its centralized IIoT gateway) will just subscribe the tags data from OPC UA server.

Note: most of industrial grade OPC UA tunneller already has built in OPC UA server.

Below are the typical full capability of OPC UA tunneller.

## Data Ingestion Resiliency Hotspot

