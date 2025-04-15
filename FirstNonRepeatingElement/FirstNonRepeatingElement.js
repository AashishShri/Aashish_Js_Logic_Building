const firstUnique = (arr) => {
  const freq = arr.reduce((acc, val) => {
    acc[val] = (acc[val] || 0) + 1;
    return acc;
  }, {});
  return arr.find((val) => freq[val] === 1);
};
console.log(firstUnique(["a", "b", "a", "c", "b", "d"])); // 'c'
