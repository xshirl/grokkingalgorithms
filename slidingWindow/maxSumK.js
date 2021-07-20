const max_sub_array_of_size_k = function (k, arr) {
  let maxSum = 0;
  let start = 0;
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
    if (i >= k - 1) {
      maxSum = Math.max(maxSum, sum);
      sum -= arr[start];
      start += 1
    }
  }
  return maxSum;
};
