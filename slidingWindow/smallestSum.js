const smallest_subarray_with_given_sum = function (s, arr) {
  let minLength = Infinity;
  let sum = 0;
  let start = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
    while (sum >= s) {
      minLength = Math.min(minLength, i - start + 1);
      sum -= arr[start];
      start += 1
    }
  }
  if (minLength == Infinity) {
    return 0;
  }
  return minLength;
};
