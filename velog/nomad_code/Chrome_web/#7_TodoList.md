# To do list 만들기

* localstorage 의 고유 아이디 는 Date.now() 사용

* filter는 true을 돌려줘야 작동한다.

* 네이밍은 정말... 후

* window + . => 이모지 ✔

* splice 보다 filter를 쓰는게 더 안정적

```javascript
function filterTest(item) {return item === 3;}
[1,2,3,4,5].filter(filterTest);
//3 돌려준다.
const num = [1,2,3,4,5,6,7,8];
num.filter(x=> x%2 === 1);

JSON.stringify([1,2,3,4]);
'[1,2,3,4]'
JSON.parse('[1,2,3,4]');
(4) [1, 2, 3, 4]
```

```html
// required 막아준다.
<form id="todo-form">
    <input type="text" placeholder="Write a to-do and Press Enter" required>
</form>
<ui id="todo-list"></ui>
```

```javascript
const toDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos";

let toDos = [];

function saveToDos() {
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteToDo(event) {
    const li = event.target.parentElement;
    li.remove();
    toDos = toDos.filter((toDo) => toDo.id !== li.id);
    saveToDos();
}

function paintToDo(newTodo) {
    const li = document.createElement("li");
    li.id = newTodo.id;
    const span = document.createElement("span");
    span.innerText = newTodo.text;
    const button = document.createElement("button");
    button.innerText = "❌";
    button.addEventListener("click", deleteToDo);
    li.appendChild(span);
    li.appendChild(button);
    toDoList.appendChild(li);
}

// 고유 id는 현재 시간으로 주기!
function handleToDoSubmit(event) {
    event.preventDefault();
    const newTodo = toDoInput.value;
    toDoInput.value = "";
    const newTodoObj = {
        text: newTodo,
        id: Date.now(),
    };
    toDos.push(newTodoObj);
    paintToDo(newTodoObj);
    saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);
const savedToDos = localStorage.getItem(TODOS_KEY);

if (savedToDos !== null) {
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos;
    parsedToDos.forEach(paintToDo);
}
```
