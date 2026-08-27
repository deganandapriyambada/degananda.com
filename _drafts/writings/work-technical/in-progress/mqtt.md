**update package**

    sudo dpkg --configure -a
    sudo apt --fix-broken install -y
    sudo apt update 
    sudo apt upgrade -y

**configure and install  docker pre-requisites**

    sudo apt install -y ca-certificates curl
    sudo install -m 0755 -d /etc/apt/keyrings
    
    sudo curl -fsSL https://download.docker.com/linux/ubuntu/gpg \
      -o /etc/apt/keyrings/docker.asc
    
    sudo chmod a+r /etc/apt/keyrings/docker.asc

**add docker repository**

    sudo tee /etc/apt/sources.list.d/docker.sources <<EOF
    Types: deb
    URIs: https://download.docker.com/linux/ubuntu
    Suites: $(. /etc/os-release && echo "${UBUNTU_CODENAME:-$VERSION_CODENAME}")
    Components: stable
    Architectures: $(dpkg --print-architecture)
    Signed-By: /etc/apt/keyrings/docker.asc
    EOF

**refresh repository**

    sudo apt update

**install docker engine**

    sudo apt install -y docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin

**validate**

    docker --version

**run the container (inside the container files)**

    sudo docker compose up -d --build

**check if remote sensing edge broker container  is running by executing following command**

    sudo docker ps

remote-sensing-edge-broker should be running at listen at port 49664

**check if mosquitto is running**

    sudo docker logs -f remote-sensing-edge-broker

it should has following logs

1787797597: mosquitto version 2.1.2 running

**test publish message**

recommended tools: mqtt-explorer

test connection to the mqtt broker 

| Parameter | Value |
|---|---|
| Protocol | MQTT |
| Host (use hostname -I) | <VM IP> |
| Port |  49664 |

**additional command**

to stop remote-sending-broker-broker

    sudo docker stop remote-sensing-edge-broker

check docker container list

	sudo docker ps -a

remove container

	sudo docker rm remote-sensing-edge-broker

check on the status, the  remote-sensing-edge-broker should not no longer appear on the console

    sudo docker ps

to start again

    sudo docker start remote-sensing-edge-broker

**adjust mosquitto configuration**

stop docker

	sudo docker stop remote-sensing-edge-broker

edit docker-compose.yml

	nano docker-compose.yml

to  change the  port, say from 49664 to 50000, open docker-compose.yml and change the 49664 to 50000

```json
services:
  mosquitto:
    build:
      context: .
      dockerfile: Dockerfile

    image: remote-sensing-edge-broker:1.0
    container_name: remote-sensing-edge-broker

    restart: unless-stopped

    ports:
      - "50000:1883"

    volumes:
      - mosquitto-data:/mosquitto/data
  
volumes:
  mosquitto-data:
```
re-run docker with updated configuration

    sudo docker compose up -d

