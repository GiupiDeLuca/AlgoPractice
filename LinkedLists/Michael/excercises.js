const Classes = require("./defineNodeClass");

const list1 = new Classes.LinkedList();
list1.insertFirst(6);
list1.insertFirst(7);
list1.insertFirst(8);
list1.insertFirst(9);

const list2 = new Classes.LinkedList();
list2.insertFirst(1);
list2.insertFirst(2);
list2.insertFirst(3);
list2.insertFirst(4);

function concatenation(l1, l2) {
  l2.forEach((node) => {
    let l1LastNode = l1.find((node) => node.getNext() === null);
    l1.insertLast(node, l1LastNode);
  });
  return l1;
}

// BY CREATING A NEW LIST
// function reverse(l1) {
//   const l2 = new LinkedList()
//   l1.forEach((node) => l2.insertFirst(node._value))
//   return l2
// }

// WITHOUT CREATING A NEW LIST still TAKING EXTRA MEMORY
// function reverse(l1) {
//   const array = l1.toArray()
//   l1.clear()
//   array.forEach(value => l1.insertFirst(value))
//   return l1
// }

// NO EXTRA MEMORY AND LINEAR TIME
function reverse(l1) {
  if (l1.count() <= 1) {
    return l1
  }
  let head = l1.head();
  let iterator1 = head.getNext();
  let iterator2 = head.getNext().getNext();
  head.setNext(null);
  while (iterator2 !== null) {
    iterator1.setNext(head);
    head = iterator1;
    iterator1 = iterator2;
    iterator2 = iterator2.getNext();
  }
  iterator1.setNext(head);
  head = iterator1;
  l1._head = head
  return l1
}

// console.log(concatenation(list1, list2))
console.log(list1);
console.log(reverse(list1));
