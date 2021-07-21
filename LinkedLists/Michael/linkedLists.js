console.log("hello, world");

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor(value = null) {
    const node = new Node(value);
    this.head = node;
  }
  append(value) {
    // create a new node
    const node = new Node(value);
    //get the head of the list
    let iteratorNode = this.head;
    //iterate through the list by using the pointer to the head as a starting point
    //stop when you reach null / the end
    //for( defined variable; condition to keep running; modify the variable)
    while (iteratorNode.next !== null) {
      iteratorNode = iteratorNode.next;
    }

    //add node to the end
    iteratorNode.next = node;
  }
}

//classes are custom data structures. they are objects that persist in memory which
//contain member functions (that are private or public) and member variables (that are private or public)

const list = new LinkedList(5);

console.log(list);

list.append(7);
console.log(list);

list.append(9);
console.log(list);