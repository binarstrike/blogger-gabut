// server
const SERVER_1_HOST = "211.27.65.10";
const SERVER_1_HOSTNAME = "LNXSRV1";
const SERVER_1_OS = "Debian 12";

// client
const CLIENT_1_HOST = "173.23.0.19";
const CLIENT_1_HOSTNAME = "CLIENT-1";
const CLIENT_1_OS = "Windows 10";

// nginx
const NGINX_PREFIX_CONF_PATH = "/etc/nginx";
const NGINX_WEB_ROOT_DIR = "/var/www/html";
const NGINX_VIRT_HOST_FILE_1 = `${NGINX_PREFIX_CONF_PATH}/conf.d/web.conf`;
const NGINX_HTML_FILE_PATH_1 = `${NGINX_WEB_ROOT_DIR}/index.html`;

// apache2
const APACHE_PREFIX_CONF_PATH = "/etc/apache2";
const APACHE_WEB_ROOT_DIR = "/var/www/html";
const APACHE_VIRT_HOST_FILE_1 = `${APACHE_PREFIX_CONF_PATH}/sites-available/web.conf`;
const APACHE_HTML_FILE_PATH_1 = `${APACHE_WEB_ROOT_DIR}/index.html`;

export default {
  SERVER_1_HOST,
  CLIENT_1_HOST,
  SERVER_1_HOSTNAME,
  CLIENT_1_HOSTNAME,
  SERVER_1_OS,
  CLIENT_1_OS,
  NGINX_PREFIX_CONF_PATH,
  NGINX_VIRT_HOST_FILE_1,
  NGINX_WEB_ROOT_DIR,
  NGINX_HTML_FILE_PATH_1,
  APACHE_PREFIX_CONF_PATH,
  APACHE_WEB_ROOT_DIR,
  APACHE_VIRT_HOST_FILE_1,
  APACHE_HTML_FILE_PATH_1,
};
