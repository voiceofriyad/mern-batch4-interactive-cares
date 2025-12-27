class TodoList {
  constructor(name) {
    this.name = `${name} Todo List`;
    this.todosList = [];
  }
  addTask(task) {
    this.todosList.push(task);
  }
  printTasks() {
    console.log(`Tasks in ${this.name}:`);
    this.todosList.forEach((tasks, index) => {
      console.log(`${index + 1}. ${tasks}`);
    });
  }
}

const personalTodoList = new TodoList("Personal");
personalTodoList.addTask("Buy groceries");
personalTodoList.addTask("Walk the dog");
personalTodoList.addTask("Read a book");
personalTodoList.printTasks();

const workTodoList = new TodoList("Official");
workTodoList.addTask("Finish project report");
workTodoList.addTask("Email client");
workTodoList.addTask("Prepare presentation");
workTodoList.printTasks();
