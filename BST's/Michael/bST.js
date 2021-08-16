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
      this.#count += 1;
    } else {
      let currentNode = this.#root;
      while (!node.hasParent() || currentNode.getValue() !== node.getValue()) {
        if (node.getValue() < currentNode.getValue()) {
          if (currentNode.getLeft() === null) {
            currentNode.setLeft(node);
            this.#count += 1;
          } else {
            currentNode = currentNode.getLeft();
          }
        } else if (node.getValue() > currentNode.getValue()) {
          if (currentNode.getRight() === null) {
            currentNode.setRight(node);
            this.#count += 1;
          } else {
            currentNode = currentNode.getRight();
          }
        }
      }
    }
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
  // ADD A NICE WHILE LOOP HERE
  // find(value) {
  //   //define
  //   let currentNode = this.#root;
  //   if (currentNode.getValue() === value) {
  //     ///// is this.#root correct here?
  //     return currentNode; //// is #root basically the node I'm starting from each time?
  //   } else if (value < currentNode.getValue() && currentNode.hasLeft()) {
  //     this.#root = currentNode.getLeft()
  //     return this.find(value);
  //   } else if (value > currentNode.getValue() && currentNode.hasRight()) {
  //     this.#root =  currentNode.getRight()
  //     return this.find(value);
  //   } else {
  //     // throw new Error(`node with value ${value} not found`);
  //     return null
  //   }
  // }

  find(value) {
    //define
    let currentNode = this.#root;

    while (currentNode) {
      if (currentNode.getValue() === value) {
        return currentNode;
      } else if (value < currentNode.getValue()) {
        currentNode = currentNode.getLeft();
      } else if (value > currentNode.getValue()) {
        currentNode = currentNode.getRight();
      }
    }
    return null;
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
  // min(current = this.#root) {
  //   //define
  //   while (current.hasLeft()) {
  //     current = current.getLeft();
  //   }
  //   return current;
  // }

  // ///// OR RECURSION???? //////
  min(current = this.#root) {
    if (!current.hasLeft()) {
      return current;
    } else {
      current = current.getLeft();
      return this.min(current);
    }
  }
  // ////////////////////////////

  /**
   * Returns the node with the biggest value less or equal to k /// is "k" supposed to be value maybe?
   * @public
   * @param {number|string} value
   * @return {BSTNode|null}
   */
  lowerBound(value, current = this.#root) {
    //define
    if (current === null) return null;
    if (current.getValue() === value) return current;
    if (current.getValue() > value) {
      return this.lowerBound(value, current.getLeft());
    } else if (current.getValue() < value) {
      if (
        current.getRight().getValue() > value &&
        current.getRight().hasLeft()
      ) {
        return this.lowerBound(value, current.getRight());
      } else if (current.getRight().getValue() < value) {
        return this.lowerBound(value, current.getRight());
      }
    }
    return current;
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
        const nodeValue = biggerValues.shift();
        const result = this.find(nodeValue);
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

  // // COULD WE TALK ABOUT DIFFERENT USE CASES FOR THE VARIOUS TRAVERSE METHODS ? ///

  /**
   * Traverses the tree in-order (left-node-right)
   * @public
   * @param {function} cb
   */
  traverseInOrder(cb) {
    //define
    const recursiveTIO = (currentNode) => {
      if (currentNode.hasLeft()) {
        recursiveTIO(currentNode.getLeft());
      }

      cb(currentNode);

      if (currentNode.hasRight()) {
        recursiveTIO(currentNode.getRight());
      }
    };

    recursiveTIO(this.#root);
  }

  /**
   * Traverses the tree pre-order (node-left-right)
   * @public
   * @param {function} cb
   */
  traversePreOrder(cb) {
    //define
    const recursiveTIO = (currentNode) => {
      cd(currentNode);

      if (currentNode.hasLeft()) {
        recursiveTIO(currentNode.getLeft());
      }
      if (currentNode.hasRight()) {
        recursiveTIO(currentNode.getRight());
      }
    };
    recursiveTIO(this.#root);
  }

  /**
   * Traverses the tree post-order (left-right-node)
   * @public
   * @param {function} cb
   */
  traversePostOrder(cb) {
    //define
    const recursiveTIO = (currentNode) => {
      if (currentNode.hasLeft()) {
        recursiveTIO(currentNode.getLeft());
      }
      if (currentNode.hasRight()) {
        recursiveTIO(currentNode.getRight());
      }
      cb(currentNode);
    };
    recursiveTIO(this.#root);
  }

  /**
   * Clears the tree * @public
   */
  clear() {
    //define
    this.#root = null;
    return this;
  }

  // TRAVERSE THE TREE BREADTH FIRST

  BFT(tree, cb) {
    const treeArray = [tree.#root];
    let node = treeArray.shift();
    while (node) {
      cb(node);
      if (node.hasLeft()) {
        treeArray.push(node.getLeft());
      }
      if (node.hasRight()) {
        treeArray.push(node.getRight());
      }
      node = treeArray.shift();
    }
    // WHAT SHOULD I RETURN HERE???  IF ANYTHING? OR IS IT UP TO THE CALLBACK?
  }

  // FIND THE NODE PAIRS IN THE TREE THAT ADD UP TO SUM //

  findPair(tree, sum) {
    const array = [];
    tree.traverseInOrder((node) => array.push(node.getValue()));
    const result = [];
    array.forEach((value) => {
      let difference = sum - value;
      if (array.includes(difference) && difference !== value) {
        result.push([value, difference].sort((a, b) => a - b));
      }
    });
    return Array.from(new Set(result.map(JSON.stringify)), JSON.parse);
  }
}

const tree = new BinarySearchTree();
tree.insert(4);
tree.insert(2);
tree.insert(6);
tree.insert(1);
tree.insert(3);
tree.insert(5);
tree.insert(7);
console.log("tree", tree);
const test = [];
tree.BFT(tree, (node) => test.push(node));
console.log("test", test);

console.log(tree.findPair(tree, 8));

module.exports = BinarySearchTree;
