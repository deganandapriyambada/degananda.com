**Broker 1**
 subnet 10.196.157.96/27

**Broker 2**
subnet 10.196.157.128/27

| Parameter       | Value                                                      |
| --------------- | ---------------------------------------------------------- |
| Cluster Name    | rsds-dev-apse3-iot-broker-kafka                            |
| Cluster Type    | Provisioned as high byte doesnt support IAM authentication |
| Broker          | Standard Broker                                            |
| Broker Size     | kafka.m7g.large                                            |
| Number of Zone  | 2 (Require two subnet)                                     |
| Broker per Zone | 1                                                          |
| Kafka Version   | 3.9                                                        |
| Storage         | 25 gb                                                      |
| Storage Mode    | EBS                                                        |
| First Zone      | Private A                                                  |
| Second Zone     | Private B                                                  |

