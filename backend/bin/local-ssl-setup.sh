# generate SSL certs for local development

ssl_config_dir="$(dirname $(dirname $(realpath $0)) )/config/ssl"

openssl req \
  -new \
  -newkey rsa:4096 \
  -days 3650 \
  -nodes \
  -x509 \
  -keyout $ssl_config_dir/gateview.dev.key \
  -out $ssl_config_dir/gateview.dev.crt \
  -config $ssl_config_dir/openssl.conf \
  -extensions v3_req

# have system trust the certs
sudo security add-trusted-cert -d -r trustRoot -k /Library/Keychains/System.keychain $ssl_config_dir/gateview.dev.crt
