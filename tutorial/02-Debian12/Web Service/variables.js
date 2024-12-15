const SERVER_1_HOST = "211.27.65.10";
const CLIENT_HOST = "173.23.0.19";
const SERVER_1_NAME = "LNXSRV1";
const CLIENT_NAME = "client-1";
const FQDN = "lkslab.net";
const NGINX_PREFIX_CONF_PATH = "/etc/nginx";
const NGINX_WEB_ROOT_DIR = "/var/www/html";
const NGINX_VIRT_HOST_FILE_1 = `${NGINX_PREFIX_CONF_PATH}/conf.d/web.conf`;
const NGINX_HTML_FILE_PATH_1 = `${NGINX_WEB_ROOT_DIR}/index.html`;

export default {
  SERVER_1_HOST,
  CLIENT_HOST,
  SERVER_1_NAME,
  CLIENT_NAME,
  FQDN,
  NGINX_PREFIX_CONF_PATH,
  NGINX_VIRT_HOST_FILE_1,
  NGINX_WEB_ROOT_DIR,
  NGINX_HTML_FILE_PATH_1,
};
