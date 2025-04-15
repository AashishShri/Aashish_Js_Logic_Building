function lengthOfLongestSubstring(s) {
    let start = 0;
    let maxLength = 0;
    let seen = new Map();
  
    for (let end = 0; end < s.length; end++) {
      const char = s[end];
  
      // If the character is already seen and in the current window
      if (seen.has(char) && seen.get(char) >= start) {
        start = seen.get(char) + 1;
      }
  
      seen.set(char, end);
      maxLength = Math.max(maxLength, end - start + 1);
    }
  
    return maxLength;
  }

  function lengthOfLongestSubstring1(s) {
    let maxLength = 0;
    let start = 0;
    const charIndexMap = {};
  
    for (let end = 0; end < s.length; end++) {
      const currentChar = s[end];
  
      // If the character is already seen and within the current window
      if (charIndexMap[currentChar] >= start) {
        start = charIndexMap[currentChar] + 1;
      }
  
      // Update the last index of the character
      charIndexMap[currentChar] = end;
  
      // Calculate max length of current window
      maxLength = Math.max(maxLength, end - start + 1);
    }
  
    return maxLength;
  }
  

  
console.log(lengthOfLongestSubstring("abcabcbb")); // Output: 3 ("abc")
console.log(lengthOfLongestSubstring("bbbbb"));    // Output: 1 ("b")
console.log(lengthOfLongestSubstring("pwwkew"));   // Output: 3 ("wke")

console.log("next one ssssssss");


console.log(lengthOfLongestSubstring1("abcabcbb")); // Output: 3 ("abc")
console.log(lengthOfLongestSubstring1("bbbbb"));    // Output: 1 ("b")
console.log(lengthOfLongestSubstring1("pwwkew"));   // Output: 3 ("wke")
