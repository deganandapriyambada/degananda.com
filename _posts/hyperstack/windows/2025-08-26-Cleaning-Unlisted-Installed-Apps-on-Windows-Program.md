---
layout: posts
author: Degananda Ferdian
categories: windows
series-code: HSD001
excerpt: Windows app can be installed through various way. If the apps/library install not through windows installer, those apps might not be showing on control panel.
tags: windows
topics: windows
subtitle: Hello world subtitle of this post
ptype: Issue
background: Cleaning unnecessary apps or library from windows whcih are not detected via control panel
objective: to Uninstall unnecessary apps or library from windows
deliverables: Article
---

# Disk Free Space is Matter for Software Engineer

![postimage100](/assets/images/2025-08/disk1.jpg)
[Low Disk Spaces](/assets/images/2025-08/disk1.jpg){: .center-image }

For software engineer who use a laptop or PC with limited storage size(approximately 256 gigs or less can be categorized as low storage). Cleaning unnecessary apps becoming important task after a project ended. Otherwise, new stack for new project can't be installed and configured.

    Development tools usually are not installed through MSI or other windows executable format (EXE). 
    
    
&mdash; Hence, Its not shown on control panel -> program.

It could be installed via PIP, scoop, Chocolately, Node or even other package manager which supported by windows operating system

<hr />

Once a new project started usually the technology stack is changed. For example, the next project is about streaming data from message broker to graphDB. In order to do local development, a new library need to be installed (Kafka as message broker and Neo4J as GraphDB). Those two apps or program require relatively large amout of storage.

# Listdown and Uninstall Apps From Windows Package Manager

Here are the list of command to detect installed apps/library and uninstall it for each common package manager in windows operating system.

## Chocolately

Chocolately is a package manager for windows which use native installer such as exe and msi. The package will be registered on registry and accessible by all windows users (system wide installation)

Chocolately use nuget as their source code repository, then turned it into user friedly installation mode as long as the nuget package is integrated with chocolately by adding powershell script (ps1).

The script will determine how the nuget package will be compiled,build and installer to the system.


List down apps installed on chocolately

    choco list

sample output of choco installed package list

```json
PS C:\Users\degananda.ferdian> choco list
Chocolatey v2.4.1
chocolatey-compatibility.extension 1.0.0
chocolatey-core.extension 1.4.0
chocolatey-dotnetfx.extension 1.0.1
chocolatey-visualstudio.extension 1.11.1
chocolatey-windowsupdate.extension 1.0.5
dotnetfx 4.8.0.20220524
KB2919355 1.0.20160915
KB2919442 1.0.20160915
KB2999226 1.0.20181019
KB3033929 1.0.5
KB3035131 1.0.3
visualstudio2019buildtools 16.11.48
visualstudio-installer 2.0.3
13 packages installed.
```

Uninstall the apps

    choco uninstall <package-name>

## Scoop

Unlike chocolately which wrap the nuget package into user friendly installation mode. Scoop is intended to wrap ready executable file and turned it into portable apps.
    
    Scoop will manage the portable executable repository based on specific version and automatically extract the downloaded portable executable to desired folder.

no data will be written on registry. The apps can only accessible by specific user which install it via scoop due the nature of portable application.

List down apps installed on chocolately

    scoop list

Uninstall apps from scoop

    scoop uninstall <app-name>

## PIP (Python)

Python package manager

List down installed python package

    pip list

however, if the package is installed inside python virtual environment (python -m vnev project-name), it wont shown on the regular pip list until the virtual environment is activated

Hence,it is recommended to use conda or mini conda as all the package are centralized on dedicated folder, make it easy to manage and its queryable from cli.

to uninstall python package from pip

    python uninstall <package_name>

## Node

Node package manager, as it stands: package manager for nodejs which work on all platform(windows,linux and mac)

list down installed nodejs package on global (-g) node_modules

    npm list -g --depth=0

for non globally installed package, the package list is written on the project package.json and node_modules.