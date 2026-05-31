---
layout: posts
author: Degananda Ferdian
categories: spark
series-code: n/a
excerpt: Dataframe can be offloaded into different spark worker which can process huge amount of data. Spark master will act as the central resource manager to orchestrate the computation while spark worker is the job executors.
tags: spark-cluster
background: Regular pandas dataframe has limited scalability as it can only utilize single server resources. With spark cluster, the computation will be distributed on several servers.
objective: To execute remote spark command on spark cluster
deliverables: Article & Illustration
typora-root-url: ./../../../../
---

# Big Data Computation is Enabled by Spark Cluster Parallel Processing

Spark cluster enable data engineer and scientist to processs huge amount of data (big data) because the computation is distributed into several spark worker on different baremetal. Normal pandas library can has limited ceiling based on the available memory/ram and CPU of the machine limit the size of data (few gbs) that can be offloaded into the dataframe while spark cluster can handle up to petabyte data due to the distributed computing nature.

Pandas dataframe reside on the local memory of the machine. In other hand, spark dataframe will be disributed across cluster of machines enabling parallel processing with massive scalability that can handle petabytes data.

# Steps to execute remote spark jobs

Assuming the spark master and spark worker has been configured properly, below are the step by step to perform spark cluster remote execution from jupyter notebook within the same network.

## Starting Spark Cluster

use following comamnd start spark master

 /opt/spark/sbin/start-master.sh  --host 10.130.0.4  --port 7077  --webui-port 8080

**replace the host private ip** with the actual spark master machine ip then verify whether the spark master is successfully started by checking both the UI and java virtual machine processs (JPS) command

![postimage100](/assets/images/2026-05/sparkc1.jpg)
[Starting spark master which as overall spark resource manager](/assets/images/2026-05/sparkc1.jpg){: .center-image }

check via JPS

	jps

![postimage100](/assets/images/2026-05/sparkc2.jpg)
[Check spark master status via JPS](/assets/images/2026-05/sparkc2.jpg){: .center-image }

it should return master, then access the UI on port 8080 via browser. If the spark master is only accessible through private network and VPN is available, it can still be accessed via internet using ssh tunnel.

	 ssh -L 8080:<spark master privateip>:8080 root@<spark master public ip>

replace the spark master private and spark master public ip

if spark master up and running, the UI should be accessible.

![postimage100](/assets/images/2026-05/sparkc3.jpg)
[Spark webUI is accessible through port 8080](/assets/images/2026-05/sparkc3.jpg){: .center-image }

next step is to start spark worker, use following command:

	/opt/spark/sbin/start-worker.sh  spark://10.130.0.4:7077  -c 1  -m 1g

![postimage100](/assets/images/2026-05/sparkc4.jpg)
[Starting spark worker which repsonsible for the job execution](/assets/images/2026-05/sparkc4.jpg){: .center-image }

adjust the number of worker and the allocated memory. align it with the available CPU/memory of the server.

double check on the jps, it should show spark worker process spawned on the console.

![postimage100](/assets/images/2026-05/sparkc5.jpg)
[Check spark worker status on the jps](/assets/images/2026-05/sparkc5.jpg){: .center-image }

check the spark UI, the number of worker will should be increase to 1 (or depending on the number of worker parameters) and the worker id will be shown as well on the UI.

![postimage100](/assets/images/2026-05/sparkc6.jpg)
[Recently spawned spark worker details is shown on the spark webui](/assets/images/2026-05/sparkc6.jpg){: .center-image }

below are the command to stop spark worker or spark master

stop both spark master and worker
	
	/opt/spark/sbin/stop-all.sh

stop spark master only

	/opt/spark/sbin/stop-master.sh

stop spark worker only

	/opt/spark/sbin/stop-worker.sh

## Test Spark Computation on Spark Shell

login to spark shell by executing following command

	/opt/spark/bin/spark-shell --master spark://10.130.0.4:7077

replace 10.130.0.4 with the spark master private ip addresses then execute following spark command to generate ten random numbers

```python
spark.range(10).show()
```

it should return 1...10 number in sequences

![postimage100](/assets/images/2026-05/sparkc7.jpg)
[Spark range command is executed through spark shell](/assets/images/2026-05/sparkc7.jpg){: .center-image }

## Execute Remote Spark Cluster Computation from Jupyter Notebook

pre-requisite

install pyspark on the jupyter notebook vm. below is the command to install under podman

enter the podman bash

	podman exec -it --user root jupyter bash

install pyspark

	pip install pyspark

or target the pyspark version to lower version if the jupyter notebook ran on python 3.11

	pip install --no-cache-dir pyspark==3.5.1

then install JRE (java runtime environment)

	apt update
	apt install -y default-jre

validate if java is successfully installed with following command

	java --version

![postimage100](/assets/images/2026-05/sparkc9.jpg)
[Check is java is successfully installed by check the installed java version](/assets/images/2026-05/sparkc9.jpg){: .center-image }

current network/infrastrcuture setups:

1. jupyter notebook is located at 10.130.0.3
2. spark master and worker is located at 10.130.0.4 (same machines)

first step is to ensure, jupyter notebook virtual machine can access spark cluster by executing telnet command from jupyter notebook VM

	telnet 10.130.0.4 7077

![postimage100](/assets/images/2026-05/sparkc8.jpg)
[Telent connection is successfully made from client machine towards spark cluste server](/assets/images/2026-05/sparkc8.jpg){: .center-image }

next is to access the jupyter notebook, create a new notebook and paste following code

```python
from pyspark.sql import SparkSession

spark = SparkSession.builder \
    .appName("jupyter-test") \
    .master("spark://10.130.0.4:7077") \
    .config("spark.executor.memory", "512m") \
    .config("spark.executor.cores", "1") \
    .config("spark.driver.memory", "512m") \
    .config("spark.driver.host", "10.130.0.3") \
    .config("spark.driver.bindAddress", "0.0.0.0") \
    .getOrCreate()

spark.range(10).show()
```

remote spark session will be initialized and allocate only 512mb of the executor memory (spark-cluster) and 512mb of the driver memory (jupyter notebook VM).

run the cell, it should also return 1..10 in sequences.

![postimage100](/assets/images/2026-05/sparkc10.jpg)
[Spark query successfully ran on the spark cluster machine remotely!](/assets/images/2026-05/sparkc10.jpg){: .center-image }