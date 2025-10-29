let age = Number(prompt("Enter your age: "));

while (age < 18) {
  age = Number(prompt("You are too young."));
}

if (age >= 18) {
  alert("You can Enter");
}
