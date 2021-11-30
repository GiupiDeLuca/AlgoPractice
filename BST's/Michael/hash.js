// Given an array N long, with reaccurring positive integers except for the value "K".
// Find the value of K in linear time.

function findK(array) {
  const counter = {};

  array.forEach((value) => {
    if (!counter[value]) {  /// or counter[value] === undefined
      counter[value] = 1;
    } else {
      counter[value]++;
    }
  });

  console.log(counter);
  let result = -1;
  Object.keys(counter).forEach((key) => {
    if (counter[key] === 1) {
      result = key;
    }
  });
  return result;
}

const a = [1, 2, 1, 3, 3, 4, 4, 1];

console.log(findK(a));

