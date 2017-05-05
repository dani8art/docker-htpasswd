FROM ubuntu
LABEL maintainer "dani8art.da@gmail.com"

RUN apt-get update && apt-get -y install apache2-utils
RUN touch .htpasswd

VOLUME /.htpasswd

ENTRYPOINT htpasswd -db .htpasswd
