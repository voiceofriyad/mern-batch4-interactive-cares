let original = {
  name: "John",
  age: 25,
  address: {
    city: "New York",
    country: "USA",
  },
};

// Shallow copy using spread operator
let shallowCopy = { ...original };

// Change nested object
shallowCopy.name = "Los Angeles";

console.log(original.name); // 'Los Angeles' ❌ Original changed!
console.log(shallowCopy.name); // 'Los Angeles'

const user = {
  name: "Karim",
  showName() {
    console.log(this.name);
  },
  show: () => {
    console.log(this.name);
  },
};

user.showName();
user.show();
