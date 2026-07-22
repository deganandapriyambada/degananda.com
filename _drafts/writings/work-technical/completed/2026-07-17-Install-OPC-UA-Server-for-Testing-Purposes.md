# OPC UA Simulator

OPC UA simulator is XXXXXXXXX

Below are the options of OPC UA simulator

## Option 1: Prosys OPC UA Simulator

go to following url in order to download prosys OPC UA simulator

	https://prosysopc.com/products/opc-ua-simulation-server/

it cames with two license option:

1. free version - can only be used for testing purposes
2. enterprise license

Free version can only be downloaded using corporate email. Free email provider like gmail, yahoo,outlook or hotmail will be automatically rejected. 

Note: option 2 is preferred as it utilizing openPLC (fully opensources simulator)

## Option 2: Containerized Cross Platform OPC UA Simulator (opensource)

Ensure docker has been installed on the local machine by executing following command

	docker --version

it should return the installed docker version number. Next is check whether docker daemon is running

	docker ps

it should show the container list otherwise the docker daemon is not yet started. Execute following command to start docker on mac

	open -a docker

there are several docker images available for OPC UA Server. One of the popular one is from microsoft which can mimic the production opc ua server and **based on openPLC**.

execute following command to run microsoft opc ua server simulator

	docker run --rm -it -p 50000:50000 mcr.microsoft.com/iotedge/opc-plc:latest --pn 50000 --nocert 

wait until the image downloded locally. 

[image microsft opc ua server has been started]

It will automatically run the opc ua server on port 50000. Check whether the opc ua server is running properly

	docker ps | grep microsoft

if the container successfully started, the container status will be changed into Up [X] minutes as shown in below images

[image microsoft opc ua server container is running at port 5000]

look for the endpoint url the logs

[image automatically generated microsoft opc ua server simulator local endpoint address but not yet binded to localhost]

re-run the docker and bind it to the local address then **enable SecurityMode to None** (for testing purposes)

	docker run --rm -it -p 50000:50000 --hostname localhost mcr.microsoft.com/iotedge/opc-plc:latest --pn 50000 --ut --aa

now the logs should say that the opc ua server is started at localhost instead of the randomly opc.tcp generated endpoint addresses.

[image opcua server is started on localhost with port 50000]

## Using OPC UA Browser to Connect Into Microsoft OPC UA Simulator

One of the most popular cross platform (windows and linux only!) OPC UA browser is UA Experts. Registration is needed before the opc ua browser can be downloaded. go to following links

	https://www.unified-automation.com/register/register.html

follow the registration flow and login to the platform.

However, there is an opensource alternative (preferred) and available for all operating systems (including mac) called as **opcua-commander** (fully opensources). it only require nodejs runtime installed at the local machine.

use following command to install opcua-commander globally.

	npm install -g opcua-commander

run opcua-command from global command alias

	opcua-commander -e opc.tcp://localhost:<port>

can also be installed locally at specific folder

	mkdir opcua-command
	npm install opcua-commander

run opcua-commander locally

	node bin/opcua-commander -e opc.tcp://localhost:<port>

the microsoft opc-ua server is running at port 50000 and following endpoint:opc.tcp://10999042a1af. change the <port> into 50000

	opcua-commander -e opc.tcp://localhost:50000

done. OPC UA server can be browsed via opcua commander.

[image we are successfully browse local microsoft opc ua server simulator]

type ":q" (just like when operating VIM editor) to close the opcua commander and use following command to stop the whole docker daemon (for complete stops)

	osascript -e 'quit app "Docker"'

or simply click on the docker icon at menubar and click "stop docker".