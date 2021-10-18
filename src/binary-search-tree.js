const { NotImplementedError } = require('../extensions/index.js');

 const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
module.exports = class BinarySearchTree {

  
  constructor(){
    this.activeRoot = null;
  }

  root() {
    return this.activeRoot;
  }

  add( data ) {
    this.activeRoot = addNewNode(this.activeRoot, data);
   
    function addNewNode(node, data){

    if (!node) {
      return new Node(data);
    }

    else if (node.value < data){
      this.activeRoot = addNewNode(node.left, data);
    }

    else if (data < node.value){
      this.activeRoot = addNewNode(node.right, data);
    }

    else if (node.value === data){
      return node;
    }

    return node;
}

  }

  has(data) {
    return searchWithin(this.activeRoot, data);

    function searchWithin(node, data) {
      if (!node) {
        return false;
      }

      if (node.data === data) {
        return true;
      }

      return data < node.data ? 
        searchWithin(node.left, data) : 
        searchWithin(node.right, data);
    }
  }

  find(/* data */) {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  remove(/* data */) {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  min() {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  max() {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

}