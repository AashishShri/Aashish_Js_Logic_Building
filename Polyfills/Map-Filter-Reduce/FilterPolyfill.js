// here is filter example
const nums = [1, 2, 3, 4];
const res = nums.filter((n) => {
  return n > 2;
});

console.log(res); // [3, 4]

// Polyfill filter logic
//Array.filter((num,i,arr)={})

Array.prototype.myFilter = function (cb) {
  let temp = [];
  for (let index = 0; index < this.length; index++) {
    if (cb(this[index], index, this)) {
      temp.push(this[index]);
    }
  }
  return temp;
};
const res1 = nums.myFilter((n) => {
  return n > 2;
});
console.log(res1); // [3, 4]
