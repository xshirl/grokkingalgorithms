function avgK(arr, k) {
  const result = [];
  let start = 0;
  let sum = 0;
  for(let i = 0; i < arr.length; i++) {
    sum += arr[i];
    if(i >= k-1) {
      result.push(sum/k);
      sum -= arr[start];
      start+= 1
    }
  }
  return result;
}

console.log(avgK([1,2,3,4,5,6], 2))
