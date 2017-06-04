# [SERVICES](https://docs.docker.com/get-started/part3)

# Commands:

```bash
docker swarm init
```
Defined in pt. 4, prereq for doing anything in this file


```bash
docker stack deploy -c docker-compose.yml getstartedlab
```
Deploy or update a stack w/ a given name using, -c provides a configuration file


```bash
docker stack ps getstartedlab
```
list the processes that belong to the getstartedlab stack


```bash
docker stack rm getstartedlab
```
remove a given stack


# Questions:
What is a docker stack?
Why do you hit just localhost, not localhost:4000?
