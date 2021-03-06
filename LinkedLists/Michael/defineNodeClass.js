class Node {
  constructor(value, next = null) {
    this._value = value;
    this.setNext(next);
  }

  /**
   * @public
   * @param {any} value
   * @returns {Node}
   */
  setValue(value) {
    //define
    this._value = value;
    return this;
  }

  /**
   * @public
   * @returns {any} value
   */
  getValue() {
    //define
    return this._value;
  }

  /**
   * @public
   * @param {Node} [next]
   * @returns {Node}
   */
  setNext(next) {
    if (next === null || next instanceof Node) {
      this._next = next;
    } else {
      throw Error(`setNext() expects instance of Node or null`);
    }
    return this;
  }

  /**
   * @public
   * @returns {Node}
   */
  getNext() {
    //define
    return this._next;
  }

  /**
   * @public
   * @returns {boolean}
   */
  hasNext() {
    //define
    return this._next instanceof Node;
  }
}
// const node2 = new Node(7);
// const node1 = new Node(5, node2);

// console.log(node1);
// node2.setValue(8);
// console.log(node1.setValue(6));

class LinkedList {
  constructor() {
    this._head = null;
    this._count = 0;
  }

  /**
   * Adds a node at the beginning of the list.
   * @public
   * @param {any} value
   * @returns {Node}
   */
  // insertFirst(value) {
  //   //define
  //   const node1 = new Node(value);
  //   if (this._head !== null) {
  //     node1.setNext(this._head);
  //   }
  //   this._head = node1;
  //   this._count += 1;
  //   return this._head;
  // }
  insertFirst(value) {
    //define
    this._head = new Node(value, this._head);
    this._count += 1;
    return this._head;
  }

  /**
   * Adds a node at the end of the list.
   * @public
   * @param {any} value
   * @param {Node} [startingNode]
   * @returns {Node}
   */
  insertLast(value, startingNode) {
    //define
    const lastNode = new Node(value);
    if (startingNode) {
      while (startingNode.getNext() !== null) {
        startingNode = startingNode.getNext();
      }
      if (startingNode.getNext() === null) {
        startingNode.setNext(lastNode);
        this._count += 1;
      }
    } else {
      this._head = lastNode;
    }

    return lastNode;
  }

  /**
   * Adds a node at a specific position.
   * @public
   * @param {number} position
   * @param {any} value
   * @returns {Node}
   */
  insertAt(position, value) {
    //define
    const nodeToInsert = new Node(value);
    let currentPosition = 1;
    let currentNode = this._head;

    while (currentPosition < position) {
      currentNode = currentNode.getNext();
      currentPosition += 1;
    }
    nodeToInsert.setNext(currentNode.getNext());
    currentNode.setNext(nodeToInsert);
    this._count += 1;
    return nodeToInsert;
  }

  /**
   * Removes the head node.
   * @public
   * @returns {Node}
   */
  removeFirst() {
    //define
    this._head = this._head.getNext();
    this._count = this._count - 1;
    return this;
  }

  /**
   * Removes the last node in the list.
   * @public
   * @returns {Node}
   */
  removeLast() {
    //define
    let currentNode = this._head;
    while (currentNode.getNext().getNext() !== null) {
      currentNode = currentNode.getNext();
    }
    currentNode.setNext(null);
    this._count -= 1;
    return this;
  }

  /**
   * Removes all nodes based on a callback.
   * @public
   * @param {function} callback
   * @returns {number} number of removed nodes
   */
  removeEach(callback) {
    //define
    if (typeof callback !== "function") {
      throw new Error(`removeEach method needs callback to be a function`);
    }
    let count = 0;
    this.forEach((node, position) => {
      if (callback(node)) {
        if (position === 0) {
          this._head = node.getNext();
          count += 1;
        }
        this.removeAt(position);
        count += 1;
      }
    });
    return count;
  }

  /**
   * Removes a node at a specific position.
   * @public
   * @param {number} position
   * @returns {Node}
   */
  removeAt(position) {
    //define
    let currentPosition = 1;
    let currentNode = this._head.getNext();
    let previousNode = this._head;
    while (currentPosition < position) {
      currentNode = currentNode.getNext();
      previousNode = previousNode.getNext();
      currentPosition += 1;
    }
    previousNode.setNext(currentNode.getNext());
    this._count -= 1;
    return this;
  }

  /**
   * Traverses the list from beginning to end.
   * @public
   * @param {function} cb
   */
  forEach(callback) {
    //define
    if (typeof callback !== "function") {
      throw new Error(`forEach needs callback to be a function`);
    }
    let currentNode = this._head;
    let position = 0;
    while (currentNode) {
      callback(currentNode, position);
      currentNode = currentNode.getNext();
      position += 1;
    }
  }

  /**
   * Finds one node in the list based on a callback.
   * @public
   * @returns {Node}
   */
  find(callback) {
    if (typeof callback !== "function") {
      throw new Error(`find method needs callback to be a function`);
    }
    let currentNode = this._head;
    while (currentNode) {
      if (callback(currentNode)) {
        return currentNode;
      }
      currentNode = currentNode.getNext();
    }
    return null;
  }

  /**
   * Filters the list based on a callback.
   * @public
   * @param {function} callback - callback should return true for required nodes.
   * @returns {LinkedList}
   */
  filter(callback) {
    if (typeof callback !== "function") {
      throw new Error(`filter method needs callback to be a function`);
    }
    const list = new LinkedList();
    let last = null;
    // let last = this._head
    this.forEach((node, position) => {
      if (callback(node, position)) {
        last = list.insertLast(node._value, last);
        list._count += 1;
      }
    });
    return list;
  }

  /**
   * Returns the head node.
   * @public
   * @returns {Node}
   */
  head() {
    //define
    return this._head;
  }

  /**
   * Returns the nodes count in the list.
   * @public
   * @returns {number}
   */
  count() {
    //define
    return this._count;
  }

  /**
   * Converts the linked list into an array.
   * @public
   * @returns {array}
   */
  // toArray() {
  //   //define
  //   const array = [];
  //   let currentNode = this._head;
  //   while (currentNode) {
  //     array.push(currentNode.getValue());
  //     currentNode = currentNode.getNext();
  //   }
  //   return array;
  // }
  toArray() {
    //define
    const result = [];
    this.forEach((node) => result.push(node.getValue()));
    return result;
  }

  /**
   * Checks if the list is empty.
   * @public
   * @returns {boolean}
   */
  isEmpty() {
    //define
    return this._head === null;
  }

  /**
   * Clears the list
   * @public
   */
  clear() {
    //define
    this._head = null;
    this._count = 0;
  }
}


module.exports = {
  LinkedList, Node
}


