# Golang is Staticly Typed Programming Language

Golang or often to be called as "GO" is a high level programming language which was founded by google on 2009. Unlike javascript that doesnt force data type on its variable (except on typescript cases) Go syntax is staticly typed which gives better strong error prevention as all the variable must have data types just like java, .NET and rust.

For example, to create a variable called "age" which store the person's age, go must strictly defined the datatypes.

```javascript
var age int = 25
```

same rule of thumb is also applied on java because both java and go are wrtten in staticly typed runtime environment.

```javascript
int age = 21; 
```

Howver, age variable can be decalred without "explicite" data type definition

```javascript
var age = 21; 
```

javascript doenst require data type to be enforced on the variable which make it more prone to the runtime errors (eventhough it can be controlled and mitigated).

## Golang is a Compiled Language

Go is known for the performance benchmark (just below rust) because Go source code is compiled into native machine code and run directly on the CPU/Processor. In otherhand, interpreted programming langauge like python and javascript translate and execute their source code. Thats why go is faster than python and javascript as GO in running on machine code and javascript/python is slower because the code is not executed directly on the CPU. Both javascript and python code is executed through interpreter engine.

	Note: java is special case where the source code need to be both compiled (source code to .java file/byte code which is not native machine code through javac) and then interpretted on JVM

However, as compiled language, go also has a downside. Developer need to build and maintain different version of their GO applicaiton/program depending on the target platform (Operating system, CPU architecture). It lack of portability and adding effort overhead.

# Install Go on Mac Silicon and Spinup HTTP API

Below are the steps to install GO on Mac silicon 

## Download the Installer

The most easy way (and recommended) to install go on silicon mac is through .pkg installer because its the official method provided by google. Go to following links to download go installer for mac

	https://go.dev/doc/install

choose "mac" as the operating system on the below table's tab and then click on the download button. 

[image click on the download button]

The latest available GO version as of this article was published is version 1.26.4.

[image download arm64 version]

dont forget to choose correct apple silicon architecture (**ARM64**)

Note: GO be easily upgraded using exactly same installation method/steps

## Execute the installer & Validate

Double click the .pkg files and follow the wizard.

[image GO installation might take a while]

wait until the installation is completed. Then, open up a terminal and execute following command to check whether the installation is successful or not

	go version

it should return the recently installed go version which is v1.26.4 (darwin)

[image go is successfully installed as go version command returning the actual installed version.] 

## Create Hello World Program on HTTP API

create a new folder called as backend API

	mkdir backend-api

switch to the directory

	cd backend-api

initiate go project

	go mod init helloworld

gin is the most popular go framework to create http based API with over 85K+ stars on github. It insanely popular due to the complete documentation and battle-proven performance.
	
create a file called as main.go and import "gin" packages

```javascript
import "github.com/gin-gonic/gin"
```

download the gin package to the project


	go get github.com/gin-gonic/gin


wait until the installation of "gin" is completed.

[image downloading go to the project]

then create the /hello-world route with following codes and business logic

```javascript
package main

import (
  "log"
  "net/http"
  "github.com/gin-gonic/gin"
)

func main() {
  app := gin.Default()
  app.GET("/hello-world", func(res *gin.Context) {
    res.JSON(http.StatusOK, gin.H{
      "hello": "world",
    })
  })
  if err := app.Run(); err != nil {
    log.Fatalf("failed to run server: %v", err)
  }
}
```

run the project by executing following command

	go run .

it should open up port 8080 with http protocol

[image GIN api is up and running on port 8080]

go to browser and open up following links

	localhost:8080/hello-world

hello world should be rendered on the browser in the form of JSON responses.

[image hello world in JSON with go gin]