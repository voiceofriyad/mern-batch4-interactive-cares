const url = "http://localhost:3000/books";

const fetchBooks = async () => {
  const response = await fetch(url);
  const data = await response.json();
  const bookList = data
    .map((book) => {
      return `
        <li class='p-2 border rounded'>
            <strong>${book.title}</strong> by ${book.author}
        </li>
    `;
    })
    .join("");
  document.getElementById("book-list").innerHTML = bookList;
};

fetchBooks();

const addBook = async () => {
  const title = prompt("Enter Book Title:");
  const author = prompt("Enter Book Author: ");

  await fetch(url, {
    method: "POST",
    body: JSON.stringify({
      title,
      author,
    }),
  });
  fetchBooks();
};

const updateBook = async () => {
  await fetch(`${url}/1`, {
    method: "PUT",
    body: JSON.stringify({
      title: "Kishor Ananda",
      author: "Abdullah Sayed",
    }),
  });
  fetchBooks();
};

const patchBook = async () => {
  await fetch(`${url}/2`, {
    method: "PATCH",
    body: JSON.stringify({
      title: "Amar Sonar Bangla",
    }),
  });
  fetchBooks();
};

const deleteBook = async () => {
  await fetch(`${url}/8354`, {
    method: "DELETE",
  });
  fetchBooks();
};
