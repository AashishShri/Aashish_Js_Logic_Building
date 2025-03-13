function findTheBiggestNumber(arrayOfNumbers) {

    if(!arrayOfNumbers || arrayOfNumbers.length === 0) {
        throw new Error("We need some numbers in the array!");
    }
    
    console.log(arrayOfNumbers);

    let biggestNumber = arrayOfNumbers[0];
    for(let i = 1; i < arrayOfNumbers.length; i++) {
        if(arrayOfNumbers[i] > biggestNumber)
        {
            biggestNumber = arrayOfNumbers[i];
        }
    }

    return biggestNumber;
}

function findTheBiggestNumber2(arrayOfNumbers) {
    const maxNumber = Math.max(...arrayOfNumbers);
    console.log(maxNumber);
    return maxNumber;
}

// By using reduce function
function findTheBiggestNumber3(arrayOfNumbers) {
    const maxNumber = arrayOfNumbers.reduce((acc,curr)=>{
        return curr > acc ? curr : acc;
    },0)

    return maxNumber
}

console.log("[4, 5, 2]", findTheBiggestNumber([4, 5, 2]));
console.log("[3, 6, 1, 8, 3, 7] ", findTheBiggestNumber([3, 6, 1, 8, 3, 7] ));
console.log("[36, 67, 84, 8, 3, 7] ", findTheBiggestNumber([36, 67, 84, 8, 3] ));

//console.log("[] ", findTheBiggestNumber([] ));
//console.log("null", findTheBiggestNumber(null));

console.log("findTheBiggestNumber2");
//console.log("[]", findTheBiggestNumber2([]));
console.log("[36, 67, 84, 8, 3, 7] ", findTheBiggestNumber2([36, 67, 84, 8, 3] ));
console.log("[36, 67, 84, 8, 3, 7] from fun 3", findTheBiggestNumber3([36, 67, 84, 8, 3] ));
