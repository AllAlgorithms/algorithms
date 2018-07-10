// Go implementation of bubble sort
//
// Author: Carlos Abraham Hernandez
// Repository: github.com/19cah/algorithms

package main
import "fmt"

func main() {

	arr := []int{46, 24, 33, 10, 2, 81, 50}

	fmt.Println("Unsorted Array")
	fmt.Println(arr)

	n := len(arr) - 1

	for {
		if n == 0 {
			break
		}

		for i := 0; i < len(arr)-1; i++ {
			if arr[i] > arr[i+1] {
				arr[i], arr[i+1] = arr[i+1], arr[i]
			}
		}
		n -= 1
	}

	fmt.Println("Sorted Array")
	fmt.Println(arr)
}
