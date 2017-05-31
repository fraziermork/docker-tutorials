# [CONTAINERS](https://docs.docker.com/get-started/part2/)

# Commands:

```bash
docker build -t friendlyhello .
```
Builds the current directory and tags it as friendlyhello

```bash
docker run -p 4000:80 friendlyhello
```
Run friendlyhello, use the p flag to map a container's exposed port to a real one


```bash
docker run -d -p 4000:80 friendlyhello
```
Same as above, but run as background process, prints a container id that can be used with the following command:

```bash
docker stop containerid
```
where containerid is whatever run -d printed


```bash
docker tag friendlyhello fraziermork/tutorials:friendlyhello
docker push fraziermork/tutorials:friendlyhello
```
Publishes a container to your docker profile as friendlyhello in the tutorials repository. I guess the first one registers it locally to prepare it for the second step of actually publishing it?

```bash
docker run -p 4000:80 fraziermork/tutorials:friendlyhello
```
Exactly the same as the first run command, but a demonstration of how to run things from where they're published to.


# Questions:
Why does docker tag do?
