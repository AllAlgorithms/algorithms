 # Bash Script implementation of bubble sort
 #
 # Author: Carlos Abraham Hernandez
 # Repository: github.com/19cah/algorithms

# Static input of Array
arr=(46 24 33 10 2 81 50)

echo "Unsorted Array:"
echo ${arr[*]}

# Performing Bubble sort
for ((i = 0; i<${#arr[@]}; i++))
do

    for((j = i; j<${#arr[@]}-i-1; j++))
    do

        if ((${arr[j]} > ${arr[$((j+1))]}))
        then
            # swap
            temp=${arr[$j]}
            arr[$j]=${arr[$((j+1))]}
            arr[$((j+1))]=$temp
        fi
    done
done

echo "Sorted Array :"
echo ${arr[*]}
