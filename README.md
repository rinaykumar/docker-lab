# Lab 10
Docker
```
$ docker build -t express-demo .
```
Then check to make sure it built correctly.
```
$ docker image ls
```
If so, run it with docker 

```
$ docker run -d -p 3000:3000 express-demo
```
If working correctly at port 3000, stop it with
```
$ docker container stop <container id>
```

See running containers
```
docker ps
```

Push to dockerhub
```
$ docker tag 349f2af2a827 bparra/express-demo:latest
$ docker push bparra/express-demo:latest
```

## Creating a stack
First enter swarm mode.
```
$ docker swarm init
```
Then deploy the stack with a name.
```
$ docker stack deploy -c docker-compose.yml swarm-demo
```
save the output so that more machines can join later
> docker swarm join --token xxx

To take down the stack
```
$ docker stack remove swarm-demo
```

Then leave the swarm
```
docker swarm leave --force
```
