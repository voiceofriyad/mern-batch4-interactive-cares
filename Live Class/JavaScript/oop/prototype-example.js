String.prototype.reverse = function () {
  return this.split("").reverse().join("");
};
const myName = "Faysal Riyad";
console.log(myName.reverse());

Array.prototype.sum = function () {
  return this.reduce((acc, curr) => acc + curr, 0);
};

const numbers = [10, 20, 30, 40, 50];
console.log(`The sum of [${numbers}] is: ${numbers.sum()}`);

Array.prototype.even = function () {
  return this.filter((num) => num % 2 === 0);
};

const numbers2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(`The even numbers in [${numbers2}] are: [${numbers2.even()}]`);
