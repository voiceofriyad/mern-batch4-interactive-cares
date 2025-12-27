// synchronous blocking behavior

console.log(`Take order from customer 1`);

function processOrder() {
  console.log(`Processing order for customer 1`);

  // blocking delay

  const currentTime = new Date().getTime();

  while (currentTime + 3000 >= new Date().getTime());

  console.log(`Processed order for customer 1`);
}

processOrder();

console.log(`Completed order for customer 1`);
