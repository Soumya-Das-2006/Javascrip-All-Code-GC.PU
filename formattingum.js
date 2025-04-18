// toString()
let num1 = 123.456;
console.log(num1.toString()); // "123.456"

// Exponential notation
let num = 123456;
console.log(num.toExponential());     // "1.23456e+5"
console.log(num.toExponential(2));    // "1.23e+5"
console.log(num.toExponential(4));    // "1.2346e+5"

let num2 = 5.6789;

// toFixed() – rounds and formats as a string
console.log(num2.toFixed());     // "6"        (rounded to nearest integer)
console.log(num2.toFixed(2));    // "5.68"     (rounded to 2 decimal places)
console.log(num2.toFixed(4));    // "5.6789"   (original precision)
console.log(num2.toFixed(6));    // "5.678900" (padded with zeros)

// Creating a Number object
let numObj = new Number(987.654);

// Using valueOf() to get the primitive value
let primitiveValue = numObj.valueOf();

console.log(primitiveValue); // Output: 987.654
console.log(typeof primitiveValue); // Output: "number"
