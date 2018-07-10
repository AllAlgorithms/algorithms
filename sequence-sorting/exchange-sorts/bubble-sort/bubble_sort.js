// JavaScript implementation of bubble sort
//
// Author: Carlos Abraham Hernandez
// Repository: github.com/19cah/algorithms

function swap(arr, i, j) {
  var temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

function bubbleSort(arr) {
  var swapped;
  do {
    swapped = false;
    for(var i = 0; i < arr.length; i++) {
      if(arr[i] && arr[i + 1] && arr[i] > arr[i + 1]) {
        swap(arr, i, i + 1);
        swapped = true;
      }
    }
  } while(swapped);
  return arr;
}

// Test
var arr = [46, 24, 33, 10, 2, 81, 50];
console.log('Unsorted array ');
console.log(arr.slice());

console.log('Sorted array ');
console.log(bubbleSort(arr.slice()));
