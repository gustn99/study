const toDoForm = document.querySelector("#todo-form");
const toDoInput = toDoForm.querySelector("input");
const ul = document.querySelector("ul");

const COMPLETED_CLASSNAME = "complete";
const TODOS_KEY = "todos";
let toDos = [];

function paintTodo(newTodo) {
  const li = document.createElement("li");
  li.id = newTodo.id;
  const span = document.createElement("span");
  span.innerText = newTodo.text;
  const check = document.createElement("input");
  check.type = "checkbox";
  const button = document.createElement("button");
  button.type = "button";
  button.innerText = "❌";
  check.addEventListener("change", onChange);
  button.addEventListener("click", deleteToDo);
  li.appendChild(span);
  li.appendChild(check);
  li.appendChild(button);
  ul.appendChild(li);
}

function onChange(event) {
  const li = event.target.parentElement;
  console.log(li);
  if (li.className === "") {
    li.classList.add(COMPLETED_CLASSNAME);
  } else {
    li.classList.remove(COMPLETED_CLASSNAME);
  }
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