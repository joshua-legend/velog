# 토끼를 찾아라

* Sticky 포지션

* scrollIntoView() 메소드 활용

* **JS로 HTML 모든것을 커버 가능** 

* 해당 위치의 토끼를 찾는 페이지

```javascript
const container = document.querySelector("#container");
const num = 25;
const special =  Math.floor(Math.random() * (num - 0)) + 0;

const findRabbitBtn = document.querySelector("#find_rabbit");

let special_div;

function createDIV() {
    for(let i=0;i<num;i++){
        const div = document.createElement("div");
        container.appendChild(div);
        div.style.backgroundImage="url('img/carrot.png')";
        if(i==special) {
            div.id = "special";
            div.style.backgroundImage="url('img/rabbit.png')";
            special_div = document.querySelector("#special");
        }
        const rect = div.getBoundingClientRect();
        div.addEventListener('click',()=>{console.log(rect);});
    }
}
createDIV();

findRabbitBtn.addEventListener('click',()=>{
    special_div.scrollIntoView({behavior: 'smooth'});
});
```