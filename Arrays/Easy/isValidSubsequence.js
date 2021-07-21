function isValidSubsequence(array, sequence) {
  // Write your code here.
  let index = 0;
  let pointer = sequence[index];
  array.forEach((num) => {
    if (num === pointer) {
      index += 1;
      pointer = sequence[index];
    }
  });
  return index >= sequence.length;
}
