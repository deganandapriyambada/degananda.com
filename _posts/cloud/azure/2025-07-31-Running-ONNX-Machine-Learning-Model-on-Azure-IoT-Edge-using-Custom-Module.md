---
layout: posts
author: Degananda Ferdian
categories: cloud
series-code: AZIOT001
excerpt: ONNX is one of popular ML model format and inference engine that can support various of ML Framework. It is widely used by industry, especially on Microsoft Azure Ecosystem. ONNX Support both CPU and GPU inference.
topics: azure iot iiot edge agenticai
ptype: News
background: Nowdays there are various machine learning framework/library such as pytorch, tensorflow, scikit-learn, etc. Running and performing inference using specific framework will be a challenge as there are various ML framework. ONNX is an open format ML mode and inferece engine that support various ML Framework.
objective: To install and deploy machine learning model from PyTorch framework using ONNX using NodeJS (CPU)
deliverables: Article
---

# Preparation

Unlike tfjs-node (tensorflow) which has huge node_module package(>= 300mb+), ONNX is much lighter ( less than 50 mb).

The consenques of having lighter model is framework support. Not all tensorflow or pytorch capability (eg: complex model layer) can be inferenced and supported by ONNX ML Open format.

    Hence, depend on the complexity of the ML Model, ONNX might be able to run it or not.

## Install ONNX Runtime

ONNX Runtime module require nodejs version (16+). Its recommended to use NVM (node version manager) to easily switch between one nodejs version to another.

check nodejs version

    node --version

or check active nodejs on NVM

    nvm list

install ONNX runtime

    npm install onnxruntime-node


