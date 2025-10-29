function createPersons(name, age) {
  return {
    name,
    age,
    sayHello() {
      return "Hello " + this.name + ", your age is " + this.age;
    },
  };
}

let person1 = createPersons("Riyad", 30);
console.log(person1);
console.log(person1.sayHello());

let person2 = createPersons("Faysal", 25);
console.log(person2);
console.log(person2.sayHello());
