const nums = [1, 2, 3, 4];
const sum = nums.reduce((acc, cur) => {
  return acc + cur;
}, 0);

console.log("sum :", sum); // 10

// // Polyfill reduce logic
// //Array.reduce((acc,curr,i,arr)={},initialValue)
Array.prototype.myReduce = function (cb, initialValue) {
  var acc = initialValue;
  for (let index = 0; index < this.length; index++) {
    acc = acc ? cb(acc, this[index], index, this) : this[index];
  }
  return acc;
};

const sum1 = nums.myReduce((acc, cur) => {
  return acc + cur;
}, 0);
console.log("sum1 :", sum1); // 10
