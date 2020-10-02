---
id: linear-search
title: Linear search
sidebar_label: Linear search
---

**Linear Search** or commonly called as sequential search is a method for finding an element within a list. It sequentially checks each element of the list until a match is found or the whole list has been searched.

## Algorithm

Linear Search requires two parameters: the array/list and the key. It traverses the entire array/list starting from the first element to the last element of the array. During the traversal, the algorithm checks if the element is equal to the key. Once it finds an element that equals to the key, the function immediately returns the index. The result will be considered as `NOT FOUND` if there is no any element in the array equals the key.

The algorithm can be expressed in pseudocode as follows:

```
LinearSearch(array, key){
    idx = 0
    for idx = 0...n
        if array[idx] = key then
            return idx
    
    return -1
}
```

Here is the simulation of Linear Search Algorithm:

<img src="https://www.tutorialspoint.com/data_structures_algorithms/images/linear_search.gif"/>
Source: Tutorialspoint

## Complexity

As the algorithm traverses entire list during runtime, then it has the complexity O(N). 

## Implementation

| | Language | Link |
|:-: | :-: | :-: |
| <img src="https://cdn.abranhe.com/projects/algorithms/logos/python.svg" width="30px"> | Python | [dbscan.py](https://github.com/AllAlgorithms/python/blob/master/algorithms/searches/linear_search.py) |