clone the heart beat components

	git clone https://github.com/deganandapriyambada/greengrass-minimal.git

or use following snippet

```json
console.log("Hello World");
console.log("Now Timestamp:", new Date().toISOString());

setInterval(() => {
    console.log("sending SAMPLING:", new Date().toISOString());
}, 10000);
```

change directory to the component

	cd /greengrass-minimal

double check if the directory has been switched

	pwd

it should pointed out to the greengrass component folder

```json
root@edge-devices:~/greengrass-components/heartbeat/greengrass-minimal# pwd
/root/greengrass-components/heartbeat/greengrass-minimal
root@edge-devices:~/greengrass-components/heartbeat/greengrass-minimal# 
```

recipe

```json
RecipeFormatVersion: '2020-01-25'

ComponentName: com.example.HelloWorld
ComponentVersion: '1.0.1'

ComponentDescription: Hello World NodeJS component
ComponentPublisher: Dega

Manifests:
  - Platform:
      os: linux

    Artifacts:
      - URI: s3://greengrass-artifact-dega-test/com.example.HelloWorld/1.0.1/index.js

    Lifecycle:
      Run: |
        /usr/bin/node {artifacts:path}/index.js
```

create greengrass component

	aws greengrassv2 create-component-version --inline-recipe fileb://components/HelloWorld/recipe.yml

 valiate on aws console, a new component called as "HelloWorld" should be created.

 get ARN

 	aws greengrassv2 list-core-devices

 it will print out the edge devices details

 ```json
 root@edge-devices:~/greengrass-components/heartbeat/greengrass-minimal# aws greengrassv2 list-core-devices
{
    "coreDevices": [
        {
            "coreDeviceThingName": "edge-transparant-gateway",
            "status": "HEALTHY",
            "lastStatusUpdateTimestamp": "2026-06-14T12:42:01.744000+00:00",
            "platform": "linux",
            "architecture": "amd64",
            "runtime": "aws_nucleus_classic"
        }
    ]
}
root@edge-devices:~/greengrass-components/heartbeat/greengrass-minimal# 
 ```

get the ARN by using following command

	aws iot describe-thing --thing-name edge-transparant-gateway

below is ARN

```json
{
    "defaultClientId": "edge-transparant-gateway",
    "thingName": "edge-transparant-gateway",
    "thingId": "9db24080-b4fb-4ab7-8632-113300835594",
    "thingArn": "arn:aws:iot:ap-southeast-1:547268513310:thing/edge-transparant-gateway",
    "attributes": {},
    "version": 1
}
```

deploy with following command

```json
aws greengrassv2 create-deployment \
  --target-arn arn:aws:iot:ap-southeast-1:547268513310:thing/edge-transparant-gateway \
  --deployment-name hello-world-deployment-202606142024 \
  --components '{
    "com.example.HelloWorld": {
      "componentVersion": "1.0.0"
    }
  }'
```

[image deployment]

check the deployment status using following command

	aws greengrassv2 list-deployments

if deployment is failed check the logs

	sudo tail -n 100 -f /greengrass/v2/logs/greengrass.log

if errorCode=127 is detected means "nodejs" is not yet installed on the VM

```json
2026-06-14T13:25:04.516Z [ERROR] (Copier) com.aws.greengrass.lifecyclemanager.GenericExternalService: service-errored. {exitCode=127, serviceName=com.example.HelloWorld, currentState=RUNNING, statusCode=RUN_ERROR}
```

to remediate the situation, nodejs need to be installed using following command 

install nvm

	curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.3/install.sh | bash

source bashrc so that nvm can be used on the console

	source ~/.bashrc

check available nodejs version

	nvm list-remote

always choose the LTS (long term support) version. Then install it

	nvm install v24.16.0

use it

	nvm use v24.16.0

verify

	node --version

it should return v24.16.0

next it to install nodejs globally as greengrass wont use the nvm version of node. the nvm version is useful for debugging purposes.

remove existing apt node

	sudo apt remove -y nodejs npm

install node version 24.x LTS

	curl -fsSL https://deb.nodesource.com/setup_24.x | sudo -E bash -
	sudo apt install -y nodejs

valide the global nodejs version

	/usr/bin/node -v

it should return v24.16.0 as well.

restart greengrass

	sudo systemctl restart greengrass

check greengrass status

	sudo systemctl status greengrass

adjust recipe.yml to force greengrass use global node from usr/bin/node

```json
Manifests:
  - Platform:
      os: linux

    Lifecycle:
      Run: |
        /usr/bin/node {artifacts:path}/index.js
```

pull the upates

	git pull

redeploy (dont forget change the deployment name so it will be unique)

```json
aws greengrassv2 create-deployment \
  --target-arn arn:aws:iot:ap-southeast-1:547268513310:thing/edge-transparant-gateway \
  --deployment-name hello-world-deployment-202606142050 \
  --components '{
    "com.example.HelloWorld": {
      "componentVersion": "1.0.0"
    }
  }'
```
check deployment status

	aws greengrassv2 list-deployments

now the deployment status should be returing successfull value as shown below

[image deployment success..]

now check the component logs.

find the logs file name

	sudo ls -la /greengrass/v2/logs/

```json
root@edge-devices:~/greengrass-components/heartbeat/greengrass-minimal# sudo ls -la /greengrass/v2/logs/
total 164
drwx------  2 root root   4096 Jun 14 13:25 .
drwxr-xr-x 12 root root   4096 Jun 14 13:47 ..
-rw-r--r--  1 root root      0 Jun 14 12:41 aws.greengrass.Nucleus.log
-rw-r--r--  1 root root  17961 Jun 14 13:50 com.example.HelloWorld.log
-rw-r--r--  1 root root 107055 Jun 14 13:51 greengrass.log
-rw-r--r--  1 root root  14044 Jun 14 12:42 greengrass_2026_06_14_12_0.log
-rw-r--r--  1 root root   7893 Jun 14 13:50 loader.log
-rw-r--r--  1 root root      0 Jun 14 12:41 main.log
```

tail the component log

	tail -f /greengrass/v2/logs/com.example.HelloWorld.log

## S3 bucket error

create s3 bucket

	aws s3 mb s3://greengrass-artifact-dega-test

```json
root@edge-devices:/greengrass/v2/packages/artifacts/com.example.HelloWorld/1.0.0# aws s3 mb s3://greengrass-artifact-dega-test
make_bucket: greengrass-artifact-dega-test
root@edge-devices:/greengrass/v2/packages/artifacts/com.example.HelloWorld/1.0.0# 
```

upload the index.js to the s3

go to folder where index.js is persisted (note this need to be done via proper CI/CD pipeline!)

	aws s3 cp index.js s3://greengrass-artifact-dega-test/com.example.HelloWorld/1.0.0/index.js

find greengrass role

	cat /greengrass/v2/config/effectiveConfig.yaml | grep TokenExchange

it should return the role name used by the greengrass

```json
root@edge-devices:~/greengrass-components/heartbeat/greengrass-minimal/components/HelloWorld/artifacts# cat /greengrass/v2/config/effectiveConfig.yaml | grep TokenExchange
      iotRoleAlias: "GreengrassV2TokenExchangeRoleAlias"
```

find "greengrass"

attach policy so that those role can access the bucket

permission -> attach inline policy

```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Effect": "Allow",
      "Action": "s3:GetObject",
      "Resource": "arn:aws:s3:::greengrass-artifact-dega-test/*"
    }
  ]
}
```

check if artifact is empty

	cd /greengrass/v2/packages/artifacts/com.example.HelloWorld/

if the recipe.yml is updated, the component need to be updated as well. run following command from where the reciple.yml is reside

	aws greengrassv2 create-component-version --inline-recipe fileb://recipe.yml

validate if the index.js exist on that component

	aws s3 ls s3://greengrass-artifact-dega-test/com.example.HelloWorld/1.0.1/

## Redeploy and Upversion the Component

redeploy

```json
aws greengrassv2 create-deployment \
  --target-arn "arn:aws:iot:ap-southeast-1:547268513310:thing/edge-transparant-gateway" \
  --deployment-name "hello-world-deployment-$(date +%s)" \
  --components '{
    "com.example.HelloWorld": {
      "componentVersion": "1.0.1"
    }
  }'
```

check component status

	aws greengrassv2 list-components

```json
root@edge-devices:/greengrass/v2/packages/artifacts/com.example.HelloWorld/1.0.1# aws greengrassv2 list-components
{
    "components": [
        {
            "arn": "arn:aws:greengrass:ap-southeast-1:547268513310:components:com.example.HelloWorld",
            "componentName": "com.example.HelloWorld",
            "latestVersion": {
                "arn": "arn:aws:greengrass:ap-southeast-1:547268513310:components:com.example.HelloWorld:versions:1.0.1",
                "componentVersion": "1.0.1",
                "creationTimestamp": "2026-06-14T14:38:33.700000+00:00",
                "description": "Hello World NodeJS component",
                "publisher": "Dega",
                "platforms": [
                    {
                        "attributes": {
                            "os": "linux"
                        }
                    }
                ]
            }
        }
    ]
}
```

revalidate deployment status

	aws greengrassv2 list-deployments

it now should return COMPLETED

```json
root@edge-devices:/greengrass/v2/packages/artifacts/com.example.HelloWorld/1.0.1# aws greengrassv2 list-deployments
{
    "deployments": [
        {
            "targetArn": "arn:aws:iot:ap-southeast-1:547268513310:thing/edge-transparant-gateway",
            "revisionId": "5",
            "deploymentId": "5db1ec4c-f286-428b-b6e1-08727934b5bb",
            "deploymentName": "hello-world-deployment-1781448047",
            "creationTimestamp": "2026-06-14T14:40:48.770000+00:00",
            "deploymentStatus": "COMPLETED",
            "isLatestForTarget": true
        }
    ]
}
root@edge-devices:/greengrass/v2/packages/artifacts/com.example.HelloWorld/1.0.1# 
```

check the logs

	tail -f /greengrass/v2/logs/com.example.HelloWorld.log

[image is now sending sampling]

logs location:

1. greengrass nucleus core runtime: /greengrass/v2/logs/greengrass.log
2. component logs: /greengrass/v2/logs/com.example.HelloWorld.log