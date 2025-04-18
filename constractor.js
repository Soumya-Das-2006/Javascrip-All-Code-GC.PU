class Car {
    constructor(brand, year) {
        this.brand = brand;
        this.year = year;
    }

    display() {
        console.log(`${this.brand} ${this.year}`);
    }
}

const cl = new Car("Toyota", 2020);
cl.display(); // Output: Toyota 2020




function Person(name, age) {
    this.name = name;
    this.age = age;
    this.greet = function () {
        console.log(`Hi, I'm ${this.name} and I'm ${this.age} years old.`);
    };
}

const p1 = new Person("Soumya", 30);
p1.greet(); // Output: Hi, I'm Raaj and I'm 30 years old.
