function twoNumberSum(array, targetSum) {
  // Write your code here.
  const result = [];
  array.forEach((number) => {
    let number2 = targetSum - number;
    if (number !== number2) {
      if (array.includes(number2)) {
        result.push(number, number2);
      }
    }
  });
  return Array.from(new Set(result));
}
