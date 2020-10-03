---
id: area-of-triangle
title: Area of triangle
sidebar_label: Area of triangle
---

A *triangle* is a polygon with three sides and three vertices.
Calculating its area efficiently depends on what is known about it.

## From base and height

The basic formula assumes knowledge of the length of one of the sides
(called *base*) and the length of the *height* of the triangle with
respect to that side. This *height* is the segment that originates from
the vertex that is *not* on the side we know about, and intersects the
side we know about at a right angle.

Assuming the base is put horizontally and the third vertex above it, the
following picture results. Quantity *b* is the length of the bottom
side, and *h* the height with respect to it.

<img
   src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/63/Triangle.TrigArea.svg/535px-Triangle.TrigArea.svg.png"
   alt="Triangle">

Height can sometimes be referred to as *altitude*.

### Formula

In this case, the area is calculated as follows:

<img
    src="https://latex.codecogs.com/png.latex?T=\frac{b&space;\cdot&space;h}{2}"
    alt="T=\frac{b \cdot h}{2}" title="S=\frac{b \cdot h}{2}" />


### Algorithm

The algorithm can be derived directly from the defining formula above:

```
triangle_area_basic (b, h) {
   return b * h / 2;
}
```

## In the euclidean plane

In this section, it is assumed that the triangle is known by the
coordinates of its three vertices A, B, and C on the plane:

<img src="http://latex.codecogs.com/png.latex?\dpi{110}&space;\\\mathbf{A}&space;=&space;(x_A,&space;y_A)&space;\\\mathbf{B}&space;=&space;(x_B,&space;y_B)&space;\\\mathbf{C}&space;=&space;(x_C,&space;y_C)&space;" alt="A, B, and C in the plane" />

### Formula

In this case, the area of the triangle can be calculated as follows:

<img src="http://latex.codecogs.com/png.latex?\dpi{110}&space;T&space;=&space;\frac{|(x_B&space;-&space;x_A)(y_C&space;-&space;y_A)&space;-&space;(x_C&space;-&space;x_A)(y_B&space;-&space;y_A)|}{2}&space;" alt="T = \frac{|(x_B - x_A)(y_C - y_A) - (x_C - x_A)(y_B - y_A)|}{2} " />

### Algorithm

The following algorithm is a direct translation of the formula:

```
triangle_area_plane (x_A, y_A, x_B, y_B, x_C, y_C) {
    return abs((x_B - x_A) * (y_C - y_A) - (x_C - x_A) * (y_B - y_A)) / 2;
}
```

## In the euclidean space

In this section, it is assumed that the triangle is known by the
coordinates of its three vertices A, B, and C in the three-dimensional
space:

<img src="http://latex.codecogs.com/png.latex?\dpi{110}&space;\\\mathbf{A}&space;=&space;(x_A,&space;y_A,&space;z_A)&space;\\\mathbf{B}&space;=&space;(x_B,&space;y_B,&space;z_B)&space;\\\mathbf{C}&space;=&space;(x_C,&space;y_C,&space;z_C)&space;" title="http://latex.codecogs.com/png.latex?\dpi{110} \\\mathbf{A} = (x_A, y_A, z_A) \\\mathbf{B} = (x_B, y_B, z_B) \\\mathbf{C} = (x_C, y_C, z_C) " />

### Formula

The formula to calculate the area involves calculating the determinant
of three matrices:

<img src="https://wikimedia.org/api/rest_v1/media/math/render/svg/67c599953dad11fdc117c9ecf5ad8c56de3563e0" alt="triangle area in the plane">

The absolute value of each determinant is the double of the area of the
triangle obtained by projecting the target triangle onto one of the
coordinate planes, which allows reusing the formula for the triangle in
the plane in a previous section.

### Algorithm

The following algorithm leverages the triangle area calculation in the
plane, described in a previous section and not repeated here:

```
/* Assume that A, B, and C are 3-dimensional arrays
   X at index 0, Y at index 1, Z at index 2         */
triangle_area_space (A, B, C) {
    x = triangle_area_plane(A[1], A[2], B[1], B[2], C[1], C[2]);
    y = triangle_area_plane(A[2], A[0], B[2], B[0], C[2], C[0]);
    z = triangle_area_plane(A[0], A[1], B[0], B[1], C[0], C[1]);
    return sqrt(x * x + y * y + z * z);
}
```

*Note*: the division by two in the formula is already included in the
result from the calculation of the area in the plane.

## Performance

All algorithms for calculating the area of a triangle in the sections
above execute in constant time (O(0)).

## Implementations

| | Language | Link |
|:-: | :-: | :-: |
| | | |

## Helpful Links

- [Triangle][]
- [Area of Triangles and Polygons][]

[Triangle]: https://en.wikipedia.org/wiki/Triangle
[Area of Triangles and Polygons]: http://geomalgorithms.com/a01-_area.html
