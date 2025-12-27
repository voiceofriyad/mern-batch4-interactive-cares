class Animal {
  constructor(name) {
    this.name = name;
  }
  speak() {
    console.log(`${this.name} makes a noise.`);
  }
}

class Dog extends Animal {
  speak() {
    console.log(`${this.name} barks.`);
  }
  run() {
    console.log(`${this.name} is running.`);
  }
}

class Cat extends Animal {
  speak() {
    console.log(`${this.name} meows.`);
  }
  sleep() {
    console.log(`${this.name} is sleeping.`);
  }
}

const tomy = new Dog("Tommy");
tomy.speak();
tomy.run();

const kitty = new Cat("Kitty");
kitty.speak();
// kitty.run(); // kitty.run() will throw an error since run() is not defined in Cat class
