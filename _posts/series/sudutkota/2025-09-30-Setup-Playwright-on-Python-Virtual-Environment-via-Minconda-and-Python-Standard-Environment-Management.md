---
layout: posts
author: Degananda Ferdian
categories: python
series-code: RELEARNSWE01
excerpt: Playwright getting popularity traction nowdays over selenium. Offering simpler syntax, so the developer can focus on the business rule instead of worrying about the underlying headless browser technology & parsing script.
topics: scrapping
ptype: Issues
background: X becoming one of news source for some people aprt from offical news, youtube or other news media. Social media styles news become famous nowdays as everyone can comment using their annonymous account. In fact, its not uncommon for people reporting about fire or safety incident on X.
objective: to setup playwright project and prepare it for web scrapping or crwaling pipeline using python on its virtual environment.
deliverables: article & illustration
---

# What is Playwright ?

Playwright is cross platform library for end to end web testing through browser. It available on different languages from python, java, NodeJS and .net

&mdash; apart from the wide language option, playwright also offer various browser engine (chromium, webkit and Firefox)

Playwright is generally used for testing the functionality of web apps. But, it **can also be used for web scrapping** purposes

    Like double edged sword, a good web automation testing tools is also good web scrapping tools as it shared same functionality & capability

# Preparing a Web Scrapping Project usign Playwright

python will be used for this project, similar setup can be done using NodeJS, java or .NET.

the current stable version of playwright is **1.55.0** (as the moment of the article is published, 30 sept 2025) require following system requirement :

1. python with version >= 3.9.x
2. linux/windows/OS X

There are two method of creating python project with its own python virtual environment(so its not messing with system/other project python packages), both of the method will be demonstrated on this article.

# Via Standard Python Project Management

ensure the python version is met with the minimum python requirement (>= 3.9.x)

    python --version

sample responses.

```json
(base) deganandaferdian@degananda ~ % python --version
Python 3.13.2
(base) deganandaferdian@degananda ~ % 
```

from above console result, the system machine already met the miniumum python requirement.

## Create python virtual environment

go to the prefered python project folder, for example below is the target root project directories that will hold all the python projects

    /Users/deganandaferdian/Documents/Writerpreneur/Sudutkota

create python virtual environment

    python -m venv playwright-crawler

once the command is susccessfully executed, a new folder called **playwright-crawler** will be created.

![postimage80](/assets/images/2025-09/playwright1.jpg)
[a new folder created along side with the python binaries](/assets/images/2025-09/playwright1.jpg){: .center-image }


&mdash; the downside of creating python project with default python virtual environment is that the python version can't be specified. it will always based on system python binary version.

however, there is a workarround by installing m**ultiple python version on same system** eventhough its not recommended as it will be really hard to manage each python version.

## Active the Virtual Environment

go to the folder

    cd playwright-crwaler

type below command to ensure the active directory has been changed to playwright-crwaler

    pwd

ensure it return the exact path of playwright-crwaler folder

```json
(base) deganandaferdian@degananda Sudutkota % cd playwright-crawler 
(base) deganandaferdian@degananda playwright-crawler % pwd
/Users/deganandaferdian/Documents/Writerpreneur/Sudutkota/playwright-crawler
(base) deganandaferdian@degananda playwright-crawler % 
```

depend on the operating system, below is the command to activate the python virtual environment

**Mac OS**

    source ./bin/activate

**Linux**

    source ./bin/activate

**windows** (via powershell), require administrator access (right click -> run with administrator)

    .\venv\Scripts\Activate

if the environment switching is success, on the beginning of the console will have the virtual environment name printed as shown below.

![postimage80](/assets/images/2025-09/playwright2.jpg)
[successsfully activate the python virtual environment](/assets/images/2025-09/playwright2.jpg){: .center-image }


## Install Playwright

there are two things need to be installed

1. playwright library
2. supporting library for playwright which is the browser

install playwright library

    pip install playwright

install the browser library(webkit, firefox, chromium)

    playwright install

done.

# Via MiniConda (Prefered) Method

the second method to prepare python environment for playwright is via conda.

&mdash; conda is prefered over traditional python virtual environment as conda can create multiple python version per project without manually manage install all the python version on single system

## Create conda project

note: minimum of python version required is 3.9.x, ensure the python version specified during conda project creation is above the minimum system requirement.

following command is used to create conda project with specific python version.

    conda create --name playwright-crawler python=3.12

this will automatically create a new conda project on the conda default directory.

![postimage80](/assets/images/2025-09/playwright3.jpg)
[confirm list of package to be installed](/assets/images/2025-09/playwright3.jpg){: .center-image }

type "Y" when prompt for confirmation. It jsut conda telling which new packages that will be installed.

wait until the download process is completed

![postimage80](/assets/images/2025-09/playwright4.jpg)
[conda package download in progress](/assets/images/2025-09/playwright4.jpg){: .center-image }


for example is the default conda directory on current system

```json
deganandaferdian@degananda envs % pwd
/Users/deganandaferdian/miniconda3/envs
```

then, list down the conda environment list do see the newly created conda project for "playwright-crawler" using following command

    conda env list | grep "playwright-crawler"

above command will return if a project called "playwright-crawler" is listed down on the conda environment (supposed to be listed down) as shown below

```json
(base) deganandaferdian@degananda ~ % conda env list | grep "playwright-crawler"
playwright-crawler     /Users/deganandaferdian/miniconda3/envs/playwright-crawler
(base) deganandaferdian@degananda ~ % 
```

## Activate the conda project

execute following command to activate the conda project

    conda activate playwright-crawler

if the command is executed successfully, the environment name ("playwright-crawler") will be added on the beginning of the CLI line as prefix

![postimage80](/assets/images/2025-09/playwright5.jpg)
[console successfully switched to new conda environment](/assets/images/2025-09/playwright5.jpg){: .center-image }

just to double confirm, execute following comamnd ensure only **pip**, **wheel** and **setuptools** package installed

    pip list

if there is other package listed down, please recheck whether the environment name is correct. It suppose only have pip list as the environment is newly created.

expected pip list response for newly created conda project

```json
(playwright-crawler) deganandaferdian@degananda ~ % pip list
Package    Version
---------- -------
pip        25.2
setuptools 78.1.1
wheel      0.45.1
(playwright-crawler) deganandaferdian@degananda ~ % 
```

## Install playwright on conda

![postimage80](/assets/images/2025-09/playwright6.jpg)
[install playwright via conda](/assets/images/2025-09/playwright6.jpg){: .center-image }

install playwright package

    conda config --add channels conda-forge
    conda config --add channels microsoft
    conda install playwright

&mdash; note: it might take a while as playwright libraries size > 20 MB and the installation time is depending on the internet connection

![postimage80](/assets/images/2025-09/playwright7.jpg)
[download playwright and its neccesary dependencies and extract the packages](/assets/images/2025-09/playwright7.jpg){: .center-image }


Validate if playwright installed properly on Conda

execute following command

    pip list | grep playwright

ensure playwright and its browser package dependencies are exist.

```json
(playwright-crawler) deganandaferdian@degananda ~ % pip list | grep playwright
playwright        1.51.0
(playwright-crawler) deganandaferdian@degananda ~ % 
```

install browser libraries(webkit,chromium and firefox) for playwright

    playwright install

done.

# Debug Playwright Installation

below are some usual issues that can be encountered during playwright installation

## Node Driver Not Found

**rootcause**: playwright can't find related node-driver package for that specific installer. most likely due to **target architecture mistach** (eg: target os is ARM64, but installed using arm64 script) require **conda-forge** to rebuild the installation binary.

```json
FileNotFoundError: [Errno 2] No such file or directory: '/Users/deganandaferdian/miniconda3/envs/playwright-crawler/lib/python3.12/site-packages/playwright/driver/node'
```

in case node driver can't be found, it is recommended to **uninstall the playwright packages** to ensure corruped or incomplete playwright installation files are wiped out.

    pip uninstall -y playwright

then, updates pip, setuptools and wheel. usually the newer version of playwright require **most recent pip, setuptools and wheel version.**

    pip install --upgrade pip setuptools wheel

wait until the upgrade process completed. if the conda version need to be upgraded, then upgrade it first or if below error is encountered.

```
==> WARNING: A newer version of conda exists. <==
    current version: 25.3.1
    latest version: 25.7.0
```

update conda (if prompted)

    conda update -n base -c conda-forge conda

reinstall playwright using **conda forge** to rebuild the playwright with correct target OS architecture.

    conda install -c conda-forge playwright

using conda-forget command will ensure the playwright is recompiled based on target OS architecture (on this case is arm64) and install the specific node driver depedencies for that architecture.

![postimage80](/assets/images/2025-09/playwright8.jpg)
[playwright is reinstalled](/assets/images/2025-09/playwright8.jpg){: .center-image }

it show now able to install the browser depedencies

    playwright install

wait until the all browser driver is installed

![postimage80](/assets/images/2025-09/playwright9.jpg)
[download browser driver for playwright](/assets/images/2025-09/playwright9.jpg){: .center-image }

all of the three browser driver will be downloaded (chromium, firefox, webkit) for both headless browser and non-headless

![postimage80](/assets/images/2025-09/playwright9.jpg)
[all browser driver will be downloaded, including chromium, firefox and webkit](/assets/images/2025-09/playwright9.jpg){: .center-image }

done. 

playwright is ready to be use on the mini conda project.