#!/bin/bash
#
# This script automatically generates
# a new documentation file.
#
#  * docs/filename.md
#
# Usage: newdoc.sh [name]
#   e.g: newdoc.sh mergesort
#
# Author: Carlos Abraham Hernandez (abranhe.com)
#

help() {
	echo
  echo "Usage:"
  echo "  $ newdoc.sh [name]"
  echo
  echo "Flags:"
  echo "  -h   --help              Display help information"
  echo
  echo "Example:"
  echo "  $ newdoc.sh mergesort"
  echo
}

shortHelp() {
  echo
  echo "Usage: newdoc.sh [name]"
  echo "  e.g: newdoc.sh mergesort"
  echo
  echo "Type --help for more information"
	echo
  exit 0
}

if [ -z "${1}" ]; then
  shortHelp
fi

if [ "$1" == "-h" ] || [ "$1" == "--help" ]; then
  help
fi

echo "Navigating to docs/ folder..."
cd ../docs/

algorithm_name=$1

# Capitalizing the fist letter https://stackoverflow.com/a/12487465/7602110
algorithm_capital_case="$(tr '[:lower:]' '[:upper:]' <<< ${algorithm_name:0:1})${algorithm_name:1}"

# Replacing characters in bash https://stackoverflow.com/a/5928254/7602110
algorithm=${algorithm_capital_case//-/ }

echo "Creating file..."
cat >> $algorithm_name.md <<- EOF
---
id: $algorithm_name
title: $algorithm
sidebar_label: $algorithm
---

[Open a pull request](https://github.com/AllAlgorithms/algorithms/tree/master/docs/$1.md) to add the content for this algorithm.
EOF

export GREEN='\033[0;32m'
export NC='\033[0m'

echo -e "The file ${GREEN}${algorithm_name}.md${NC} was created"