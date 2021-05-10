#!/bin/bash

API="http://localhost:4741"
URL_PATH="/comments"

curl "${API}${URL_PATH}/${ID}" \
  --include \
  --request DELETE \
  --header "Authorization: Bearer ${TOKEN}" \
  --header "Content-Type: application/json" \
  --data '{
    "comment": {
      "postId": "'"${POST_ID}"'"
    }
  }'

echo
