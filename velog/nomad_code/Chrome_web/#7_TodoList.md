# To do list 만들기

* localstorage 의 고유 아이디 는 Date.now() 사용

* filter는 true을 돌려줘야 작동한다.

```javascript
function filterTest(item) {return item === 3;}
[1,2,3,4,5].filter(filterTest);
//3 돌려준다.
const num = [1,2,3,4,5,6,7,8];
num.filter(x=> x%2 === 1);
```


```html
// required 막아준다.
<form id="todo-form">
    <input type="text" placeholder="Write a to-do and Press Enter" required>
</form>
<ui id="todo-list"></ui>
```

```javascript
const todoForm = document.getElementById("todo-form");
const todoInput = document.querySelector("#todo-form input");
const todoList = document.getElementById("todo-list");

function paintTodo(newTodo) {
    // 리스트 만드는 방법(동적 할당 개념)
    const li = document.createElement("li");
    const span = document.createElement("span");
    span.innerText = newTodo;
    const button = document.createElement("button");
    button.innerText = "✖";

    li.appendChild(span);
    li.appendChild(button);
    todoList.appendChild(li);
}

function handleToDoSubmit(event) {
    //갱신 무효화 하기
    event.preventDefault();
    const newTodo = todoInput.value;
    //enter시 빈문자로 갱신하기
    todoInput.value = "";
    paintTodo(newTodo)
}
todoForm.addEventListener("submit",handleToDoSubmit);
```
