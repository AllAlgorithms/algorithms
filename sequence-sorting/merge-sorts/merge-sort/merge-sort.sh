#!/bin/bash

a=(46 24 33 10 2 81 50)

merge() {
	local first=2
	local second=$(( $1 + 2 ))
	for i in ${@:2}
	do
		if [[ $first -eq $(( $1 + 2 )) ]]
		then
			echo ${@:$second:1} ; ((second += 1))
		else
			if [[ $second -eq $(( ${#@} + 1 )) ]]
			then
				echo ${@:$first:1} ; ((first += 1))
			else
				if [[ ${@:$first:1} -lt ${@:$second:1} ]]
				then
					echo ${@:$first:1} ; ((first += 1))
				else
					echo ${@:$second:1} ; ((second += 1))
				fi
			fi
		fi
	done
}

mergesort() {
	if [[ $1 -ge 2 ]]
	then
		local med=$(( $1 / 2 ))
		local first=( $(mergesort $med ${@:2:$med}) )
		local second=( $(mergesort $(( $1 - $med )) ${@:$(( $med + 2 )):$(( $1 - $med ))}) )
		echo $(merge $med ${first[@]} ${second[@]})
	else
		echo $2
	fi
}

echo ${a[@]} ; echo $(mergesort 10 ${a[@]})
