Spark cluster enable data engineer and scientist to processs huge amount of data (big data) because the computation is distributed into several spark worker on different baremetal.

start spark master

 /opt/spark/sbin/start-master.sh  --host 10.130.0.4  --port 7077  --webui-port 8080

start spark worker

 /opt/spark/sbin/start-worker.sh  spark://10.130.0.4:7077  -c 1  -m 1g

test on spark shell

 /opt/spark/bin/spark-shell --master spark://10.130.0.4:7077

telnet from jupyter notebook VM

telnet 10.130.0.4 7077



code: from pyspark.sql import SparkSession

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



jps 



root@pendar-spark:/opt/spark/logs# jps

3908138 Jps

3907582 Worker

3907504 Master

3908085 CoarseGrainedExecutorBackend





root@pendar-spark:/opt/spark/logs# ps -ax | grep spark

3907504 pts/0  Sl   0:20 /usr/lib/jvm/java-17-openjdk-amd64/bin/java -cp /opt/**spark**/conf/:/opt/**spark**/jars/* -Xmx1g org.apache.**spark**.deploy.master.Master --host 10.130.0.4 --port 7077 --webui-port 8080 --host 10.130.0.4 --port 7077 --webui-port 8080

3907582 pts/0  Sl   0:14 /usr/lib/jvm/java-17-openjdk-amd64/bin/java -cp /opt/**spark**/conf/:/opt/**spark**/jars/* -Xmx1g org.apache.**spark**.deploy.worker.Worker --webui-port 8081 **spark**://10.130.0.4:7077 -c 1 -m 1g

3908085 pts/0  Sl   0:17 /usr/lib/jvm/java-17-openjdk-amd64/bin/java -cp /opt/**spark**/conf/:/opt/**spark**/jars/* -Xmx512M -D**spark**.driver.port=42029 -Djava.net.preferIPv6Addresses=false -XX:+IgnoreUnrecognizedVMOptions --add-opens=java.base/java.lang=ALL-UNNAMED --add-opens=java.base/java.lang.invoke=ALL-UNNAMED --add-opens=java.base/java.lang.reflect=ALL-UNNAMED --add-opens=java.base/java.io=ALL-UNNAMED --add-opens=java.base/java.net=ALL-UNNAMED --add-opens=java.base/java.nio=ALL-UNNAMED --add-opens=java.base/java.util=ALL-UNNAMED --add-opens=java.base/java.util.concurrent=ALL-UNNAMED --add-opens=java.base/java.util.concurrent.atomic=ALL-UNNAMED --add-opens=java.base/jdk.internal.ref=ALL-UNNAMED --add-opens=java.base/sun.nio.ch=ALL-UNNAMED --add-opens=java.base/sun.nio.cs=ALL-UNNAMED --add-opens=java.base/sun.security.action=ALL-UNNAMED --add-opens=java.base/sun.util.calendar=ALL-UNNAMED --add-opens=java.security.jgss/sun.security.krb5=ALL-UNNAMED -Djdk.reflect.useDirectMethodHandle=false org.apache.**spark**.executor.CoarseGrainedExecutorBackend --driver-url **spark**://CoarseGrainedScheduler@10.130.0.3:42029 --executor-id 0 --hostname 10.130.0.4 --cores 1 --app-id app-20260506151459-0001 --worker-url **spark**://Worker@10.130.0.4:34393 --resourceProfileId 0

3908158 pts/0  S+   0:00 grep --color=auto **spark**

stop all

/opt/spark/sbin/stop-worker.sh

/opt/spark/sbin/stop-master.sh

```
/opt/spark/sbin/stop-all.sh

root@pendar-spark:/opt/spark/logs# jps
3908369 Jps
```