// Root CA
const CA_DIR = "/root/ca";
const INTERMEDIATE_DIR = `${CA_DIR}/intermediate`;
const CA_CERT = "ca.crt";
const CA_PRIV_KEY = "ca.key";

// Server certificate
const SERVER_CERT_DIR = `${CA_DIR}/server`;
const SERVER_CSR = "server.csr";
const SERVER_CERT = "server.crt";
const SERVER_PRIV_KEY = "server.key";
const SERVER_SAN_EXT = "server.cnf";

// Machines
const VM1_NAME = "LNXSRV1";

export default {
  CA_DIR,
  SERVER_CERT_DIR,
  INTERMEDIATE_DIR,
  CA_CERT,
  CA_PRIV_KEY,
  SERVER_CSR,
  SERVER_CERT,
  SERVER_PRIV_KEY,
  SERVER_SAN_EXT,
  VM1_NAME,
};
