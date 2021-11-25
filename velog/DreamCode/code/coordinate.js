const container = document.querySelector("#container");
const num = 25;
const special = 8;

const by_100px = document.querySelector("#by_100px");
const to_100px = document.querySelector("#to_100px");
const by_special = document.querySelector("#by_special");

let special_div;

function createDIV() {
    for(let i=0;i<num;i++){
        const div = document.createElement("div");
        container.appendChild(div);
        if(i==special) {
            div.id = "special";
            div.style.backgroundColor="rosybrown";
            special_div = document.querySelector("#special");
        }
        const rect = div.getBoundingClientRect();
        div.addEventListener('click',()=>{console.log(rect);});
    }
}
createDIV();
by_100px.addEventListener('click',()=>{
    scrollBy(0,100);
})

to_100px.addEventListener('click',()=>{
    scrollTo(0,100);
})

by_special.addEventListener('click',()=>{
    special_div.scrollIntoView();
})


window.addEventListener("load", ()=>{
    console.log("asd");
})