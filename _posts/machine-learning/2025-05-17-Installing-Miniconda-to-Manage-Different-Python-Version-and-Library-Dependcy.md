---
layout: posts
author: Degananda Ferdian
categories: python
series-code: HSD001
excerpt: Designing Milestoneku Data Model using ERD based on must have feature for Minimum viable product (MVP).
tags: python package-management conda pip ml
topics: be-engineering
subtitle: Hello world subtitle of this post
ptype: Review
background: Apart from the API Services boilerplate, Programmer need data model which usually represented on the entity relationship diagram (ERD)
objective: Step by step to craft ERD (Entity relation Ship) for Milestoneku based on pre defined business requirement or user stories.
deliverables: Article, Illustration, ERD
---

# Conda The Python Dependency Management.

Conda is one of popular python package management which also an open sources project. equivalent dependency management like conda is PIP (Python install package). Anaconda and miniconda is conda with steroid which has additional feature to manage the virtual environment and python version.

    There are two different library that based on conda (Anaconda and MiniConda)

1. Anaconda - A superset of conda that also include pre-installed data science package (Numpy, SkLearn, etc). Suitable for a person that mostly work with data science stuff.
2. Miniconda - A superset of that that doesnt include pre-installed data science package. Hence, the developer will spefically manuall the required library per environment or project.

## Advantages of Using Conda compared with PIP

PIP (Python install package) will build the package before install. Meanwhile conda will pre compile first the package. It put conda in an advantages due to faster installation and lesser conflict (due to the pre compiled package/library depedencies).


## PIP is more popular than Conda

<script type="text/javascript" src="https://ssl.gstatic.com/trends_nrtr/4031_RC01/embed_loader.js"></script> <script type="text/javascript"> trends.embed.renderExploreWidget("TIMESERIES", {"comparisonItem":[{"keyword":"pip python","geo":"ID","time":"today 12-m"},{"keyword":"conda python","geo":"ID","time":"today 12-m"}],"category":0,"property":""}, {"exploreQuery":"geo=ID&q=pip%20python,conda%20python&hl=en&date=today 12-m,today 12-m","guestPath":"https://trends.google.com:443/trends/embed/"}); </script>

Caveat: PIP also has an advantages compared to conda because most of the python package that avaialble for public are still available on PIP. Not all has a ported version to conda.


# Managing Different Python Version and Its Depedencies

Usually to manage different python environment with different python version is done via hybrid model (manual interventian and a help from python virtual environment)/

## Managing Depedencies The Old Way (Before Conda)

Lets say there are 2 project with different python version
- Project A : Python 3.12.x (Because require SciPy package that can only run with python 3.12/3.11)
- Project B: Python 3.13.x

The usual solution would be

1.Creating multiple python on the PATH

    python312 to run python 3.12.x binary
    python313 to run python 3.13.x binary

2.Creating virtual environment for each project

    python312 -m venv projecta
    python313 -m vnev projectb

Now imagine the hustle to manage dozen or even hundreds of python version. It would be a headache. Thats where the <b>conda will play a big part to handle the management</b>.

## Managing Depedencies After Conda

Conda will streamline the python package management per python version per virtual environment with relatively simple syntax.

    conda create --name projecta python=3.12
    conda create --name projecta python=3.13

All the library, binary that require to run the 3.12 or 3.13 will be installed by conda on the background. mangaing dozens of project across different python version would be really easy.

# Install MiniConda

![postimage100](/assets/images/2025-05/conda.jpg)
[Conda Installation Script](/assets/images/2025-05/conda.jpg){: .center-image }

Installing miniConda is quite straight forward. Just run the installer script and done.

## windows

    curl https://repo.anaconda.com/miniconda/Miniconda3-latest-Windows-x86_64.exe --output .\Downloads\Miniconda3-latest-Windows-x86_64.exe

## Mac Silicon (m series)

    curl -O https://repo.anaconda.com/miniconda/Miniconda3-latest-MacOSX-arm64.sh

## Mac Intel

    curl -O https://repo.anaconda.com/miniconda/Miniconda3-latest-MacOSX-x86_64.sh

## Linux

    wget https://repo.anaconda.com/miniconda/Miniconda3-latest-Linux-x86_64.sh

# Conda Installation Validation

Once the conda sh script has been downloaded, make the installer as executeable

    chmod +x Miniconda3-latest-MacOSX-arm64.sh

run the shell script (sh)

    ./Miniconda3-latest-MacOSX-arm64.sh

wait until the installation Completed

## Validate 

![postimage100](/assets/images/2025-05/condaverify.jpg)
[Verifying conda installation](/assets/images/2025-05/condaverify.jpg){: .center-image }

Check the conda version on terminal

    conda --version

if those command returning the conda version then installed has been completed and success