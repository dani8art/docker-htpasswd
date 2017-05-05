# darteaga/htpasswd

### Supported tags and respective `Dockerfile` links

- `latest`, `0.0.1` [(Dockerfile)](https://github.com/dani8art/docker-htpasswd/blob/master/Dockerfile) 

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

## License notice

**darteaga-htpasswd** is open-source software available under the GNU General Public License (GPL) version 3 (GPL v3).

For technical inquiry please contact to [engineering team](https://darteaga.com).

## Latest release

[![Build Status](https://travis-ci.org/dani8art/docker-htpasswd.svg?branch=master)](https://travis-ci.org/http://github.com/dani8art/docker-htpasswd)

The version 0.0.1 is the latest stable version of darteaga-htpasswd image.
see [release note](http://github.com/dani8art/docker-htpasswd/releases/tag/0.0.1) for details.

For running:

- Download latest version from [Docker Hub](https://hub.docker.com/r/darteaga/htpasswd/)