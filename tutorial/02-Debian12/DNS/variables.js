export const SERVER_1_HOST = "211.27.65.10";
export const SERVER_2_HOST = "211.27.65.20";
export const CLIENT_HOST = "173.23.0.2";
export const SERVER_1_HOST_REVERSE = SERVER_1_HOST.split(".").reverse().join(".");
export const SERVER_1_NAME = "LNXSRV1";
export const SERVER_2_NAME = "LNXSRV2";
export const CLIENT_NAME = "client-1";
export const FQDN = "lkslab.net";
export const BIND_CONF_PREFIX_PATH = "/etc/bind";
export const BIND_F_ZONE_FILE_PATH = `${BIND_CONF_PREFIX_PATH}/db.${FQDN}`;
export const BIND_R_ZONE_FILE_PATH = `${BIND_CONF_PREFIX_PATH}/db.27.211`;
export const BIND_NAMED_CONF_PATH = `${BIND_CONF_PREFIX_PATH}/named.conf.local`;

export default {
  SERVER_1_HOST,
  SERVER_2_HOST,
  CLIENT_HOST,
  SERVER_1_HOST_REVERSE,
  SERVER_1_NAME,
  SERVER_2_NAME,
  CLIENT_NAME,
  FQDN,
  BIND_CONF_PREFIX_PATH,
  BIND_F_ZONE_FILE_PATH,
  BIND_R_ZONE_FILE_PATH,
  BIND_NAMED_CONF_PATH,
};
