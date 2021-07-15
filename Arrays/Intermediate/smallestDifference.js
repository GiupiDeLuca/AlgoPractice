function smallestDifference(arrayOne, arrayTwo) {
  // Write your code here.
  arrayOne.sort((a, b) => a - b);
  arrayTwo.sort((a, b) => a - b);

  let result = [];

  let indexOne = 0;
  let indexTwo = 0;

  let smallest = Infinity;
  let current = Infinity;

  do {
    let firstNum = arrayOne[indexOne];
    let secondNum = arrayTwo[indexTwo];
    if (firstNum < secondNum) {
      current = secondNum - firstNum;
      indexOne++;
    } else if (secondNum < firstNum) {
      current = firstNum - secondNum;
      indexTwo++;
    } else {
      return [firstNum, secondNum];
    }
    if (smallest > current) {
      smallest = current;
      result = [firstNum, secondNum];
    }
  } while (indexOne < arrayOne.length && indexTwo < arrayTwo.length);

  return result;
}

const arrayOne = [-1, 5, 10, 20, 28, 3];
const arrayTwo = [26, 134, 135, 15, 17];
console.log(smallestDifference(arrayOne, arrayTwo));

// absolute difference
// const a = 26
// const b = 26
// console.log(Math.abs(-(a - b)) === 0);
