# darteaga/htpasswd

### Supported tags and respective `Dockerfile` links

### Quick reference

- **Where to get help:**  
  the [Docker Community Forums](https://forums.docker.com/), the [Docker Community Slack](https://blog.docker.com/2016/11/introducing-docker-community-directory-docker-community-slack/), or [Stack Overflow](https://stackoverflow.com/search?tab=newest&q=docker)

- **Where to file issues:**  
  [https://github.com/dani8art/docker-htpasswd/issues](https://github.com/dani8art/docker-htpasswd/issues)

- **Maintained by:**  
  [darteaga](https://darteaga.com)

### Usage

Creating a new user

```
docker run -d --rm -v ./htpasswd:/.htpasswd darteaga/htpasswd <username> <password>
```