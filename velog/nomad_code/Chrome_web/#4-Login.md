# Input Values

```javascript
const loginInput = document.querySelector(`#login-form input`);
const loginButton = document.querySelector(`#login-form button`);

function handleLoginBtnClick(){
    console.log(loginInput.value);
    console.log(loginButton);
}

loginButton.addEventListener("click",handleLoginBtnClick);
```
* 적극적으로 html 활용해야한다. 
* required maxlength="15"
* form에서 submit 하면 재갱신이 된다.
* 브라우저는 엔터를 누를 때 새로고침을 하고 form을 submit 한다.(기본동작)

```javascript
function onLoginSubmit(event){
    event.preventDefault(); // 브라우저가 기본 동작을 실행하지 못하게 막기 // event object는 preventDefault함수를 기본적으로 갖고 있음
    console.log(event);
}
loginForm.addEventListener("submit", onLoginSubmit); // submit 이벤트가 발생한다면, onLoginSubmit함수를 실행시킨다는 의미 // JS는 onLoginSubmit함수 호출시 인자를 담아서 호출함. 해당 인자는 event object를 담은 정보들
```

* form을 submit하면 브라우저는 기본적으로 페이지를 새로고침 하도록 되어있다. << 우리가 원하는 것이 아님!
* **preventDefault()** 함수를 추가함으로써 브라우저의 기본 동작을 막을 수 있다!!

* 이 preventDefault 함수는 EventListener 함수의 '첫 번째 argument' 안에 있는 함수이다. 첫 arument는 지금 막 벌어진 event들에 대한 정보를 갖고 있다.
* JS는(기본적으로)argument를 담아서 함수를 호출하는데, 이 argument가 기본 정보들을 제공하고 있다. ex) 누가 submit주체인지, 몇 시에 submit을 했는지 등등 콘솔에 출력해보면 알 수 있음


```javascript
const link = document.querySelector("a");
function handleLinkClick(event) {
    console.log(event)
    console.dir(event)
}
link.addEventListener("click",handleLinkClick);
```

*  MouseEvent보다 PointerEvent가 더 많은 기능을 포함하고 있어서 이제 PointerEvent를 쓴다고 하네요.

```javascript
//.hidden{display: none;}
const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";

function onLoginSubmit(){
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const username = loginInput.value;
    localStorage.setItem("username",username);
    greeting.innerText = `Hello ${username}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

loginForm.addEventListener("submit", onLoginSubmit);
```

# Local Storage

> 브라우저 미니 DB ^ㅡ^

```javascript
const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username"

function onLoginSubmit(){
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY, username);
    paintGreetings(username);
}

function paintGreetings(username){
    greeting.innerText = `Hello ${username}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

loginForm.addEventListener("submit", onLoginSubmit);

const savedUsername = localStorage.getItem(USERNAME_KEY);

if(savedUsername===null){
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit",onLoginSubmit);
}else{
    paintGreetings(savedUsername);
}
```