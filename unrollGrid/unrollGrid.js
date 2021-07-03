"use strict";

/**
 * Receives an NxN array of arrays as a square grid, traverses through the
 * grid in a clockwise spiral and returns a new array of those values
 * in that order.
 *  
 */
function unrollGrid(squareGrid) {

  let unrolledGrid = [];
  let gridSize = squareGrid.length ** 2;

  /**
   * Initialize variables for each direction's start and end point.
   * These will get updated as we go through the while loop below.
   * 
   * */
  let rightStart = 0;
  let rightEnd = squareGrid.length;
  let downStart = 1;
  let downEnd = squareGrid.length - 1;
  let leftStart = squareGrid.length - 1;
  let leftEnd = -1;
  let upStart = squareGrid.length - 2;
  let upEnd = 0;

  /**
   * Initialize boolean variables to track what direction we're
   * traveling in. These will get updated at each turn as well.
   * Since this is a clockwise spiral, we'll always start by moving
   * right.
   */
  let isGoingRight = true;
  let isGoingDown = false;
  let isGoingLeft = false;
  let isGoingUp = false;

  /**
   * In our while loop, we can begin by moving right through our grid
   * via a for loop starting and ending at our rightStart/End values, where
   * the rightStart value refers to which element array we're going through, 
   * and the local gridIdx value refers to the place in that array. Push each
   * value to unrolledGrid array. Once completed, set directional booleans
   * appropriately as to take us to the next direction, down. Increment
   * rightStart, decrement rightEnd in preparation for the next right turn.
   * 
   * As a spiral will end after either a right move or a left move, depending
   * on the size of the grid, check if the unrolledGrid has a length exactly
   * equal to the area of the given grid (NXN). If so, unrolling is complete
   * and the grid can be returned. This same check will go in the left move
   * logic as well.
   * 
   * This pattern is followed for the other three directions with respect
   * to the nature of moving in that direction. For example, if we're moving
   * down, we'd only pick the last relevant value from each element array, so
   * the local for loop variable gridIdx would determine which array we're
   * currently picking from and the downEnd value would determine the index
   * at which we push a value to the unrolledGrid array.
   * 
   */
  while (unrolledGrid.length < gridSize) {
    if (isGoingRight) {
      for (let gridIdx = rightStart; gridIdx < rightEnd; gridIdx++) {
        unrolledGrid.push(squareGrid[rightStart][gridIdx]);
      }
      isGoingRight = false;
      isGoingDown = true;
      rightStart++;
      rightEnd--;
      if (unrolledGrid.length === gridSize) {
        return unrolledGrid;
      }
    }
    if (isGoingDown) {
      for (let gridIdx = downStart; gridIdx < downEnd; gridIdx++) {
        unrolledGrid.push(squareGrid[gridIdx][downEnd]);
      }
      isGoingDown = false;
      isGoingLeft = true;
      downStart++;
      downEnd--;
    }
    if (isGoingLeft) {
      for (let gridIdx = leftStart; gridIdx > leftEnd; gridIdx--) {
        unrolledGrid.push(squareGrid[leftStart][gridIdx]);
      }
      isGoingLeft = false;
      isGoingUp = true;
      leftStart--;
      leftEnd++;
      if (unrolledGrid.length === gridSize) {
        return unrolledGrid;
      }
    }
    if (isGoingUp) {
      for (let gridIdx = upStart; gridIdx > upEnd; gridIdx--) {
        unrolledGrid.push(squareGrid[gridIdx][upEnd]);
      }
      isGoingUp = false;
      isGoingRight = true;
      upStart--;
      upEnd++;
    }
  }
}

module.exports = unrollGrid;