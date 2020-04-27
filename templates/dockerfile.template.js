const configs = require('../configs/app-configs');

const uid = configs.containerUserId;

module.exports = `
FROM ${configs.baseDockerImage}
ARG START_SH_LOCATION
ARG NGINX_CONF_LOCATION

WORKDIR /src
ADD $START_SH_LOCATION /src/start.sh
ADD $NGINX_CONF_LOCATION /etc/nginx/conf.d/default.conf
${uid !== '0' ? `RUN mkdir -p /var/tmp/nginx && chown ${uid} /var/tmp/nginx` : ''}
${uid !== '0' ? `RUN mkdir -p /var/lib/nginx && chown ${uid} /var/lib/nginx` : ''}
ADD . /src
`;
