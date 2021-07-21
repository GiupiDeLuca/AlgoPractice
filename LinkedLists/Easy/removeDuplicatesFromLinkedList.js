class LinkedList {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

function removeDuplicatesFromLinkedList(linkedList) {
  // Write your code here.
  let currentNode = linkedList;
  while (currentNode !== null) {
    let nextNode = currentNode.next;
    while (nextNode !== null && currentNode.value === nextNode.value) {
      nextNode = nextNode.next;
    }
    currentNode.next = nextNode;
    currentNode = nextNode;
  }
  return linkedList;
}
