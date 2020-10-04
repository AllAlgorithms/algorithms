#!/bin/sh
set -eu

port="${1:-30000}"
dys_inside='inside the container'
mnt_dir='/mnt'

me="$(readlink -f "$0")"
root_dir="$(dirname "$(dirname "$me")")"

case "$port" in
   (-h|--help)
      printf '%s [-h|--help] [<local-port>]\n' "$0"
      ;;

   ("$dys_inside")
      cd "$root_dir/website"
      yarn
      yarn start
      ;;

   (*)
      cat >&2 <<END

   *** browse http://127.0.0.1:$port/ *** CTRL-C to exit ***

END
      docker run --rm -it -v "$root_dir:$mnt_dir" -p "$port:3000" \
         node:alpine /bin/sh "$mnt_dir${me#$root_dir}" "$dys_inside"
      ;;
esac

exit 0
