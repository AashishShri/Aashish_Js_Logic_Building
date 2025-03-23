// Find the missing number from sorted array with O(n) complexity

function missing(arr) {
  let miss = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i + 1] && arr[i + 1] - arr[i] != 1) {
      miss.push(arr[i] + 1);
    }
  }
  return miss;
}

function missing1(arr){
    let miss = []
    // Need to write a logic
      for (let i = 0; i < arr.length; i++) {
        if (!(arr[i+1] - arr[i] ==1) && !(arr[i+1]==undefined)) {
          miss.push(arr[i]+1)
        }
      }
      return miss;
    }

let arr = [1, 3, 4, 6, 7, 8, 10];
console.log(missing(arr)); // [2,5,9]
console.log(missing1(arr)); // [2,5,9]
