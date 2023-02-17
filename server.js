function normal() {}
function Person(name) {
    this.name = name;

    function sayHello() {
        console.log(`Hello, my name is ${this.name}.`);
    }
}

Person.prototype.sayHello = function () {
    console.log(`Hello, my name is ${this.name}.`);
};

const person = new Person("John");

person.sayHello(); // Hello, my name is John.
