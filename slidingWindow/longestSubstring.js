function longestSubstringK(s, k) {
  let freq = {};
  let maxLength = 0;
  let start = 0;
  for (let i = 0; i < s.length; i++) {
    let char = s[i];
    if (char in freq) {
      freq[char]++
    } else {
      freq[char] = 1;
    }
    while (Object.keys(freq).length > k) {
      let leftChar = s[start];
      freq[leftChar] -= 1;
      if (freq[leftChar] == 0) {
        delete freq[leftChar];
      }
      start += 1
    }
    maxLength = Math.max(maxLength, i - start + 1)
  }
  return maxLength;
}



// Time Complexity #
// The above algorithm’s time complexity will be O(N)O(N), where NN is the number of characters in the input string. The outer for loop runs for all characters, and the inner while loop processes each character only once; therefore, the time complexity of the algorithm will be O(N+N)O(N+N), which is asymptotically equivalent to O(N)O(N).

// Space Complexity #
// The algorithm’s space complexity is O(K)O(K), as we will be storing a maximum of K+1K+1 characters in the HashMap.

