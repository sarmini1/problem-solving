"use strict";

/** TreeNode: node for a general tree. */

class TreeNode {
  constructor(val, children = []) {
    this.val = val;
    this.children = children;
  }

  /**
   * sumValues(): add up all values of invoking node and its children.
   * Returns sum as an integer.
   */
  sumValues() {
    const toSum = [this];
    let sum = 0;

    while (toSum.length) {
      const curr = toSum.pop();
      sum += curr.val;

      for (let child of curr.children) {
        toSum.push(child);
      }
    }
    return sum;
  }

  /**
   * countEvens(): starting from the invoking node and moving through its
   * children, count how many nodes have even values. Returns that count as
   * an integer.
   */
  countEvens() {
    const toCount = [this];
    let count = 0;

    while (toCount.length) {
      const curr = toCount.pop();
      if (curr.val % 2 === 0) count++;

      for (let child of curr.children) {
        toCount.push(child);
      }
    }
    return count;

  }

  /**
   * numGreater(lowerBound): starting from the invoking node and moving through
   * its children, return a count of the number of nodes whose value is greater
   * than lowerBound.
   */
  numGreater(lowerBound) {
    const toCount = [this];
    let count = 0;

    while (toCount.length) {
      const curr = toCount.pop();
      if (curr.val > lowerBound) count++;

      for (let child of curr.children){
        toCount.push(child);
      }
    }
    return count;
  }
}

class Tree {
  constructor(root = null) {
    this.root = root;
  }

  /** sumValues(): add up all values in the tree. */
  sumValues() {
    if (!this.root) return 0;

    const root = this.root;
    const sum = root.sumValues();
    return sum;
  }

  /** countEvens(): count all nodes in the tree that have even values. */
  countEvens() {
    if (!this.root) return 0;

    const root = this.root;
    const count = root.countEvens();
    return count;
  }

  /**
   * numGreater(lowerBound): return a count of the number of nodes
   * whose value is greater than lowerBound.
   */
  numGreater(lowerBound) {
    if (!this.root) return 0;

    const root = this.root;
    const count = root.numGreater(lowerBound);
    return count;
  }
}

module.exports = { Tree, TreeNode };
