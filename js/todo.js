const toDoForm = document.getElementByID("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");

function handleToDoSubmit(event) {
  event.preventDefault();
  const newTodo = "toDoInput.value";
  toDoInput.value = "";
  console.log(newToDo, toDoInput.value);
}

toDoForm.addEventListener("submit", handleToDoSubmit);
