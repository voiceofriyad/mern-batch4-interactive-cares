// function createPerson(name, age) {
//   return {
//     name: name,
//     age: age,
//     greet: function () {
//       console.log(`Hello, my name is ${this.name}.`);
//     },
//   };
// }

// const person1 = createPerson("Alice", 30);
// person1.greet(); // Hello, my name is Alice.
// console.log(person1.age);

// let person1 = {
//   name: "Md Faysal Alam Riyad",
//   age: 30,
//   interest: ["javaScript", "PHP", "WordPress"],
// };

// let person2 = {
//   name: "John Doe",
//   age: 52,
//   interest: ["Java", "Python", "C++"],
// };

// Factory Function

// function createPerson(name, age, interest) {
//   return {
//     name,
//     age,
//     interest,
//     sayHello() {
//       return "Hello";
//     },
//   };
// }

// let person1 = createPerson("Md Faysal Alam Riyad", 30, [
//   "javaScript",
//   "PHP",
//   "WordPress",
// ]);

// let person2 = createPerson("John Doe", 52, ["Java", "Python", "C++"]);

// console.log(person1);
// console.log(person1.sayHello());

// Constructor Function

// function CreatePerson(name, age, interest) {
//   this.name = name;
//   this.age = age;
//   this.interest = interest;
// }

// let person1 = new CreatePerson("Md Faysal Alam Riyad", 30, [
//   "javaScript",
//   "PHP",
//   "WordPress",
// ]);

// console.log(person1);
// console.log(person1.age);

// Class

// class Person {
//   constructor(name, age, interest) {
//     this.name = name;
//     this.age = age;
//     this.interest = interest;
//   }
// }

// let person2 = new Person("Md Faysal Alam Riyad", 30, [
//   "javaScript",
//   "PHP",
//   "WordPress",
// ]);

// console.log(person2);
// console.log(person2.age);

// (function sayHello() {
//   console.log("Hello World");
// })();

// let sayHello2 = () => {
//   console.log("Hello Jupiter");
// };

// (sayHello3 = () => {
//   console.log("Hello March");
// })();

// (() => {
//   console.log("Hello Dhaka");
// })();

((name) => {
  console.log("Hello", name);
})("Riyad");
