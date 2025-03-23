function linearSearch(arr, target) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === target) {
        return i
      }
    }
    return -1
  }

  // Big-o = O(n) // bcoz of 1 loop
  
  console.log(linearSearch([-5, 2, 10, 4, 6], 10)) // 2
  console.log(linearSearch([-5, 2, 10, 4, 6], 6)) // 4
  console.log(linearSearch([-5, 2, 10, 4, 6], 20)) // -1