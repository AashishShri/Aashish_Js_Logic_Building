//✅ Method 1: Using Set + Sort

const arr = [10, 5, 8, 12, 3, 12];

// Remove duplicates and sort descending
const secondHighest = [...new Set(arr)].sort((a, b) => b - a)[1];

console.log(secondHighest); // 👉 10


//✅ Method 2: Using filter() and Math.max()

const arr1 = [10, 5, 8, 12, 3];

// Step 1: Find max
const max = Math.max(...arr1);

// Step 2: Filter out max and find max again
const secondMax = Math.max(...arr1.filter(n => n !== max));

console.log(secondMax); // 👉 10


//✅ Method 3: Simple reduce() Approach

const arr2 = [10, 5, 8, 12, 3];

const [max1, secondMax1] = arr.reduce(
  ([max1, secondMax], current) => {
    if (current > max1) {
      return [current, max1]; // new max found, shift old max to secondMax
    } else if (current > secondMax && current < max1) {
      return [max1, current]; // new secondMax found
    }
    return [max1, secondMax]; // no change
  },
  [-Infinity, -Infinity] // starting values
);

console.log(secondMax); // 👉 10
