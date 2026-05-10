# Collaborative IDE with Jupyter Notebook and Spark Cluster

Jupyter notebook is known for collaborative IDE (integrated development environment) for data engineering and data scientist. On big scale project, the common infrastrcuture setup is to host and deploy the centralized jupyter notebook/lab on the server and have different server for the remote spark engine(spark clusters). All developer will need to use browser to access notebook with following roles

1. jupyter notebook responsible for data visualization (if needed)
2. remote spark is fully utilized for the ETL (extract, transform and load)

Hence, the resource consumption on jupyter notebook/lab must be minimal. All the heavy lifting will be done on the spark cluster.

## The Problem With Centralized and Shared Jupyter Notebook

Each developer might have their own task and objectives. Eventhough spark cluster is available for the ETL, it cant prevent the developer to make mistakes by running the ETL on the jupyter notebook (incident) because all the computational source code is written and controlled on the jupyter notebook.

Uncontrolled resource consumption on the jupyter notebook will affect the collaboration itself. Someone could rain all the VM resources and causing other developer not able perform their task as the VM is out of memory/CPU

## The Resolution: Isolated Jupyter Notebook per Developer

Jupyter notebook is basically a python based program. It can be **containerized** with specific allocated resources. Each team could be assigned to specific jupyter notebook instances/container. If the developer somehow make mistake by running the ETL without using spark cluster and drain all the computing resources, it will only affecting that **specific container** for their team.

# Installing Jupyter Notebook using Podman

Below are the step by step to containerize jupyter notebook using docker and podman.

note: 384 mb of memory (RAM) will be allocated to the jupyter notebook container

resource consumption (before installing jupyter notebook on container)

Install podman on the server. The command might be vary depending on the server operating system. Ubuntu is used on current setup.

	sudo apt update
	sudo apt install -y podman

once the installation is complete, execute following command to verify whether podman is successfully installed or not

	podman --version

it should return the version of installed podman on the sytem

create a directory that will hold the container and all the notebook.

	/root/projectmakaryo/notebook

create new jupyter notebook container with 384mb of ram (kindly adjust the command if needed)

```json
podman run -d \
  --name jupyter \
  -p 8888:8888 \
  --memory="384m" \
  --memory-swap="384m" \
  -v /root/projectmakaryo/notebook \
  docker.io/jupyter/minimal-notebook:latest \
  start-notebook.sh
```

check the container status

  	podman ps | grep jupyter

it should return the container PID and port usage.

then execute following command to get the token

	podman exec -it jupyter jupyter server list

check actual usage

	podman stats jupyter

now go to browser and access the server ip with port 8888, the jupyter UI should be up and running properly.
  	