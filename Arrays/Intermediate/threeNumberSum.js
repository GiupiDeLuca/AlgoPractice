function threeNumberSum(array, targetSum) {
  // Write your code here.
  let sum = [];

  array.forEach((num1) => {
    array.forEach((num2) => {
      if (num1 !== num2) {
        let num3 = targetSum - (num1 + num2);
        if (num3 !== num1 && num3 !== num2) {
          if (array.includes(num3)) {
            sum.push([num1, num2, num3].sort((a, b) => a - b));
          }
        }
      }
    });
  });

  let unsortedSolution = Array.from(
    new Set(sum.map(JSON.stringify)),
    JSON.parse
  );

  return unsortedSolution.sort(([a, b], [c, d]) => a - c || b - d);
}
