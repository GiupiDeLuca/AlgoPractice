// This is an input class. Do not edit.
class Node {
  constructor(value) {
    this.value = value;
    this.prev = null;
    this.next = null;
  }
}

// Feel free to add new properties and methods to the class.
class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  setHead(node) {
    // Write your code here.
    // console.log("head1", this.head);
    if (this.head === null) {
      this.head = node;
      this.tail = node;
    } else {
      this.head.prev = node;
      node.next = this.head; // takes whatever is stored into this.head object and assigns it to node.next variable
      this.head = node;
      //   console.log("node", node);
      //   console.log("nodeNext", node.next);
      //   console.log("previous", node.next.prev)
    }
    return this;
  }

  // setTail(node) {
  //   // Write your code here.
  // O(n) linear
  //   if (this.head === null) { // or (this.tail === null)
  //     this.head = node;
  //     this.tail = node;
  //   } else {
  //     let currentNode = this.head;

  //     while (currentNode.next !== null) {
  //       currentNode = currentNode.next;
  //     }
  //     currentNode.next = node
  //     node.prev = currentNode
  //     this.tail = node
  //   }
  //   return this;
  // }

  setTail(node) {
    // Write your code here.
    // O(1) constant
    if (this.tail === null) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      node.prev = this.tail;
      this.tail = node;
    }
    return this;
  }

  // insertBefore(node, nodeToInsert) {
  //   // Write your code here.
  //   let currentNode = this.head;
  //   while (currentNode.next !== null) {
  //     if (
  //       currentNode === node &&
  //       currentNode.next !== nodeToInsert
  //     ) {
  //       let nextNode = nodeToInsert.next;
  //       currentNode.prev.next = nodeToInsert;
  //       nodeToInsert.next = currentNode;
  //       nodeToInsert.prev.next = nextNode;
  //       currentNode.prev = nodeToInsert;
  //       // if (nextNode !== null) {
  //       //   nextNode.prev = node.next;
  //       // }
  //     } else if (
  //       currentNode === node &&
  //       currentNode.next === nodeToInsert
  //     ) {
  //       currentNode.prev.next = nodeToInsert;
  //       currentNode.next = nodeToInsert.next;
  //       nodeToInsert.next = currentNode;
  //       currentNode.prev = nodeToInsert;
  //       currentNode.next.prev = currentNode;
  //       nodeToInsert.prev = node.prev
  //     } else {
  //       currentNode = currentNode.next;
  //     }
  //   }
  //   return this;
  // }

  insertBefore(node, nodeToInsert) {
    // Write your code here.
    if (this.head === null) {
      this.head = nodeToInsert;
    } else if (this.head === node) {
      this.setHead(nodeToInsert);
    } else {
      const removedNode = this.remove(nodeToInsert);
      let currentNode = this.head;
      let currentPosition = 1;
      while (currentNode.next !== null) {
        if (currentNode === node) {
          this.insertAtPosition(currentPosition, nodeToInsert);
        }
        currentNode = currentNode.next;
        currentPosition += 1;
      }
    }
    return this;
  }

  insertAfter(node, nodeToInsert) {
    // Write your code here.
    if (this.head === null) {
      this.head = nodeToInsert;
    } else if (this.head === node) {
      this.setHead(nodeToInsert);
    } else {
      const removedNode = this.remove(nodeToInsert);
      let currentNode = this.head;
      let currentPosition = 1;
      while (currentNode.next !== null) {
        if (currentNode === node) {
          const positionToInsertAt = currentPosition + 1
          this.insertAtPosition(positionToInsertAt, nodeToInsert);
        }
        currentNode = currentNode.next;
        currentPosition += 1;
      }
    }
    return this;
  }

  insertAtPosition(position, nodeToInsert) {
    // Write your code here.
    if (this.head === null) {
      this.head = nodeToInsert;
    } else {
      let currentNode = this.head;
      let currentPosition = 1;
      while (currentNode.next !== null) {
        if (currentPosition === position) {
          currentNode.prev.next = nodeToInsert;
          nodeToInsert.prev = currentNode.prev;
          currentNode.prev = node;
          node.next = currentNode;
        }
        currentNode = currentNode.next;
        currentPosition += 1;
      }
    }
    return this;
  }

  // I'm not sure if this will work, or the while loop will break
  // after the first node sith the wanted value is found
  // |
  // v
  removeNodesWithValue(value) {    
    // Write your code here.
    if (this.head !== null) {
      let currentNode = this.head;
      while (currentNode.next !== null) {
        if (currentNode.value === value) {
          currentNode.prev.next = currentNode.next;
          currentNode.next.prev = currentNode.prev;
        }
        currentNode = currentNode.next;
      }
    } else {
      throw new Error(`nothing to remove`);
    }
    return this
  }

  remove(node) {
    // Write your code here.
    if (this.head !== null) {
      let currentNode = this.head;
      while (currentNode.next !== null) {
        if (currentNode === node) {
          currentNode.prev.next = currentNode.next;
          currentNode.next.prev = currentNode.prev;
        }
        currentNode = currentNode.next;
      }
    } else {
      throw new Error(`nothing to remove`);
    }
    return node;
  }

  containsNodeWithValue(value) {
    // Write your code here.
    if (this.head !== null) {
      let currentNode = this.head;
      while (currentNode.next !== null) {
        if (currentNode.value === value) {
          return true;
        }
        currentNode = currentNode.next;
      }
    }
    return false;
  }
}

const list = new DoublyLinkedList();
const node1 = new Node(1);
const node2 = new Node(2);
const node3 = new Node(3);

list.setHead(node1);
list.setHead(node3);
list.setTail(node2);
console.log(list);
