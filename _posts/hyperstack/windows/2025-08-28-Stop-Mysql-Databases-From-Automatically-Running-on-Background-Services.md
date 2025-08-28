---
layout: posts
author: Degananda Ferdian
categories: windows
series-code: HSD001
excerpt: Check if mysql services is running on background and deactivate the auto start mechanism after login and startup.
tags: windows mysql
topics: windows
ptype: issue
background: By default after installing mysql on windows, the services will be automatically started after during startup (login to windows).
objective: to deactivate mysql autostart
deliverables: Article
---

Mysql has default behavior to enable the auto start services during startup (login to the windows for the first time after reboot).

# Check if MYSQL is running on the background

MYSQL will spawn a process called as MySQL80 on the background services.

There are several way to check whether MySQL80 services is running on background or not.

## CLI Style - Check via Powershell

Bellow command is used show running background services on windows. 

    net start

Note: it is adviseable to ran the command via powershell using administrator mode to avoid any privilages issues.

sample output from above command.

![postimage](/assets/images/2025-08/net1.jpg){: .center-image-2 }
[List of background process shown by NET command](/assets/images/2025-08/net1.jpg){: .center-image }

the equivalent command on linux is 

    ps -ax

## Grep specific process using NET

Imagine having thousands of running process altogether. Finding specific process would be a headache. Moreover, powershell might truncate the output if the responses is too long.

on linux, this problem can be easilty fixed by adding pipe and grep

    ps -ax | grep "mysql80"

the equivalent grep command on windows is findstr. it directly used on the net start command

    net start | findstr "MySQL80"

kindly note that unlike grep piping on windows, findstr pipe might not work for every command and it is **case sensitive**.

Mysql80 is different with MySQL80. Need to pass the proper cases value as shown below

    net start | findstr "MySQL80"

```json
PS C:\Users\degananda.ferdian> net start | findstr "MySQL80"
   MySQL80
PS C:\Users\degananda.ferdian>
```

## Check specific process using taskmgr

![postimage80](/assets/images/2025-08/net2.jpg){: .center-image-2 }
[Mysql services on task manager is running with name of mysqld.exe](/assets/images/2025-08/net2.jpg){: .center-image }

classic and the most user friendly (non poweruser or developer) solution is to open taskmanager and find the specific process. Least favorite for developer.

    Note that mysql spawning MySQL80 on background services, however its called as mysql.exe on taskmgr

Open taskmgr, order the process by alphatbet (ascending from A-Z) and check whether **MysqlD** is exist.

# Prevent MySQL auto start on Background services

In order to prevent mysql auto start after startup / login, a configuration need to be made on the services config.

    Note that msconfig need to be started using administrator mode in order to activate/deactivate the services.

Go to Search bar and type msconfig

![postimage80](/assets/images/2025-08/net3.jpg){: .center-image-2 }
[MSCONFIG is used to activate or deactivate auto start of services on windows](/assets/images/2025-08/net3.jpg){: .center-image }

go to services tab => find **MySQL80** => deactivate the auto start option.

![postimage80](/assets/images/2025-08/net4.jpg){: .center-image-2 }
[Deactivate MySQL80 services on Msconfig: Services TAB](/assets/images/2025-08/net4.jpg){: .center-image }

Done. The configuration will take places after restart. Now, after login/startup, mysql wont spawn mysqld.exe or MySQL80 services on the background. meanign, Mysql no longer has auto start capability.