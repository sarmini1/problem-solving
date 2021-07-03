  //for (let gridIdx = 0; gridIdx < squareGrid.length; gridIdx++) {
    while (revolutionCount < squareGrid.length) {
      if (isGoingRight) {
        for (let valIdx = 0; valIdx < squareGrid[startingPoint].length; valIdx++) {
          unrolledGrid.push(squareGrid[startingPoint][valIdx]);
        }
        isGoingRight = false;
        isGoingDown = true;
        gridLengthTracker--;
        startingPoint++;
      }
      if (isGoingDown) {
        for (let innerGridIdx = revolutionCount; innerGridIdx < squareGrid.length; innerGridIdx++) {
          unrolledGrid.push(squareGrid[innerGridIdx][gridLengthTracker]);
        }
        isGoingDown = false;
        isGoingLeft = true;
        //gridLengthTracker--;
      }
      if (isGoingLeft) {
        for (let leftIdx = gridLengthTracker - 1; leftIdx > stoppingPoint; leftIdx--) {
          unrolledGrid.push(squareGrid[gridLengthTracker][leftIdx]);
        }
        isGoingLeft = false;
        isGoingUp = true;
        stoppingPoint++;
        //gridLengthTracker--;
      }
      if (isGoingUp) {
        for (let upIdx = gridLengthTracker - 1; upIdx > startingPoint; upIdx--) {
          unrolledGrid.push(squareGrid[upIdx][startingPoint]);
        }
        isGoingUp = false;
        //   isGoingRight = true;
        //   startingPoint++;
      }
      revolutionCount++;
    }