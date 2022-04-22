"use strict";

// simple node class
class Node {
  constructor(val) {
    this.val = val;
    this.next = undefined;
  }
}

// simple list class
class LinkedList {
  constructor() {
    this.head = undefined;
    this.tail = undefined;
    this.length = 0;
  }

  // TODO add other methods for removing nodes, searching for a node, etc.

  /** Adds a new node to a linked list instance. */
  push(val) {

    // TODO add check for whether the given value is 10 or greater. If so,
    // we'd probably want to split that up into individual digits
    // and for each, push a new Node. This would ensure that each Node has a
    // value of 0-9.

    let newNode = new Node(val);

    // Handle case of an empty list
    if (this.head === undefined) {
      this.head = newNode;
      this.tail = this.head;
    }
    // If a tail already exists
    else if (this.tail !== undefined) {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
  }

  /**
   * Accepts two linked lists and returns a new linked list containing
   * the sum of each node.
   */
  static sumLists(listOne, listTwo) {

    let sumsList = new LinkedList();
    let currentNodes = [listOne.head, listTwo.head];
    let carriedOver = 0;
    let desiredListLength;

    // Define how long our desired list should be, depending on what
    // the longer of the two given lists is. This doesn't consider the list
    // values, so there's a final check at the end of this function that
    // handles whether or not a last node needs to be placed, accounting
    // for any final carriedOver value.
    if (listOne.length > listTwo.length) {
      desiredListLength = listOne.length;
    }
    else if (listOne.length < listTwo.length) {
      desiredListLength = listTwo.length;
    }
    else {
      desiredListLength = listTwo.length;
    }

    // Run while loop for as long as our new list's length is less than
    // the desired length
    while (sumsList.length < desiredListLength) {

      //To handle cases of uneven list sizes, check if both incoming nodes
      // are undefined. If either of them are, replace undefined with new
      // Nodes with value 0 so that there exists some numeric value to add.
      currentNodes[0] = currentNodes[0] === undefined
        ? new Node(0)
        : currentNodes[0];

      currentNodes[1] = currentNodes[1] === undefined
        ? new Node(0)
        : currentNodes[1];

      let sumNodeVals = currentNodes[0].val
        + currentNodes[1].val
        + carriedOver;

      //If the sum of our values & anything carried over is at least 10,
      // make sure to reset the new carriedOver value appropriately.
      if (sumNodeVals >= 10) {
        carriedOver = 1;
        sumsList.push(sumNodeVals - 10);
      }
      else {
        sumsList.push(sumNodeVals)
        carriedOver = 0;
      }

      currentNodes = [currentNodes[0].next, currentNodes[1].next];
    }

    //If we have any values leftover after while loop,
    // push new node to end of list with that value.
    if (carriedOver === 1) {
      sumsList.push(carriedOver);
      carriedOver = 0;
    }
    return sumsList;
  }
}

module.exports = LinkedList;