---
layout: posts
author: Degananda Ferdian
categories: product
series-code: TLNT001
excerpt: One most noticeable UI/UX upgrade on jupyter lab is multi tab. it allow user to open multiple notebook at same time. seamless experience like an actual IDE(integrated desktop environment)
background: jupyter lab is the upgraded version of legacy jupyter. it has better UI/UX compared to the legacy and an integrated terminal.
objective: to upgrade from jupyter into jupyter lab.
deliverables: article & illustration
---

jupyterlab is the newer version of jupyter. it has major upgrade on the UI/UX (user interface and user experience) which offer more robust and modern frontend interface.

# Pre-requisites

following condition has to be met before upgrade can be executed

1. jupyter has been installed on the system
2. jupyter can be ran on the system.

without legacy jupyter application, upgrade to jupyter lab can't be initiated.

execute following command to check if jupyter is available on the system

    pip list | grep jupyter

expected output:

```json
jupyter                   1.1.1
jupyter_client            8.6.3
jupyter-console           6.6.3
jupyter_core              5.9.1
jupyter-events            0.12.0
jupyter-lsp               2.3.0
jupyter_server            2.17.0
jupyter_server_terminals  0.5.3
jupyterlab                4.4.10
jupyterlab_pygments       0.3.0
jupyterlab_server         2.28.0
jupyterlab_widgets        3.0.15
```

it should shown several libraries related with jupyter

## Upgrade to Jupyter Lab

execute following command to install jupyter lab

&mdash; it will automatically upgrade the legacy jupyter into jupyter lab

    pip3 install jupyterlab

once the installation is finished, confirm whether the jupyter lab is successfully installed or not by using following command

    pip3 list | grep jupyterlab

expected output

```json
jupyterlab                4.4.10
jupyterlab_pygments       0.3.0
jupyterlab_server         2.28.0
jupyterlab_widgets        3.0.15
```

if jupyterlab is found on the pip list meaning the installation process is sucessfull.

just to be safe, check the jupyter lab version installed via following command

    jupyter lab --version

it should return the version of jupyter lab installed on the system.

```json
(projectmakaryospark) root@pendar-client:~/projectmakaryo/projectmakaryospark# jupyter lab --version
4.4.10
(projectmakaryospark) root@pendar-client:~/projectmakaryo/projectmakaryospark# 
```

# Run jupyter lab on console

![postimage80](/assets/images/2025-10/lab1.jpg)
[jupyter lab launcher is rendered as web UI](/assets/images/2025-10/lab1.jpg){: .center-image }

execute following command to run the jupyter lab

    jupyter lab --ip=0.0.0.0 --port=8888 --allow-root

above command will expose port 8888 and jupyter lab UI can be accessible via browser.

# Run jupyter lab on background

same command can be used to run jupyter lab on background, however it need to be added on top of nohup.

    nohup jupyter lab --ip=0.0.0.0 --port=8888 --allow-root > jupyterlab.log 2>&1 &

done now jupyter lab services is running on the background.

![postimage80](/assets/images/2025-10/lab2.jpg)
[use ps function on terminal to check whether jupyter lab running status](/assets/images/2025-10/lab2.jpg){: .center-image }

to check if the jupyter lab is running can use following command

    ps -ax | grep jupyter

to stop the jupyter lab services

    sudo kill -9 <jupyter_lab_pid>

## Memory consumption

resource consumption on jupyter lab is varies depend on the number of user accessing the ui and running the kernel.

below is the resource consumption for OS and idle jupyter lab (no user accessing and no kernel is ran)

![postimage80](/assets/images/2025-10/lab3.jpg)
[idle memory consumption of jupyter lab](/assets/images/2025-10/lab3.jpg){: .center-image }