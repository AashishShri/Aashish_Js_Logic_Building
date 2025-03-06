function calculateArea(l,w){
    if (l < 0) {
        throw new RangeError("Lenght should be in nagtavive")
        
    }
    if (w < 0) {
        throw new RangeError("Width should be in nagtavive")
        
    }

    return l*w
}

console.log("Area calculateion of 3 & 4 : ", calculateArea(3,4)); 
console.log("Area calculateion of 30 & 45: ", calculateArea(30,45)); 
//console.log("Area calculateion of -2 & -4: ", calculateArea(-2,-4)); 