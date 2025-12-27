// document.title = "Riyad";
// const header = document.getElementById("header");
// header.style.color = "#d91633ff";

// header.textContent = "Dom Tutorial";
// header.innerText = "Dom Tutorial";

// console.log(header.textContent);
// console.log(header.innerText);

// let container = document.querySelector("#items");
// console.log(container.getElementsByClassName("item"));
// let a = container.getElementsByClassName("item");
// a[0].style.color = "red";
// console.dir(container);
// let child = container.querySelector(".item:nth-child(2");
// child.style.color = "green";

// let parent = document.querySelector("#items");
// console.log(parent);
// let children = parent.children;
// console.log(children);
// let a = children.querySelector(".item:nth-child(2)");
// console.log(a);
// children[2].style.color = "red";

// let child = parent.querySelector(".item:nth-child(2)");
// child.style.color = "red";
// parent.firstElementChild.style.color = "red";
// parent.style.color = "red";

// let a = document.createElement("li");
// a.textContent = "bangla";
// a.innerHTML = "<span>bangla</span>";
// a.innerText = "<span>bangla</span>";
// let b = document.querySelector(".todo-list");
// b.append("alu");
// b.appendChild(a);

// let c = b.append(a, "english");
// console.log(c);

// const headerElement = document.querySelector("form");

// headerElement.addEventListener("input", (e) => {
//   console.log(e.target.value);
// });

// ---------------------------------------

// generate incomplete todo

/* <li class="item">
  <input type="checkbox" />
  <label>Task Name</label>
</li> */

function generateIncompleteTodo(taskName) {
  const listItem = document.createElement("li");
  // listItem.setAttribute("class", "item");
  listItem.classList.add("item");

  const inputItem = document.createElement("input");
  inputItem.setAttribute("type", "checkbox");

  inputItem.onchange = completeTask;

  const label = document.createElement("label");
  label.textContent = taskName;

  listItem.append(inputItem, label);

  return listItem;
}

// generate complete todo

/* <li class="item">Task Name 
  <button class="delete">Delete</button>
</li> */

function generateCompleteTodo(taskName) {
  const listItem = document.createElement("li");
  listItem.classList.add("item");

  const button = document.createElement("button");
  button.classList.add("delete");
  button.textContent = "Delete";
  button.onclick = deleteTask;

  listItem.append(taskName, " ", button);

  return listItem;
}

// Complete Task

function completeTask(e) {
  const checkBox = e.target;
  const taskItem = checkBox.parentNode;

  const label = taskItem.querySelector("label");
  const taskName = label.textContent;

  const taskToAdd = generateCompleteTodo(taskName);
  document.querySelector(".complete-list ul").appendChild(taskToAdd);

  taskItem.parentNode.removeChild(taskItem);
}

// Delete Task

function deleteTask(e) {
  const taskItem = e.target.parentNode;
  const taskContainer = taskItem.parentNode;

  taskContainer.removeChild(taskItem);
}

const todoForm = document.querySelector("form");
todoForm.addEventListener("submit", (e) => {
  e.preventDefault();

  // const taskName = e.target.value;
  // const taskName = document.querySelector("#new-task").value;

  const taskInput = document.querySelector("#new-task");
  const taskName = taskInput.value;

  const listItemToAdd = generateIncompleteTodo(taskName);

  const listContainer = document.querySelector("#items");

  listContainer.appendChild(listItemToAdd);

  taskInput.value = "";
});
