// o/p : [0,0,0,0,1,1,1,1]

function arrangeZeroAndOne(ar) {
  const res = [];
  ar.forEach((element) => {
    element == 1 ? res.push(element) : res.unshift(element);
  });
  return res;
}

const arr = [1, 0, 0, 0, 1, 1, 1, 0];
console.log(arrangeZeroAndOne(arr));

//**
// Given a sorted array and a key, find the two numbers which sum to the given key.
//arr = [1, 3, 4, 5, 7, 8]
//key = 10
//output: 3 7
// *//

function FindSumOfTwo(arrrr, key) {
  var count = 0;
  for (var i = 0; i < arrrr.length; i++) {
    for (var j = i + 1; j < arrrr.length; j++) {
      if (arrrr[i] + arrrr[j] == key) {
        console.log(`values is:  ${arrrr[i]} , ${arrrr[j]}`);
        count++;
      }
    }
  }
  return count
}

var arrr = [1, 3, 4, 5, 7, 6, 8];
var key = 10;
let count = FindSumOfTwo(arrr, key);
console.log(`count is: ${count}`);
