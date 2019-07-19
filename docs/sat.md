---
id: sat
title: Boolean satisfiability problem
sidebar_label: Sat
---

In computer science, the Boolean satisfiability problem (sometimes called propositional satisfiability problem and abbreviated **SATISFIABILITY** or **SAT**) is the problem of determining if there exists an interpretation that satisfies a given Boolean formula. In other words, it asks whether the variables of a given Boolean formula can be consistently replaced by the values TRUE or FALSE in such a way that the formula evaluates to TRUE. If this is the case, the formula is called satisfiable. On the other hand, if no such assignment exists, the function expressed by the formula is FALSE for all possible variable assignments and the formula is unsatisfiable. For example, the formula "a AND NOT b" is satisfiable because one can find the values a = TRUE and b = FALSE, which make (a AND NOT b) = TRUE. In contrast, "a AND NOT a" is unsatisfiable.

<br>

<iframe width="560" height="315" src="https://www.youtube.com/embed/uAdVzz1hKYY" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
<br>
<br>

**SAT** is the first problem that was proven to be NP-complete; see Cook–Levin theorem. This means that all problems in the complexity class NP, which includes a wide range of natural decision and optimization problems, are at most as difficult to solve as SAT. There is no known algorithm that efficiently solves each SAT problem, and it is generally believed that no such algorithm exists; yet this belief has not been proven mathematically, and resolving the question of whether SAT has a polynomial-time algorithm is equivalent to the P versus NP problem, which is a famous open problem in the theory of computing.

Nevertheless, as of 2007, heuristic SAT-algorithms are able to solve problem instances involving tens of thousands of variables and formulas consisting of millions of symbols, which is sufficient for many practical SAT problems from, e.g., artificial intelligence, circuit design, and automatic theorem proving.

<br>
<iframe width="560" height="315" src="https://www.youtube.com/embed/sBTTRwpJWi0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
<br>
<br>

## Helpful Links

- [Boolean satisfiability problem on Wikipedia](https://en.wikipedia.org/wiki/Boolean_satisfiability_problem)
- [Fundamental Algorithms for System Modeling, Analysis, and Optimization, SAT Solving](https://ptolemy.berkeley.edu/projects/embedded/eecsx44/fall2011/lectures/SATSolving.pdf)
- [The Satisfiability Problem](http://infolab.stanford.edu/~ullman/ialc/spr10/slides/pnp2.pdf)