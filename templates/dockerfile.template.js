const configs = require('../configs/app-configs');

module.exports = `
FROM ${configs.baseDockerImage}
ARG START_SH_LOCATION
ARG NGINX_CONF_LOCATION

WORKDIR /src
ADD $START_SH_LOCATION /src/start.sh
ADD $NGINX_CONF_LOCATION /etc/nginx/conf.d/default.conf
RUN mkdir -p /var/tmp/nginx && chmod 666 /var/tmp/nginx
RUN mkdir -p /var/lib/nginx && chmod 666 /var/lib/nginx
ADD . /src
`;
