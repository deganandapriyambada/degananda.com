# What is AWS IoT Core

Below are the steps to provision aws iot core

## login to the aws console

login to the AWS console by accessing following links

	https://signin.aws.amazon.com/

or create new account account if not yet registered.

once login is successful, the page will be redirected to the aws dashboard.

on the search page, search for "iot core"

click on the iot core dropdown menu.

dont forget to choose the server region to ensure the lowest latency possible which is measured based on the IoT devices location.

## create thing group

next step is to create the thing group. Click on the "create thing group"

choose static thing group as we wanted to assign or de-assign the things to things group manually not by query.

things group is basically the logical grouping for the devices which depending on the use cases. On fleet maangement systen, the devices is usually grouped per fleet name. Hence the things group should be named as the fleet name.

input the thing group name

if the thing group creation is success, the thing group name will be listed under the thing groups list.

## Register device / thing

on the AWS IoT menu, choose "things" sub-menu under the "All devices" menu

then click on the create things button

choose create single thing

input the thing name. Usually its the devices identifier. On fleet management cases, the name should be the devices IMEI or the VIN (vehicle identification number)

choose the thing group

leave the others configuration as default for now (eg: no devices shadow)

skip both certificates and policy configuration. it will be configured on the next article and click create thing button

if the thing creation is success, then the device name or thing name should appear under the things list page

