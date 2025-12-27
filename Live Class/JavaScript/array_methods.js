// https://github.com/jamesqquick/javascript-array-functions-practice

const characters = [
  {
    name: "Luke Skywalker",
    height: "172",
    mass: "77",
    eye_color: "blue",
    gender: "male",
  },
  {
    name: "Darth Vader",
    height: "202",
    mass: "136",
    eye_color: "yellow",
    gender: "male",
  },
  {
    name: "Leia Organa",
    height: "150",
    mass: "49",
    eye_color: "brown",
    gender: "female",
  },
  {
    name: "Anakin Skywalker",
    height: "188",
    mass: "84",
    eye_color: "blue",
    gender: "male",
  },
];

// MAP

// Get an array of all names
let allNames = characters.map((el) => el.name);
// console.log(allNames);

// Get an array of all heights
let allHeights = characters.map((el) => el.height);
// console.log(allHeights);

// Get an array of objects with just name and height properties
let nameHeight = characters.map((el) => {
  return {
    name: el.name,
    height: el.height,
  };
});
// console.log(nameHeight);

// Get an array of all first names
let firstName = characters.map((el) => el.name.split(" ")[0]);
// console.log(firstName);

// let nums = [2, 4, 6, 8, 10];
// let newArr = nums.map((el) => {
//   return [el];
// });
// console.log(newArr);
// let newNums = [...nums] * 2;
// console.log(newNums);

// FILTER

// Get characters with mass greater than 100
let greaterThan100 = characters.filter((el) => el.mass > 100);
// console.log(greaterThan100);

// Get characters with height less than 200
let lessThan100 = characters.filter((el) => el.height < 200);
// console.log(lessThan100);

// Get all male characters
let allMale = characters.filter((el) => el.gender === "male");
// console.log(allMale);

// Get all female characters
let allFemale = characters.filter((el) => el.gender === "female");
// console.log(allFemale);

// EVERY

// Does every character have blue eyes?
// let isBlue = characters.every((el) => el.eye_color === "blue");

let isBlue = characters.every((el) => /Blue/gi.test(el.eye_color));
// console.log(isBlue);

// Does every character have mass more than 40?
let isMass = characters.every((el) => el.mass > 40);
// console.log(isMass);

// Is every character shorter than 200?
let isShorter = characters.every((el) => el.height < 200);
// console.log(isShorter);

// Is every character male?
let isMale = characters.every((el) => el.gender === "male");
// console.log(isMale);

// SOME

// Is there at least one male character?
let oneMale = characters.some((el) => el.gender === "male");
// console.log(oneMale);

// Is there at least one character with blue eyes?
let oneBlue = characters.some((el) => el.eye_color === "blue");
// console.log(oneBlue);

// Is there at least one character taller than 200?
let oneTaller = characters.some((el) => el.height > 200);
// console.log(oneTaller);

// Is there at least one character that has mass less than 50?
let oneMass = characters.some((el) => el.mass < 50);
// console.log(oneMass);

// SORT

// Sort by name
let name = characters.sort((a, b) => a.name - b.name);
// console.log(name);
// Sort by mass

// Sort by height

// Sort by gender
let gender = characters.sort((a, b) => a.gender.localeCompare(b.gender));
// console.log(gender);

// REDUCE

// Get the total mass of all characters
let totalMass = characters.reduce((acc, el) => {
  return acc + Number(el.mass);
}, 0);
// console.log(totalMass);

// Get the total height of all characters
let totalHeight = characters.reduce((acc, el) => {
  return acc + Number(el.height);
}, 0);
// console.log(totalHeight);

// Get the total number of characters in all the character names
let totalCharName = characters.reduce((acc, el) => {
  return acc + el.name.length;
}, 0);
// console.log(totalCharName);

// Get the total number of characters by eye color (hint. a map of eye color to count)
let eyeColor = characters.reduce((acc, el) => {
  if (acc[el.eye_color]) {
    acc[el.eye_color]++;
  } else {
    acc[el.eye_color] = 1;
  }
  return acc;
}, {});

// console.log(eyeColor);

// acc[el.eye_color] -> acc['blue] -> acc.blue

let str = "Hello World";
let count = {};
for (let i = 0; i < str.length; i++) {
  if (count[str[i]]) {
    count[str[i]]++;
  } else {
    count[str[i]] = 1;
  }
}
console.log(count);

let products = [
  { name: "Laptop", price: 1000, inStock: true },
  { name: "Phone", price: 500, inStock: true },
  { name: "Tablet", price: 300, inStock: false },
];

// filter + map: Get names of available products
let available = products.filter((p) => p.inStock).map((p) => p.name);
// ['Laptop', 'Phone']

// console.log(available);
