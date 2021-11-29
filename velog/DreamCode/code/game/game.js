'use strict'

const carrotNumber =10;
const bugNumber = 15;
const CARROTSIZE = 80;

let timer =20;
const clock = document.querySelector(".gameUtility__clock");

const gameField = document.querySelector('.gameField');
const gameFieldRect = gameField.getBoundingClientRect();
const BUGIMGPATH = 'img/bug.png';
const CARROTIMGPATH = 'img/carrot.png';

function initGame(){
    makeUnit('carrot',carrotNumber,CARROTIMGPATH);
    makeUnit('bug',bugNumber,BUGIMGPATH);
    clock.innerHTML=`${timer}`;
}
function makeUnit(className,number,path){
    const x1 = gameFieldRect.left;
    const y1 = gameFieldRect.top;
    const x2 = gameFieldRect.right-CARROTSIZE;
    const y2 = gameFieldRect.bottom-CARROTSIZE;
    for(let i=0;i<bugNumber;i++){
        const unit = document.createElement("img");
        unit.setAttribute("class",className);
        unit.setAttribute("src",path);
        unit.style.position = 'absolute';

        const x = randomNumber(x1,x2);
        const y = randomNumber(y1,y2);
        unit.style.left = `${x}px`;
        unit.style.top = `${y}px`;
        gameField.appendChild(unit);
    }
}
function randomNumber(min,max) {return Math.random() * (max - min) + min;}

initGame();