// generate incomplete todo

/* <li class="item">
  <input type="checkbox" />
  <label>Task Name</label>
</li> */

const generateIncompleteTodo = (taskName) => {
  const listItem = document.createElement("li");
  listItem.classList.add("item");

  const inputItem = document.createElement("input");
  inputItem.setAttribute("type", "checkbox");

  inputItem.onchange = completeTask;

  const label = document.createElement("label");
  label.textContent = taskName;

  listItem.append(inputItem, label);
  return listItem;
};

// generate complete todo

/* <li class="item">
  <label>Task Name </label> 
  <button class="delete">Delete</button>
</li> */

const generateCompleteTodo = (taskName) => {
  const listItem = document.createElement("li");
  listItem.classList.add("item");

  const label = document.createElement("label");
  label.textContent = taskName;
  //   const task = taskName;

  const button = document.createElement("button");
  button.classList.add("delete");
  button.textContent = "Delete";

  button.onclick = deleteTask;

  const button2 = document.createElement("button");
  button2.classList.add("restore");
  button2.textContent = "Restore";

  button2.onclick = restoreTask;

  listItem.append(label, " ", button, button2);
  return listItem;
};

// complete task

const completeTask = (e) => {
  const checkBox = e.target;
  const taskItem = checkBox.parentNode;

  const label = taskItem.querySelector("label");
  const taskName = label.textContent;

  const taskToAdd = generateCompleteTodo(taskName);
  document.querySelector(".complete-list ul").appendChild(taskToAdd);

  taskItem.parentNode.removeChild(taskItem);
};

// delete task

const deleteTask = (e) => {
  const taskItem = e.target.parentNode;
  taskItem.parentNode.removeChild(taskItem);
};

// restore task

const restoreTask = (e) => {
  const taskItem = e.target.parentNode;
  console.log(taskItem);

  const label = taskItem.querySelector("label");
  const listItemToAdd = label.textContent;

  const whatToRestore = generateIncompleteTodo(listItemToAdd);

  const listContainer = document.querySelector("#items");
  listContainer.appendChild(whatToRestore);

  taskItem.parentNode.removeChild(taskItem);
};

// todo

const todoForm = document.querySelector("form");

todoForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const taskInput = document.querySelector("#new-task");
  const taskName = taskInput.value;

  const listItemToAdd = generateIncompleteTodo(taskName);

  const listContainer = document.querySelector("#items");
  listContainer.appendChild(listItemToAdd);

  taskInput.value = "";
});
