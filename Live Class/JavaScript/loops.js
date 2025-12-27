// let i = 10;
// while (i--) {
//   console.log(i);
// }

// console.log("outside: ", i);

// for (let i = 0; i <= 10; i++) {
//   for (let j = 1; j <= 10; j++) {
//     console.log("i: " + i + " and j: " + j);
//   }
// }

// let arr = [
//   ["Riyad", "Tongi", 1710],
//   ["Faysal", "Uttara", 1230],
//   ["Alam", "Chandpur", 2000],
// ];

// for (row = 0; row < arr.length; row++) {
//   for (let col = 0; col < arr[row].length; col++) {
//     // console.log(row, col);
//     // console.log(arr[row][col]);
//     console.log("Row: ", row, " Column: ", col, " Value: ", arr[row][col]);
//   }
// }

let arr = ["Riyad", "Tongi", 1710];

// for (elements of arr) {
//   console.log(elements);
// }

/* for (innerArr of arr) {
  for (singleVal of innerArr) {
    console.log(singleVal);
  }
} */

// arr.forEach(function (el) {
//   console.log(el);
// });

arr.forEach((el) => console.log(el));
