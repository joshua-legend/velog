# 시간 만들기

* setInterval 내장 함수 사용
* new Date() 내장 함수 사용
* `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}` 활용하기!
>setInterval(sayHello, 1000);
sayHello() 라는 펑션을 1초마다 반복한다는 의미.
단 바로 실행되지 않고 1초 후 첫 시작이 되고 계속 1초마다 반복된다. setTimeout(sayHello, 1000);
1초 기다렸다가 한번만 실행.
```javascript
//clock에 대한 가져오기
const clock = document.querySelector("h2#clock");

function sayHello(){console.log("hello")}

//(함수,시간)
setInterval(sayHello,5000);

//현재 시간 가져오는 객체
new Date()
new Date().getDate()

//핵 중요!
function getClock(){
    const date = new Date();
    console.log(`${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`);
}

setInterval(getClock,1000);
```

# Pad Start

* 0 -> 00, 1 -> 01 
* padStart(길이,채워야하는 문자)

> "1".padStart(2,"0")
> "hello".padStart(20,"x")

```javascript
const clock = document.querySelector("h2#clock");
function getClock(){
    const date = new Date();
    // console.log(`${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`);
    const hour = String(date.getHours()).padStart(2,"0");
    const minutes = String(date.getMinutes()).padStart(2,"0");
    const seconds = String(date.getSeconds()).padStart(2,"0");
    clock.innerText = `${hour}:${minutes}:${seconds}`;
}
setInterval(getClock,1000);
```