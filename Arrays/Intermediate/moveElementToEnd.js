function moveElementToEnd(array, toMove) {
  // Write your code here.
  const n = array.length;

  array.forEach((number) => {
    if (number === toMove) {
      const movedElement = array.splice(array.indexOf(number), 1)[0];
      array.push(movedElement);
    }
  });
  return array;
}

const array = [2, 1, 2, 2, 2, 3, 4, 2];
const toMove = 2;
console.log(moveElementToEnd(array, toMove));
