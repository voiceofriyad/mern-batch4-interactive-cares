class Person {
  constructor(fname, lname, age) {
    this.firstName = fname;
    this.lastName = lname;
    if (age <= 0) {
      throw new Error("Age must be greater than zero");
    } else {
      this._age = age;
    }
  }

  set age(value) {
    if (value <= 0) {
      throw new Error("Age must be greater than zero");
    } else {
      this._age = value;
    }
  }
  greet() {
    console.log(
      `Hello, my name is ${this.firstName} ${this.lastName} and I am ${this._age} years old.`
    );
  }

  getFullName() {
    return this.firstName + " " + this.lastName;
  }
}

const person1 = new Person("John", "Doe", 20);
// person1.age = 0;
person1.greet();
