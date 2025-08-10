---
layout: posts
author: Degananda Ferdian
categories: python
series-code: PYTHONDEBUG01
excerpt: A conda environment need to be properly configured for the multi environment can work properly. Otherwise it may ended with several common error
tags: python pip pip-issue conda
topics: agenticai
ptype: News
background: Encountered module not found error on Conda based python project. 
objective: to Solve module not found error on python project based on the conda environment
deliverables: article & illustration
---

a Proper python and pip binary need to be pointed exactly to the conda system directory. Otherwise it will trigger module not found error.

# Module not found error on Python with Conda

## Problem Statement 

Get conda environment list

    conda env list

Activate conda environment

    conda activate {environment_name}

even after successfully activating conda environment, some modules are not detected by python. Both on the IDE and Terminal (CLI)

## VSC Can't detect the module

![postimage100](/assets/images/2025-08/conda1.jpg)
[Error Import Syntax Detected on IDE(Visual Studio Code)](/assets/images/2025-08/conda1.jpg){: .center-image }  

VSC terminal already switched to the designated conda environment. But somehow some import syntax are marked as yellow due to the module can't be found on the library.

## Terminal detect module not found during execution

When executing the python program, terminal returning following responses :

```json
Traceback (most recent call last):
  File "/Users/deganandaferdian/miniconda3/envs/gpu-hello-world-minstral/src/./sample/promptlang.py", line 3, in <module>
    from langchain.llms import LlamaCpp
ModuleNotFoundError: No module named 'langchain'
```

eventhrough the module (on this cases is langchain) already presented on pip. It checked using following command

    pip list | grep "langchain"

responses

```json
(gpu-hello-world-minstral) deganandaferdian@degananda src % pip list | grep "langchain"
langchain                0.3.27
langchain-core           0.3.74
langchain-text-splitters 0.3.9
```

# Root Causes Analysis

## Mispointed Python and PIP Binary File

Conda environment on terminal can only work properly by utilizing the created virtual python environment if only if

- Python is pointed to /conda_project/bin/python
- Pip is also pointed to  /conda_project/bin/pip

if one of the binary still pointed to the host python/pip, it will cause **module not found error** as shown below

![postimage100](/assets/images/2025-08/conda2.jpg)
[Error Import Syntax Detected on IDE(Visual Studio Code)](/assets/images/2025-08/conda2.jpg){: .center-image }  

based on above image, python is already pointed to the conda's project binary file. But the PIP (python package manager/Pip install package) still pointed to the host python

# Resolution

## (ZSH terminal only) Re-initiate the ZSH

Sometimes, the conda configuration on .zshrc on mac terminal got flushed especially after restart or reboot or shutdown. 

![postimage100](/assets/images/2025-08/conda3.jpg)
[Re-initiate conda configuration on ZSH terminal](/assets/images/2025-08/conda3.jpg){: .center-image }  

    Execute below command on terminal outside VSC (visual studio code) because usually its conflicting with vsc config.

To solve the issue, conda configuration on ~/.zshrc need to be initiated with following command

    conda init zsh

activate and apply conda config on ZSH

    source ~/.zshrc

reactivate the conda environment

    conda activate {environment_name}

## Validation

Once those two command has been executed, both binary file (python and pip) need to be re-assessed.

![postimage100](/assets/images/2025-08/conda4.jpg)
[Finally both of python and pip binary properly pointed to conda projet binary folder](/assets/images/2025-08/conda4.jpg){: .center-image }  

it should be pointed to correct /conda_project/bin folder as shown above

# Alternative Resolution

to completely avoid the zsh or terminal config issue, its also possible to ask force to use pip that has same environment with the activated python environment

## Force to use PIP based on Active Python environment

execute following Command

    python -m pip install langchain