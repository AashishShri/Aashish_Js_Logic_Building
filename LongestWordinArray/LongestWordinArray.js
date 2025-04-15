const longestWord = (words) => {
  return words.reduce(
    (longest, word) => (word.length > longest.length ? word : longest),
    ""
  );
};
console.log(longestWord(["node", "express", "mongodb", "jwt"])); // "mongodb"
