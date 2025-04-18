// Creating an object with properties
const car = {
    brand: "Volkswagen",
    model: "Golf"
  };
  
  // Adding a method to the object after creation
  car.drive = function () {
    console.log(`${this.brand} is driving ...`);
  };
  
  // Calling the method
  car.drive(); // Output: Volkswagen is driving ...
  
  // Creating an object with method shorthand
  const user = {
    name: "Bob",
    sayHi() {
      return `Hi, I'm ${this.name}`;
    }
  };
  
  // Calling the method
  console.log(user.sayHi()); // Output: Hi, I'm Bob
  
  // Object utility examples
  const person = {
    name: "Alice",
    age: 25,
    city: "New York"
  };
  
  console.log("Keys:", Object.keys(person));       // ['name', 'age', 'city']
  console.log("Values:", Object.values(person));   // ['Alice', 25, 'New York']
  console.log("Entries:", Object.entries(person)); // [['name', 'Alice'], ['age', 25], ['city', 'New York']]
  
  // Using Object.assign to copy properties
  const jobInfo = {
    role: "Developer",
    experience: "2 years"
  };
  
  const employee = Object.assign({}, person, jobInfo);
  console.log("Merged Object:", employee);
  
  // Checking if a property exists
  console.log("Has 'age'? ", Object.hasOwn(person, 'age')); // true
  console.log("Has 'salary'? ", Object.hasOwn(person, 'salary')); // false
  
  // Freezing an object
  Object.freeze(person);
  person.age = 30; // This won't change the value
  console.log("After freeze (age):", person.age); // Still 25
  
  // Sealing an object
  const book = {
    title: "JavaScript Guide",
    pages: 400
  };
  
  Object.seal(book);
  book.pages = 450; // Allowed (modification)
  delete book.title; // Not allowed (deletion)
  book.newProp = "Extra"; // Not allowed (addition)
  console.log("Sealed Object:", book);
  
  