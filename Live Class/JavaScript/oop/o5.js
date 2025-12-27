class Person {
  static title = "Mr.";
  static getTitle(name) {
    return this.title + name;
  }
}

console.log(Person.title);
console.log(Person.getTitle(" Riyad"));
