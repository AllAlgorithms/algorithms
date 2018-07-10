// Swift implementation of bubble sort
//
// Author: Carlos Abraham Hernandez
// Repository: github.com/19cah/algorithms

let arr = [46, 24, 33, 10, 2, 81, 50]

func bubbleSort(tobeSorted: [Int]) -> [Int]{
		var result = tobeSorted
    for i in 0..<arr.count-1{
        for j in 0..<arr.count-i-1{
            if(result[j] > result[j+1]){
                let temp = result[j]
                result[j] = result[j+1]
                result[j+1] = temp
            }
        }
    }
    return result
}

print("Unsorted Array")
print(arr)

print("Sorted Array")
print(bubbleSort(tobeSorted: arr))
