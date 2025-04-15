function removeConsecutiveDuplicates(str) {
    let result = '';
    let previousChar = null;
  
    for (let i = 0; i < str.length; i++) {
      // If current character is not the same as previous, check ahead
      if (str[i] !== str[i + 1] && str[i] !== previousChar) {
        result += str[i];
      }
      previousChar = str[i];
    }
  
    return result;
  }
  
  console.log(removeConsecutiveDuplicates("teeesssts")); // Output: "tts"
  