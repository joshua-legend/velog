const container = document.querySelector("#container");
const num = 25;

function createDIV() {
    for(let i=0;i<num;i++){
        const div = document.createElement("div");
        container.appendChild(div);
        const rect = div.getBoundingClientRect();
        div.addEventListener('click',()=>{
            console.log(rect);
        });
    }
}
createDIV();
