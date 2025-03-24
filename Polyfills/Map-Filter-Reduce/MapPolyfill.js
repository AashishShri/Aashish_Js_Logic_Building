// Here is map example
const nums = [1, 2, 3, 4];
const res = nums.map((n) => {
  return n * 3;
});
//const res=  nums.map((n)=> n*3)
console.log(res); // [3, 6, 9, 12]

// Polyfill map logic
// Array.map((num,i,arr)={})

Array.prototype.myMap = function (cb) {
  let temp = [];
  for (let index = 0; index < this.length; index++) {
    temp.push(cb(this[index], index, this));
  }
  return temp;
};
const res1 = nums.myMap((n) => {
  return n * 3;
});

console.log(res1); // [3, 6, 9, 12]
