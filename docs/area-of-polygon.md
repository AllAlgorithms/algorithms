---
id: area-of-polygon
title: Area of polygon
sidebar_label: Area of polygon
---

A polygon is a closed sequence of segments in the plane. It is often
convenient to represent it as a sequence of vertices *P<sub>1</sub>,
P<sub>2</sub>, ..., P<sub>n</sub>*, with the convention that any pair of
adjacent vertices in the sequence define a segment in the polygon, and
that the first and last vertices are the same. Each point *P<sub>i</sub>*
is assumed to have coordinates in the plane *(x<sub>i</sub>,
y<sub>i</sub>)*.

## Simple polygons

A [simple polygon][] is a non-self-intersecting one, i.e. no pair of
segments intersects each other.

### Formula

The *signed* area of the polygon is given by the following formula:

<img
src="https://wikimedia.org/api/rest_v1/media/math/render/svg/d09d3414b2e985a26205bc932010c62d3ffd668d"
alt="area of a polygon" />

The area is *signed* because going in reverse order means having a result
with the opposite sign. To get the area it's necessary to take the
absolute value.

### Algorithm

The following algorithm translates the formula in pseudocode:

```
/*
    Vs is an array of vertices. Each vertex is supposed to be
    an array itself, with X values in index 0 and Y values in
    index 1. It is also assumed that the last element in Vs is
    the same as the first one.
*/
polygon_area_simple (Vs) {
    N = Vs.size; # number of elements in Vs
    sum = 0;
    for i in 0 .. (N - 1):
        sum = sum + Vs[i][0] * Vs[i+1][1] - Vs[i+1][0] * Vs[i][1];
    return abs(sum) / 2;
}
```

## Performance

The algorithm for [simple polygons][simple polygon] is linear with respect
to the number of vertices (O(N)).

## Implementation

| | Language | Link |
|:-: | :-: | :-: |
| | | |

## Helpful links

- [Polygon][]


[simple polygon]: https://en.wikipedia.org/wiki/Simple_polygon
[Polygon]: https://en.wikipedia.org/wiki/Polygon
