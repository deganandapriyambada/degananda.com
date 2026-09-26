ubuntu@hostname~/mosquitto/edge-broker/mosquitto/config$ sudo du -sh /var/lib/docker/volumes/edge-broker_mosquitto-data/_data_

_
1.1G    /var/lib/docker/volumes/edge-broker_mosquitto-data/_data
ubuntu@hostname:~/mosquitto/edge-broker/mosquitto/config$ sudo docker exec remote-sensing-edge-broker   mosquitto_db_dump --stats /mosquitto/data/mosquitto.db
OCI runtime exec failed: exec failed: unable to start container process: exec: "mosquitto_db_dump": executable file not found in $PATH
ubuntu@hostname:~/mosquitto/edge-broker/mosquitto/config$ sudo du -sh /var/lib/docker/volumes/923fc8ddac4143d6ed87bd3d2b2a65bb4d9332f2704da1e6ebf940294165a1ed/_data
4.0K    /var/lib/docker/volumes/923fc8ddac4143d6ed87bd3d2b2a65bb4d9332f2704da1e6ebf940294165a1ed/_data