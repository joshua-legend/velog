# The Document Object

> Javascript는 html과 상호작용
> 
> Javascript는 html에 접근하도록 설정
> 
> Document 는 web browser를 의미함.


# Html in JS

 ```javascript
const title = document.getElementById("title");
console.log(title);
```

> qeurySelector는 css 기반으로 선택을 한다.
> getelementbyid 와 같은 기능을 하므로 queryselector 기반으로 한다.

- getElementsByClassName() : 많은 element를 가져올때 씀(array를 반환)
- getElementsByTagName() : name을 할당할 수 있음(array를 반환)
- querySelector : element를 CSS selector방식으로 검색할 수 있음 (ex. h1:first-child)
  단 하나의 element를 return해줌
  ⇒ hello란 class 내부에 있는 h1을 가지고 올 수 있다(id도 가능함)
- 첫번째 element만 가져옴
- 조건에 맞는 세개 다 가져오고 싶으면 querySelectorAll
  ⇒ 세개의 h1이 들어있는 array를 가져다 줌
- querySelector("#hello); 와 getElementById("hello"); 는 같은 일을 하는 것임
  하지만 후자는 하위요소 가져오는 것을 못하므로 전자만 쓸거다
  
# Events

* eventListener, 모든 event가 아닌 단 하나의 event만 알고 싶음

```javascript
const title = document.querySelector("div.hello:first-child h1");

function handleTitleClick() {
  console.log("title was clicked!");
}
title.addEventListener("click",handleTitleClick);

function handleTitleClick(){
  title.style.color = "blue";
}

function handleMouseEnter(){
  title.innerText = "mouse is here!";
}

function handleMouseLeave(){
  title.innerText = "mouse is gone!";
}

title.addEventListener("click",handleTitleClick);
title.addEventListener("mouseenter", handleMouseEnter);
title.addEventListener("mouseleave", handleMouseLeave);
```

document의 body,head,title 이런것들은 중요하기 때문에
document.body.style~의 명령이 허용되지만, div같은것들은 호출이 안됨

나머지 element들은 querySelector나 getElementById로 불러와야됨!!!!!!!

> *raw string really danger!

```javascript
const h1 = document.querySelector("div.hello:first-child h1");

function handleTitleClick() {
  // const clickedClass = `clicked sexy-font`;
  // if(h1.classList.contains(clickedClass)){
  //     h1.classList.remove(clickedClass)
  // }else{
  //     h1.classList.add(clickedClass)
  // }
  //
  h1.classList.toggle("clicked") //한줄 요약
}

h1.addEventListener("click",handleTitleClick)
```