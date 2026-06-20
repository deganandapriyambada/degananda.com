# What is jupyter notebook

Jupyter notebook is web-based interactive development environment (IDE) to write source code for various programming languages. However, jupyter-notebook is mainly **paired with python for data science** due to the unique characteristics of jupyter notebook itself.

Unlike other IDE like VSC (visual studio code) or eclipse where the sources code is written in single file, jupyter notebook allow data scientist to execute the code row by row. They use "cells" instead of row as the terminology. It allow the data scientist to create a steps by steps science analysis naturally like when they did it on paper.

# Steps to Install Jupyter Notebook on Apple Silicon Mac

There are two approach to create python projects

1. python virtual environment - generally not recommended due to the inability of having different python version on each virtual environment.
2. conda - recommended as it can manage multiple python version. data science project tend to use old python version like 3.12 which are obosolete for createing HTTP API based web services on typical software engineering project.

Hence, following article will use conda as the python project management which responsible for environment/runtime segregation between projects as well as managing the package dependencies.

## Environment Prepraration

