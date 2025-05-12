---
layout: posts
author: Degananda Ferdian
categories: ML
series-code: HSD001
excerpt: Create an API to expose battery performance grading machine learnig model using FastAPI. The API will be able to classify battery specs grade.
tags: ML Azure-ML ML-Model-API
topics: ML
subtitle: Hello world subtitle of this post
ptype: Issue
background: Once the model is generated, the model should be able to be exported to a model file. so that API can consume the model and receiving user input.
objective: create API to consume the model.
deliverables: Article, Source Code,  Ilustration
---

# Article Pre-Requisite

- 1.[use case description for battery performance]({{ site.baseurl }}{% link _posts/machine-learning/2025-05-11-Hello-World-on-Machine-Learning-Code-with-Azure-ML-for-Battery-Supplier-Recommendation-Engine.md %})
- 2.[create battery perfromance grading ML model]({{ site.baseurl }}{% link _posts/machine-learning/2025-05-11-Predict-Battery-Performance-and-Grading-using-Machine-learning.md%})
- 3.[expose the API]({{ site.baseurl }}{% link _posts/machine-learning/2025-05-12-Exposing-Machine-Learning-Trained-Model-to-an-API.md%})

# Objectives

To deploy machine learning code from local to Azure Machine Learning Workpaces.

# Install Azure ML

Execute following command to install azure ml sdk to the python environment

    pip install azure-ai-ml

# Create requirement.txt

list down all the package / library that used on the project.

    pip freeze > requirements.txt


## Train.py

```python
#Pandas
import pandas as pd
from pandas import DataFrame

#SkLearn
from sklearn.preprocessing import StandardScaler
from sklearn.model_selection import train_test_split
from sklearn.ensemble import RandomForestClassifier
from sklearn.metrics import classification_report, confusion_matrix
from sklearn.datasets import load_iris
from sklearn.metrics import accuracy_score

#Model Generator
import joblib

# mlflow
import mlflow
import mlflow.sklearn
from mlflow.models.signature import infer_signature


# Load csv dataset to data frame
batteryGradingDataSet = './dataset/battery_classification_dataset_100.csv'
batterGradingDataFrame  : DataFrame = pd.read_csv(batteryGradingDataSet)  

# Cleansing & Transform
batterGradingDataFrame[['min_temp', 'max_temp']] =  batterGradingDataFrame['operating_temperature'].str.extract(r'(-?\d+)\s*to\s*(-?\d+)').astype(float)
batterGradingDataFrame.drop(columns='operating_temperature', inplace=True)

# List down feature column
labelIndex = "performance_grade"
featureColumn : list[str] = []
for col in batterGradingDataFrame.columns:
    if col != "id" and col != labelIndex:
        featureColumn.append(col)
        
x = batterGradingDataFrame[featureColumn]
x.astype("float64")
y = batterGradingDataFrame[labelIndex]

print(batterGradingDataFrame.head())
print(featureColumn)

# Apply Standard Scaler

scaler = StandardScaler()
x_scaled = scaler.fit_transform(x)

# Test Splitting & Random Seed
test_size = 0.2
random_seed = 42

# Split the data
x_train, x_test, y_train, y_test = train_test_split(
    x_scaled,       # Your input features (after scaling)
    y,              # Your target/label values
    test_size=test_size,         # 20% test, 80% train
    random_state=random_seed,    # Ensures reproducibility
    stratify=y                   # Keep class distribution balanced in both sets
)

#Train model with classification model (random forest)
# Integrate training process with ML flow.

with mlflow.start_run() as run:
    run_id = run.info.run_id
    mlflow.set_experiment("Battery Grading")
    model = RandomForestClassifier(random_state=random_seed)
    model.fit(x_train, y_train)

    #Evaluate model (get the accuracy)
    y_pred = model.predict(x_test)      
    accuracy = accuracy_score(y_test, y_pred)
    print(classification_report(y_test, y_pred))
    mlflow.log_param("random_seed", random_seed)
    mlflow.log_metric("accuracy", accuracy)

    #Export the model for further use without training
    joblib.dump(model, './model/battery_performance_model.joblib')
    signature = infer_signature(x)

    # Log the model along with the signature and input example
    mlflow.sklearn.log_model(
        sk_model=model, 
        artifact_path=f"battery_performance_model_{run_id}",
        signature=signature, 
        input_example=x
    )
```

## Project Structure

below is the current code structure

- dataset
    - battery_classification_dataset_100.csv
- model
    - battery_performance_model.joblib
- requirements.txt
- train.py
- app.py

## Create deployment script to Azure ML Studio

on the root directory of project, create a file named as azure_ml_jobs.py

```python
from azure.identity import DefaultAzureCredential
from azure.ai.ml import MLClient
from azure.ai.ml.entities import Environment, Command, CommandComponent

# 1. Connect to Azure ML Workspace
ml_client = MLClient(
    DefaultAzureCredential(),
    subscription_id="<subscription_id>",       
    resource_group_name="<resource_group_name>",     
    workspace_name="<workspace_name>>"            
)


env = Environment(
    name="battery-env",
    description="Environment for battery grading ML model",
    conda_file="requirements.txt", 
    image="mcr.microsoft.com/azureml/sklearn-1.0-ubuntu20.04-py38-cpu:latest",  # A prebuilt Azure ML image
)


job = CommandComponent(
    code="./",                      # Path to folder containing train.py
    command="python train.py",      # Command to run
    environment=env,                # Reference to the environment
    compute="<compute_engine_on_azure_ml_studio>",          # Must match a compute target in your Azure ML workspace
    experiment_name="battery-grading-exp",
    display_name="battery-training-job"
)

job = Command(component=job)

returned_job = ml_client.jobs.create_or_update(job)
ml_client.jobs.stream(returned_job.name)


print("Submitted run ID:", returned_job.name)

```

and replace each variable with the target azure ML workspaces/subscriptions id etc.

# Login to Azure via VSC

Install azure CLI

On Mac

    brew update && brew install azure-cli

On Windows

    https://aka.ms/installazurecliwindows
    
execute following command on the terminal

    az login

once logged in, validate the login status

    az account show

![postimage100](/assets/images/2025-05/azlogin.jpg)
[if account details is showing meaning login status is success.](/assets/images/2025-05/azlogin.jpg){: .center-image }

# Submit

deploy the job by executing azure_ml_jobs.py

    python3 azure_ml_jobs.py