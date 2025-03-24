function binarySearch(arr, target) {
  let leftIndex = 0;
  let rightIndex = arr.length - 1;

  while (leftIndex <= rightIndex) {
    let middleIndex = Math.floor((leftIndex + rightIndex) / 2);
    if (target === arr[middleIndex]) {
      return middleIndex;
    }
    if (target < arr[middleIndex]) {
      rightIndex = middleIndex - 1;
    } else {
      leftIndex = middleIndex + 1;
    }
  }
  return -1;
}

console.log(binarySearch([-5, 2, 4, 6, 10], 10)); // 4
console.log(binarySearch([-5, 2, 4, 6, 10], 6)); // 3
console.log(binarySearch([-5, 2, 4, 6, 10], 20)); // -1

function binarySearch1(arr, target) {
  let leftIndx = 0;
  let rightInx = arr.length - 1;

  while (leftIndx <= rightInx) {
    let mid = Math.floor((leftIndx + rightInx) / 2);
    if (target == arr[mid]) {
      return mid;
    }
    if (target < arr[mid]) {
      rightInx = mid - 1;
    } else {
      leftIndx = mid + 1;
    }
  }
  return -1
}

console.log(binarySearch1([-5, 2, 4, 6, 10], 10)); // 4
console.log(binarySearch1([-5, 2, 4, 6, 10], 6)); // 3
console.log(binarySearch1([-5, 2, 4, 6, 10], 20)); // -1

//Notes
// arryy should be in sort
// find the middle ele
// if mid ele ==  target then return mid index
// if target is less then mid then will seach in left side and now right index will be mid -1
// if target is greate then mid then will seach in right side and now left index will be mid + 1
