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
  }

  /**
   * Removes the head node.
   * @public
   * @returns {Node}
   */
  removeFirst() {
    //define
  }

  /**
   * Removes the last node in the list.
   * @public
   * @returns {Node}
   */
  removeLast() {
    //define
  }

  /**
   * Removes all nodes based on a callback.
   * @public
   * @param {function} callback
   * @returns {number} number of removed nodes
   */
  removeEach(callback) {
    //define
  }

  /**
   * Removes a node at a specific position.
   * @public
   * @param {number} position
   * @returns {Node}
   */
  removeAt(position) {
    //define
  }

  /**
   * Traverses the list from beginning to end.
   * @public
   * @param {function} cb
   */
  forEach(callback) {
    //define
  }

  /**
   * Finds one node in the list based on a callback.
   * @public
   * @returns {Node}
   */
  find(callback) {}

  /**
   * Filters the list based on a callback.
   * @public
   * @param {function} callback - callback should return true for required nodes.
   * @returns {LinkedList}
   */
  filter(callback) {}

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
  toArray() {
    //define
    const array = [];
    let currentNode = this._head;
    while (currentNode.hasNext()) {
      array.push(currentNode.getValue());
      currentNode = currentNode.getNext();
    }
    return array;
  }
  // toArray() {
  //   //define
  //   const result = []
  //   this.forEach(node => result.push(node.getValue()))
  //   return result
  // }

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
