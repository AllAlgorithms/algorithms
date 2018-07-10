/**
 * Java implementation of merge sort
 *
 *
 * Author: Carlos Abraham Hernandez
 * Repository: github.com/19cah/algorithms
 */

import java.util.Arrays;

public class MergeSort{

		// Merge the two half into a sorted data.
    public void merge(int arr[], int left, int middle, int right){

        int n1 = middle - left + 1;
        int n2 = right - middle;

        int L[] = new int [n1];
        int R[] = new int [n2];

        for (int i=0; i<n1; ++i)
            L[i] = arr[left + i];
        for (int j=0; j<n2; ++j)
            R[j] = arr[middle + 1+ j];


        int i = 0, j = 0;

        int k = left;
        while (i < n1 && j < n2){
            if (L[i] <= R[j]){
                arr[k] = L[i];
                i++;
            }
            else{
                arr[k] = R[j];
                j++;
            }
            k++;
        }

        while (i < n1){
            arr[k] = L[i];
            i++;
            k++;
        }

        /* Copy remaining elements of R[] if any */
        while (j < n2){
            arr[k] = R[j];
            j++;
            k++;
        }
    }

    // Main function that sorts arr[l..r] using
    void sort(int arr[], int left, int right){
        if (left < right){
            // Find the middle point
            int middle = (left+right)/2;

            // Sort first and second halves
            sort(arr, left, middle);
            sort(arr , middle+1, right);

            // Merge the sorted halves
            merge(arr, left, middle, right);
        }
    }

		//Default values
		void sort(int arr[]){
				int l = 0; 						// First index
				int r = arr.length-1; // Last index
				sort(arr, l, r);
		}

    // Test Functionality
    public static void main(String args[]){

     int[] arr = new int[20];

    	for(int i = 0; i < arr.length; i++) {
      	arr[i] = (int)(Math.random()*999 + 1);
    	}

      System.out.println("Unordered List: \n" + Arrays.toString(arr));

        MergeSort m = new MergeSort();
        m.sort(arr);

        System.out.println("Ordered  List:  \n" + Arrays.toString(arr));
    }
}
