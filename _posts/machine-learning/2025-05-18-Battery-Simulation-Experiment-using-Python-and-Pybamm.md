---
layout: posts
author: Degananda Ferdian
categories: ML
series-code: HSD001
excerpt: Simulating several scenario on battery such as discharge-charge-rest cycle using python, miniconda and pybamm.
tags: ML Azure-ML Regression
topics: ML Azure-ML Regression
subtitle: Hello world subtitle of this post
ptype: Issue
background: Before procuring or creating a battery, its important for a research to understand how the battery works. The simulation result then can be used as baseline to design the battery.
objective: to Understand and simulate Battery behavior under certain condition, model and parameter such as  battery type, chemical, life cycle etc.
deliverables: Article, Ilustration
---

# Why a battery simulation is needed?

    Model definition -> Environment and experiment definition -> Simulation -> Insight -> Well prepared Battery Design

Producing a battery will cost some money. a bad design or unfit design of battery may ended up in losing money. Hence, it is really important to perform simulation before actual design to prevent unfit battery. Each battery will be designed based on specific purpose and condiition. Simulation will help to simualte the battery behavior during specific environment/test and researcher can use the simulation result to prepare the actual design design.

# Pybamm as Battery Simulation Tools

Currently there is one growing open-source python package that specifically function to simulate a battery. The package name is **pybamm**. Its a tools to simulate battery using mathematical approach. 

    Pybamm also has built in integrated data science package like sciPy, numPy, etc.

Based on their testimonies, pybamm is used by battery researcher for educational or industrial purposes. Since the code is open source (available to the public), all researcher over the world can help to enhance the package.

# Installing PyBamm.

Pybamm is python package, its advised to use specific python version : 3.12.x. Newer version of python might not be able to run pybam as its require lower version of scipy that can only run under python 3.11.x or 3.12.x

## Creating python package for PyBam using MiniConda

create a new project using python 3.12 or 3.11 with MiniConda/AnaConda. used MiniConda so all the installed package can be fully defined from scatch. Anaconda has prebuilt data science packge (tensorflow, numpy, etc). MiniConda is more streamlined.

    conda create --name sdbms-pybamm python=3.11

if project creation is success, it will produce following folder skeleton.

![postimage100](/assets/images/2025-05/condapybamm.jpg)
[Miniconda Project Skeleton](/assets/images/2025-05/condapybamm.jpg){: .center-image }

active the miniconda virtual environment

        conda activate <project_name>


## Install pre-requisite package

Apart from pybamm itself, other python library will be used

- Pybamm
- Numpy
- Jupyterlab
- SciPy
- Pandas

## Install jupyterlab

its better to use jupyterlab so that notebook can be used (.ipynb) executing data science project. Every procedure can be documented, listed and arranged properly. It gave a flexible working environment compared to normal python script.

    conda install -c conda-forge jupyterlab

ensure the jupyterlab installed at the conda environment.

    conda list --name <project_name> | grep jupyter

## Install Pybamm, Numpy and Skipy

below command is used to install Numpy, SciPy and pandas

    conda install -c conda-forge scipy numpy pandas

ensore those package installed 

    conda list --name <project_name> | grep scipy
    conda list --name <project_name> | grep numpy
    conda list --name <project_name> | grep pandas

## Install ipywidget for the plot

execute following command 

    conda install -c conda-forge ipywidgets

validate

    conda list --name <project_name> | grep ipywidgets

## Install plotly to enable the plot slider

execute following command 

    conda install -c conda-forge plotly

validate

    conda list --name <project_name> | grep ipywidgets

add to the cell

    !jupyter nbextension enable --py widgetsnbextension	

execute via terminal

    jupyter labextension install @jupyter-widgets/jupyterlab-manager

# Generate environment.py

execute below script to generate environment details (for future installation by different people)

    conda env export --from-history > environment.yml

# Full Code of Experiment 

Code is written using ipynb, all instruction, available model, input model param, model output are written on the code.

{% jupyter_notebook "/assets/notebook/battery.pybamm.ipynb" %}

## Github Repo

repository for those experinment can be found here:

    https://github.com/deganandapriyambada/battery-simulation-pybamm/blob/master/notebook/battery.simulation.ipynb

## Steps to replicate

Installation Method

    conda create --name <project_name> python=3.11
    conda env create -f environment.yml
    conda activate <project_name>