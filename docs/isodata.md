---
id: isodata
title: Isodata
sidebar_label: Isodata
---

The Iterative Self-Organizing Data Analysis Technique (**ISODATA**) method used a set of rule-of-thumb procedures that have 
incorporated into an iterative classification algorithm. Many of the steps used in the algorithm are based on the experience obtained through experimentation. The **ISODATA** algorithm is a modification of the [k-means clustering algorithm](k-means) (overcomes the disadvantages of k-means). This algorithm includes the merging of clusters if their separation distance in multispectral feature space is less than a user-specified value and the rules for splitting a single cluster into two clusters. This method makes a large number of passes through the dataset until specified results are obtained.

**ISODATA** unsupervised classification calculates class means evenly distributed in the data space then iteratively clusters the remaining pixels using minimum distance techniques. Each iteration recalculates means and reclassifies pixels with respect to the new means. Iterative class splitting, merging, and deleting is done based on input threshold parameters. All pixels are classified to the nearest class unless a standard deviation or distance threshold is specified, in which case some pixels may be unclassified if they do not meet the selected criteria. This process continues until the number of pixels in each class changes by less than the selected pixel change threshold or the maximum number of iterations is reached.

## Helpful Links

- [Wikipedia](https://en.wikipedia.org/wiki/Multispectral_pattern_recognition#ISODATA_method)
- [Module ISODATA Clustering for Grids / SAGA-GIS Module Library](http://www.saga-gis.org/saga_tool_doc/2.2.5/imagery_classification_7.html)
- [K-means vs. ISODATA](http://www.wu.ece.ufl.edu/books/EE/communications/UnsupervisedClassification.html)
- [ISODATA](http://enviidl.com/help/Subsystems/envi/Content/FindFeatures/Classification/ClassificationTools/ISODATAClassification.htm)