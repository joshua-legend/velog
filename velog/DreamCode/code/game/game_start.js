const startButton = document.querySelector(".gameUtility__button");

const startIcon = `<i className="fas fa-play fa-3x"></i>`
const stopIcon = `<i class="fas fa-pause fa-3x"></i>`

let isStart = false;

function a(){
    setInterval(()=>{
        console.log("123123")
        startButton.innerHTML=``;
        isStart ? startButton.innerHTML=stopIcon : startButton.innerHTML=stopIcon;
        isStart = !isStart;
        clock.innerHTML=`${timer}`;
        timer--;
        if(timer==-1) clearInterval(a);
    },1000);
}

startButton.addEventListener('click',a);