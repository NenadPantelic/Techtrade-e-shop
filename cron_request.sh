#!/bin/bash
echo '----------------------------------------'
echo 'Discount products request....'
echo 'Timestamp:'`date`
curl -X POST \
  http://localhost:9000/products/discount/determine \
  -H 'cache-control: no-cache' \
  -H 'content-type: application/json' \
  -H 'postman-token: 3c4d03ac-f417-c6d6-79b3-80ef790095e2'

echo 'OK'
echo '----------------------------------------'

#cron code 56 11 * * * bash /home/nenadsi/techtrade_app/app/cron_request.sh >> /home/nenad$
