// 1. for...of loop (iterating over array values)
const iterable = [10, 20, 30];

for (let value of iterable) {
  value += 1;
  console.log(value); // 11, 21, 31
}

// 2. for...in loop (iterating over object properties)
const object = { a: 1, b: 2, c: 3 };

for (const property in object) {
  console.log(`${property}: ${object[property]}`);
}
// Output:
// a: 1
// b: 2
// c: 3

// 3. Another for...of loop example
const array1 = ["a", "b", "c"];

for (const element of array1) {
  console.log(element); // a, b, c
}

// 4. for await...of loop (with async iterable)
const LIMIT = 3;

const asyncIterable = {
  [Symbol.asyncIterator]() {
    let i = 0;
    return {
      async next() {
        if (i < LIMIT) {
          return new Promise((resolve) => {
            setTimeout(() => resolve({ value: i++, done: false }), 500);
          });
        } else {
          return { done: true };
        }
      }
    };
  }
};

(async () => {
  for await (const num of asyncIterable) {
    console.log(`Async value: ${num}`);
  }
})();
// Output (after delays):
// Async value: 0
// Async value: 1
// Async value: 2






// Count vowels in the string
let text = "Hello World";
let count = 0;
let vowels = "aeiouAEIOU";

for (let char of text) {
    if (vowels.includes(char)) {
        count++;
    }
}
console.log("Number of vowels:", count);

// Check if a number is prime
let num = 17;
let isPrime = true;

if (num <= 1) {
    isPrime = false;
} else {
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            isPrime = false;
            break;
        }
    }
}
console.log(num + " is prime?", isPrime);

// Print a star pattern
let rows = 5;

for (let i = 1; i <= rows; i++) {
    let pattern = "";
    for (let j = 1; j <= i; j++) {
        pattern += "* ";
    }
    console.log(pattern);
}
