Once we receive the AWS account on the IAM identity center, ensure the registered account can access the AWS access portal using following URL

	https://d-XXX.awsapps.com/start/    

Ensure the assigned AWS account already visible and accessible

[image aws account is available]

Choose the target AWS account ID and check the permissions granted on our IAM account by checking directly though the role details. Go to roles -> and search for the assigned role.

In case the getRoleDetails permission is not granted, we can use AWS CLI to check the role permissions.

install aws CLI (on windows)

	irm https://awscli.amazonaws.com/v2/install.ps1 | iex

restart the powershell (close and re-open the powershell)  and validate if AWS cli is successfully installed

	aws --version

it should return the version number of aws cli that installed on the local machine.

login with AWS CLI using following command

	aws configure sso

input following details

| Parameter               | Value                                   |
| ----------------------- | --------------------------------------- |
| SSO Session name        | <input the session name>                |
| SSO Start Url           | https://d-c8672cc433.awsapps.com/start/ |
| SSO registration scopes | Leave it as blank                       |
| SSO region              | say jakarta: ap-southeast-3             |

once logged in add following details

| Parameter                 | Value                       |
| ------------------------- | --------------------------- |
| Default client region     | None                        |
| CLI default output format | JSON                        |
| profile name              | leave it as default         |
| SSO region                | say jakarta: ap-southeast-3 |

save the caller identity, for example

```json
To use this profile, specify the profile name using --profile, as shown:

aws sts get-caller-identity --profile App-Developer-723681698485
```

get region

```
aws configure get region --profile pertamina-dev
```

test list down all available ec2 resources

```
aws ec2 describe-instances --profile App-Developer-723681698485 --region ap-southeast-3
```
