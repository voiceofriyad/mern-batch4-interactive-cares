// Promise all

const promise1 = Promise.resolve("Promise 1 resolved");

const promise2 = new Promise((res) => {
  setTimeout(() => {
    res("Promise 2 resolved");
  }, 2000);
});

/* Promise.all([promise1, promise2]).then((res) => {
  console.log(res);
}); */

// Promise race

Promise.race([promise1, promise2]).then((res) => {
  console.log(res);
});
