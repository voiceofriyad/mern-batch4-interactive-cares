/* class Person {
  set firstName(value) {
    this._firstName = value.toUpperCase();
  }
  get firstName() {
    return this._firstName;
  }
  set lastName(value) {
    this._lastName = value.toUpperCase();
  }
  get lastName() {
    return this._lastName;
  }
  getFullName() {
    return this.firstName + " " + this.lastName;
  }
}

const john = new Person();
john.firstName = "John";
john.lastName = "Doe";

console.log(john.getFullName()); // Output: JOHN DOE
 */

class Person {
  setFirstName(value) {
    this.firstName = value.toUpperCase();
  }
  getFirstName() {
    return this.firstName;
  }
  setLastName(value) {
    this.lastName = value.toUpperCase();
  }
  getLastName() {
    return this.lastName;
  }
  getFullName() {
    return this.getFirstName() + " " + this.getLastName();
  }
}

const john = new Person();
john.setFirstName("John");
john.setLastName("Doe");
console.log(john.getFullName()); // Output: JOHN DOE
