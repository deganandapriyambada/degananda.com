# Spin Up Greengrass on Ubuntu Server

Objective: Hello World on greengrass

Install Greengrass core devices Steps

stack assumption:

1. VM on DO with ubuntu 24.04 LTS with 2 gigs of RAM and 1 virtual CPU (vCPU) using intel processor.
2. AWS IoT Core @ Asia Pacific (Singapore)
3. No containerized lambda for now

below are the steps to spin up AWS greengrass on ubuntu server 24.04 LTS

## Create Ubuntu Virtual Machine

provision a new droplet on digital ocean with following specs: RAM 2gb, 1vCPU and ubuntu server version 24.04 LTS. Note that the edge devices specs will be depending on the projected EPS or TPS (transaction per second) and applied business logic. 

[add image DO droplet creation]

update ubuntu OS packages repository and upgrade outdated packages through APT by executing following command

	apt update
	apt upgrade -y

note: if a prompt appeared during the apt upgrade process, choose keep the package local version.

## Install OpenJDK for Greegrass

next up is installing JDK (java development kit) as greengrass is built in java and ran on top of JVM (java virtual machine). OpenJDK is recommended with java version 11.

use following command to install openJDK version 11

	apt install openjdk-11-jdk unzip -y

[image installing openJDK 11 on ubuntu server 24.04]

wait until the installation process is finished. VM might get restarted at the end installation stage. Once the installation is completed, execute following command to verify the installation

	java --version

java version 11 should be shown on the console as we install openJDK version 11 before.

[image openJDK version 11 is successfully installed]

## Install AWS CLI v2

Install AWS CLI version v2. AWS CLI will be used to manage the greengrass.

create new folder

	cd ~
	mkdir installer

fetch the AWS installer for linux x86_x64 (choose appropriately based on the operating system used). greengrass can also be ran on ARM based processor.

	curl "https://awscli.amazonaws.com/awscli-exe-linux-x86_64.zip" -o "awscliv2.zip"

[image downloading awscli on ubuntu server 24.04]

Exctract the zip

	unzip awscliv2.zip

add +x permission (executing shell script)

	chmod +x ./aws/install

[image +x has been added to the install file]

Run the installer

	./aws/install

[image aws installation completed]

next is to validate whether the installation of aws cli is success or not by trying aws command and check the version

	aws --version

it should return version 2.

[image AWS version]

## Create IAM Users For the Greengrass Devices or VM 

now open aws console web, navigate to the IAM menu -> IAM users and create new IAM user.

[image IAM users]

specify the IAM user name : "edge-greengrass"

note: no need providing privilages or permissions to acceess AWS console.

[image set permission details]

on the set permission stage, choose "attach policies directly" and select "AdministratorAccess". Least privilage can be configured later.

[image review]

review the IAM configuration, double check the permission and user name. Once everything is align click "create user".

wait for couple of minutes until the IAM user is created.

if IAM user is created properly it will be shown on the IAM users list.

[image edge-greengrass is listed down as IAM users]

next up is grab following information from the recently created IAM users "edge-greengrass"

1. Access Key
2. Secret Access Key

those two information can be retrieved by accessing IAM user details and click on the create access key links.

[image create access key]

choose command line interface

note: it is recommended to use SSO (single sign on), however, access key is also accepted by greengrass. Once the greengrass installation is completed, access key can be revoked/deleted.

copy the access key and secret access key stored it somewhere save. These information can't be retrieved later. Only shown once. so make sure to save those keys.

## Configure AWS CLI to Use the Access Key

back to VM console and configure the aws cli by executing following command

	aws configure

input the access key and secret access key from previous step as well as the region (ap-southeast-1 will be used on this article).

[image aws configure details]
	
it is recmmended to use JSON as the output format as its compatible with analytics component on the downstream such as aws kinesis.

execute following command to test the aws cli using pre-configured access key and secret.

	aws sts get-caller-identity

it should return the aws account details on the VM console.

[image aws account details shown in the console]

done. if the account details is shown, means AWS cli is successfully installed and the VM is "connected" with AWS cloud console.

## Install greengrass

download **greengrass nucleus** installer on the installer folder

	cd ~
	cd installer

fetch the installer files

	curl -L https://d2s8p88vqu9w66.cloudfront.net/releases/greengrass-nucleus-latest.zip -o greengrass-nucleus-latest.zip

[image greengrass installer has been downloaded]

extract the greengrass installer zip file by following command

	unzip greengrass-nucleus-latest.zip -d GreengrassInstaller

[image greengrass installer has been extracted]

install greengrass with following command

	sudo -E java \
	-Droot="/greengrass/v2" \
	-Dlog.store=FILE \
	-jar ./GreengrassInstaller/lib/Greengrass.jar \
	--aws-region ap-southeast-1 \
	--thing-name edge-transparant-gateway \
	--thing-group-name edge-greengrass-group \
	--component-default-user ggc_user:ggc_group \
	--provision true \
	--setup-system-service true

note: --component-default-user ggc_user:ggc_group <- this is the user that will be created to manage the greengrass instead of "root". Repalce thing-name and thing-group-name

wait until the installation is completed. a new thing called "edge-transparent-gateway" will be created on the aws cloud console as well as the new things group called as "edge-greengrass-group".

following message will be shown on console if the greengrass installation is success

```json
Successfully configured Nucleus with provisioned resource details!
Successfully set up Nucleus as a system service
```

or it can also be seen on below image

[image greengrass is successfully installed on the ubuntu server 24.04]

next up is verification phase. below checklist must be met

1. greengrass services / daemon must be running on the ubuntu
2. thing called as "edge-transparent-gateway" must be provisioned and created on aws iot core thing
3. thing group called as "edge-greengrass-group" must be provisioned and created on aws iot core thing group
4. greengrass core devices is health

execute following command to check whether greengrass is up and running

	sudo systemctl status greengrass

[image greengrass is up and running]

next is to ensure thing and thing group is created by checking the aws console.

[image thing "edge-transparent-gateway" successfully created]

[image thing group "edge-greengrass-group" successfully created]

go to "greengrass devices" -> "core devices". the edge transparant gateway should be listed and marked as healthy

[image healthy edge transparant gateway ]

done at this point aws greengrass has been successfully installed on the ubuntu server 24.04