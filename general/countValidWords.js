"use strict";

// Simple node class for binary tree nodes
class Node {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

// Binary tree class
class Tree {
  constructor(root = null) {
    this.root = root;
  }

  //TODO: add other methods for finding specific values, deleting values, etc.*/

  /**
   * Traverses through a tree instance via DFS and returns a count of the
   * number of valid words contained. If a node has a value of "STOP",
   * neither that node nor its childen get counted.
   */
  countValidWords() {

    //Fail fast if tree is empty
    if (this.root === null) {
      return 0;
    }

    //Note: This method uses DFS, so we're utilizing a Stack via an array.
    // We could also use BFS with a queue via an array, though the array
    // wouldn't give us constant runtime in that case. May not be an issue
    // up front but for a larger tree, we'd want to switch to a proper queue.
    let toVisitNodesStack = [this.root];
    let validWordCount = 0;

    while (toVisitNodesStack.length) {
      let current = toVisitNodesStack.pop();

      if (current.val !== "STOP") {
        validWordCount++;
        if (current.left !== null) {
          toVisitNodesStack.push(current.left);
        }
        if (current.right !== null) {
          toVisitNodesStack.push(current.right);
        }
      }
    }
    return validWordCount;
  }

}

module.exports = { Node, Tree };
