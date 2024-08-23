#!/bin/sh

set -e

rm -f /server/tmp/pids/server.pid

exec "$@"