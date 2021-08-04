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
    this.#left = left;
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
    this.#right = right;
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
    this.#parent = parent;
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
