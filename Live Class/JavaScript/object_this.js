let person = {
  name: "Md Faysal Alam Riyad",
  addr: "Tongi",
  interest: ["Books", "Food", "Travel"],
  sayHello: function () {
    console.log("Hello World");
  },
  printInterest() {
    this.interest.forEach((el) => {
      console.log(this.name + " loves " + el);
    });
  },
};

person.printInterest();

// person.favLang = "javaScript";

// console.log(person);

// for (let el in person) {
//   if (typeof person[el] == "function") {
//     person[el]();
//   } else {
//     console.log(person[el]);
//   }
// }

// let arr = [1, 2, 3, 4, 5];
// console.log(arr);
// console.log(...arr);

// function add(a, b, c) {
//   return a + b + c;
// }
// const numbers = [10, 20, 30];
// console.log(add(...numbers));
