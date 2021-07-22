function noRepeatSubstring(str) {
  let start = 0
  let maxLength = 0
  let map = {}

  for (let i = 0; i < str.length; i++) {
    const char = str[i]
    if (char in map) {
      start = Math.max(start, map[char] + 1)
    }
    map[char] = i
    maxLength = Math.max(maxLength, i - start + 1)
  }
  return maxLength
}
