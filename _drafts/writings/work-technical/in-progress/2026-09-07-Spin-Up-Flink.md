navigate to the /flink

choose streaming applications as we going to use proper CI/CD tools to deploy the flink and reduce the dependencies with AWS. Despite the studio notebooks (which based on apache zeppelin) is easier to use, we dont have control towards the CI/CD. Furthermore, the studio notebook can't use the latest flink (version 2.3).

input following parameter

| Parameter                       | Value                                                        |
| ------------------------------- | ------------------------------------------------------------ |
| Method                          | Create from scratch - otherwise choose "blueprint"<br /> if you already have cloud formation script ready in places. |
| Apache flink version            | use the latest version. as of this article was written, the latest version is 2.3 |
| Application Configuration       | IoT-streaming- analytics                                     |
| Access to application resources | create automatically                                         |
| Automatic System Rollback       | Yes                                                          |
| Encryption                      | Use AWS owned key                                            |
| Template                        | Development                                                  |

via docker

ssh to the target vm

install docker

