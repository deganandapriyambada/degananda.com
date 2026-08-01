# Apache Jmeter as Testing Tools

Apache jmeter is open source software which ran on top of JVM (java virtual machine) that used to perform various testing scenario ranging from functional test and non functional testing including load test, stress test and soak test. Jmeter has built in functionality to generate traffic through thread sampler and automatically capture the performance matrix. for example:

1. success rate (% error, % success)
2. latency (in ms or seconds)
3. throughput / TPS (transaction per second) / EPS (event per second)
4. detailed response matrix (status code, response body, etc)

Tester can assert (validate) those performacne matrix by jmeter using various approaches including JSON assertion, JSR223 assert (for complex validation using groovy script), XPath assertion (for XML) and so on. It provide complete tools to design test scenario, **execute the test** and **create the report automatically.** in representable HTML format.

Jmeter **can generate millions of traffic per second** for performance testing and its thanks to the distributed testing mechanism through master-worker architecture. Master jmeter node will coordinate and distribute the testing task to several jmeter worker.

&mdash; Hence, jmeter still become one of popular load test tools in current modern software engineering landscape despite the rising of new load test tools such as load runner and k6.

## Protocol Support by Jmeter and How its Beneficial for Greengrass Edge Testing

Apache jmeter is written using pure java (one of the oldest programming languages) which has tons of stable libraries. Due to that reasons, jmeter has wide range of protocol support. 

Below is the OOTB (**out of the box, native jmeter**) list of supported protocol by **apache jmeter as the client** and the use cases for greengrass load testing (or functional testing is also applicable due to the assertion framework of jmeter) purposes.

| No   | Supported Protocol | Greengrass Testing Use Cases |
| ---- | ------------------ | ---------------------------- |
| built-in    | HTTP               |                              |
| built-in    | TCP                |                              |

and here are the non-native protocol which can be enabled by thrid party plugins and or custom scripts

| No   | Supported Protocol | Greengrass Testing Use Cases |
| ---- | ------------------ | ---------------------------- |
| plugin    | MQTT               |                              |
| plugin    | UDP                |                              |
| plugin    | OPC-UA                |                              |
| plugin    | Modbus RTU                |                              |
| plugin    | Modbus Serial                |                              |


note: a custom java library can be created and attached to expand the protocol list.

## Environmental Preparation for Apache Jmeter CLI

Jmeter comes with two modes (dekstop and CLI/non-GUI). The same executable jar can be used for those mode. JRE(java run time environment) is requried to execute the jar/jmeter. Use following command to install java on **ubuntu server 24.04**

update apt package repository

	sudo apt update

there are several available JDK (java development kit) options, open-jdk is recommended as its an open source java JDK and can be used for commercial purposes.

	sudo apt install openjdk-21-jdk -y

validate if java is successfully installed by checking the version on cli

	java --version

it should return version 21.

[image java has been installed.]

download latest stable apache jmeter (the stable version: 5.6.3 as of this article was published)

	wget https://dlcdn.apache.org/jmeter/binaries/apache-jmeter-5.6.3.zip

extract

	unzip apache-jmeter-5.6.3.zip

create the symlink

	ln -s /root/jmeter/apache-jmeter-5.6.3/bin/jmeter /usr/local/bin/jmeter

replace these path (/root/jmeter/apache-jmeter-5.6.3/bin/jmeter) will actual jmeter bin location

## Create the test script (JMX)

The test purpose is to **check maximum TPS(transaction per second) for single greengrass VM** with following setup:

1. greengrass ran on top of virtual machine (baremetal no container or docker)
2. provisioned component : nucleus, stream manager & IPC
3. exposed HTTP endpoint which will send the data to local stream manager and AWS kinesis data stream
4. jmeter will **call greengrass HTTP endpoint locally**

given above setup, jmeter will be hosted on different virtual machine but in same virtual network/VPC (virtual private connection) because it will act as the edge gateway during the actual implementation where the connection from L2/L3 to edge is done locally.

VM specs

| Parameter    | Jmeter VM | Greengrass VM |
| ------------ | --------- | ------------- |
| vCPU         | 2         | 1             |
| Memory (RAM) | 4         | 2             |

Below are the JMX flow

	thread group -> timer (ms) -> http sampler (-> http header manager) -> listener (view result tree & aggregator for reporting purposes)

[image jmeter script sequences for testing greengrass performance using HTTP protocol]

## Test Execution

Download the jmx script. On this case github is used. Clone the repository using following command

	git clone <.git-url>

Ensure the greengrass VM is reachable by performing telnet to the exposed http port through their privatre ip.

	telnet 10.130.0.5 4003

note: greengrass is hosted on following private ip: 10.130.0.5 and the http port is exposed at port 4003

[image telnet to greengrass VM is success]

Ensure the endpoint is working by performing curl test.

```json
curl --location 'http://10.130.0.5:4003/pi-data' \
--header 'Content-Type: application/json' \
--data '{
    "tag":"temperature",
    "value":32.5
}'
```

can also include the latency to check if its local connection which usually has super low latency < 1ms

```json
curl --location 'http://10.130.0.5:4003/pi-data' \
  --header 'Content-Type: application/json' \
  --data '{
    "tag":"temperature",
    "value":32.5
  }' \
  --write-out '\nLatency: %{time_total}s (%{time_total}000 ms)\n'
```

[image curl is succeed. the message is successfully sent to greengrass local stream manager]

now execute the jmx file using following command

	jmeter -n -t gg-http-performance-test.jmx -l results.jtl

below are the usual test duration

- load test: 1 hour with target of 99.5% success rate and < 100 ms latency (on average)
- stress test: 8 hour with target of 99.5% success rate and < 100 ms latency (on average)
- soak test 24 hour with target of 99.5% success rate and < 100 ms latency (on average)

generate the html report

	jmeter -g results.jtl -o html-report	

zip the html report folder

	zip -r report.zip html-report

use following command to download the report into local computer

	scp -r root@<ip>:~/perf-test/greengrass-minimal/test/report.zip