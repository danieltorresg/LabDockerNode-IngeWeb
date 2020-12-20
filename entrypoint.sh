#!/bin/sh

echo "Waiting for mongdb..."

while ! nc -z mongo-db 27017; do
  sleep 0.1
done

echo "MongoDB started"

exec "$@"
