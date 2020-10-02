---
id: distance-between-points
title: Distance between points
sidebar_label: Distance between points
---

The **distance between two points** can have several different
definitions depending on the specific situation, although without any
further specification it usually refers to the length of the segment
connecting the two points (also called [*Euclidean distance*][euclidean]).

## Euclidean Distance

The [Euclidean distance][euclidean] is generally defined as the lenght
of the segment connecting two points.

<img
   src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/Euclidean_distance_2d.svg/500px-Euclidean_distance_2d.svg.png"
   alt="Euclidean distance">

### Formula

The [Euclidean distance][euclidean] can be easily calculated when the
coordinates of the two points are known. For example, in the XY plane,
the formulas would be the following:

<img
   src="https://latex.codecogs.com/gif.latex?P%20%3D%20%28P_x%2C%20P_y%29"
   alt="P = (P_x, P_y)">

<img
   src="https://latex.codecogs.com/gif.latex?Q%20%3D%20%28Q_x%2C%20Q_y%29"
   alt="Q = (Q_x, Q_y)">

<img
   src="https://latex.codecogs.com/gif.latex?d%28P%2C%20Q%29%20%3D%20%5Csqrt%7B%28P_x%20-%20Q_x%29%5E2%20&plus;%20%28P_y%20-%20Q_y%29%5E2%7D"
   alt="d(P, Q) = \sqrt{(P_x - Q_x)^2 + (P_y - Q_y)^2}">

The formula above can be generalized for vector spaces of any dimension,
by taking the square root of the sum of the squares of differences in
each dimension:

<img
   src="https://latex.codecogs.com/gif.latex?P%20%3D%20%28P_1%2C%20P_2%2C%20...%2C%20P_n%29"
   alt="P = (P_1, P_2, ..., P_n)">

<img
   src="https://latex.codecogs.com/gif.latex?Q%20%3D%20%28Q_1%2C%20Q_2%2C%20...%2C%20Q_n%29"
   alt="Q = (Q_1, Q_2, ..., Q_n)">

<img
   src="https://latex.codecogs.com/gif.latex?d%28P%2C%20Q%29%20%3D%20%5Csqrt%7B%28P_1%20-%20Q_1%29%5E2%20&plus;%20%28P_2%20-%20Q_2%29%5E2%20&plus;%20...%20&plus;%20%28P_n%20-%20Q_n%29%5E2%7D"
   alt="d(P, Q) = \sqrt{(P_1 - Q_1)^2 + (P_2 - Q_2)^2 + ... + (P_n - Q_n)^2}">

<img
   src="https://latex.codecogs.com/gif.latex?d%28P%2C%20Q%29%20%3D%20%5Csqrt%7B%5Csum_%7Bi%3D1%7D%5En%20%28P_i%20-%20Q_i%29%5E2%7D"
   alt="d(P, Q) = \sqrt{\sum_{i=1}^n (P_i - Q_i)^2}">

### Algorithm

The algorithm for the [Euclidean distance][euclidean] can be derived
directly from the defining formula above:

```
/* Assume that P and Q are N-dimensional arrays */
distance(P, Q) {
   N = dim(P)
   square_sum = 0.0                              /* initialize running sum */
   for dimension i from 1 to N {                 /* iterate over all dimensions */
      square_sum = square_sum + (P[i] - Q[i])^2  /* sum squares of differences */
   }
   distance = sqrt(square_sum);                  /* distance is the square root of the sum of squared differences */
   return distance;
}
```

## Manhattan Distance

Among the many possible definitions of distance, another one commonly
found in computer science is the [Manhattan distance][manhattan]. This
is typically a distance used when movements are constrained to happen
over a grid:

<img
   src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Manhattan_distance.svg/500px-Manhattan_distance.svg.png"
   alt="Manhattan distance">

### Formula

The formula below applies when calculating the [Manhattan
distance][manhattan] over an N-dimensional grid where adjacent nodes are
assumed to have distance 1:

<img
   src="https://latex.codecogs.com/gif.latex?P%20%3D%20%28P_1%2C%20P_2%2C%20...%2C%20P_n%29"
   alt="P = (P_1, P_2, ..., P_n)">

<img
   src="https://latex.codecogs.com/gif.latex?Q%20%3D%20%28Q_1%2C%20Q_2%2C%20...%2C%20Q_n%29"
   alt="Q = (Q_1, Q_2, ..., Q_n)">

<img
   src="https://latex.codecogs.com/gif.latex?d%28P%2C%20Q%29%20%3D%20%5Csum_%7Bi%3D1%7D%5En%20%7CP_i%20-%20Q_i%7C"
   alt="d(P, Q) = \sum_{i=1}^n |P_i - Q_i|">

### Algorithm

The algorithm can be implemented as a direct derivation of the formula:

```
/* Assume that P and Q are N-dimensional arrays */
manhattan_distance(P, Q) {
   N = dim(P)
   distance = 0.0                             /* initialize running sum */
   for dimension i from 1 to N {              /* iterate over all dimensions */
      distance = distance + abs(P[i] - Q[i])  /* sum squares of differences */
   }
   return distance;
}
```

## Minkowski Distance

**Minkowski Distance** is a metric in a normed vector space which can be considered as a generalization of both the Euclidean distance and the Manhattan distance. It is named after the German mathematician Hermann Minkowski.

### Formula

The formula below applies when calculating the Minkowski distance over an N-dimensional grid:

$P = (p_1, p_2, ..., p_n)\\$
$Q = (q_1, q_2, ..., q_n)\\$
$d(P, Q) = \left( \sum_{i=1}^{n} |p_i - q_i|^m \right) ^ {\frac{1}{m}}$

### Algorithm

```
/* Assume that P and Q are N-dimensional arrays */
manhattan_distance(P, Q) {
   N = dim(P)
   distance = 0.0                             /* initialize running sum */
   for dimension i from 1 to N {              /* iterate over all dimensions */
      distance = distance + abs(P[i] - Q[i])^m  /* sum the processed differences */
   }
   return distance^(1/m);
}
```


## Performance

Both Euclidean and Manhattan distance algorithms for each respective distance definition are linear
(O(n)) with respect to the number of dimensions with which each point is
represented. The Minkowski distance algorithm's complexity is around O(nm) for n dimensional vector and the factor power m.


## Implementations

| | Language | Link |
|:-: | :-: | :-: |
| | | |

## Helpful Links

- [Euclidean distance][euclidean]
- [Manhattan distance][manhattan]
- [Minkowski distance][minkowski]
- [Norm][norm] a generalization of the concept of distance
- [L<sup>p</sup> space][lp-space] a generalization of a class of norms


[euclidean]: https://en.wikipedia.org/wiki/Euclidean_distance
[manhattan]: https://en.wikipedia.org/wiki/Taxicab_geometry
[minkowski]: https://en.wikipedia.org/wiki/Minkowski_distance
[norm]: https://en.wikipedia.org/wiki/Norm_(mathematics)
[lp-space]: https://en.wikipedia.org/wiki/Lp_space
