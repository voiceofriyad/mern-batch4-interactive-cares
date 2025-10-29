let obj = {
  greeting: "Hello ",
  names: ["Riyad", "Faysal", "Alam"],
  sayHello: function () {
    this.names.forEach(function (el) {
      console.log(this);
      console.log(this.greeting + el);
    }, this);
  },
  sayHello2: function () {
    this.names.forEach((el) => {
      console.log(this.greeting + el);
    });
  },
};

obj.sayHello();
obj.sayHello2();
