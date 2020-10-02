/**
 * Do not use this file!
 * it was just created to generate all the initial algorithms.
 *
 * @author Carlos Abraham Hernandez (abranhe.com) <abraham@abranhe.com>
 */
'use strict';
const fs = require('fs');

const jsonData = '../website/sidebars.json';
const jsonObj = JSON.parse(fs.readFileSync(jsonData, 'utf8'));

Object.keys(jsonObj.algorithms).forEach((key) => {
  const categories = jsonObj.algorithms[key];
  for (algorithms in categories) {
    const algorithm = categories[algorithms];
    const fileContent = `---
id: ${algorithm}
title: ${algorithm.charAt(0).toUpperCase() + algorithm.slice(1).split('-').join(' ')}
sidebar_label: ${algorithm.charAt(0).toUpperCase() + algorithm.slice(1).split('-').join(' ')}
---

[Open a pull request](https://github.com/AllAlgorithms/algorithms/tree/master/docs/${algorithm}.md) to add the content for this algorithm.`;

    console.log(algorithm);
    fs.writeFile(`../docs/${algorithm}.md`, fileContent, (err) => {
      if (err) throw err;
      console.log('The file was succesfully saved!');
    });
  }
});
