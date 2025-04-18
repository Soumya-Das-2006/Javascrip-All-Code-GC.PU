// Store multiple values with arrays
var ourArray = ["John", 23];
var myArray = ["Quincy", 1];
console.log(ourArray);
console.log(myArray);

// Nested arrays
ourArray = [["the universe", 42], ["everything", 101010]];
myArray = [["Bulls", 23], ["White Sox", 45]];
console.log(ourArray);
console.log(myArray);

// Access array data with indexes
ourArray = [50, 60, 70];
var ourData = ourArray[0];
console.log("Array[0] --> " + ourData); // Output: 50

// Modify array data with indexes
ourArray = [18, 64, 99];
ourArray[1] = 45; // Replaces 64 with 45
console.log(ourArray); // Output: [18, 45, 99]

// Access multi-dimensional arrays with indexes
ourArray = [[1, 2, 3], [4, 5, 6], [7, 8, 9], [[10, 11, 12], 13, 14]];
var myData = ourArray[3][0][1];
console.log(myData); // Output: 11

// Manipulate arrays with push()
ourArray = ["Stimpson", "J", "cat"];
ourArray.push(["happy", "joy"]);
console.log(ourArray); // ["Stimpson", "J", "cat", ["happy", "joy"]]

// Manipulate arrays with pop()
var removedFromOurArray = ourArray.pop();
console.log(ourArray); // ["Stimpson", "J", "cat"]
console.log("Popped value:", removedFromOurArray); // ["happy", "joy"]

// Manipulate arrays with shift()
ourArray = ["Stimpson", "J", ["cat"]];
removedFromOurArray = ourArray.shift();
console.log(ourArray); // ["J", ["cat"]]
console.log("Shifted value:", removedFromOurArray); // "Stimpson"

// Manipulate arrays with unshift()
ourArray = ["Stimpson", "J", "cat"];
ourArray.shift(); // Removes "Stimpson"
ourArray.unshift("Happy"); // Adds "Happy" at the start
console.log(ourArray); // ["Happy", "J", "cat"]

// Shopping List (2D Array)
var myList = [
  ["cereal", 3],
  ["milk", 2],
  ["bananas", 3],
  ["juice", 2],
  ["eggs", 12]
];
console.log("Shopping List:", myList);

// Slicing an array
ourArray = ["Stimpson", "J", "cat", "happy"];
var slicedPortion = ourArray.slice(1, 3);
console.log("Original Array:", ourArray); // ["Stimpson", "J", "cat", "happy"]
console.log("Sliced portion:", slicedPortion); // ["J", "cat"]

// Check for the presence of an element with indexOf()
ourArray = ["Stimpson", "]", "cat"];
var index1 = ourArray.indexOf("cat");
console.log(index1); // 2

ourArray = ["Stimpson", "J", "cat"];
var index2 = ourArray.indexOf("dog");
console.log(index2); // -1

// Write Reusable JavaScript with Functions
function ourReusableFunction() {
  console.log("Heyya, World");
}
ourReusableFunction();

// Passing Values to Functions with Arguments
function ourFunctionWithArgs(a, b) {
  console.log(a - b);
}
ourFunctionWithArgs(10, 5);

// Global Scope and Functions
var myGlobal = 10;
function fun1() {
  oopsGlobal = 5; // Not declared with var/let/const, becomes global (not recommended)
}

function fun2() {
  var output = "";
  if (typeof myGlobal != "undefined") {
    output += "myGlobal: " + myGlobal;
  }
  if (typeof oopsGlobal != "undefined") {
    output += " oopsGlobal: " + oopsGlobal;
  }
  console.log(output);
}
fun1();
fun2();

// Local Scope and Function
function myLocalScope() {
  var myVar = 5;
  console.log(myVar); // OK
}
myLocalScope();
// console.log(myVar); // Error: myVar is not defined (uncomment to test)

// Global vs. Local Scope in Functions
var outerWear = "T-Shirt";
function myOutfit() {
  var outerWear = "sweater"; // Local shadows global
  return outerWear;
}
console.log(myOutfit()); // sweater
console.log(outerWear);  // T-Shirt

// Return a value from a function with return
function minusSeven(num) {
  return num - 7;
}
console.log(minusSeven(10)); // 3

// Understanding Undefined Value returned from function
var sum = 0;
function addFive() {
  sum += 5;
}
console.log(addFive()); // undefined (no return)
console.log(sum);       // 5

var changed = 0;
function change(num) {
  return(num + 5) / 3;
}
console.log(change(9));

// Assignment with a returned value
function timesFive(num) {
  return num * 5;
}
var result = timesFive(4);
console.log(result); // 20
