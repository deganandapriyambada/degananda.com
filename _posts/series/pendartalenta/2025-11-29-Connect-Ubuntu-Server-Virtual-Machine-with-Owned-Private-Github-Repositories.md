---
layout: posts
author: Degananda Ferdian
categories: infrastructure
series-code: TLNT001
excerpt: Private access token or also known as PAT, is the preferred authentication method as it also provde authorization capabilities by limiting the token permission depend on the configuration
tags: github
background: private github respository cant be cloned using public HTTP. it require a valid authentication between virtual machine and github.
objective: to authenticate from ubuntu virtual machine into github private repository
deliverables: article & illustration
---


Public github repositories can easily be cloned used following command

    git clone <git-repo-url>

However, such command can't be used for cloning private repositories as it cannot be accessed by public.

In order to clone and perform typical git operation such as clone, pull, push and merge (depending on the access matrix), github require an **authentication** to be made from the source virtual machine to the github repositories server.

# Available Authentication Method

there are two ways to establish an authentication to github from virtual machine
1. via PAT (personal access token)
2. via SSH

genereally it is recommended to use PAT as we can define the on point access permission when generating the token.  

## Generate PAT - Personal Access Token

login to github website

    https://github.com

navigate to top right of the menu bar, click the profile image and find settings menu on the dropdown.

![postimage80](/assets/images/2025-11/git1.jpg)
[access github account settings on the github portal](/assets/images/2025-11/git1.jpg){: .center-image }

once the settings/profile page is loaded, scroll down until find developer settings menu on left sidebar.

![postimage80](/assets/images/2025-11/git2.jpg)
[access github account developer settings)(/assets/images/2025-11/git2.jpg){: .center-image }

on the developer settings page, click **personal access token** (PAT) menu on the left sidebar and choose fine grained token

![postimage80](/assets/images/2025-11/git3.jpg)
[access PAT - personal access token](/assets/images/2025-11/git3.jpg){: .center-image }

github personal accesss token field description

&mdash; fine grained token is most secured token compared to the class one as the token will have **selected permission**

click generate new token then fill all the neccesary field as well as the allowed permissions.

below is the description of each mandatory parameter during PAT (personal access token) creation.

- **token name:** use specific token name for which occasion/repository for easy tracking
- **description**: detail of the token usage
- **resource owner**: can be set at account or organization level (be careful!). it is recommended to have one user one token (1: user to token)
- **exporation**: token expiration date (do not set never expire!)
- **repository access**: list of repository which can be accessed by the token. limit one repository per token! do not create root token which able to access all repository. beware the security risk.
- **permission**: define the specific action needed for the token. example: for deployment purpose (git pull, git clone, git fetch), choose "**content**" as the permission

&mdash; it always important to set token's specific permission to specific repositories only with **read only access.**

![postimage80](/assets/images/2025-11/git4.jpg)
[token for repository reading such as pull, fetch and clone to specific repository](/assets/images/2025-11/git4.jpg){: .center-image }

## Store the token safely

once the PAT token is generated, it only shown once on the screen. Store the token safely.

![postimage80](/assets/images/2025-11/git5.jpg)
[PAT can be generated once](/assets/images/2025-11/git5.jpg){: .center-image }

but dont worry, if the token is lost, the token can be regenerated again.

# Utilize Github PAT to authenticate into github repositories

Below is the steps to use the github PAT for authenticating into github repositories from ubuntu virtual machine

## Check if git is installed

login into the VM using ssh and ensure git is installed by executing following command

    git --version

it should return the git version on the console as shown below

```json
root@pendar-spark:~# git --version
git version 2.43.0
root@pendar-spark:~# 
```

if git is not persist on the system, install git using following command

    apt get update
    apt install git

## Clone the repository

go to specific target folder for the cloned repository or just create it if not yet exists.

```json
root@pendar-spark:~/crawler# pwd
/root/crawler
root@pendar-spark:~/crawler# 
```

clone the private repository using following command

    git clone https://github.com/<username>/<repository-name>.git

a prompt will automatically shown on the console, it will ask two things

    - username: this is the github account username
    - password: PAT (personalized access token)

if the token is correct and has sufficient permission, private repistory cloning should be successed.

![postimage80](/assets/images/2025-11/git6.jpg)
[git clone command successfully executed on private github repository using PAT](/assets/images/2025-11/git6.jpg){: .center-image }

note: store the github PAT(personal access token) on the server file for future usage.


