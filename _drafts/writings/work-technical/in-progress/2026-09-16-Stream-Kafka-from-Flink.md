# Preparation

login to the aws cli using SSO

	aws configure sso

enter the start session name, url and region. leave the region as blank.

Follow the steps until aws cli give the identity caller parameter as following

```json
	To use this profile, specify the profile name using --profile, as shown:

aws sts get-caller-identity --profile [profile-name]
```
## Get Kafka Connection Details

get the kafka's ARN (amazon resource name)

	arn:aws:kafka:ap-southeast-3:[id]:cluster/[ broker-name]/xxx-xxx-xxx-xx-xxxx-3

get the connection details using following command

	aws kafka get-bootstrap-brokers --cluster-arn arn:aws:kafka:ap-southeast-3:XXXXX:cluster/[broker-name]/xxxx-xxx-XXXX-XXX-XXXX-3 --region ap-southeast-3 --profile [profile-name]

it will return two bootstrap broker string (plain and TLS):

```json
{
    "BootstrapBrokerString": "broker.ap-southeast-3.amazonaws.com:9092,broker.kafka.ap-southeast-3.amazonaws.com:9092",
    "BootstrapBrokerStringTls": "broker.ap-southeast-3.amazonaws.com:9094,broker.kafka.ap-southeast-3.amazonaws.com:9094"
}
```

test connection to kafka (if on windows)

	Test-NetConnection -ComputerName broker.ap-southeast-3.amazonaws.com:9092 -Port 9092

