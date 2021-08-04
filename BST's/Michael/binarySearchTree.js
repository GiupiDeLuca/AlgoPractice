// import util from "util"; // required for custom object logging
const util = require("util")
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
  }

  /**
   * @public
   * @return {any}
   */
  getValue() {
    //define
  }

  /**
   * @public
   * @param {BSTNode|null} left
   * @returns {BSTNode}
   */
  setLeft(left) {
    // define
  }

  /**
   * @public
   * @return {BSTNode}
   */
  getLeft() {
    //define
  }

  /**
   * @public
   * @return {boolean}
   */
  hasLeft() {
    //define
  }

  /**
   * @public
   * @param {BSTNode | null} right
   * @returns {BSTNode}
   */
  setRight(right) {
    //define
  }

  /**
   * @public
   * @return {BSTNode}
   */
  getRight() {
    //define
  }

  /**
   * @public
   * @return {boolean}
   */
  hasRight() {
    //define
  }

  /**
   * @public
   * @param {BSTNode} parent
   * @returns {BSTNode}
   */
  setParent(parent) {
    //define
  }

  /**
   * @public
   * @return {BSTNode}
   */
  getParent() {
    //define
  }

  /**
   * @public
   * @return {boolean}
   */
  hasParent() {
    //define
  }

  /**
   * @public
   * @return {boolean}
   */
  isRoot() {
    //define
  }

  /**
   * @public
   * @return {boolean}
   */
  isLeaf() {
    //define
  }
}

