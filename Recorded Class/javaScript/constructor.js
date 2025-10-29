class Person {
  constructor(name, age) {
    (this.name = name),
      (this.age = age),
      (this.sayHello = function () {
        return "Hello " + this.name + ", your age is " + this.age;
      });
  }
}

let person1 = new Person("Riyad", 30);
console.log(person1);
console.log(person1.sayHello());

function Person1(name, age) {
  (this.name = name),
    (this.age = age),
    (this.sayHello = function () {
      return "Hello " + this.name + ", your age is " + this.age;
    });
}

let person2 = new Person("Faysal", 25);
console.log(person2);
console.log(person2.sayHello());
