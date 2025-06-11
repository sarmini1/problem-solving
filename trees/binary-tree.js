"use strict";

/** BinaryTreeNode: node for a general tree. */

class BinaryTreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }

  /**
   * minDepthToIncompleteNode(): return the minimum depth of the tree to an
   * incomplete node-- that is, the length of the shortest path from the root to
   * a node with less than two children.
   */
  minDepthToIncompleteNode() {
    const toSearch = [[this, 1]];
    const depths = [];

    while (toSearch.length) {
      const [currNode, currDepth] = toSearch.pop();

      // If the current node has fewer than two children, we've found an incomplete node
      // Push the current depth to the depths array
      if (!currNode.left || !currNode.right) {
        depths.push(currDepth);
      } else {
        toSearch.push([currNode.left, currDepth + 1]);
        toSearch.push([currNode.right, currDepth + 1]);
      }

    }
    return Math.min(...depths);
  }

  /**
   * maxDepth(): return the maximum depth from the invoking node -- that is,
   * the length of the longest path from the invoking node to a leaf.
   */
  maxDepth() {
    const toSearch = [[this, 1]];
    let maxDepth = 1;

    while (toSearch.length) {
      const [currNode, currDepth] = toSearch.pop();

      // If the current node has no children at all, it's a leaf
      // Store the depth if it's greater than the current max depth
      if (!currNode.left && !currNode.right) {
        maxDepth = currDepth > maxDepth ? currDepth : maxDepth;
      } else {
        if (currNode.left) {
          toSearch.push([currNode.left, currDepth + 1]);
        }
        if (currNode.right) {
          toSearch.push([currNode.right, currDepth + 1]);
        }
      }
    }
    return maxDepth;
  }

  /**
   * minDepth(): return the minimum depth from the invoking node -- that is,
   * the length of the shortest path from the invoking node to a leaf.
   */
  minDepth() {
    const toSearch = [[this, 1]];
    let minDepth = 1;

    while (toSearch.length) {
      const [currNode, currDepth] = toSearch.pop();

      // If the current node has no children at all, it's a leaf
      // Store the depth if it's greater than the current max depth
      if (!currNode.left && !currNode.right) {
        if (minDepth === 1) { // if this is the first min depth we've found, set it to the current depth
          minDepth = currDepth;
        } else {
          minDepth = currDepth < minDepth ? currDepth : minDepth;
        }
      } else {
        if (currNode.left) {
          toSearch.push([currNode.left, currDepth + 1]);
        }
        if (currNode.right) {
          toSearch.push([currNode.right, currDepth + 1]);
        }
      }
    }
    return minDepth;

  }

  /**
   * nextLarger(lowerBound): return the smallest value from the invoking node
   * that is larger than lowerBound. Return null if no such value exists.
   */
  nextLarger(lowerBound) {
    const toSearch = [this];
    let smallest = null;

    while (toSearch.length) {
      const currNode = toSearch.pop();
      const currVal = currNode.val;

      if (currVal > lowerBound) {
        if (!smallest) { // always set it if it's the first one we've found
          smallest = currVal;
        } else {
          smallest = currVal < smallest ? currVal : smallest;
        }
      }
      // add children to search list
      if (currNode.left) {
        toSearch.push(currNode.left);
      }
      if (currNode.right) {
        toSearch.push(currNode.right);
      }
    }
    return smallest;
  }
}

class BinaryTree {
  constructor(root = null) {
    this.root = root;
  }

  /**
   * minDepthToIncompleteNode(): return the minimum depth of the tree to an
   * incomplete node-- that is, the length of the shortest path from the root to
   * a node with less than two children.
   */
  minDepthToIncompleteNode() {
    if (!this.root) return 0;

    const root = this.root;
    const minDepth = root.minDepthToIncompleteNode();
    return minDepth;
  }

  /**
   * maxDepth(): return the maximum depth of the tree -- that is,
   * the length of the longest path from the root to a leaf.
   */
  maxDepth() {
    if (!this.root) return 0;

    const root = this.root;
    const maxDepth = root.maxDepth();
    return maxDepth;
  }

  /**
   * minDepth(): return the minimum depth of the tree -- that is,
   * the length of the shortest path from the root to a leaf.
   */
  minDepth() {
    if (!this.root) return 0;

    const root = this.root;
    const minDepth = root.minDepth();
    return minDepth;
  }

  /**
   * nextLarger(lowerBound): return the smallest value in the tree
   * that is larger than lowerBound. Return null if no such value exists.
   */
  nextLarger(lowerBound) {
    if (!this.root) return null;

    const root = this.root;
    const nextLarger = root.nextLarger(lowerBound);
    return nextLarger;
  }

  /**
   * findLevelAndParent: return the depth and parent node of a given node.
   * Return [null, null] if the node does not exist.
   */
  findLevelAndParent(node) {
    if (!this.root) return [null, null];

    const toSearch = [[this.root, 1]];

    while (toSearch.length) {
      const [currNode, currLevel] = toSearch.pop();

      if (currNode.left === node) { // currNode.left is the parent
        return [currNode, currLevel + 1];
      }
      if (currNode.right === node) {
        return [currNode, currLevel + 1];
      }

      // keep searching if neither of the current children are it
      if (currNode.left) {
        toSearch.push([currNode.left, currLevel + 1]);
      }
      if (currNode.right) {
        toSearch.push([currNode.right, currLevel + 1]);
      }
    }

    return [null, null];
  }

  /**
   * areCousins(node1, node2): determine whether two nodes are cousins
   * (i.e. are at the same level but have different parents. )
   */
  areCousins(node1, node2) {
    const [node1Parent, node1Level] = this.findLevelAndParent(node1);
    const [node2Parent, node2Level] = this.findLevelAndParent(node2);

    if (node1Parent === node2Parent) return false;
    if (node1Level !== node2Level) return false;

    return true;
  }
}

module.exports = { BinaryTree, BinaryTreeNode };
