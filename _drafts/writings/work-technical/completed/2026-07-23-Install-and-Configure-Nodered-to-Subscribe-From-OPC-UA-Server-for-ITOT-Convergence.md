pre-requisites:

1. OPC UA server has been up and running
2. nodejs is installed (preferably the latest version)

ensure OPC UA server is also accessible without any errors by trying to access the opc ua server using industrial grade opc ua client such as opc ua command (open sources) or opc ua client from unified automations.

use following command to access the opc ua server (if using opc ua commander)

	opcua-commander -e opc.tcp://localhost:50000

it will establish connection to local opcua server on port 50000. adjust based on your server configuration.

[image connections is successfully established to local opcua server]

## Install and Launch Nodered

ensure nodejs is installed by executing following command

	node --version

it should return the installed nodejs version. Next step is to install nodered globally so that it can be launched from any folder for ease of use.

	sudo npm install -g node-red

launch nodered by opening terminal and execute following command

	node-red

by default nodered will be launched on port 1880. Open browser and navigate to following url

	localhost:1880

## Install Node OPC UA on the nodered

install opc UA library inside the nodered by going to manage pallate menu which can be accessed by clicking on the hamburger bar on top right of nodered UI (user interfaces.)

[image location of hamburger bar on nodered user interfaces which showing all available menu]

choose manage pallete menu

[image click on the manage pallete]

choose install "tab" and search for "node-red-contrib-opcua", it has built in opc ua client to susbcribe from existing opc ua server. 

[image nodered has package manager to download opc ua related library]

click install and wait the installation process.

[image installing node-red-contrib-opcua]

it will takes time.

[image installation process is completed, node opc ua libraries has been added]

## Create OPC UA listener flow on the nodered

Create new a new opc ua client and configure following items

1. endpoint: opc.tcp://localhost:50000
2. security: none
3. security policy: none
4. tick or check the anonymous profile as our opc-ua is not configured using username and password.

note: the configuration wil all depend on the opc-ua server config. then click save

[image opc ua client configuration to subscribe from local opc ua server]

then click deploy so that the flow will be executed.

[image done - now nodered is successfully connected with local opc ua server]
