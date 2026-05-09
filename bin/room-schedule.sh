#!/usr/bin/env bash

set -eo pipefail

+() { printf '%q ' "$@" 1>&2; printf '\n' 1>&2; "$@"; }

if [ -z "$1" ]; then
  echo "Usage: $(basename "$0") ROOM"
  exit 1
fi
ROOM="$1"

mkdir -p "$ROOM"

schedule=$(curl -sS 'https://2026.pgconf.dev/schedule.json')

jq -r --arg room "$ROOM" '
    map(select(.room | index($room)))
  | sort_by(.slot.lower)
  | group_by(.date).[]
  | (.[0].date | strptime("%Y-%m-%d") | strftime("%A, %B %d")) as $header
  | map(
      (.slot.lower | strptime("%Y-%m-%dT%H:%M:%S") | strftime("%H:%M")) as $lower
    | (.slot.upper | strptime("%Y-%m-%dT%H:%M:%S") | strftime("%H:%M")) as $upper
    | (if .note and .note != "" then " (" + .note + ")" else "" end) as $suffix
    | "\($lower) - \($upper)\n\(.name)\($suffix)")
  | join("\n\n")
  | "\($header)\n\($header | split("") | map("=") | join(""))\n\n\(.)\n"
' <<< "$schedule" > "$ROOM/list.txt"

jq -r --arg room "$ROOM" '
    map(select(has("id"))) | map(select(.room | index($room))).[]
  | "\(.id)\t\(.name)"
' <<< "$schedule" | while IFS=$'\t' read -r id name; do
  name="${name//[\/.:<>\"\\|?*]/}"
  + npx --yes qrcode-svg \
    --background none \
    --ecl L \
    --join \
    --padding 0 \
    --viewbox \
    "https://www.pgevents.ca/events/pgconfdev2026/feedback/${id}/" \
    > "$ROOM/${name}.svg"
  + npx --yes svgo \
    --pretty --indent 2 --final-newline --quiet \
    "$ROOM/${name}.svg"
done
