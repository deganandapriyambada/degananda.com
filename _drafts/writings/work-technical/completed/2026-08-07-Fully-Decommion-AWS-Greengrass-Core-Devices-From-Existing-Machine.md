# How to Completely Decommision Greengrass

There three element that need to be removed in order to completely remove everything related with greengrass other to avoid any incurring cost on the AWS billing. Below are the targets:

1. Greengrasss runtime on the machine
2. Core devices on aws console
3. AWS IAM (identity access management) policies

the removal sequences need to be followed as per the list order (from top to bottom) to prevent error.

# Steps to Remove Greengrass

Below are the step by step to remove greengrass

## Greengrass Runtime Removal

login to the greengrass devices (on this case is virtual machine). Connect to the vm using SSH.

	ssh user@vm_ip_address

check if greengrass services is running

	sudo systemctl status greengrass.service

it will return the PID (processId) and its status (ACTIVE/FAILED)

```json
root@edge-devices:~# sudo systemctl status greengrass.service
● greengrass.service - Greengrass Core
     Loaded: loaded (/etc/systemd/system/greengrass.service; enabled; preset: enabled)
     Active: active (running) since Tue 2026-07-28 06:58:48 UTC; 1 week 3 days ago
   Main PID: 583531 (loader)
      Tasks: 91 (limit: 2318)
```

if greengrass is running, stop the green grass daemon / services otherwise move to the next step.

	sudo systemctl stop greengrass.service

re-check the process status, it should now be in-active (Active: Failed)

```json
root@edge-devices:~# sudo systemctl status greengrass.service
× greengrass.service - Greengrass Core
     Loaded: loaded (/etc/systemd/system/greengrass.service; enabled; preset: enabled)
     Active: failed (Result: exit-code) since Sat 2026-08-08 03:28:19 UTC; 19s ago
```

for complete removal, its important to also remove the services as well

	sudo rm /etc/systemd/system/greengrass.service

next step is to also remove any CLI or installation files from the edge devices

	sudo rm -rf /greengrass/v2

done. At this rate, greengrass run footprint is no more at devices level.

## Remove AWS Core Devices on AWS Console.

Go to the AWS console and navigate into greengrass menu (just search following text "iot greengrass" on the aws console search bar).	

[image click on the to-be-removed greengrass core devices name]

Choose the relevant core devices that will be removed (be careful, do not remove other active greengrass core devices that still inuse otherwise it might cause error)

[image click on delete button]

delete the core devices from greengrass. It will de-register the core devices from greengrass control plane.

Done. Now core devices is successfully removed

[image greengrass core devices is no longer available on greengrass control plane]

## Cancel Greengrass Deployment & Component

greengrass deployment and component can be removed through CLI or UI. below are the steps.

via CLI (command line interfaces)

login to the aws cli using SSO (single sign-on)

	aws sso login --profile [profile_id]

list down the deployment

	aws greengrassv2 list-deployments \
  --region ap-southeast-1

below is the deployment list

```json
{
    "deployments": [
        {
            "targetArn": "arn:aws:iot:ap-southeast-1:547268513310:thing/edge-transparant-gateway",
            "revisionId": "98",
            "deploymentId": "0a64ac11-63e8-47b6-8670-7c4feead57d0",
            "creationTimestamp": "2026-07-19T11:34:59.071000+07:00",
            "deploymentStatus": "CANCELED",
            "isLatestForTarget": true
        }
    ]
}
```

remove the deployment

	aws greengrassv2 delete-deployment \ --deployment-id <DEPLOYMENT_ID> \ --region ap-southeast-1

next, list down custom components.

	aws greengrassv2 list-components \ --region ap-southeast-1

delete one by one with following command

	aws greengrassv2 delete-component \ --arn <COMPONENT_VERSION_ARN> \ --region ap-southeast-1

via AWS console UI

go to greengrass -> deployment and delete the one that associated with to-be-removed-core-devices.

[image click cancel deployment]

then go to greengrass -> components. to remove every component, we must delete all the version.

[image delete all of the greengrass components]

## AWS IAM Policies Removal

Following steps are optional and s**hould not be executed if there is still other core greengrass devices still running** because the policies are shared across all greengrass core devices.

go to IAM -> roles and search for "GreengrassV2TokenExchangeRole" then navigate to the permissions policices. 

[image list of attached policies for greengrass]

each of attached policies is associating with the recipe.yml configuration to allow greengrass connect into such aws services. On our cases, the edge devices previously connect with following services:

1. AWS kinesis data stream
2. S3

de-attach each policy to remoke the access and ensuring greengrass devices no longer has access to that aws services.

Next is to remove IAM user for greengrass. Navigate to IAM -> user and search for your greengrass IAM user. this is the user that used for greengrass cli.

[image remove greengrass IAM user]

note: if you plan to use greengrass in the future or there is still an active greengrass instances. no need to remove the greengrass user 

(optional, for complete removal)

go to IAM -> policies. search for "**GreengrassV2TokenExchangeRoleAccess**"

[image GreengrassV2TokenExchangeRoleAccess policies is used for greengrass to access their control plane and other AWS services]

GreengrassV2TokenExchangeRoleAccess policies need to be re-added in order to use greengrass in the future
