const findPairs = (arr, target) => {
    const result = [];
    const seen = new Set();
    for (let num of arr) {
      const diff = target - num;
      if (seen.has(diff)) {
        result.push([diff, num]);
      }
      seen.add(num);
    }
    return result;
  };
  console.log(findPairs([1, 2, 3, 4, 5], 6)); // [[2, 4], [1, 5]]
  