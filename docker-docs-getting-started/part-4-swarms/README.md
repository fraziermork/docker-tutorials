# [SWARMS](https://docs.docker.com/get-started/part4)

# Commands:
```bash
docker swarm init
```
Enable swarm mode and make current machine the manager


```bash
docker swarm join
```
Have current machine join a swarm as a worker


```bash
docker-machine create --driver virtualbox mvvm1
docker-machine create --driver virtualbox mvvm1
```
Create two virtual machines to use for the tutorial


```bash
docker machine ls
```
Get info about currently running machines

```bash
docker-machine ssh myvm1 "docker swarm init --advertise-addr 192...."
```
Where the numbers are everything that comes after tcp:// from `docker machine ls`., but NOT the last 4 numbers. When running the ls locally, I got 2376 as the last 4 numbers, but the docs listed 2377. According to link under questions, that apparently makes a difference. This makes the machine myvm1 a manager, and prints a join command to ssh to the other docker containers.

```bash
docker-machine ssh myvm2 "docker swarm join ..."
```
Where the ... is the rest of what got spit out by the docker swarm init above. Causes myvm2 to join the swarm as a worker managed by myvm1.


```bash
docker-machine scp docker-compose.yml myvm1:~
```
Copy a file to myvm1's home directory (obv. the filepath to compose different relative to this readme)


```bash
docker-machine ssh myvm1 "docker stack ps getstartedlab"
```
Use this to see that the NODE of the different containers is different--they've been distributed between the two vms.

In browser, go to address used for join command to see result



# Questions:
What is docker-machine? What's the difference between that and docker? Is it that docker-machine is used for managing communication between machines, and docker is what runs locally on each one?

When trying to join as a worker, getting error:
ERROR: Error response from daemon: rpc error: code = 13 desc = connection error: desc = "transport: remote error: tls: bad certificate"
https://forums.docker.com/t/docker-swarm-join-with-virtualbox-connection-error-13-bad-certificate/31392

How do I shut down the VMs when I'm done with them?




```bash

```


# Installs
[virtualbox](https://www.virtualbox.org/wiki/Downloads)
