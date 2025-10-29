let persons = [
  {
    name: "Sakib",
    num: 75,
    position: "All-rounder",
    interest: ["reading", "modeling", "football"],
  },
  {
    name: "Mushfiq",
    num: 40,
    position: "batsman",
  },
  {
    name: "Tamim",
    num: 22,
    position: "Batsman",
  },
];

console.log(persons);
console.log(persons[1]);
console.log(persons[1].position);
console.log(persons[0].interest);
console.log(persons[0].interest[1]);

for (let i = 0; i < persons[0].interest.length; i++) {
  console.log(persons[0].interest[i]);
}

persons[0].interest.forEach((el) => {
  console.log(el);
});

persons[0].interest.forEach(function (el) {
  console.log(el);
});
