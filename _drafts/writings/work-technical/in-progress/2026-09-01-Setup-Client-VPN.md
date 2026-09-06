VPC (Virtual privat cloud) CIDR

VPC CIDR: 10.196.157.0/24

Client VPN CIDR

Client VPN CIDR : 10.200.0.0/24

generate ARN certificate

its recommended to use easy-rsa from github

	https://github.com/OpenVPN/easy-rsa/releases

open the easy RSA console

	.\EasyRSA-Start.bat

initialize the PKI Key using following command
	
	./easyrsa init-pki

it will generate PKI folder under ./PKI

next it to generate the certificate authority

	./easyrsa build-ca nopass

it will generate public ca (certificate authority) and private ca (certificate authority)

| Parameter   | Value                          |
| ----------- | ------------------------------ |
| common name | remote-sensing-test-client-vpn |

generate server certificate

```
./easyrsa --san=DNS:server build-server-full server nopass
```

generate **client certificate** (repeatable)

```
./easyrsa build-client-full dega-laptop nopass
```

replace <dega-laptop> with the client hostname

it should generate following certificate structure (all inside the /pki)

ca: ca.crt

server

1. server.crt (/issued/server.crt)
2. server.key (/private/server.key)

dega-laptop (Client)

1. dega-laptop.crt (issued/dega-laptop.crt)
2. dega-laptop.key (/private/dega-laptop.key)

create working certificate folder that consist of those five file

1. ca.crt
2. server.crt
3. server.key
4. dega-laptop.crt
5. dega-laptop.key

next go to aws console -> certificate manager

certificate body: cat of server.crt

certificate private key: cat of server.key

certificate chain: cat of ca.crt

create client vpn endpoint:

| Parameter       | Value                              |
| --------------- | ---------------------------------- |
| IP              | use both IPv4                      |
| ARN Certificate | multi - choose the ARN certificate |

go to new newly created client vpn endpoint.

associate to the target VPN

for development purposes, its recommended to set the target EC2 (or the target aws component) that will be accessed via VPN.`

for example, following are the subnet that will be associated to the client VPN Endpoint

1. subnet A
2. subnet B

once the subnet has been associated , ensure the route table is created for the designated VPC.

for example

1. destination CIDR  10.196.157.0/24 target subnet : **subnet-076abc5109b175d57** and **subnet-071ccbf27faf164cc**

next add the authorization rule under the client endpoint VPN.

Allow access to all users

next configure the **EC2 security group** , add following rule:

0.0.0.0/0 => 

next add 

<cert></cert>

and

<key></key>

generate new private key (relogin)

```
.\EasyRSA-Start.bat
```

generate

```
./easyrsa build-client-full ekky-laptop nopass
```
