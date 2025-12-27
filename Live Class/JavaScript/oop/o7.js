class Person {
  constructor(fname, lname) {
    this.firstName = fname;
    this.lastName = lname;
  }

  get fullName() {
    return this.firstName + " " + this.lastName;
  }
}

const john = new Person("John", "Doe");
// console.log(john.getFullName());
console.log(john.fullName);
