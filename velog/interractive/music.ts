const frame = document.querySelector("section");
const lists:any = document.querySelectorAll("article");
const deg = 45;
const len = lists.length-1;
let i = 0;

for(let el of lists){
    let pic = el.querySelector(".pic");
    el.style.transform = `rotate(${deg*i}deg) translateY(-100vh)`;
    pic.style.backgroundImage = `url("https://picsum.photos/400/400")`;
    i++;


    const play = el.querySelector(".play");
    play.addEventListener("click",(event:any)=>{
        event.currentTarget.closest("article").querySelector(".pic").classList.add("on");
    })

}
