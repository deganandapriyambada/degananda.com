Install Greengrass core devices Steps

stack assumption:

1. VM on DO with ubuntu 24.04 LTS
2. AWS IoT Core @ Asia Pacific (Singapore)
3. No containerized lambda for now

steps

1. [DO] provision VM @ DO
2. [VM] install python (> 3.5)
3. [VM] Install AWS CLI > v2.1>11
4. [VM] Install java (openJDK) version 8+++
5. [AWS Console] Provision greengrass core devices
6. [AWS Console] register thing group and thing
7. [VM] export credentials variable
8. [VM] Download greengrass nucleus via CURL
9. [VM] execute the installer
10. [VM] run the nucleus
11. [VM] validate if the installation is complete using AWS CLI
12. [VM] create hello world component
13. [AWS console] Upload the component 
14. [AWS console] Deploy
15. [AWS console] check if hello world is successfully sent.



