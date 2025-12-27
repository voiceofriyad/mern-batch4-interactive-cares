// function add(n1, n2) {
//   console.log(n1 + n2);
// }

// add(20, 30);

// let newFunc = add;
// newFunc(2, 3);

// function hello() {
//   console.log("Hello World");
//   // return "Hello World";
// }

// function sayHello(func) {
//   return func();
// }

// function againSayHello(func) {
//   return func();
// }

// /* let x = sayHello(hello);
// console.log(x); */

// // let a = againSayHello(sayHello(hello));
// // let a = againSayHello(() => sayHello(hello));
// // console.log(a);

// againSayHello(() => sayHello(hello));

// function hello() {
//   console.log("Hello World");
//   return 5;
// }

// function sayHello(func) {
//   return func;
// }

// let a = sayHello(hello);
// // console.log(a);
// a();

// let str = "Amar Sonar Bangla";
// str.to;

// function replaceWord(givenString, wantReplace, replacedWord) {
//   let str = givenString.split(" ");

//   for (let i = 0; i < str.length; i++) {
//     if (str[i].toLowerCase() === wantReplace.toLowerCase()) {
//       str[i] = replacedWord;
//     }
//   }

//   let newStr = str.join(" ").toUpperCase();
//   return newStr;
// }

// let result = replaceWord(str, "sonar", "praner");
// console.log(result);

// let result2 = replaceWord(str, "Moner", "Praner");
// console.log(result2);

// function replaceWord(givenString, wantReplace, replacedWord) {
//   return givenString
//     .split(" ")
//     .map((word) => (word === wantReplace ? replacedWord : word))
//     .join(" ");
// }
