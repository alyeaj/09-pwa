curl -X POST -H 'Content-Type: application/json' \
    -H 'Authorization: Bearer '$TOKEN'' \
    -d '{"name":"recode",
        "size":"s-1vcpu-512mb-10gb",
        "region":"nyc1",
        "image":"ubuntu-23-10-x64",
        "monitoring":true}' \
    "https://api.digitalocean.com/v2/droplets"
