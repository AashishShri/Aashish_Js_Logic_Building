function calculateSumOfDigits(inputNumber) {
  if (inputNumber < 1) {
    throw new Error("inputNumber must be a positive number");
  }

  const inputNumberAsString = inputNumber.toString();
  const splittedInputString = inputNumberAsString.split("");
  console.log(splittedInputString);
  let sumOfDigits = 0;
  splittedInputString.forEach((num) => {
    sumOfDigits = sumOfDigits + parseInt(num);
    //sumOfDigits +=  parseInt(num);
  });
  return sumOfDigits;
}

function calculateSumOfDigits2(inputNumber) {
  let number = inputNumber;
  let sumOfDigits = 0;
  while (number > 0) {
    let lastDigit = number % 10;
    number = Math.floor(number / 10);
    sumOfDigits = sumOfDigits + lastDigit;
    // 456
    // 45
    // 4
    // 0
  }

  return sumOfDigits;
}

function calculateSumOfDigits3(inputNumber) {
  let number = inputNumber;
  let sumOfDigits = 0;
  while (number > 0) {
    let lastDigit = number % 10;
    console.log("lastDigit", lastDigit);
    number = Math.floor(number / 10);
    console.log("number", number);
    sumOfDigits = sumOfDigits + lastDigit;
    console.log("sumOfDigits", sumOfDigits);
  }

  return sumOfDigits;
}

console.log("calculateSumOfDigits(12)", calculateSumOfDigits(12));
console.log("calculateSumOfDigits(23)", calculateSumOfDigits(23));
console.log("calculateSumOfDigits(456)", calculateSumOfDigits(456));

console.log("calculateSumOfDigits2");
console.log("calculateSumOfDigits2(12)", calculateSumOfDigits2(12));
console.log("calculateSumOfDigits2(23)", calculateSumOfDigits2(23));
console.log("calculateSumOfDigits2(456)", calculateSumOfDigits2(456));
console.log("calculateSumOfDigits3");
console.log("calculateSumOfDigits3(456)", calculateSumOfDigits3(456));
