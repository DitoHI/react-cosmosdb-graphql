#!/bin/sh -eu
if [ -z "${SERVER_URI:-}" ]; then
    SERVER_URI_JSON=undefined
else
    SERVER_URI_JSON=$(jq -n --arg server_uri "$SERVER_URI" '$server_uri')
fi

cat <<EOF
window.REACT_APP_SERVER_URI=${SERVER_URI_JSON};
EOF