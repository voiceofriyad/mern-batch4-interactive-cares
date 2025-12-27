class Circle {
  //   static pi = 3.1416;
  #pi = 3.1416;
  constructor(radius) {
    this.radius = radius;
  }
  getArea() {
    // return Math.PI * this.radius * this.radius;
    return this.#pi * this.radius * this.radius;
  }
}

const circle1 = new Circle(5);
console.log(circle1.getArea());
// Circle.#pi = 2;
Circle.pi = 2;
console.log(circle1.getArea());
