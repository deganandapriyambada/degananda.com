current server condition

1. 1 gigs of ram and 1 virtual CPU
2. 384mb of ram has been allocated to jupyter notebook podman
3. the remaining resource +- 600mb will be fully utilized for postgresql
4. jupyter notebook will only used for data visualization. all the ETL computation will be done on seperate spark cluster.

# Install postgresql on ubuntu server 24.04

Below are the steps to install postgresql on lightweight VM

update ubuntu packages repository to the latest version and upgrade all old packages on the ubuntu server.

	sudo apt update
	sudo apt upgrade -y

install postgresql

	sudo apt install -y postgresql

once the installation is completed, execute following command to verify if the postgresql is installed properly

	psql --version

it should retrn the installed postgresql version on the command line interface (cli)

enable postgresql services

	sudo systemctl enable postgresql

start postgresql services

	sudo systemctl start postgresql

validate if postgresql running properly (health status check)

	sudo systemctl status postgresql

check on the ps

	ps axx | grep postgres

check on the specific postgres services to find the actual health status (replace 16-main with the actual installed postgresql version)

	sudo systemctl status postgresql@16-main

set the default password for **postgres** user

	sudo -i -u postgres

enter the postgresql shell 

	psql

set the default password for postgres user (root)

	\password postgres

exit the shell

	\q

whitelist allowed ip address to access the db (put asterisk * to allow all)

listen from all address (ip) on the postgresql.conf

	listen_addresses = '*'

edit the postgresql.conf using following command
	
	sudo nano /etc/postgresql/16/main/postgresql.conf

allow for all ip on the pg_hba.conf

```json
host    all             postgres        0.0.0.0/0      md5
```

edit the pg_hba.conf using following command

	sudo nano /etc/postgresql/16/main/pg_hba.conf

restart postgreql services

	sudo systemctl restart postgresql

Done, at this point postgresql can be accessed remotely.

note: on production scenario, it should only to list down authorized ip address. do not allow all connection from all machines at the production server.

## Test Connection using Postgresql client

The most recommended way to connect into postgresql is through pgadmin. Create a new server and add the details of the server. use postgresql as the username and the password that we configured on the previous step. keep the post as it (5432) as didnt change the port.

right click on the target database and enter following query

```json
SELECT datname FROM pg_database;
```

it will listed down the available database on the postgresql instances. this is also an indication that postgresql is up and running and the connection is successfully established.

## Limit postgresql resource utilization to fit with 512mb VM specs

Memory consumption allocation can be adjusted under postgresql.conf. it also recommended to limit the number of user connection as well on that file.

below is the best practices configuration to achieve such objectives.

| config parameter     | value |
| -------------------- | ----- |
| max_connection       | 5     |
| shared_buffers       | 384MB |
| work_mem             | 8MB   |
| effective_cache_size | 512MB |

once the file has been modified with above config, restart the postgresql server

	sudo systemctl restart postgresql

execute following command to confirm if the config has been applied (after restarting the server)

```json
sudo -u postgres psql -c "SHOW shared_buffers;"
sudo -u postgres psql -c "SHOW work_mem;"
sudo -u postgres psql -c "SHOW effective_cache_size;"
```

and its done. The only way to test whether the configuration is working properly is by doing **performance test**.