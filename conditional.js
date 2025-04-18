// 1. Simple equality checks and boolean conditionals
if (true) {
console.log('true');
} else {
console.log('false');
}

if (false) {
console.log('true');
} else {
console.log('false');
}

if (1 == 1) {
console.log('true');
} else {
console.log('false');
}
// Output:
// true
// false
// true


// 2. Time-based greeting
let hours = new Date().getHours();

if (hours < 12) {
console.log("Good Morning!");
} else {
console.log("Good Afternoon!");
}
// Example Output (at 12:00 PM): Good Afternoon!


// 3. Temperature check
let temperature = 30;

if (temperature < 15) {
console.log("It's cold outside.");
} else if (temperature >= 15 && temperature <= 25) {
console.log("The weather is pleasant.");
} else {
console.log("It's hot outside.");
}
// Output: It's hot outside.


// 4. Ternary operator example
let age = 20;
let canVote = (age >= 18) ? "Yes" : "No";

console.log("Can vote:", canVote);
// Output: Can vote: Yes

let user = {
isLoggedIn: true,
role: "editor",
hasPremium: false
};

if (user.isLoggedIn) {
    if (user.role === "admin") {
        console.log("Welcome, Admin!");
    } else if (user.role === "editor") {
        if (user.hasPremium) {
        console.log("Welcome, Premium Editor!");
        } else {
        console.log("Welcome, Editor.");
        }
    } else {
        console.log("Welcome, User.");
    }
    } else {
    console.log("Please log in.");
}

/* let userInfo = {
age: 22,
subscription: "premium",
region: "INDIA"
};
*/
// Function to check fruit color
function checkFruitColor(fruit) {
    const redFruits = ["apple", "strawberry", "cherry", "cranberry"];
    
    if (redFruits.includes(fruit)) {
      return "red";
    } else {
      return "not red";
    }
  }
  
  console.log(checkFruitColor("apple"));   // Output: red
  console.log(checkFruitColor("banana"));  // Output: not red
  
  // Ternary operator example
  let ayu = 17;
  let message = ayu >= 18 ? "Adult" : "Minor";
  console.log(message); // Output: Minor
  
  // Switch statement for day of the week
  let dayNumber = new Date().getDay(); // 0 = Sunday, 1 = Monday, ..., 6 = Saturday
  
  switch (dayNumber) {
    case 0:
      console.log("Today is Sunday.");
      break;
    case 1:
      console.log("Today is Monday.");
      break;
    case 2:
      console.log("Today is Tuesday.");
      break;
    case 3:
      console.log("Today is Wednesday.");
      break;
    case 4:
      console.log("Today is Thursday.");
      break;
    case 5:
      console.log("Today is Friday.");
      break;
    case 6:
      console.log("Today is Saturday.");
      break;
    default:
      console.log("Invalid day.");
  }
  