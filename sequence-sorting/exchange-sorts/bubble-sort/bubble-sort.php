#!/usr/local/bin/php
<?php

// PHP implementation of bubble sort
//
// Author: Carlos Abraham Hernandez
// Repository: github.com/19cah/algorithms

function bubbleSort(array $array) {
    $array_size = count($array);
    for($i = 0; $i < $array_size; $i ++) {
        for($j = 0; $j < $array_size; $j ++) {
            if ($array[$i] < $array[$j]) {
                $tem = $array[$i];
                $array[$i] = $array[$j];
                $array[$j] = $tem;
            }
        }
    }
    return $array;
}

function printArray(array $array){
	for ($i = 0; $i < count($array); ++$i) {
        print $array[$i] . " ";
  }
	print "\n";
}

// Test
$array = array(46, 24, 33, 10, 2, 81, 50);

print "Unsorted array\n";
printArray($array);

print "Sorted array\n";
printArray(bubbleSort($array));
?>
