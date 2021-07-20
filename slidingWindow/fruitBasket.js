const fruits_into_baskets = function (fruits) {
  let maxFruits = 0;
  let start = 0;
  let freq = {}
  for (let i = 0; i < fruits.length; i++) {
    fruit = fruits[i];
    if (fruit in freq) {
      freq[fruit]++;
    } else {
      freq[fruit] = 1
    }
    while (Object.keys(freq).length > 2) {
      let left = fruits[start];
      freq[left] -= 1;
      if (freq[left] == 0) {
        delete freq[left]
      }
      start += 1
    }
    maxFruits = Math.max(maxFruits, i - start + 1)
  }
  return maxFruits;
};

console.log(fruits_into_baskets(['A', 'B', 'C', 'A', 'C']))
