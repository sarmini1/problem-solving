/** Node class for graph. */

class Node {
  constructor(value, adjacent = new Set()) {
    this.value = value;
    this.adjacent = adjacent;
  }
}


/** Graph class. */

class Graph {
  constructor() {
    this.nodes = new Set();
  }

  /** Add Node instance and add it to nodes property on graph. */
  addNode(node) {
    this.nodes.add(node);
  }

  /** Add array of new Node instances and adds to them to nodes property. */
  addNodes(nodes) {
    for (let node of nodes) {
      this.addNode(node);
    }
  }

  /** Add edge between nodes n1,n2 */
  addEdge(n1, n2) {
    n1.adjacent.add(n2);
    n2.adjacent.add(n1);
  }

  /** Remove edge between nodes n1,n2 */
  removeEdge(n1, n2) {
    n1.adjacent.delete(n2);
    n2.adjacent.delete(n1);
  }

  /** Remove node from graph:
   *
   * - remove it from nodes property of graph
   * - update any adjacency lists using that node
   */
  removeNode(node) {
    this.nodes.delete(node);
    node.adjacent.forEach((sib) => sib.adjacent.delete(node));
  }

  /** Traverse graph with DFS and returns array of Node values */
  depthFirstSearch(start) {
    const toSearch = [start];
    const searchedNodes = [];

    while (toSearch.length) {
      const currNode = toSearch.pop();
      searchedNodes.push(currNode.value);

      for (let node of currNode.adjacent) {
        if (!searchedNodes.includes(node.value)) {
          toSearch.push(node);
        }
      }
    }
    return searchedNodes;
  }

  /** Traverse graph with BDS and returns array of Node values */
  breadthFirstSearch(start) {
    const toSearch = [start]; // we don't have a proper Queue class, so using an array even though time complexity isn't ideal
    const searchedNodes = [];

    while (toSearch.length) {
      const currNode = toSearch.shift();
      searchedNodes.push(currNode.value);

      for (let node of currNode.adjacent) {
        if (!searchedNodes.includes(node.value)) {
          toSearch.push(node);
        }
      }
    }
    return searchedNodes;
  }

  /**
   * Find the distance of the shortest path from the start node to the end node.
   * Return undefined if one of the nodes is not in the graph.
   */
  distanceOfShortestPath(start, end) {
    if (!this.nodes.has(start) || !this.nodes.has(end)) return;

    const toSearchDFS = [[start, 0]];
    const seenDFS = [];
    let dfsMin;

    while (toSearchDFS.length) {
      const [currNode, currDistance] = toSearchDFS.pop();
      seenDFS.push(currNode);

      if (currNode === end) dfsMin = currDistance;
      else {
        for (let node of currNode.adjacent) {
          if (!seenDFS.includes(node)) {
            toSearchDFS.push([node, currDistance + 1]);
          }
        }
      }
    }

    const toSearchBFS = [[start, 0]];
    const seenBFS = [];
    let bfsMin;

    while (toSearchBFS.length) {
      const [currNode, currDistance] = toSearchBFS.shift();
      seenBFS.push(currNode);

      if (currNode === end) bfsMin = currDistance;
      else {
        for (let node of currNode.adjacent) {
          if (!seenBFS.includes(node)) {
            toSearchBFS.push([node, currDistance + 1]);
          }
        }
      }
    }

    return Math.min(...[dfsMin, bfsMin]);
  }
}

module.exports = { Graph, Node };
