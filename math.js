// Type coercion with equality
var a = 55;
var b = "stf";

if (a == b) {
  console.log("equal");
} else {
  console.log("not equal"); // This will run
}

// Best practice: Use strict equality (===)
if (a === b) {
  console.log("strictly equal");
} else {
  console.log("strictly not equal"); // This will run
}

// ----------------------------
// Rounding methods
console.log("Math.round(4.6):", Math.round(4.6)); // 5
console.log("Math.floor(4.6):", Math.floor(4.6)); // 4
console.log("Math.ceil(4.1):", Math.ceil(4.1));   // 5
console.log("Math.trunc(4.9):", Math.trunc(4.9)); // 4

// ----------------------------
// Power and Roots
console.log("Math.pow(2, 3):", Math.pow(2, 3));   // 8
console.log("Math.sqrt(16):", Math.sqrt(16));     // 4

// ----------------------------
// Absolute value
console.log("Math.abs(-7):", Math.abs(-7));       // 7

// ----------------------------
// Trigonometry
console.log("Math.sin(Math.PI / 2):", Math.sin(Math.PI / 2)); // 1
console.log("Math.cos(0):", Math.cos(0));                     // 1

// ----------------------------
// Min and Max
console.log("Math.min(3, 5, 1):", Math.min(3, 5, 1)); // 1
console.log("Math.max(3, 5, 1):", Math.max(3, 5, 1)); // 5

// ----------------------------
// Random numbers
console.log("Math.random():", Math.random()); // Between 0 and 1 (exclusive)

// Random integer between 1 and 10
let randomInt = Math.floor(Math.random() * 10) + 1;
console.log("Random integer (1-10):", randomInt);
