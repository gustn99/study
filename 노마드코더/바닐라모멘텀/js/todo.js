const toDoForm = document.querySelector("#todo-form");
const toDoList = toDoForm.querySelector("input");
const toDoInput = document.querySelector("#todo-form input");
const ul = document.querySelector("ul");

const TODOS_KEY = "todos";
let toDos = [];

function paintTodo(newTodo) {
  const li = document.createElement("li");
  li.id = newTodo.id;
  const span = document.createElement("span");
  span.innerText = newTodo.text;
  const button = document.createElement("button");
  button.innerText = "❌";
  button.addEventListener("click", deleteToDo);
  li.appendChild(span);
  li.appendChild(button);
  ul.appendChild(li);
}

function deleteToDo(event) {
  const li = event.target.parentElement;
  toDos = toDos.filter((toDo) => (toDo.id !== parseInt(li.id)));
  saveToDos();
  li.remove();
}

function saveToDos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function handleToDoSubmit(event) {
  event.preventDefault();
  const newTodo = toDoInput.value;
  const newTodoObj = {
    text: newTodo,
    id: Date.now()
  };
  toDoInput.value = "";
  toDos.push(newTodoObj);
  saveToDos();
  paintTodo(newTodoObj);
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

if(savedToDos) {
  toDos = JSON.parse(savedToDos);
  toDos.forEach(paintTodo);
}