function calculatePower(base, exponent) {
  // Check if base and exponent and positive integers
  let result = 1;
  for (let i = 1; i <= exponent; i++) {
    result = result * base;
    console.log(result);
  }

  return result;
}

function calculatePower1(base, exponent) {
  return base ** exponent;
}

console.log("calculatePower(2, 3)", calculatePower(2, 3));
console.log("calculatePower(5, 4)", calculatePower(5, 4));
console.log("calculatePower1(5, 4)", calculatePower1(5, 4));
