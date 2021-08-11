// import util from "util"; // required for custom object logging 2
const util = require("util");
const BSTNode = require("./BSTNode");
/**
 * 
 @class BinarySearchTree5 
 */
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
        if (this.#left === null) {
          this.#left = node;
        } else {
          this.#left.insert(value);
        }
      } else if (node.getValue() > this.#root.getValue()) {
        if (this.#right === null) {
          this.#right = node;
        } else {
          this.#right.insert(value);
        }
      }
    }
    this.#count += 1;
    return this;
  }

  /**
   * Checks if a value exists in the tree
   * @public
   * @param {number|string} value
   * @return {boolean}
   */
  has(value) {
    //define
    return this.find(value) !== null;
  }

  /**
   * Finds a
   * @public
   * @param {number|string} value
   * @return {BSTNode}
   */
  find(value) {
    //define
    if (this.#root.getValue() === value) {
      ///// is this.#root correct here?
      return this.#root; //// is #root basically the node I'm starting from each time?
    } else if (value < this.#root.getValue() && this.#left) {
      return this.#left.find(value);
    } else if (value > this.#root.getValue() && this.#right) {
      return this.#right.find(value);
    } else {
      throw new Error(`node with value ${value} not found`);
    }
  }

  /**
   * Finds the node with max value (most right) in the tree
   * @public
   * @param {BSTNode} [current]
   * @return {BSTNode}
   */
  max(current = this.#root) {
    //define
    while (current.hasRight()) {
      current = current.getRight();
    }
    return current;
  }

  /**
   * Finds the node with min value (most left) in the tree
   * @public
   * @param {BSTNode} [current]
   * @return {BSTNode}
   */
  min(current = this.#root) {
    //define
    while (current.hasLeft()) {
      current = current.getLeft();
    }
    return current;
  }
  ///// OR RECURSION???? //////
  // min(current = this.#root) {
  //   if (!current.hasLeft()) {
  //     return current
  //   } else {
  //     return current.getLeft().min(current)
  //   }
  // }
  ////////////////////////////

  /**
   * Returns the node with the biggest value less or equal to k /// is "k" supposed to be value maybe?
   * @public
   * @param {number|string} value
   * @return {BSTNode|null}
   */
  lowerBound(value, current = this.#root) {
    //define
    if (current) {
      const arrayWithValues = [];
      this.traverseInOrder((node) => arrayWithValues.push(node.getValue()));

      const lowerValues = arrayWithValues.filter((val) => val <= value);

      if (lowerValues.length > 0) {
        const result = this.find(lowerValues.pop());
        return result;
      } else {
        return null;
      }
    } else {
      throw new Error(`tree is empty`);
    }
  }

  /**
   * Returns the node with the smallest value bigger than value
   * @public
   * @param {number|string} value
   * @return {BSTNode|null}
   */
  upperBound(value, current = this.#root) {
    //define
    if (current) {
      const arrayWithValues = [];
      this.traverseInOrder((node) => arrayWithValues.push(node.getValue()));

      const biggerValues = arrayWithValues.filter((val) => val > value);

      if (biggerValues.length > 0) {
        const result = this.find(biggerValues.shift());
        return result;
      } else {
        return null;
      }
    } else {
      throw new Error(`tree is empty`);
    }
  }

  /**
   * Returns the root node
   * @public
   * @return
   */
  root() {
    //define
    return this.#root;
  }

  /**
   * Returns the nodes count
   * @public
   * @return {number}
   */
  count() {
    //define
    const arrayWithValues = [];
    this.traverseInOrder((node) => arrayWithValues.push(node.getValue()));
    return arrayWithValues.length;
  }

  /**
   * Removes a node by its value
   * @public
   * @param {number|string} value
   * @return {boolean}                    // why return boolean??
   */
  remove(value) {
    //define
    const nodeToRemove = this.find(value);
    if (nodeToRemove) {
      const parent = nodeToRemove.getParent();
      parent.setRight(nodeToRemove.getRight());
      parent.setLeft(nodeToRemove.getLeft());
      return true;
    } else {
      return false;
    }
  }

  // COULD WE TALK ABOUT DIFFERENT USE CASES FOR THE VARIOUS TRAVERSE METHODS ? ///

  /**
   * Traverses the tree in-order (left-node-right)
   * @public
   * @param {function} cb
   */
  traverseInOrder(cb) {
    //define
    let current = this.#root;

    if (current.getLeft()) {
      current.getLeft().traverseInOrder(cb);
    }

    cb(current);

    if (current.getRight()) {
      current.getRight().traverseInOrder(cb);
    }
  }

  /**
   * Traverses the tree pre-order (node-left-right)
   * @public
   * @param {function} cb
   */
  traversePreOrder(cb) {
    //define
    let current = this.#root;

    cb(current);

    if (current.getLeft()) {
      current.getLeft().traverseInOrder(cb);
    }
    if (current.getRight()) {
      current.getRight().traverseInOrder(cb);
    }
  }

  /**
   * Traverses the tree post-order (left-right-node)
   * @public
   * @param {function} cb
   */
  traversePostOrder(cb) {
    //define
    let current = this.#root;

    if (current.getLeft()) {
      current.getLeft().traverseInOrder(cb);
    }
    if (current.getRight()) {
      current.getRight().traverseInOrder(cb);
    }
    cb(current);
  }

  /**
   * Clears the tree * @public
   */
  clear() {
    //define
    this.#root = null;
    return this;
  }
}

const tree = new BinarySearchTree();
tree.insert(4);

console.log(tree);

module.exports = BinarySearchTree;
