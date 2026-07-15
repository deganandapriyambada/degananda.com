## Provision AWS Kinesis Data Stream

go to the aws console and navigate towards "kinesis data stream" menu. Create a new data stream called as "pi-stream" and choose "kinesis data stream" as the category.	

[image configure the kinesis data stream parameter accordingly]

below are the recommended configuration for kinesis data stream

1. Capacity mode: on demand - to ensure the message broker and message queue has auto scale capability based on the incoming throughput (becareful with the cost!)
2. maximum record size - align with the edge business logic for timeseries batching and aggregation as well as the stream manager configuration. its recommended to set the maximum payload size to 1mb.

then click on the create data stream. 

wait until the provisioning process of kinesis data stream is completed.

[image kinesis data stream is being provisioned]

provisoning status will be change to "active" once the provisioning is completed.

[image kinesis data stream is successfully provisioned]

## Allow greengrass to access kinesis data stream

Go to the IAM Role and find following role name: "GreengrassV2TokenExchangeRole" (the same role where the  policies to access S3 was created during the greengrass core devices creation/provisioning on the virtual machine) then attach following inline policies:

```json
{
  "Version":"2012-10-17",
  "Statement": [
    {
      "Effect": "Allow",
      "Action": [
        "kinesis:PutRecords"
      ],
      "Resource": [
        "arn:aws:kinesis:<region>:<account_number>:stream/<data_stream_name>",
      ]
    }
  ]
}
```

replace following parameter :

1. region: the region of kinesis data stream  note that iotcore, greengrass control plane and kinesis data stream must be located / provisioned on same region. If kinesis data stream is located at US and greengrass control plane/iotcore is located on ASIA, then the stream manager wont be able to send the data to the kinesis data stream
2. account_number: AWS account number
3. data_stream_name: kinesis data stream name (on this case is : pi-stream)

[image edit the policy using json format and paste those configuration]

then click next. enter the policy name (use meaningful name to make it traceable and trackable, eg: greengrass-for-kinesis)

if the policy creation is succeed, "greengrass-for-kinesis" will appear on the policy list

[image policies to allow greengrass write to aws kinesis is successfully created]

## Create Greengrass Custom Component to Write Stream and Export to Kinesis Data Stream

s