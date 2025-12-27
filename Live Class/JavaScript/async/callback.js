// solve flow control problem with 'callback'

function takeOrder(customer, callback) {
  console.log(`Take order from ${customer}`);
  callback(customer);
}

function processOrder(customer, callback) {
  console.log(`Processing order for ${customer}`);

  // blocking delay

  setTimeout(() => {
    console.log("Cooking done!");
    console.log(`Processed order for ${customer}`);
    callback(customer);
  }, 3000);
}

function completeOrder(customer) {
  console.log(`Completed order for ${customer}`);
}

// callback pattern

takeOrder("Riyad", (customer) => {
  processOrder(customer, (customer) => {
    completeOrder(customer);
  });
});

console.log(`checking...`);

/*  */
