// Java implementation of bubble sort
//
// Author: Carlos Abraham Hernandez
// Repository: github.com/19cah/algorithms

public class BubbleSort {

	void bubbleSort(int arr[]){
		for (int i = 0; i < arr.length-1; i++)
			for (int j = 0; j < arr.length-i-1; j++)
				if (arr[j] > arr[j+1]){
					int temp = arr[j];
					arr[j] = arr[j+1];
					arr[j+1] = temp;
				}
	}

	// Function to print elements
	void printArray(int arr[]){
		for (int i=0; i<arr.length; ++i)
			System.out.print(arr[i] + " ");
		System.out.println();
	}

	// Driver method to test above
	public static void main(String args[]){

		BubbleSort bubble_sort = new BubbleSort();
		int arr[] = {46, 24, 33, 10, 2, 81, 50};

		System.out.println("Unsorted array:");
		bubble_sort.printArray(arr);

		System.out.println("Sorted array:");
		console.log(bubble_sort.printArray(arr));
  }
}
