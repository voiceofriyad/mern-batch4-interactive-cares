const url = "https://jsonplaceholder.typicode.com/posts/1";

const doSomething = async () => {
  const response = await axios.get(url);
  const data = response.data;
  const result = document.getElementById("result");
  result.innerHTML = `
        <h2 class = 'text-2xl'>${data.title}</h2>
        <br />
        <p>${data.body}</p>
    `;
};
