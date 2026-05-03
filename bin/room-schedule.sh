#!/usr/bin/env bash

set -eo pipefail

if [ -z "$1" ]; then
  echo "Usage: $(basename "$0") ROOM"
  exit 1
fi
ROOM="$1"

jq -r --arg room "$ROOM" '
    map(select(.room | index($room)))
  | sort_by(.slot.lower)
  | group_by(.date).[]
  | (.[0].date | strptime("%Y-%m-%d") | strftime("%A, %B %d")) as $header
  | map(
      (.slot.lower | strptime("%Y-%m-%dT%H:%M:%S") | strftime("%H:%M")) as $lower
    | (.slot.upper | strptime("%Y-%m-%dT%H:%M:%S") | strftime("%H:%M")) as $upper
    | (if .note and .note != "" then " (" + .note + ")" else "" end) as $suffix
    | "\($lower) - \($upper) | \(.name)\($suffix)")
  | join("\n")
  | "\($header)\n\(.)\n"
' < <(curl -sS 'https://2026.pgconf.dev/schedule.json')
