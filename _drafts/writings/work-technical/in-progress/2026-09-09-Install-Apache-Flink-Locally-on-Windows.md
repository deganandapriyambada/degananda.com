# Preparing Flink Cluster

Install cygwin

	https://cygwin.com/install.html


# Preparing Application Development for Apache Flink

download  JDK (java development kit), its recommended to use the openJDK to avoid any commercial issues.

vertify the java installation on windows

java --version

download maven from following links

	https://maven.apache.org/download.cgi

extract and copy the path, for example:

	C:\Users\degananda.ferdian\Documents\#Pipenpoof\digital-spine\maven\apache-maven-3.9.16

## Add maven to environment variables.

go to windows search and type following text

	"edit environment variable"

choose environment variable and add new variable as follow

- variable name MAVEN_HOME
- variable value: "C:\Users\degananda.ferdian\Documents\#Pipenpoof\digital-spine\maven\apache-maven-3.9.16"

adjust "path" variable still within the  	