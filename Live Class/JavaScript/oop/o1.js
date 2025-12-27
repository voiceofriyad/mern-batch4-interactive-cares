const person = {
  fname: "John",
  lname: "Doe",
  getFullName: function () {
    return this.fname + "" + this.lname;
  },
};
person.fname = "jane";
console.log(person.getFullName());
