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
      node.next = this.head;
      this.head = node;
      //   console.log("node", node);
      //   console.log("nodeNext", node.next);
      node.next.prev = this.head;
      //   console.log("previous", node.next.prev)
    }
    return this;
  }

  setTail(node) {
    // Write your code here.
    let currentNode = this.head;

    while (currentNode.next !== null) {
      currentNode = currentNode.next;
    }
    // console.log(currentNode)
    currentNode.next = this.tail;
    this.tail = node;
    // console.log("tail", node)
    node.prev = currentNode;

    return this;
  }

  insertBefore(node, nodeToInsert) {
    // Write your code here.
  }

  insertAfter(node, nodeToInsert) {
    // Write your code here.
  }

  insertAtPosition(position, nodeToInsert) {
    // Write your code here.
  }

  removeNodesWithValue(value) {
    // Write your code here.
  }

  remove(node) {
    // Write your code here.
  }

  containsNodeWithValue(value) {
    // Write your code here.
  }
}

const list = new DoublyLinkedList();
const node1 = new Node(1);
const node2 = new Node(2);

list.setHead(node1);
list.setTail(node2);
console.log(list);
