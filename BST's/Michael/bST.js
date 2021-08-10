// import util from "util"; // required for custom object logging 2
const util = require("util");
const BSTNode = require("./BSTNode");
/**
 * @class BinarySearchTree5 */
class BinarySearchTree {
  #root;
  #count;
  constructor() {
    this.#root = null;
    this.#count = 0;
  }

  [util.inspect.custom](depth, opts) {
    function print2DUtil(root, space, statement) {
      let COUNT = 10;
      // Base case
      if (root === null) return "";

      // Increase distance between levels
      space += COUNT;

      // Process right child first
      statement = print2DUtil(root.getRight(), space, statement) + statement;

      // Print current node after space
      // count

      for (let i = COUNT; i < space; i++) {
        statement += " ";
      }

      statement += root.getValue() + "\n";
      // Process left child
      statement += print2DUtil(root.getLeft(), space, "");
      return statement;
    }

    const statement = print2DUtil(this.#root, 0, "");
    return statement;
  }

  /**
   * Inserts a node with a value into the tree
   * @public
   * @param {number|string} value
   * @return {BinarySearchTree}
   */
  insert(value) {
    //define
    const node = new BSTNode(value);
    if (this.#root === null) {
      this.#root = node;
      
    } else {
        // node.setParent(this.#root)
        if (node.getValue() < this.#root.getValue()) {
            
        }
    }
    this.#count += 1
    return this;
  }

  /**
   * Checks if a value exists in the tree
   * @public
   * @param {number|string} value
   * @return
   */
  has(value) {
    //define
  }

  /**
   * Finds a
   * @public
   * @param {number|string} value * @return {BSTNode}
   */
  find(value) {
    //define
  }

  /**
   * Finds the node with max value (most right) in the tree * @public
   * @param {BSTNode} [current]
   * @return {BSTNode}
   */
  max(current = this.#root) {
    //define
  }

  /**
   * Finds the node with min value (most left) in the tree * @public
   * @param {BSTNode} [current]
   * @return {BSTNode}
   */
  min(current = this.#root) {
    //define
  }

  /**
   * Returns the node with the biggest value less or equal to k
   * @public
   * @param {number|string} value
   * @return {BSTNode|null}
   */
  lowerBound(value, current = this.#root) {
    //define
  }

  /**
   * Returns the node with the smallest value bigger than value
   * @public
   * @param {number|string} value
   * @return {BSTNode|null}
   */
  upperBound(value, current = this.#root) {
    //define
  }

  /**
   * Returns the root node
   * @public
   * @return
   */
  root() {
    //define
  }

  /**
   * Returns the nodes count
   * @public
   * @return {number}
   */
  count() {
    //define
  }

  /**
   * Removes a node by its value
   * @public
   * @param {number|string} value
   * @return {boolean}
   */
  remove(value) {
    //define
  }

  /**
   * Traverses the tree in-order (left-node-right)
   * @public
   * @param {function} cb
   */
  traverseInOrder(cb) {
    //define
  }

  /**
   * Traverses the tree pre-order (node-left-right)
   * @public
   * @param {function} cb
   */
  traversePreOrder(cb) {
    //define
  }

  /**
   * Traverses the tree post-order (left-right-node)
   * @public
   * @param {function} cb
   */
  traversePostOrder(cb) {
    //define
  }

  /**
   * Clears the tree * @public
   */
  clear() {
    //define
  }
}
