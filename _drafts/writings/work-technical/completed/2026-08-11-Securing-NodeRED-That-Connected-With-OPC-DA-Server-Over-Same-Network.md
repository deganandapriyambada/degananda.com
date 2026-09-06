# Securing NodeRED that accessing OPC DA Server

NodeRED is a powerful flow manager which can be used for OT to IT integration scenario because it has rich library to support various protocol like OPC UA, Modbus RTU, Modbus TCP, OPC DA and so on. Suppose we have following environment test bench 

**VM1 - NodeRED**

- Installed software: NodeRED
- OS: Windows 11
- Built in windows logical firewall
- IP: 10.0.10.2

**VM2 - OPC DA Server**

- Installed software: Matrikon OPC UA simulation
- OS: Windows 11
- Built in windows logical firewall.
- IP: 10.0.10.3

Note: Both VM are located in same network/subnet. There is no physical firewall between VM1 (nodered) and VM2 (OPC DA Server). The network security is purely relies on the windows logical firewall (main security control) 

# Hardening Strategy

The hardening strategy will be divided into three different areas

1. Windows firewall security control on VM1 (nodered)
2. Windows firewall security control on VM2 (matrikon OPC DA server simulator)
3. Nodered application security control

The main security control principle on the windows firewall is to **never allow RPC connection from the subnet**. We have to allow the specific source and destination of the RPC request.

OPC DA is based on windows DCOM (distributed component object model) which relies on **TCP (port 135) and RPC (dynamic port)**. Those two operations need to be allowed on the windows firewall.

## Windows Firewall Security Control on VM1

Below are the security control on VM2 (OPC DA) firewall

1. Rule 1: (outbound) Allow TCP connection on port 135 from 10.0.0.2 to 10.0.0.3 
2. Rule 2: (outbound) Allow RPC connection on [dynamic ports range] from  10.0.0.2 to 10.0.0.3
3. Rule 3: Deny everything else


## Windows Firewall Security Control on VM2

Below are the security control on VM2 (OPC DA) firewall

1. Rule 1: (inbound) Allow TCP connection on port 135 from 10.0.0.2 to 10.0.0.3 => Purposes: From nodered accessing the **VM2 RPC Endpoint Mapper**
2. Rule 2: (inbound) Allow RPC connection on [dynamic ports range] from  10.0.0.2 to 10.0.0.3
3. Rule 3: Deny everything else

to determine the dynamic port range, use following windows command:

	netsh int ipv4 show dynamicport tcp

it will return start port and total number of port. Endport number shall be determined using following formula

	dynamic ports range = start port + total number of port

## NodeRED Application Security Control

Always use latest version of NodeRED Stack: Latest NodeJS runtime with LTS version will be used and ensure all the node-red plugins are updated.

Enable Authentication: By default nodered doesnt have authentication method. Enforce username and password authentication.

Enable HTTPS: by default nodered can be accessed using plain HTTP. TLS (transport layer security) need to be enforced

---

Note: Additionally, if the nodered will sink the data to data broker like mqtt its recommended to enable the mTLS (Hence its become MQTTS) with required certificate and configure the proper ACL (Access control list) to the topics. Additionally, the VM3 windows firewall need to be configured to only allow inbound mqtt connection from VM#1 (nodered) and vice versa