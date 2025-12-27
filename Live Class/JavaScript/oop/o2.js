class Person {
  constructor(fname, lname) {
    this.firstName = fname;
    this.lastName = lname;
  }

  getFullName() {
    return this.firstName + " " + this.lastName;
  }
}

const john = new Person("John", "Doe");
const hasin = new Person("hasin", "hayder");
// const mahmud = new Person();

console.log(john.getFullName());
john.lastName = "smith";
console.log(john.getFullName());
console.log(hasin.getFullName());
