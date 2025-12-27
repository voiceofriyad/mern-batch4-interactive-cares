const url = "https://jsonplaceholder.typicode.com/posts/1";

// fetch(url)
//   .then((response) => response.json())
//   .then((data) => console.log(data));

// const response = await fetch(url);
// const data = await response.json();
// console.log(data);

const doSomething = async () => {
  /* fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const result = document.getElementById("result");
      result.innerHTML = `
        <h2 class = 'text-2xl'>${data.title}</h2>
        <br />
        <p>${data.body}</p>
      `;
    }); */

  const response = await fetch(url);
  const data = await response.json();
  const result = document.getElementById("result");
  result.innerHTML = `
        <h2 class = 'text-2xl'>${data.title}</h2>
        <br />
        <p>${data.body}</p>
    `;
};

const showDogs = async () => {
  const url = "https://dog.ceo/api/breeds/image/random";
  const response = await fetch(url);
  const data = await response.json();
  const result = document.getElementById("result");
  result.innerHTML = `
       <img src='${data.message}' alt='Dog Image' />
    `;
};
