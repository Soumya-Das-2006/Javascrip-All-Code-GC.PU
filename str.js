// Combine first and last name
var myfirstname = "Soumya";
var mylastname = "Das";
var myfullname = myfirstname + " " + mylastname;
console.log(myfullname); // Output: Soumya Das

// String with double quotes
var myStr = "This is a string with \"double quotes\" inside.";
console.log(myStr); // Output: This is a string with "double quotes" inside.

// HTML link string
myStr = '<a href="#" target="_blank">link</a>';
console.log(myStr); // Output: <a href="#" target="_blank">link</a>

// Escaping characters
myStr = "FirstLine\n\t\\SecondLine\nThirdLine";
console.log(myStr);
// Output:
// FirstLine
//     \SecondLine
// ThirdLine

// Concatenating with + operator
var ourStr = "I come first. " + "I come second.";
console.log(ourStr); // Output: I come first. I come second.

// Concatenating with += operator
ourStr = "I come first. ";
ourStr += "I come second.";
console.log(ourStr); // Output: I come first. I come second.

// Constructing strings with variables
var myName = "Soumya";
myStr = "My name is " + myName + " and I am well!";
console.log(myStr); // Output: My name is Soumya and I am well!

// Appending variables to strings
var someAdjective = "worthwhile";
myStr = "Learning to code is ";
myStr += someAdjective;
console.log(myStr); // Output: Learning to code is worthwhile

// Finding the length of a string
var strLength = myStr.length;
console.log("Length of string:", strLength); // Output: Length of string: 29

// String length example
var lastNameLength = 0;
var lastName = "Love lace";
lastNameLength = lastName.length;
console.log(lastNameLength); // Output: 10

// Use Bracket Notation to Find the First Character in a String
var firstLetterOfLastName = "";
lastName = "Lovelace";
firstLetterOfLastName = lastName[0];
console.log(firstLetterOfLastName); // Output: L

// Use Bracket Notation to Find the Nth Character in a String
var firstLetterOfFirstName = "";
var firstName = "Ada";
firstLetterOfFirstName = firstName[1];
console.log(firstLetterOfFirstName); // Output: d

// String Methods Demolet text = "   JavaScript String Methods Demo   ";

// trim(): Removes whitespace from both ends
let trimmed = text.trim();
console.log("Trimmed:", trimmed); // Output: JavaScript String Methods Demo

// slice(start, end): Extracts a section from start to end (not including end)
let sliced = trimmed.slice(0, 10);
console.log("Slice (0, 10):", sliced); // Output: JavaScript

// substr(start, length): Extracts length characters from start index
let subStr = trimmed.substr(11, 6);
console.log("Substr (11, 6):", subStr); // Output: String

// substr with negative index
let subStrNegative = trimmed.substr(-6, 6);
console.log("Substr (-6, 6):", subStrNegative); // Output: Demo

// substring(start, end): Similar to slice, but doesn't accept negative values
let subString = trimmed.substring(11, 17);
console.log("Substring (11, 17):", subString); // Output: String

// replace(): Replaces the first match of a substring with a new value
let replaced = trimmed.replace("Demo", "Example");
console.log("Replace 'Demo' with 'Example':", replaced); 
// Output: JavaScript String Methods Example
