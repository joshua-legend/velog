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