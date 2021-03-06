// import util from "util"; // required for custom object logging
const util = require("util");
/**
 * @class BSTNode // Binary Search Tree Node
 */
class BSTNode {
  #value;
  #left;
  #right;
  #parent;
  constructor(value) {
    this.#value = value;
    this.#left = null;
    this.#right = null;
    this.#parent = null;
  }
  [util.inspect.custom](depth, opts) {
    return `${this.#value}`;
  }

  /**
   * @public
   * @param {any} value
   * @returns {BSTNode}
   */
  setValue(value) {
    //define
    this.#value = value;
    return this;
  }

  /**
   * @public
   * @return {any}
   */
  getValue() {
    //define
    return this.#value;
  }

  /**
   * @public
   * @param {BSTNode|null} left
   * @returns {BSTNode}
   */
  setLeft(left) {
    // define
    if (left === null || left instanceof BSTNode) {
      this.#left = left;
      if (left) left.setParent(this);
    } else {
      throw Error(`setLeft() expects instance of Node or null`);
    }
    return this;
  }

  /**
   * @public
   * @return {BSTNode}
   */
  getLeft() {
    //define
    return this.#left;
  }

  // `get left(){}` will allow to have a more readable variale "example: this.left"
  // it's still read-only
  // I would have to create a set left() in order to be able to change its value. 
  //  |
  //  V
  // /**
  //  * @public
  //  * @return {BSTNode}
  //  */
  // get left() {
  //   //define
  //   return this.#left;
  // }

  /**
   * @public
   * @return {boolean}
   */
  hasLeft() {
    //define
    return this.#left !== null;
  }

  /**
   * @public
   * @param {BSTNode | null} right
   * @returns {BSTNode}
   */
  setRight(right) {
    //define
    if (right === null || right instanceof BSTNode) {
      this.#right = right;
      if (right) right.setParent(this);
    } else {
      throw Error(`setRight() expects instance of Node or null`);
    }

    return this;
  }

  /**
   * @public
   * @return {BSTNode}
   */
  getRight() {
    //define
    return this.#right;
  }

  /**
   * @public
   * @return {boolean}
   */
  hasRight() {
    //define
    return this.#right !== null;
  }

  /**
   * @public
   * @param {BSTNode} parent
   * @returns {BSTNode}
   */
  setParent(parent) {
    //define
    if (parent === null || parent instanceof BSTNode) {
      this.#parent = parent;
    } else {
      throw Error(`setParent() expects instance of Node or null`);
    }
    return this;
  }

  /**
   * @public
   * @return {BSTNode}
   */
  getParent() {
    //define
    return this.#parent;
  }

  /**
   * @public
   * @return {boolean}
   */
  hasParent() {
    //define
    return this.#parent !== null;
  }

  /**
   * @public
   * @return {boolean}
   */
  isRoot() {
    //define
    return this.hasParent() === false;
  }

  /**
   * @public
   * @return {boolean}
   */
  isLeaf() {
    //define
    return this.hasParent() === true;
  }
}

module.exports = BSTNode;
