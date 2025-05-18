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

```python
{
 "cells": [
  {
   "cell_type": "markdown",
   "id": "7608a02e-71f2-41ec-be6c-11851d92dbc5",
   "metadata": {},
   "source": [
    "SDBMS Battery Simulation"
   ]
  },
  {
   "cell_type": "markdown",
   "id": "6896ee51-5d1d-4591-b81d-b7108abd2013",
   "metadata": {},
   "source": [
    "Initiating PyBamm"
   ]
  },
  {
   "cell_type": "code",
   "execution_count": 46,
   "id": "d0d299c4-6a39-4b84-9d6f-95350766d9cb",
   "metadata": {},
   "outputs": [],
   "source": [
    "import pybamm\n",
    "from pybamm import BaseModel\n",
    "from pprint import pprint"
   ]
  },
  {
   "cell_type": "markdown",
   "id": "c9b1404e-196d-4fd3-b89a-54dbb83e027c",
   "metadata": {},
   "source": [
    "Choose Battery Chemical & Model"
   ]
  },
  {
   "cell_type": "code",
   "execution_count": 47,
   "id": "9738e8fc-d29b-426d-bebd-1186d700dde2",
   "metadata": {},
   "outputs": [],
   "source": [
    "## [1] Doyle Fuller newman [2] Single Particle Model (SPM) [3] Single Particle Model with Electrolyte (SPMe)\n",
    "availableModel = [\"DFN\",\"SPM\", \"SPME\"]\n",
    "selectedModel = availableModel[0]\n",
    "model : BaseModel\n",
    "\n",
    "match selectedModel:\n",
    "    case \"DFN\":\n",
    "        model : BaseModel = pybamm.lithium_ion.DFN()\n",
    "    case \"SPM\":\n",
    "        model : BaseModel = pybamm.lithium_ion.SPM()\n",
    "    case \"SPME\":\n",
    "        model : BaseModel = pybamm.lithium_ion.SPMe()\n",
    "        \n"
   ]
  },
  {
   "cell_type": "markdown",
   "id": "8803a01a-25a4-44ed-813c-43270ccf5987",
   "metadata": {},
   "source": [
    "Print Available Model Input Parameter.\n",
    "Input Parameter = predefined config / parameter for physical, chemical and electrochemical properties of battery."
   ]
  },
  {
   "cell_type": "code",
   "execution_count": 48,
   "id": "adfc51cb-de9d-49b0-b36d-0c388586e767",
   "metadata": {},
   "outputs": [
    {
     "name": "stdout",
     "output_type": "stream",
     "text": [
      "['Ai2020',\n",
      " 'Chayambuka2022',\n",
      " 'Chen2020',\n",
      " 'Chen2020_composite',\n",
      " 'ECM_Example',\n",
      " 'Ecker2015',\n",
      " 'Ecker2015_graphite_halfcell',\n",
      " 'MSMR_Example',\n",
      " 'Marquis2019',\n",
      " 'Mohtat2020',\n",
      " 'NCA_Kim2011',\n",
      " 'OKane2022',\n",
      " 'OKane2022_graphite_SiOx_halfcell',\n",
      " 'ORegan2022',\n",
      " 'Prada2013',\n",
      " 'Ramadass2004',\n",
      " 'Sulzer2019',\n",
      " 'Xu2019']\n"
     ]
    }
   ],
   "source": [
    "modelInputParameters = list(pybamm.parameter_sets)\n",
    "pprint(modelInputParameters)"
   ]
  },
  {
   "cell_type": "markdown",
   "id": "244fd5b5-729c-4833-88ab-c67e4d16de91",
   "metadata": {},
   "source": [
    "Display Selected Model input parameter value"
   ]
  },
  {
   "cell_type": "code",
   "execution_count": 49,
   "id": "1eecbcaa-5506-416b-8583-7472c61691fd",
   "metadata": {
    "scrolled": true
   },
   "outputs": [
    {
     "name": "stdout",
     "output_type": "stream",
     "text": [
      "{'Ambient temperature [K]': 298.15,\n",
      " 'Boltzmann constant [J.K-1]': 1.380649e-23,\n",
      " 'Bulk solvent concentration [mol.m-3]': 2636.0,\n",
      " 'Cation transference number': 0.2594,\n",
      " 'Cell cooling surface area [m2]': 0.00531,\n",
      " 'Cell thermal expansion coefficient [m.K-1]': 1.1e-06,\n",
      " 'Cell volume [m3]': 2.42e-05,\n",
      " 'Contact resistance [Ohm]': 0,\n",
      " 'Current function [A]': 5.0,\n",
      " 'EC diffusivity [m2.s-1]': 2e-18,\n",
      " 'EC initial concentration in electrolyte [mol.m-3]': 4541.0,\n",
      " 'Electrode height [m]': 0.065,\n",
      " 'Electrode width [m]': 1.58,\n",
      " 'Electrolyte conductivity [S.m-1]': <function electrolyte_conductivity_Nyman2008 at 0x150d6b380>,\n",
      " 'Electrolyte diffusivity [m2.s-1]': <function electrolyte_diffusivity_Nyman2008 at 0x150d6b240>,\n",
      " 'Electron charge [C]': 1.602176634e-19,\n",
      " 'Faraday constant [C.mol-1]': 96485.33212331001,\n",
      " 'Ideal gas constant [J.K-1.mol-1]': 8.31446261815324,\n",
      " 'Initial concentration in electrolyte [mol.m-3]': 1000.0,\n",
      " 'Initial concentration in negative electrode [mol.m-3]': 29866.0,\n",
      " 'Initial concentration in positive electrode [mol.m-3]': 17038.0,\n",
      " 'Initial inner SEI thickness [m]': 2.5e-09,\n",
      " 'Initial outer SEI thickness [m]': 2.5e-09,\n",
      " 'Initial temperature [K]': 298.15,\n",
      " 'Inner SEI electron conductivity [S.m-1]': 8.95e-14,\n",
      " 'Inner SEI lithium interstitial diffusivity [m2.s-1]': 1e-20,\n",
      " 'Inner SEI open-circuit potential [V]': 0.1,\n",
      " 'Inner SEI partial molar volume [m3.mol-1]': 9.585e-05,\n",
      " 'Inner SEI reaction proportion': 0.5,\n",
      " 'Lithium interstitial reference concentration [mol.m-3]': 15.0,\n",
      " 'Lower voltage cut-off [V]': 2.5,\n",
      " 'Maximum concentration in negative electrode [mol.m-3]': 33133.0,\n",
      " 'Maximum concentration in positive electrode [mol.m-3]': 63104.0,\n",
      " 'Negative current collector conductivity [S.m-1]': 58411000.0,\n",
      " 'Negative current collector density [kg.m-3]': 8960.0,\n",
      " 'Negative current collector specific heat capacity [J.kg-1.K-1]': 385.0,\n",
      " 'Negative current collector thermal conductivity [W.m-1.K-1]': 401.0,\n",
      " 'Negative current collector thickness [m]': 1.2e-05,\n",
      " 'Negative electrode Bruggeman coefficient (electrode)': 0,\n",
      " 'Negative electrode Bruggeman coefficient (electrolyte)': 1.5,\n",
      " 'Negative electrode OCP [V]': <function graphite_LGM50_ocp_Chen2020 at 0x105c167a0>,\n",
      " 'Negative electrode OCP entropic change [V.K-1]': 0.0,\n",
      " 'Negative electrode active material volume fraction': 0.75,\n",
      " 'Negative electrode charge transfer coefficient': 0.5,\n",
      " 'Negative electrode conductivity [S.m-1]': 215.0,\n",
      " 'Negative electrode density [kg.m-3]': 1657.0,\n",
      " 'Negative electrode double-layer capacity [F.m-2]': 0.2,\n",
      " 'Negative electrode exchange-current density [A.m-2]': <function graphite_LGM50_electrolyte_exchange_current_density_Chen2020 at 0x105c15c60>,\n",
      " 'Negative electrode porosity': 0.25,\n",
      " 'Negative electrode reaction-driven LAM factor [m3.mol-1]': 0.0,\n",
      " 'Negative electrode specific heat capacity [J.kg-1.K-1]': 700.0,\n",
      " 'Negative electrode thermal conductivity [W.m-1.K-1]': 1.7,\n",
      " 'Negative electrode thickness [m]': 8.52e-05,\n",
      " 'Negative particle diffusivity [m2.s-1]': 3.3e-14,\n",
      " 'Negative particle radius [m]': 5.86e-06,\n",
      " 'Nominal cell capacity [A.h]': 5.0,\n",
      " 'Number of cells connected in series to make a battery': 1.0,\n",
      " 'Number of electrodes connected in parallel to make a cell': 1.0,\n",
      " 'Open-circuit voltage at 0% SOC [V]': 2.5,\n",
      " 'Open-circuit voltage at 100% SOC [V]': 4.2,\n",
      " 'Outer SEI open-circuit potential [V]': 0.8,\n",
      " 'Outer SEI partial molar volume [m3.mol-1]': 9.585e-05,\n",
      " 'Outer SEI solvent diffusivity [m2.s-1]': 2.5000000000000002e-22,\n",
      " 'Positive current collector conductivity [S.m-1]': 36914000.0,\n",
      " 'Positive current collector density [kg.m-3]': 2700.0,\n",
      " 'Positive current collector specific heat capacity [J.kg-1.K-1]': 897.0,\n",
      " 'Positive current collector thermal conductivity [W.m-1.K-1]': 237.0,\n",
      " 'Positive current collector thickness [m]': 1.6e-05,\n",
      " 'Positive electrode Bruggeman coefficient (electrode)': 0,\n",
      " 'Positive electrode Bruggeman coefficient (electrolyte)': 1.5,\n",
      " 'Positive electrode OCP [V]': <function nmc_LGM50_ocp_Chen2020 at 0x150ab5800>,\n",
      " 'Positive electrode OCP entropic change [V.K-1]': 0.0,\n",
      " 'Positive electrode active material volume fraction': 0.665,\n",
      " 'Positive electrode charge transfer coefficient': 0.5,\n",
      " 'Positive electrode conductivity [S.m-1]': 0.18,\n",
      " 'Positive electrode density [kg.m-3]': 3262.0,\n",
      " 'Positive electrode double-layer capacity [F.m-2]': 0.2,\n",
      " 'Positive electrode exchange-current density [A.m-2]': <function nmc_LGM50_electrolyte_exchange_current_density_Chen2020 at 0x150d6b100>,\n",
      " 'Positive electrode porosity': 0.335,\n",
      " 'Positive electrode reaction-driven LAM factor [m3.mol-1]': 0.0,\n",
      " 'Positive electrode specific heat capacity [J.kg-1.K-1]': 700.0,\n",
      " 'Positive electrode thermal conductivity [W.m-1.K-1]': 2.1,\n",
      " 'Positive electrode thickness [m]': 7.56e-05,\n",
      " 'Positive particle diffusivity [m2.s-1]': 4e-15,\n",
      " 'Positive particle radius [m]': 5.22e-06,\n",
      " 'Ratio of lithium moles to SEI moles': 2.0,\n",
      " 'Reference temperature [K]': 298.15,\n",
      " 'SEI growth activation energy [J.mol-1]': 0.0,\n",
      " 'SEI kinetic rate constant [m.s-1]': 1e-12,\n",
      " 'SEI open-circuit potential [V]': 0.4,\n",
      " 'SEI reaction exchange current density [A.m-2]': 1.5e-07,\n",
      " 'SEI resistivity [Ohm.m]': 200000.0,\n",
      " 'Separator Bruggeman coefficient (electrolyte)': 1.5,\n",
      " 'Separator density [kg.m-3]': 397.0,\n",
      " 'Separator porosity': 0.47,\n",
      " 'Separator specific heat capacity [J.kg-1.K-1]': 700.0,\n",
      " 'Separator thermal conductivity [W.m-1.K-1]': 0.16,\n",
      " 'Separator thickness [m]': 1.2e-05,\n",
      " 'Thermodynamic factor': 1.0,\n",
      " 'Total heat transfer coefficient [W.m-2.K-1]': 10.0,\n",
      " 'Upper voltage cut-off [V]': 4.2,\n",
      " 'citations': ['Chen2020']}\n"
     ]
    }
   ],
   "source": [
    "selectedInputParameter =  pybamm.ParameterValues(\"Chen2020\")\n",
    "## DFN => Chen2020, Ai2020. SPME = Marquis2019, SPM = Marquis2019\n",
    "pprint(selectedInputParameter)"
   ]
  },
  {
   "cell_type": "markdown",
   "id": "59f4eeaf-5496-4aeb-b245-a5615398113d",
   "metadata": {},
   "source": [
    "Print Available Model Output Parameter"
   ]
  },
  {
   "cell_type": "code",
   "execution_count": 50,
   "id": "0d365560-fbc3-4726-8e93-a6d688bcea0b",
   "metadata": {
    "scrolled": true
   },
   "outputs": [
    {
     "name": "stdout",
     "output_type": "stream",
     "text": [
      "['Time [s]',\n",
      " 'Time [min]',\n",
      " 'Time [h]',\n",
      " 'x [m]',\n",
      " 'x_n [m]',\n",
      " 'x_s [m]',\n",
      " 'x_p [m]',\n",
      " 'r_n [m]',\n",
      " 'r_p [m]',\n",
      " 'Current variable [A]',\n",
      " 'Total current density [A.m-2]',\n",
      " 'Current [A]',\n",
      " 'C-rate',\n",
      " 'Discharge capacity [A.h]',\n",
      " 'Throughput capacity [A.h]',\n",
      " 'Discharge energy [W.h]',\n",
      " 'Throughput energy [W.h]',\n",
      " 'Porosity',\n",
      " 'Negative electrode porosity',\n",
      " 'X-averaged negative electrode porosity',\n",
      " 'Separator porosity',\n",
      " 'X-averaged separator porosity',\n",
      " 'Positive electrode porosity',\n",
      " 'X-averaged positive electrode porosity',\n",
      " 'Porosity change',\n",
      " 'Negative electrode porosity change [s-1]',\n",
      " 'X-averaged negative electrode porosity change [s-1]',\n",
      " 'Separator porosity change [s-1]',\n",
      " 'X-averaged separator porosity change [s-1]',\n",
      " 'Positive electrode porosity change [s-1]',\n",
      " 'X-averaged positive electrode porosity change [s-1]',\n",
      " 'Negative electrode interface utilisation variable',\n",
      " 'X-averaged negative electrode interface utilisation variable',\n",
      " 'Negative electrode interface utilisation',\n",
      " 'X-averaged negative electrode interface utilisation',\n",
      " 'Positive electrode interface utilisation variable',\n",
      " 'X-averaged positive electrode interface utilisation variable',\n",
      " 'Positive electrode interface utilisation',\n",
      " 'X-averaged positive electrode interface utilisation',\n",
      " 'Negative particle crack length [m]',\n",
      " 'X-averaged negative particle crack length [m]',\n",
      " 'Negative particle cracking rate [m.s-1]',\n",
      " 'X-averaged negative particle cracking rate [m.s-1]',\n",
      " 'Positive particle crack length [m]',\n",
      " 'X-averaged positive particle crack length [m]',\n",
      " 'Positive particle cracking rate [m.s-1]',\n",
      " 'X-averaged positive particle cracking rate [m.s-1]',\n",
      " 'Negative electrode active material volume fraction',\n",
      " 'X-averaged negative electrode active material volume fraction',\n",
      " 'Negative electrode capacity [A.h]',\n",
      " 'Negative particle radius',\n",
      " 'Negative particle radius [m]',\n",
      " 'X-averaged negative particle radius [m]',\n",
      " 'Negative electrode surface area to volume ratio [m-1]',\n",
      " 'X-averaged negative electrode surface area to volume ratio [m-1]',\n",
      " 'Negative electrode active material volume fraction change [s-1]',\n",
      " 'X-averaged negative electrode active material volume fraction change [s-1]',\n",
      " 'Loss of lithium due to loss of active material in negative electrode [mol]',\n",
      " 'Positive electrode active material volume fraction',\n",
      " 'X-averaged positive electrode active material volume fraction',\n",
      " 'Positive electrode capacity [A.h]',\n",
      " 'Positive particle radius',\n",
      " 'Positive particle radius [m]',\n",
      " 'X-averaged positive particle radius [m]',\n",
      " 'Positive electrode surface area to volume ratio [m-1]',\n",
      " 'X-averaged positive electrode surface area to volume ratio [m-1]',\n",
      " 'Positive electrode active material volume fraction change [s-1]',\n",
      " 'X-averaged positive electrode active material volume fraction change [s-1]',\n",
      " 'Loss of lithium due to loss of active material in positive electrode [mol]',\n",
      " 'Separator pressure [Pa]',\n",
      " 'X-averaged separator pressure [Pa]',\n",
      " 'negative electrode transverse volume-averaged velocity [m.s-1]',\n",
      " 'X-averaged negative electrode transverse volume-averaged velocity [m.s-1]',\n",
      " 'separator transverse volume-averaged velocity [m.s-1]',\n",
      " 'X-averaged separator transverse volume-averaged velocity [m.s-1]',\n",
      " 'positive electrode transverse volume-averaged velocity [m.s-1]',\n",
      " 'X-averaged positive electrode transverse volume-averaged velocity [m.s-1]',\n",
      " 'Transverse volume-averaged velocity [m.s-1]',\n",
      " 'negative electrode transverse volume-averaged acceleration [m.s-2]',\n",
      " 'X-averaged negative electrode transverse volume-averaged acceleration '\n",
      " '[m.s-2]',\n",
      " 'separator transverse volume-averaged acceleration [m.s-2]',\n",
      " 'X-averaged separator transverse volume-averaged acceleration [m.s-2]',\n",
      " 'positive electrode transverse volume-averaged acceleration [m.s-2]',\n",
      " 'X-averaged positive electrode transverse volume-averaged acceleration '\n",
      " '[m.s-2]',\n",
      " 'Transverse volume-averaged acceleration [m.s-2]',\n",
      " 'Negative electrode volume-averaged velocity [m.s-1]',\n",
      " 'Negative electrode volume-averaged acceleration [m.s-2]',\n",
      " 'X-averaged negative electrode volume-averaged acceleration [m.s-2]',\n",
      " 'Negative electrode pressure [Pa]',\n",
      " 'X-averaged negative electrode pressure [Pa]',\n",
      " 'Positive electrode volume-averaged velocity [m.s-1]',\n",
      " 'Positive electrode volume-averaged acceleration [m.s-2]',\n",
      " 'X-averaged positive electrode volume-averaged acceleration [m.s-2]',\n",
      " 'Positive electrode pressure [Pa]',\n",
      " 'X-averaged positive electrode pressure [Pa]',\n",
      " 'Negative particle concentration [mol.m-3]',\n",
      " 'X-averaged negative particle concentration [mol.m-3]',\n",
      " 'R-averaged negative particle concentration [mol.m-3]',\n",
      " 'Average negative particle concentration [mol.m-3]',\n",
      " 'Negative particle surface concentration [mol.m-3]',\n",
      " 'X-averaged negative particle surface concentration [mol.m-3]',\n",
      " 'Minimum negative particle concentration [mol.m-3]',\n",
      " 'Maximum negative particle concentration [mol.m-3]',\n",
      " 'Minimum negative particle Minimum negative particle surface concentration '\n",
      " '[mol.m-3]',\n",
      " 'Maximum negative particle surface concentration [mol.m-3]',\n",
      " 'Negative particle concentration',\n",
      " 'X-averaged negative particle concentration',\n",
      " 'R-averaged negative particle concentration',\n",
      " 'Average negative particle concentration',\n",
      " 'Negative particle surface concentration',\n",
      " 'X-averaged negative particle surface concentration',\n",
      " 'Minimum negative particle concentration',\n",
      " 'Maximum negative particle concentration',\n",
      " 'Minimum negative particle surface concentration',\n",
      " 'Maximum negative particle surface concentration',\n",
      " 'Negative particle stoichiometry',\n",
      " 'X-averaged negative particle stoichiometry',\n",
      " 'R-averaged negative particle stoichiometry',\n",
      " 'Average negative particle stoichiometry',\n",
      " 'Negative particle surface stoichiometry',\n",
      " 'X-averaged negative particle surface stoichiometry',\n",
      " 'Minimum negative particle stoichiometry',\n",
      " 'Maximum negative particle stoichiometry',\n",
      " 'Minimum negative particle surface stoichiometry',\n",
      " 'Maximum negative particle surface stoichiometry',\n",
      " 'Negative electrode extent of lithiation',\n",
      " 'X-averaged negative electrode extent of lithiation',\n",
      " 'Positive particle concentration [mol.m-3]',\n",
      " 'X-averaged positive particle concentration [mol.m-3]',\n",
      " 'R-averaged positive particle concentration [mol.m-3]',\n",
      " 'Average positive particle concentration [mol.m-3]',\n",
      " 'Positive particle surface concentration [mol.m-3]',\n",
      " 'X-averaged positive particle surface concentration [mol.m-3]',\n",
      " 'Minimum positive particle concentration [mol.m-3]',\n",
      " 'Maximum positive particle concentration [mol.m-3]',\n",
      " 'Minimum positive particle Minimum positive particle surface concentration '\n",
      " '[mol.m-3]',\n",
      " 'Maximum positive particle surface concentration [mol.m-3]',\n",
      " 'Positive particle concentration',\n",
      " 'X-averaged positive particle concentration',\n",
      " 'R-averaged positive particle concentration',\n",
      " 'Average positive particle concentration',\n",
      " 'Positive particle surface concentration',\n",
      " 'X-averaged positive particle surface concentration',\n",
      " 'Minimum positive particle concentration',\n",
      " 'Maximum positive particle concentration',\n",
      " 'Minimum positive particle surface concentration',\n",
      " 'Maximum positive particle surface concentration',\n",
      " 'Positive particle stoichiometry',\n",
      " 'X-averaged positive particle stoichiometry',\n",
      " 'R-averaged positive particle stoichiometry',\n",
      " 'Average positive particle stoichiometry',\n",
      " 'Positive particle surface stoichiometry',\n",
      " 'X-averaged positive particle surface stoichiometry',\n",
      " 'Minimum positive particle stoichiometry',\n",
      " 'Maximum positive particle stoichiometry',\n",
      " 'Minimum positive particle surface stoichiometry',\n",
      " 'Maximum positive particle surface stoichiometry',\n",
      " 'Positive electrode extent of lithiation',\n",
      " 'X-averaged positive electrode extent of lithiation',\n",
      " 'Negative electrode potential [V]',\n",
      " 'X-averaged negative electrode potential [V]',\n",
      " 'Negative electrode ohmic losses [V]',\n",
      " 'X-averaged negative electrode ohmic losses [V]',\n",
      " 'Gradient of negative electrode potential [V.m-1]',\n",
      " 'Positive electrode potential [V]',\n",
      " 'X-averaged positive electrode potential [V]',\n",
      " 'Positive electrode ohmic losses [V]',\n",
      " 'X-averaged positive electrode ohmic losses [V]',\n",
      " 'Gradient of positive electrode potential [V.m-1]',\n",
      " 'Porosity times concentration [mol.m-3]',\n",
      " 'Negative electrode porosity times concentration [mol.m-3]',\n",
      " 'Separator porosity times concentration [mol.m-3]',\n",
      " 'Positive electrode porosity times concentration [mol.m-3]',\n",
      " 'Total lithium in electrolyte [mol]',\n",
      " 'Electrolyte potential [V]',\n",
      " 'X-averaged electrolyte potential [V]',\n",
      " 'X-averaged electrolyte overpotential [V]',\n",
      " 'Gradient of electrolyte potential [V.m-1]',\n",
      " 'Negative electrolyte potential [V]',\n",
      " 'X-averaged negative electrolyte potential [V]',\n",
      " 'Gradient of negative electrolyte potential [V.m-1]',\n",
      " 'Separator electrolyte potential [V]',\n",
      " 'X-averaged separator electrolyte potential [V]',\n",
      " 'Gradient of separator electrolyte potential [V.m-1]',\n",
      " 'Positive electrolyte potential [V]',\n",
      " 'X-averaged positive electrolyte potential [V]',\n",
      " 'Gradient of positive electrolyte potential [V.m-1]',\n",
      " 'Ambient temperature [K]',\n",
      " 'Volume-averaged ambient temperature [K]',\n",
      " 'Cell temperature [K]',\n",
      " 'Negative current collector temperature [K]',\n",
      " 'Positive current collector temperature [K]',\n",
      " 'X-averaged cell temperature [K]',\n",
      " 'Volume-averaged cell temperature [K]',\n",
      " 'Negative electrode temperature [K]',\n",
      " 'X-averaged negative electrode temperature [K]',\n",
      " 'Separator temperature [K]',\n",
      " 'X-averaged separator temperature [K]',\n",
      " 'Positive electrode temperature [K]',\n",
      " 'X-averaged positive electrode temperature [K]',\n",
      " 'Ambient temperature [C]',\n",
      " 'Volume-averaged ambient temperature [C]',\n",
      " 'Cell temperature [C]',\n",
      " 'Negative current collector temperature [C]',\n",
      " 'Positive current collector temperature [C]',\n",
      " 'X-averaged cell temperature [C]',\n",
      " 'Volume-averaged cell temperature [C]',\n",
      " 'Negative electrode temperature [C]',\n",
      " 'X-averaged negative electrode temperature [C]',\n",
      " 'Separator temperature [C]',\n",
      " 'X-averaged separator temperature [C]',\n",
      " 'Positive electrode temperature [C]',\n",
      " 'X-averaged positive electrode temperature [C]',\n",
      " 'Negative current collector potential [V]',\n",
      " 'Negative inner SEI thickness [m]',\n",
      " 'Negative outer SEI thickness [m]',\n",
      " 'X-averaged negative inner SEI thickness [m]',\n",
      " 'X-averaged negative outer SEI thickness [m]',\n",
      " 'Negative SEI [m]',\n",
      " 'Negative total SEI thickness [m]',\n",
      " 'X-averaged negative SEI thickness [m]',\n",
      " 'X-averaged negative total SEI thickness [m]',\n",
      " 'X-averaged negative electrode resistance [Ohm.m2]',\n",
      " 'Negative electrode inner SEI interfacial current density [A.m-2]',\n",
      " 'X-averaged negative electrode inner SEI interfacial current density [A.m-2]',\n",
      " 'Negative electrode outer SEI interfacial current density [A.m-2]',\n",
      " 'X-averaged negative electrode outer SEI interfacial current density [A.m-2]',\n",
      " 'Negative electrode SEI interfacial current density [A.m-2]',\n",
      " 'X-averaged negative electrode SEI interfacial current density [A.m-2]',\n",
      " 'Positive inner SEI thickness [m]',\n",
      " 'Positive outer SEI thickness [m]',\n",
      " 'X-averaged positive inner SEI thickness [m]',\n",
      " 'X-averaged positive outer SEI thickness [m]',\n",
      " 'Positive SEI [m]',\n",
      " 'Positive total SEI thickness [m]',\n",
      " 'X-averaged positive SEI thickness [m]',\n",
      " 'X-averaged positive total SEI thickness [m]',\n",
      " 'X-averaged positive electrode resistance [Ohm.m2]',\n",
      " 'Positive electrode inner SEI interfacial current density [A.m-2]',\n",
      " 'X-averaged positive electrode inner SEI interfacial current density [A.m-2]',\n",
      " 'Positive electrode outer SEI interfacial current density [A.m-2]',\n",
      " 'X-averaged positive electrode outer SEI interfacial current density [A.m-2]',\n",
      " 'Positive electrode SEI interfacial current density [A.m-2]',\n",
      " 'X-averaged positive electrode SEI interfacial current density [A.m-2]',\n",
      " 'Negative inner SEI on cracks thickness [m]',\n",
      " 'Negative outer SEI on cracks thickness [m]',\n",
      " 'X-averaged negative inner SEI on cracks thickness [m]',\n",
      " 'X-averaged negative outer SEI on cracks thickness [m]',\n",
      " 'Negative SEI on cracks [m]',\n",
      " 'Negative total SEI on cracks thickness [m]',\n",
      " 'X-averaged negative SEI on cracks thickness [m]',\n",
      " 'X-averaged negative total SEI on cracks thickness [m]',\n",
      " 'Negative electrode inner SEI on cracks interfacial current density [A.m-2]',\n",
      " 'X-averaged negative electrode inner SEI on cracks interfacial current '\n",
      " 'density [A.m-2]',\n",
      " 'Negative electrode outer SEI on cracks interfacial current density [A.m-2]',\n",
      " 'X-averaged negative electrode outer SEI on cracks interfacial current '\n",
      " 'density [A.m-2]',\n",
      " 'Negative electrode SEI on cracks interfacial current density [A.m-2]',\n",
      " 'X-averaged negative electrode SEI on cracks interfacial current density '\n",
      " '[A.m-2]',\n",
      " 'Positive inner SEI on cracks thickness [m]',\n",
      " 'Positive outer SEI on cracks thickness [m]',\n",
      " 'X-averaged positive inner SEI on cracks thickness [m]',\n",
      " 'X-averaged positive outer SEI on cracks thickness [m]',\n",
      " 'Positive SEI on cracks [m]',\n",
      " 'Positive total SEI on cracks thickness [m]',\n",
      " 'X-averaged positive SEI on cracks thickness [m]',\n",
      " 'X-averaged positive total SEI on cracks thickness [m]',\n",
      " 'Positive electrode inner SEI on cracks interfacial current density [A.m-2]',\n",
      " 'X-averaged positive electrode inner SEI on cracks interfacial current '\n",
      " 'density [A.m-2]',\n",
      " 'Positive electrode outer SEI on cracks interfacial current density [A.m-2]',\n",
      " 'X-averaged positive electrode outer SEI on cracks interfacial current '\n",
      " 'density [A.m-2]',\n",
      " 'Positive electrode SEI on cracks interfacial current density [A.m-2]',\n",
      " 'X-averaged positive electrode SEI on cracks interfacial current density '\n",
      " '[A.m-2]',\n",
      " 'Negative lithium plating concentration [mol.m-3]',\n",
      " 'X-averaged negative lithium plating concentration [mol.m-3]',\n",
      " 'Negative dead lithium concentration [mol.m-3]',\n",
      " 'X-averaged negative dead lithium concentration [mol.m-3]',\n",
      " 'Negative lithium plating thickness [m]',\n",
      " 'X-averaged negative  lithium plating thickness [m]',\n",
      " 'Negative dead lithium thickness [m]',\n",
      " 'X-averaged negative dead lithium thickness [m]',\n",
      " 'Loss of lithium to negative lithium plating [mol]',\n",
      " 'Loss of capacity to negative lithium plating [A.h]',\n",
      " 'Negative electrode lithium plating reaction overpotential [V]',\n",
      " 'X-averaged negative electrode lithium plating reaction overpotential [V]',\n",
      " 'Negative electrode lithium plating interfacial current density [A.m-2]',\n",
      " 'X-averaged negative electrode lithium plating interfacial current density '\n",
      " '[A.m-2]',\n",
      " 'Positive lithium plating concentration [mol.m-3]',\n",
      " 'X-averaged positive lithium plating concentration [mol.m-3]',\n",
      " 'Positive dead lithium concentration [mol.m-3]',\n",
      " 'X-averaged positive dead lithium concentration [mol.m-3]',\n",
      " 'Positive lithium plating thickness [m]',\n",
      " 'X-averaged positive  lithium plating thickness [m]',\n",
      " 'Positive dead lithium thickness [m]',\n",
      " 'X-averaged positive dead lithium thickness [m]',\n",
      " 'Loss of lithium to positive lithium plating [mol]',\n",
      " 'Loss of capacity to positive lithium plating [A.h]',\n",
      " 'Positive electrode lithium plating reaction overpotential [V]',\n",
      " 'X-averaged positive electrode lithium plating reaction overpotential [V]',\n",
      " 'Positive electrode lithium plating interfacial current density [A.m-2]',\n",
      " 'X-averaged positive electrode lithium plating interfacial current density '\n",
      " '[A.m-2]',\n",
      " 'Negative crack surface to volume ratio [m-1]',\n",
      " 'Negative electrode roughness ratio',\n",
      " 'X-averaged negative electrode roughness ratio',\n",
      " 'Positive crack surface to volume ratio [m-1]',\n",
      " 'Positive electrode roughness ratio',\n",
      " 'X-averaged positive electrode roughness ratio',\n",
      " 'Electrolyte transport efficiency',\n",
      " 'Negative electrolyte transport efficiency',\n",
      " 'X-averaged negative electrolyte transport efficiency',\n",
      " 'Separator electrolyte transport efficiency',\n",
      " 'X-averaged separator electrolyte transport efficiency',\n",
      " 'Positive electrolyte transport efficiency',\n",
      " 'X-averaged positive electrolyte transport efficiency',\n",
      " 'Electrode transport efficiency',\n",
      " 'Negative electrode transport efficiency',\n",
      " 'X-averaged negative electrode transport efficiency',\n",
      " 'Separator electrode transport efficiency',\n",
      " 'X-averaged separator electrode transport efficiency',\n",
      " 'Positive electrode transport efficiency',\n",
      " 'X-averaged positive electrode transport efficiency',\n",
      " 'Separator volume-averaged velocity [m.s-1]',\n",
      " 'Separator volume-averaged acceleration [m.s-2]',\n",
      " 'X-averaged separator volume-averaged acceleration [m.s-2]',\n",
      " 'Volume-averaged velocity [m.s-1]',\n",
      " 'Volume-averaged acceleration [m.s-1]',\n",
      " 'X-averaged volume-averaged acceleration [m.s-1]',\n",
      " 'Pressure [Pa]',\n",
      " 'Negative electrode stoichiometry',\n",
      " 'Negative electrode volume-averaged concentration',\n",
      " 'Negative electrode volume-averaged concentration [mol.m-3]',\n",
      " 'Total lithium in primary phase in negative electrode [mol]',\n",
      " 'Positive electrode stoichiometry',\n",
      " 'Positive electrode volume-averaged concentration',\n",
      " 'Positive electrode volume-averaged concentration [mol.m-3]',\n",
      " 'Total lithium in primary phase in positive electrode [mol]',\n",
      " 'Negative electrode effective conductivity',\n",
      " 'Negative electrode current density [A.m-2]',\n",
      " 'Positive electrode effective conductivity',\n",
      " 'Positive electrode current density [A.m-2]',\n",
      " 'Electrode current density [A.m-2]',\n",
      " 'Positive current collector potential [V]',\n",
      " 'Local voltage [V]',\n",
      " 'Voltage expression [V]',\n",
      " 'Terminal voltage [V]',\n",
      " 'Contact overpotential [V]',\n",
      " 'Voltage [V]',\n",
      " 'Electrolyte concentration concatenation [mol.m-3]',\n",
      " 'Negative electrolyte concentration [mol.m-3]',\n",
      " 'X-averaged negative electrolyte concentration [mol.m-3]',\n",
      " 'Separator electrolyte concentration [mol.m-3]',\n",
      " 'X-averaged separator electrolyte concentration [mol.m-3]',\n",
      " 'Positive electrolyte concentration [mol.m-3]',\n",
      " 'X-averaged positive electrolyte concentration [mol.m-3]',\n",
      " 'Negative electrolyte concentration [Molar]',\n",
      " 'X-averaged negative electrolyte concentration [Molar]',\n",
      " 'Separator electrolyte concentration [Molar]',\n",
      " 'X-averaged separator electrolyte concentration [Molar]',\n",
      " 'Positive electrolyte concentration [Molar]',\n",
      " 'X-averaged positive electrolyte concentration [Molar]',\n",
      " 'Electrolyte concentration [mol.m-3]',\n",
      " 'X-averaged electrolyte concentration [mol.m-3]',\n",
      " 'Electrolyte concentration [Molar]',\n",
      " 'X-averaged electrolyte concentration [Molar]',\n",
      " 'Electrolyte current density [A.m-2]',\n",
      " 'X-averaged concentration overpotential [V]',\n",
      " 'X-averaged electrolyte ohmic losses [V]',\n",
      " 'Negative electrode surface potential difference [V]',\n",
      " 'Negative electrode surface potential difference at separator interface [V]',\n",
      " 'X-averaged negative electrode surface potential difference [V]',\n",
      " 'Positive electrode surface potential difference [V]',\n",
      " 'Positive electrode surface potential difference at separator interface [V]',\n",
      " 'X-averaged positive electrode surface potential difference [V]',\n",
      " 'Ohmic heating [W.m-3]',\n",
      " 'X-averaged Ohmic heating [W.m-3]',\n",
      " 'Volume-averaged Ohmic heating [W.m-3]',\n",
      " 'Ohmic heating per unit electrode-pair area [W.m-2]',\n",
      " 'Ohmic heating [W]',\n",
      " 'Irreversible electrochemical heating [W.m-3]',\n",
      " 'X-averaged irreversible electrochemical heating [W.m-3]',\n",
      " 'Volume-averaged irreversible electrochemical heating [W.m-3]',\n",
      " 'Irreversible electrochemical heating per unit electrode-pair area [W.m-2]',\n",
      " 'Irreversible electrochemical heating [W]',\n",
      " 'Reversible heating [W.m-3]',\n",
      " 'X-averaged reversible heating [W.m-3]',\n",
      " 'Volume-averaged reversible heating [W.m-3]',\n",
      " 'Reversible heating per unit electrode-pair area [W.m-2]',\n",
      " 'Reversible heating [W]',\n",
      " 'Total heating [W.m-3]',\n",
      " 'X-averaged total heating [W.m-3]',\n",
      " 'Volume-averaged total heating [W.m-3]',\n",
      " 'Total heating per unit electrode-pair area [W.m-2]',\n",
      " 'Total heating [W]',\n",
      " 'Negative current collector Ohmic heating [W.m-3]',\n",
      " 'Positive current collector Ohmic heating [W.m-3]',\n",
      " 'Surface total cooling [W.m-3]',\n",
      " 'Surface total cooling [W]',\n",
      " 'Surface temperature [K]',\n",
      " 'Volume-averaged surface temperature [K]',\n",
      " 'Environment total cooling [W]',\n",
      " 'Current collector current density [A.m-2]',\n",
      " 'Negative inner SEI concentration [mol.m-3]',\n",
      " 'X-averaged negative inner SEI concentration [mol.m-3]',\n",
      " 'Negative outer SEI concentration [mol.m-3]',\n",
      " 'X-averaged negative outer SEI concentration [mol.m-3]',\n",
      " 'Negative SEI concentration [mol.m-3]',\n",
      " 'X-averaged negative SEI concentration [mol.m-3]',\n",
      " 'Loss of lithium to negative SEI [mol]',\n",
      " 'Loss of capacity to negative SEI [A.h]',\n",
      " 'Negative electrode SEI volumetric interfacial current density [A.m-3]',\n",
      " 'X-averaged negative electrode SEI volumetric interfacial current density '\n",
      " '[A.m-3]',\n",
      " 'Positive inner SEI concentration [mol.m-3]',\n",
      " 'X-averaged positive inner SEI concentration [mol.m-3]',\n",
      " 'Positive outer SEI concentration [mol.m-3]',\n",
      " 'X-averaged positive outer SEI concentration [mol.m-3]',\n",
      " 'Positive SEI concentration [mol.m-3]',\n",
      " 'X-averaged positive SEI concentration [mol.m-3]',\n",
      " 'Loss of lithium to positive SEI [mol]',\n",
      " 'Loss of capacity to positive SEI [A.h]',\n",
      " 'Positive electrode SEI volumetric interfacial current density [A.m-3]',\n",
      " 'X-averaged positive electrode SEI volumetric interfacial current density '\n",
      " '[A.m-3]',\n",
      " 'Negative inner SEI on cracks concentration [mol.m-3]',\n",
      " 'X-averaged negative inner SEI on cracks concentration [mol.m-3]',\n",
      " 'Negative outer SEI on cracks concentration [mol.m-3]',\n",
      " 'X-averaged negative outer SEI on cracks concentration [mol.m-3]',\n",
      " 'Negative SEI on cracks concentration [mol.m-3]',\n",
      " 'X-averaged negative SEI on cracks concentration [mol.m-3]',\n",
      " 'Loss of lithium to negative SEI on cracks [mol]',\n",
      " 'Loss of capacity to negative SEI on cracks [A.h]',\n",
      " 'Negative electrode SEI on cracks volumetric interfacial current density '\n",
      " '[A.m-3]',\n",
      " 'X-averaged negative electrode SEI on cracks volumetric interfacial current '\n",
      " 'density [A.m-3]',\n",
      " 'Positive inner SEI on cracks concentration [mol.m-3]',\n",
      " 'X-averaged positive inner SEI on cracks concentration [mol.m-3]',\n",
      " 'Positive outer SEI on cracks concentration [mol.m-3]',\n",
      " 'X-averaged positive outer SEI on cracks concentration [mol.m-3]',\n",
      " 'Positive SEI on cracks concentration [mol.m-3]',\n",
      " 'X-averaged positive SEI on cracks concentration [mol.m-3]',\n",
      " 'Loss of lithium to positive SEI on cracks [mol]',\n",
      " 'Loss of capacity to positive SEI on cracks [A.h]',\n",
      " 'Positive electrode SEI on cracks volumetric interfacial current density '\n",
      " '[A.m-3]',\n",
      " 'X-averaged positive electrode SEI on cracks volumetric interfacial current '\n",
      " 'density [A.m-3]',\n",
      " 'Negative electrode lithium plating volumetric interfacial current density '\n",
      " '[A.m-3]',\n",
      " 'X-averaged negative electrode lithium plating volumetric interfacial current '\n",
      " 'density [A.m-3]',\n",
      " 'Positive electrode lithium plating volumetric interfacial current density '\n",
      " '[A.m-3]',\n",
      " 'X-averaged positive electrode lithium plating volumetric interfacial current '\n",
      " 'density [A.m-3]',\n",
      " 'Negative electrode open-circuit potential [V]',\n",
      " 'X-averaged negative electrode open-circuit potential [V]',\n",
      " 'Negative electrode bulk open-circuit potential [V]',\n",
      " 'Negative particle concentration overpotential [V]',\n",
      " 'Negative electrode entropic change [V.K-1]',\n",
      " 'X-averaged negative electrode entropic change [V.K-1]',\n",
      " 'Positive electrode open-circuit potential [V]',\n",
      " 'X-averaged positive electrode open-circuit potential [V]',\n",
      " 'Positive electrode bulk open-circuit potential [V]',\n",
      " 'Positive particle concentration overpotential [V]',\n",
      " 'Positive electrode entropic change [V.K-1]',\n",
      " 'X-averaged positive electrode entropic change [V.K-1]',\n",
      " 'Negative electrode interfacial current density [A.m-2]',\n",
      " 'X-averaged negative electrode interfacial current density [A.m-2]',\n",
      " 'X-averaged negative electrode total interfacial current density [A.m-2]',\n",
      " 'X-averaged negative electrode total volumetric interfacial current density '\n",
      " '[A.m-3]',\n",
      " 'Negative electrode exchange current density [A.m-2]',\n",
      " 'X-averaged negative electrode exchange current density [A.m-2]',\n",
      " 'Negative electrode reaction overpotential [V]',\n",
      " 'X-averaged negative electrode reaction overpotential [V]',\n",
      " 'Negative electrode volumetric interfacial current density [A.m-3]',\n",
      " 'X-averaged negative electrode volumetric interfacial current density [A.m-3]',\n",
      " 'Negative electrode SEI film overpotential [V]',\n",
      " 'X-averaged negative electrode SEI film overpotential [V]',\n",
      " 'Positive electrode interfacial current density [A.m-2]',\n",
      " 'X-averaged positive electrode interfacial current density [A.m-2]',\n",
      " 'X-averaged positive electrode total interfacial current density [A.m-2]',\n",
      " 'X-averaged positive electrode total volumetric interfacial current density '\n",
      " '[A.m-3]',\n",
      " 'Positive electrode exchange current density [A.m-2]',\n",
      " 'X-averaged positive electrode exchange current density [A.m-2]',\n",
      " 'Positive electrode reaction overpotential [V]',\n",
      " 'X-averaged positive electrode reaction overpotential [V]',\n",
      " 'Positive electrode volumetric interfacial current density [A.m-3]',\n",
      " 'X-averaged positive electrode volumetric interfacial current density [A.m-3]',\n",
      " 'Positive electrode SEI film overpotential [V]',\n",
      " 'X-averaged positive electrode SEI film overpotential [V]',\n",
      " 'Negative particle rhs [mol.m-3.s-1]',\n",
      " 'Negative particle bc [mol.m-4]',\n",
      " 'Negative particle effective diffusivity [m2.s-1]',\n",
      " 'X-averaged negative particle effective diffusivity [m2.s-1]',\n",
      " 'Volume-averaged negative particle effective diffusivity [m2.s-1]',\n",
      " 'Negative particle flux [mol.m-2.s-1]',\n",
      " 'Positive particle rhs [mol.m-3.s-1]',\n",
      " 'Positive particle bc [mol.m-4]',\n",
      " 'Positive particle effective diffusivity [m2.s-1]',\n",
      " 'X-averaged positive particle effective diffusivity [m2.s-1]',\n",
      " 'Volume-averaged positive particle effective diffusivity [m2.s-1]',\n",
      " 'Positive particle flux [mol.m-2.s-1]',\n",
      " 'Electrolyte flux [mol.m-2.s-1]',\n",
      " 'Electrolyte diffusion flux [mol.m-2.s-1]',\n",
      " 'Electrolyte migration flux [mol.m-2.s-1]',\n",
      " 'Electrolyte convection flux [mol.m-2.s-1]',\n",
      " 'Sum of negative electrode electrolyte reaction source terms [A.m-3]',\n",
      " 'Sum of x-averaged negative electrode electrolyte reaction source terms '\n",
      " '[A.m-3]',\n",
      " 'Sum of negative electrode volumetric interfacial current densities [A.m-3]',\n",
      " 'Sum of x-averaged negative electrode volumetric interfacial current '\n",
      " 'densities [A.m-3]',\n",
      " 'Sum of positive electrode electrolyte reaction source terms [A.m-3]',\n",
      " 'Sum of x-averaged positive electrode electrolyte reaction source terms '\n",
      " '[A.m-3]',\n",
      " 'Sum of positive electrode volumetric interfacial current densities [A.m-3]',\n",
      " 'Sum of x-averaged positive electrode volumetric interfacial current '\n",
      " 'densities [A.m-3]',\n",
      " 'Interfacial current density [A.m-2]',\n",
      " 'Exchange current density [A.m-2]',\n",
      " 'Sum of volumetric interfacial current densities [A.m-3]',\n",
      " 'Sum of electrolyte reaction source terms [A.m-3]',\n",
      " 'Surface open-circuit voltage [V]',\n",
      " 'Bulk open-circuit voltage [V]',\n",
      " 'Particle concentration overpotential [V]',\n",
      " 'X-averaged reaction overpotential [V]',\n",
      " 'X-averaged SEI film overpotential [V]',\n",
      " 'X-averaged solid phase ohmic losses [V]',\n",
      " 'Battery open-circuit voltage [V]',\n",
      " 'Battery negative electrode bulk open-circuit potential [V]',\n",
      " 'Battery positive electrode bulk open-circuit potential [V]',\n",
      " 'Battery particle concentration overpotential [V]',\n",
      " 'Battery negative particle concentration overpotential [V]',\n",
      " 'Battery positive particle concentration overpotential [V]',\n",
      " 'X-averaged battery reaction overpotential [V]',\n",
      " 'X-averaged battery negative reaction overpotential [V]',\n",
      " 'X-averaged battery positive reaction overpotential [V]',\n",
      " 'X-averaged battery solid phase ohmic losses [V]',\n",
      " 'X-averaged battery negative solid phase ohmic losses [V]',\n",
      " 'X-averaged battery positive solid phase ohmic losses [V]',\n",
      " 'X-averaged battery electrolyte ohmic losses [V]',\n",
      " 'X-averaged battery concentration overpotential [V]',\n",
      " 'Battery voltage [V]',\n",
      " 'Local ECM resistance [Ohm]',\n",
      " 'Terminal power [W]',\n",
      " 'Power [W]',\n",
      " 'Resistance [Ohm]',\n",
      " 'Total lithium in negative electrode [mol]',\n",
      " 'LAM_ne [%]',\n",
      " 'Loss of active material in negative electrode [%]',\n",
      " 'Total lithium in positive electrode [mol]',\n",
      " 'LAM_pe [%]',\n",
      " 'Loss of active material in positive electrode [%]',\n",
      " 'LLI [%]',\n",
      " 'Loss of lithium inventory [%]',\n",
      " 'Loss of lithium inventory, including electrolyte [%]',\n",
      " 'Total lithium [mol]',\n",
      " 'Total lithium in particles [mol]',\n",
      " 'Total lithium capacity [A.h]',\n",
      " 'Total lithium capacity in particles [A.h]',\n",
      " 'Total lithium lost [mol]',\n",
      " 'Total lithium lost from particles [mol]',\n",
      " 'Total lithium lost from electrolyte [mol]',\n",
      " 'Total lithium lost to side reactions [mol]',\n",
      " 'Total capacity lost to side reactions [A.h]']\n"
     ]
    }
   ],
   "source": [
    "availableOutputModelVariable = model.variable_names()\n",
    "pprint(availableOutputModelVariable)"
   ]
  },
  {
   "cell_type": "markdown",
   "id": "d756e75f-39f0-4d58-a42b-9be469c4f38f",
   "metadata": {},
   "source": [
    "Available Instructions"
   ]
  },
  {
   "cell_type": "markdown",
   "id": "0df6294b-298a-4f03-b352-14c3489b4238",
   "metadata": {},
   "source": [
    "- \"Discharge at 1C for 0.5 hours\",\n",
    "- \"Discharge at C/20 for 0.5 hours\",\n",
    "- \"Charge at 0.5 C for 45 minutes\",\n",
    "- \"Discharge at 1 A for 90 seconds\",\n",
    "- \"Charge at 200mA for 45 minutes\",\n",
    "- \"Discharge at 1 W for 0.5 hours\",\n",
    "- \"Charge at 200 mW for 45 minutes\",\n",
    "- \"Rest for 10 minutes\",\n",
    "- \"Hold at 1 V for 20 seconds\",\n",
    "- \"Charge at 1 C until 4.1V\",\n",
    "- \"Hold at 4.1 V until 50 mA\",\n",
    "- #\"Hold at 3V until C/50\","
   ]
  },
  {
   "cell_type": "markdown",
   "id": "0f01ff53-7b63-4231-8965-034627b3c078",
   "metadata": {},
   "source": [
    "Run Simulation"
   ]
  },
  {
   "cell_type": "code",
   "execution_count": 63,
   "id": "ad24e34f-756e-4e74-9dbe-ea9bfb817a8c",
   "metadata": {},
   "outputs": [
    {
     "name": "stderr",
     "output_type": "stream",
     "text": [
      "2025-05-18 22:18:10.598 - [WARNING] simulation.solve(556): Ignoring t_eval as solution times are specified by the experiment\n"
     ]
    },
    {
     "data": {
      "text/plain": [
       "<pybamm.solvers.solution.Solution at 0x318343e50>"
      ]
     },
     "execution_count": 63,
     "metadata": {},
     "output_type": "execute_result"
    }
   ],
   "source": [
    "experiment = pybamm.Experiment(\n",
    "    [\n",
    "        (\n",
    "            \"Discharge at C/10 for 10 hours or until 3.3 V\",\n",
    "            \"Rest for 1 hour\",\n",
    "            \"Charge at 1 A until 4.1 V\",\n",
    "            \"Hold at 4.1 V until 50 mA\",\n",
    "            \"Rest for 1 hour\",\n",
    "        )\n",
    "    ]\n",
    ")\n",
    "sim = pybamm.Simulation(model, experiment=experiment, parameter_values=selectedInputParameter)\n",
    "startDuration = 0\n",
    "endDuration = 3600 #in second\n",
    "sim.solve([startDuration, endDuration])"
   ]
  },
  {
   "cell_type": "markdown",
   "id": "8e83492d-a632-418d-82fb-2a69441c31b0",
   "metadata": {},
   "source": [
    "Visualize"
   ]
  },
  {
   "cell_type": "code",
   "execution_count": 64,
   "id": "75de280f-2232-4c8b-a004-6ac7d757c239",
   "metadata": {},
   "outputs": [
    {
     "data": {},
     "metadata": {},
     "output_type": "display_data"
    },
    {
     "data": {
      "application/vnd.jupyter.widget-view+json": {
       "model_id": "9a662dbf66494a2d8b3d451dd598ea13",
       "version_major": 2,
       "version_minor": 0
      },
      "text/plain": [
       "interactive(children=(FloatSlider(value=0.0, description='t', max=17.04705372017133, step=0.17047053720171332)…"
      ]
     },
     "metadata": {},
     "output_type": "display_data"
    },
    {
     "data": {
      "text/plain": [
       "<pybamm.plotting.quick_plot.QuickPlot at 0x311a98a10>"
      ]
     },
     "execution_count": 64,
     "metadata": {},
     "output_type": "execute_result"
    }
   ],
   "source": [
    "pybamm.dynamic_plot(sim)"
   ]
  },
  {
   "cell_type": "markdown",
   "id": "b54e93a2-9f5b-49bb-9d26-99c00d8d31f4",
   "metadata": {},
   "source": [
    "Export Plot to HTML (for slider feature)"
   ]
  },
  {
   "cell_type": "markdown",
   "id": "d21526a2-904b-4752-ab75-e95bcc2d917e",
   "metadata": {},
   "source": [
    "Custom Plot with Selected Model Result Parameter"
   ]
  },
  {
   "cell_type": "code",
   "execution_count": 65,
   "id": "11cab9fd-ae37-4ae6-a975-e7c3d10eec2f",
   "metadata": {},
   "outputs": [
    {
     "data": {},
     "metadata": {},
     "output_type": "display_data"
    },
    {
     "data": {
      "application/vnd.jupyter.widget-view+json": {
       "model_id": "ebebab4126db4b1dab28d062dd4f2622",
       "version_major": 2,
       "version_minor": 0
      },
      "text/plain": [
       "interactive(children=(FloatSlider(value=0.0, description='t', max=17.04705372017133, step=0.17047053720171332)…"
      ]
     },
     "metadata": {},
     "output_type": "display_data"
    },
    {
     "data": {
      "text/plain": [
       "<pybamm.plotting.quick_plot.QuickPlot at 0x3183bd4d0>"
      ]
     },
     "execution_count": 65,
     "metadata": {},
     "output_type": "execute_result"
    }
   ],
   "source": [
    "output_variables = [\"Time [min]\", \"Electrolyte concentration [mol.m-3]\", \"Voltage [V]\"]\n",
    "sim.plot(output_variables=output_variables)"
   ]
  },
  {
   "cell_type": "markdown",
   "id": "edf166dc-ae8e-4521-8312-7f18d979e9ed",
   "metadata": {},
   "source": [
    "Plot voltage component"
   ]
  },
  {
   "cell_type": "code",
   "execution_count": 66,
   "id": "dbafd42d-3b61-4239-b307-27d6a41c1fc3",
   "metadata": {},
   "outputs": [],
    {
     "data": {
      "text/plain": [
       "(<Figure size 800x400 with 1 Axes>, <Axes: xlabel='Time [h]'>)"
      ]
     },
     "execution_count": 66,
     "metadata": {},
     "output_type": "execute_result"
    }
   ],
   "source": [
    "sim.plot_voltage_components()\n"
   ]
  },
  {
   "cell_type": "code",
   "execution_count": 55,
   "id": "52cec372-9d25-4791-97c8-bc023ffbff9d",
   "metadata": {},
   "outputs": [
    {
     "name": "stdout",
     "output_type": "stream",
     "text": [
      "'end'\n"
     ]
    }
   ],
   "source": [
    "pprint(\"end\")"
   ]
  },
  {
   "cell_type": "code",
   "execution_count": null,
   "id": "18468080-432f-47c3-8b13-c953b77e0242",
   "metadata": {},
   "outputs": [],
   "source": []
  }
 ],
 "metadata": {
  "kernelspec": {
   "display_name": "Python 3 (ipykernel)",
   "language": "python",
   "name": "python3"
  },
  "language_info": {
   "codemirror_mode": {
    "name": "ipython",
    "version": 3
   },
   "file_extension": ".py",
   "mimetype": "text/x-python",
   "name": "python",
   "nbconvert_exporter": "python",
   "pygments_lexer": "ipython3",
   "version": "3.11.8"
  }
 },
 "nbformat": 4,
 "nbformat_minor": 5
}
```

## Github Repo

repository for those experinment can be found here:

    https://github.com/deganandapriyambada/battery-simulation-pybamm/blob/master/notebook/battery.simulation.ipynb?short_path=15315ba

## Steps to replicate

Installation Method

    conda create --name <project_name> python=3.11
    conda env create -f environment.yml
    conda activate <project_name>