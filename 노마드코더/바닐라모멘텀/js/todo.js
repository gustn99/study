const toDoForm = document.querySelector("#todo-form");
const toDoList = toDoForm.querySelector("input");
const toDoInput = document.querySelector("#todo-form input");

const toDos = [];

function paintTodo(newTodo) {
  const li = document.createElement("li");
  const span = document.createElement("span");
  span.innerText = newTodo;
  const button = document.createElement("button");
  button.innerText = "❌";
  button.addEventListener("click", deleteToDo);
  li.appendChild(span);
  li.appendChild(button);
  document.body.appendChild(li);
}

function deleteToDo(event) {
  const li = event.target.parentElement;
  li.remove();
}

function saveToDos() {
  localStorage.setItem("todos", JSON.stringify(toDos));
}

function handleToDoSubmit(event) {
  event.preventDefault();
  const newTodo = toDoInput.value;
  toDoInput.value = "";
  toDos.push(newTodo);
  saveToDos();
  paintTodo(newTodo);
}

toDoForm.addEventListener("submit", handleToDoSubmit);