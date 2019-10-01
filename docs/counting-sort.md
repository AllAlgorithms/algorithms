---
id: counting-sort
title: Counting sort
sidebar_label: Counting sort
---

Counting sort is an algorithm for sorting a collection of objects according to keys that are small integers; that is, it is an integer sorting algorithm. It operates by counting the number of objects that have each distinct key value, and using arithmetic on those counts to determine the positions of each key value in the output sequence. Its running time is linear in the number of items and the difference between the maximum and minimum key values, so it is only suitable for direct use in situations where the variation in keys is not significantly greater than the number of items.


## Performance

| Complexity                 |                                     |
| -------------------------- | ----------------------------------- |
| Worst-case performance	   | O(n + k)      |
| Best-case performance	     | O(n + k)        |
| Average performance	       | O(n + k)      |
| Worst-case space complexity| O(n + k)                      |

Where n is the number of elements in input array and k is the range of input

![img](http://www-scf.usc.edu/~zhan468/public/Notes/resources/3C7DDB59DF2D21B287E42A7B908409CB.gif)


# Implementations

| | Language | Link |
|:-: | :-: | :-: |
| <img src="https://cdn.abranhe.com/projects/algorithms/logos/python.svg" width="30px"> | Python | [counting_sort.py](https://github.com/AllAlgorithms/python/blob/master/sorting/counting_sort.py) |
| <img src="https://cdn.abranhe.com/projects/algorithms/logos/cpp.svg" width="30px"> | C++ | [counting_sort.py](https://github.com/AllAlgorithms/cpp/blob/master/sorting/counting_sort.cpp) |



## Helpful Links

- [GeeksForGeeks](https://www.geeksforgeeks.org/counting-sort/)
- [Wikipedia](https://en.wikipedia.org/wiki/Counting_sort)

## Videos

- [Youtube](https://www.youtube.com/watch?v=7zuGmKfUt7s)
