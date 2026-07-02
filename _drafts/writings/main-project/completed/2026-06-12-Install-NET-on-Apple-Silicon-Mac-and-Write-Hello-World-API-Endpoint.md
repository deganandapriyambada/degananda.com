# Cross Platform Software Engineering with .NET

.NET was known as exclusive framework made by microsoft to develop software on windows. It mainly used to create windows based desktop application as well as web services. The programming language used by .NET is C# Ever since 2016, .NET is no longer exclusive for windows operating systems. Nowdays, non windows operating system **including MacOS and linux can run .NET framework** regardless the processor architecture (x86, x64 or ARM based)

Eventhough C# programming language's name inherit the "C" character its much closer to java compared with C++ or C in the context of runtime characteristics because as both java and C# run inside virtual machine.  Java run inside their JVM while .net is executed on top of CLR (common language runtime). Moreover, in terms of compilation, java and C# are done in JIT(just in time) manner where the compiler convert the source code into machine code at runtime level.

As high level programming language, .NET has built in garbade collector which resulting on the developer agility as they dont have to write the code to freeup unused memory manually. Built in garbage collector also prevent memory leak risk making low entry barrier to code C# especially for junior devs.

# Install .NET software development framework on Mac Silicon

It is important to understand the difference betwen SDK and runtime while working on .NET environment. **Runtime is the execution engine** where the machine code is executed while **SDK** is the short name of software development kit for **development purposes** inlcuding the compilation and build from the source code into machine code.

&mdash; As of this article published, the latest stable .NET version which also has long term support (LTS) is .NET version 10. It is recommended to always use LTS version instead of the standard one.

Below are the steps to .NET including the prequisites libraries or program

## Which .NET packages need to be downloaded?

Use following table mapping to decide which .NET package to be downloaded

| No   | Package         | Persona/Usage                                 |
| ---- | --------------- | --------------------------------------------- |
| 1    | SDK             | Developer - to develop .NET based application |
| 2    | Runtime         | to run .NET applications                      |
| 3    | ASP.NET runtime | to run .NET based web application             |
| 4    | Desktop runtime | to run .NET based desktop apps                |

note: .NET SDK already is also include all the available runtime. Hence, no need to download runtime separately.

Go to following links and download .NET 19 LTS SDK

	https://dotnet.microsoft.com/en-us/download/dotnet/10.0

choose the appropriate **installer** (depending on the target operating system)

[image donwload]

once the installer(format: .pkg) is downloaded, click on the installer 

[image pkg]

follow the wizard by clicking "continue" or every prompt.

[image wizard success]

## Validating the .NET installation status

If the .NET installation is success, "dotnet" command should be able to be executed via terminal by executing following command

	dotnet --version

version 10 should be shown on the console screen as the installed SDK is version 10.

Apart from checking the "donet" command, its also recommended to check the installed runtime. Execute following command to see which runtime is installed.

	dotnet --list-runtimes

all runtime including ASP.NET Core runtime, NET runtime and .NET desktop runtime should be installed as the installation is done through SDK (software development kit).

[image version and runtime list]

## Create Hello World API

ASP.NET core API will be used as it contain web api to build web services. Create .NET webapi project using following command

	dotnet new webapi -n hello-world-api

it will take sometime until the .net webapi project is created

[image create .net]

go to the directory

	cd hello-world-api

go to the program.cs 

remove all unnecesarry line and retain only following code


```javascript
var builder = WebApplication.CreateBuilder(args);
builder.Services.AddOpenApi();

var app = builder.Build();

app.MapOpenApi();

app.Run();
```

those code will spin-up HTTP based API.

add /hello-world endpoint as well as the responses.

```javascript
app.MapGet("/hello-world", () =>
{
    return Results.Json(new { Hello = "World" });
});
app.Run();
```

run the code

use following command to compile and run the code

	dotnet run

open browser and go to following links

	locahost:5116/hello-world

wait until the compilation is done and the http server is up

[image server up]

it should return  hello world in JSON objects as shown below

[image show hello world]