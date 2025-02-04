const todos = [
  {
    title: "Initial Todo",
    description: "This is the initial todo",
    complete: false,
  }
];

// Function to add a todo to the array
function addTodo(title, description) {
  const newTodo = {
    title: title,
    description: description,
    complete: false,
  };
  todos.push(newTodo);
  console.log(`Added new todo: ${title}`);
}

// Function to remove a todo by its index
function removeTodo(index) {
  if (index >= 0 && index < todos.length) {
    const removedTodo = todos.splice(index, 1);
    console.log(`Removed todo: ${removedTodo[0].title}`);
  } else {
    console.log('Invalid index');
  }
}

// Function to edit a todo's title or description
function editTodo(index, newTitle, newDescription) {
  if (index >= 0 && index < todos.length) {
    todos[index].title = newTitle;
    todos[index].description = newDescription;
    console.log(`Edited todo: ${newTitle}`);
  } else {
    console.log('Invalid index');
  }
}

// Function to mark a todo as completed
function markTodoComplete(index) {
  if (index >= 0 && index < todos.length) {
    todos[index].complete = true;
    console.log(`Marked todo as completed: ${todos[index].title}`);
  } else {
    console.log('Invalid index');
  }
}

// Function to display the length of the todos list and completed tasks count
function displayTodoLength() {
  const totalTodos = todos.length;
  const completedTodos = todos.filter(todo => todo.complete).length;
  console.log(`Total Todos: ${totalTodos}, Completed Todos: ${completedTodos}`);
}

// Function to print the todos list
function displayTodos() {
  todos.forEach((todo, index) => {
    console.log(`Todo #${index + 1}:`);
    console.log(`Title: ${todo.title}`);
    console.log(`Description: ${todo.description}`);
    console.log(`Completed: ${todo.complete ? "Yes" : "No"}`);
    console.log('================================');
  });
}

function app() {
  console.log('Welcome to the Todo Application');
  console.log('================================');
  
  // Example usage of the functions
  addTodo("Buy groceries", "Milk, bread, and eggs");
  addTodo("Workout", "Do 30 minutes of cardio");

  // Display the length of the todos array
  displayTodoLength();
  
  // Print each todo's details
  displayTodos();

  // Edit a task
  editTodo(0, "Buy groceries", "Milk, bread, eggs, and butter");

  // Mark a task as completed
  markTodoComplete(1);

  // Remove a task
  removeTodo(0);

  // Display the updated list
  displayTodoLength();
  displayTodos();
}

app();
