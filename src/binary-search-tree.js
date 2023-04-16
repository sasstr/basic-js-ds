const { NotImplementedError } = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/

class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
};

class BinarySearchTree {

  constructor() {
    this.base = null;
  } 

  root() {
    return this.base;
  }

  add(date) {
    this.base = addElement(this.base, date);

    function addElement(node, value) {
      if (!node) return new Node(value);
      if (node.data === value) return node;
      value < node.data ? node.left = addElement(node.left, value) :
      node.right = addElement(node.right, value);
      return node;
    }
  }

  has(data) {
    return searchElement(this.base, data);

    function searchElement(node, value) {
      if (!node) return false;
      if (node.data === value) return true;
      return  searchElement((value < node.data ? node.left: node.right), value);
    }
  }

  find(data) {
    return findElement(this.base, data);

    function findElement(node, value) {
      if (!node) return null;
      if (node.data === value) return node;
      return findElement((value < node.data ? node.left : node.right), value);
    }
  }

  remove(data) {
    this.base = removeElement(this.base, data);

    function removeElement(node, value) {
      if (!node) return null;

      if (value < node.data) {
        node.left = removeElement(node.left, value);
        return node;
      } 
      if (value > node.data) {
        node.right = removeElement(node.right, value);
        return node;
      } else {
        if (!node.right && !node.left) return null;

        if (!node.left) {
          node = node.right;
          return node;
        }
        if (!node.right) {
          node = node.left;
          return node;
        }

        let minRightElement = node.right;
        while (minRightElement.left) {
          minRightElement = minRightElement.left;
        }

        node.data = minRightElement.data;
        node.right = removeElement(node.right, minRightElement.data);
        return node;
      }
    }
  }

  min() {
    return getMinElement(this.base);

    function getMinElement(node) {
      if (!node) return null;

      let minAmount = node.left;
      while (minAmount.left) {
        minAmount = minAmount.left;
      }
      return minAmount.data;
    }
  }

  max() {
    return getMaxElement(this.base);

    function getMaxElement(node) {
      if (!node) return null;

      let maxAmount = node.right;
      while (maxAmount.right) {
        maxAmount = maxAmount.right;
      }
      return maxAmount.data;
    }
  }
};


module.exports = {
  BinarySearchTree
};