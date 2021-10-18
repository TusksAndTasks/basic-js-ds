  
const { Node } = require('../extensions/list-tree.js')

/**
 * Implement simple binary search tree according to task description
 * using Node from extensions
 */
module.exports = class BinarySearchTree {
  constructor() {
    this.activeRoot = null
  }
  root() {
    return this.activeRoot
  }

  add(data) {
    this.activeRoot = addNewNode(this.activeRoot, data)
    function addNewNode(node, data) {

      if (!node) {
        return new Node(data)
      }
      
      else if (data < node.data) {
        node.left = addNewNode(node.left, data)
      } 
      else if (data > node.data) {
        node.right = addNewNode(node.right, data)
      }

      else if (node.data === data) {
        return node
      }

      return node
    }
  }

  has(data) {
    return isNodeHere(this.activeRoot, data)
    function isNodeHere(node, data) {
      if (!node) {
        return false
      }

      if (node.data === data) {
        return true
      }

      if (data < node.data) {
        return isNodeHere(node.left, data)
      } else {
        return isNodeHere(node.right, data)
      }
    }
  }

  find(data) {
    return findNode(this.activeRoot, data)
    function findNode(node, data) {
      if (!node) {
        return null
      }

      if (node.data === data) {
        return node
      }

      if (data < node.data) {
        return findNode(node.left, data)
      } else {
        return findNode(node.right, data)
      }
    }
  }

  remove(data) {
  }

  min() {
    let leftTracker = this.activeRoot
    
    if (leftTracker === null){
      return null;
    }
   
    let searchMinimalValue = (leftTracker) =>{
      if (leftTracker.left === null){
        return leftTracker.data
      } else{
        return searchMinimalValue(leftTracker.left)
      }
}
      return searchMinimalValue(leftTracker);
    }

  

  max() {
    let rightTracker = this.activeRoot
    
    if (rightTracker === null){
      return null;
    }
   
    let searchMaximalValue = (rightTracker) =>{
      if (rightTracker.right === null){
        return rightTracker.data
      } else{
        return searchMaximalValue(rightTracker.right)
      }
}
      return searchMaximalValue(rightTracker);
    }
}