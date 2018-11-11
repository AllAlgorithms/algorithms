# Conway's Game of Life

For this simple implementation, a finite 2D space is used. Any cell outside of the
input space is considered dead, which leads to innacurate results when cells
reach the boundary.

For the included "Glider" example, the glider hits the boundary after 15 generations,
and then becomes a static square.

### Building the test

The `run-test` script will create a `build` directory and output all `.o`, `.hi`,
and executable files there.

This script requires a `ghc` command be avaialable.

The current test ouputs 15 generations of the classic "Glider" example to the console.
Here is a sampling of the output:

```
Conway's Game of Life
Starting with seed: 'Glider'

⬜️⬜️🔳⬜️⬜️⬜️⬜️
🔳⬜️🔳⬜️⬜️⬜️⬜️
⬜️🔳🔳⬜️⬜️⬜️⬜️
⬜️⬜️⬜️⬜️⬜️⬜️⬜️
⬜️⬜️⬜️⬜️⬜️⬜️⬜️
⬜️⬜️⬜️⬜️⬜️⬜️⬜️

⬜️🔳⬜️⬜️⬜️⬜️⬜️
⬜️⬜️🔳🔳⬜️⬜️⬜️
⬜️🔳🔳⬜️⬜️⬜️⬜️
⬜️⬜️⬜️⬜️⬜️⬜️⬜️
⬜️⬜️⬜️⬜️⬜️⬜️⬜️
⬜️⬜️⬜️⬜️⬜️⬜️⬜️

⬜️⬜️🔳⬜️⬜️⬜️⬜️
⬜️⬜️⬜️🔳⬜️⬜️⬜️
⬜️🔳🔳🔳⬜️⬜️⬜️
⬜️⬜️⬜️⬜️⬜️⬜️⬜️
⬜️⬜️⬜️⬜️⬜️⬜️⬜️
⬜️⬜️⬜️⬜️⬜️⬜️⬜️
```
