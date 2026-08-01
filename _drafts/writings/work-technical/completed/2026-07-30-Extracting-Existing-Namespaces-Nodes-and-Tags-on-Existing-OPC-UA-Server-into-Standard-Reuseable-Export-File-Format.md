## Installation

ensure dotnet is installed by executing following command:

[image dotnet is installed as it can return the version number]

install OPCUA nodeset explorer

	dotnet tool install --global OpcUaNodesetExporter

it will take somtime. wait until the installation process is completed.

[image OPCUA nodeset explorer has been installed]

add the donet path globally, so the command can be executed anywhere. First ensure the terminal is ZSH by executing following command

	echo $SHELL

it should return the zsh binary path.

```json
(base) deganandaferdian@pumpkinlaboo ~ % echo $SHELL
/bin/zsh
```

add the path permanently

```javascript
cat << \EOF >> ~/.zprofile
# Add .NET Core SDK tools
export PATH="$PATH:/Users/deganandaferdian/.dotnet/tools"
EOF
```

close the terminal and re-open it or simply execute following command

	zsh -l

validate if the command can be executed and OpcUANodesetExplorer is installed properly

	opcua-nodeset-export --version

it should return the installed version. 

[image OpcUANodesetExplorer version 1.0.0 has been installed on the machine]

Hence, OpcUANodesetExplorer has been installed and ready to be used.

## Extracting existing OPC UA server nodes, namespaces and tags 

suppose we have following OPC ua server hierarchy (note: the server has been running on port 50000 without any enabled authentication method)

[image local OPC UA server hierarchy, made with nodeopcua]

execute following command to connect and export from and existing opc-ua server with anonymous authentication method

	opcua-nodeset-export --endpoint opc.tcp://localhost:50000

wait until the crwaling process is completed.

[image opc-ua server was successfully crawler]

find the nodeset2 XML file location on the bottom of the logs. Below is the location of the exported XML for our cases.

	 /Users/deganandaferdian/output

go to the designated folder and get nodeset2 exported file.

	cd /Users/deganandaferdian/output
	ls

Execute above command

```json
(base) deganandaferdian@pumpkinlaboo output % ls -la
total 80
drwxr-xr-x    3 deganandaferdian  staff     96 Jul 31 09:27 .
drwxr-xr-x+ 112 deganandaferdian  staff   3584 Jul 31 09:27 ..
-rw-r--r--@   1 deganandaferdian  staff  40755 Jul 31 09:27 pumpkinlaboo.local_NodeOPCUA-Server_ns1.xml
(base) deganandaferdian@pumpkinlaboo output % 
```

the nodeset2 in xml format should be appeared.

## Validating the exported nodeset2 XML

there are two method to validate nodeset2 XML files.

1. schema validation or also known as XSD validation.
2. Semantic validation

nodeset2 is basically a XML formatted document. the xml syntax can be validated through XML listing tools such as XMLint which has specific checking method for Opc ua nodeset2. Use following command to validate the XML syntax of a nodeset2 file

	xmllint --schema Opc.Ua.NodeSet2.xsd pumpkinlaboo.local_NodeOPCUA-Server_ns1.xml --noout

once the XML format is validated, the next step is to validate the semantic structure of the nodeset2 itself against the OPC UA standard from opc foundation. The most recommended tools if from the official opcua foundation called as "ua-modelcompiler".

	https://github.com/opcfoundation/ua-modelcompiler

if the nodeset2 file can be compiled using those tools, means the nodeset2 xml file is valid & correct.