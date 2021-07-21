function isMonotonic(array) {
  // Write your code here.
  let isNonIncreasing = true;
  let isNonDecreasing = true;

  for (let i = 1; i < array.length; i++) {
    if (array[i] < array[i - 1]) {
      isNonDecreasing = false;
    }
    if (array[i] > array[i - 1]) {
      isNonIncreasing = false;
    }
  }
  return isNonIncreasing || isNonDecreasing;
}

const array = [-1, -5, -10, -1100, -1100, -1101, -1102, -9001];
console.log(isMonotonic(array));
