console.log(this);

function simpleFunc() {
    console.log(this);
}
window.simpleFunc();

class Counter {
    count = 0;

    // 다른 곳으로 이행되면 undefined
    increase = function () {
        console.log(this);
    };

    // arrow를 쓰면 class를 가르킴
    decrease = () =>{
        console.log(this);
    }

}

const counter = new Counter();
counter.increase(); // counter
// const caller = counter.increase();
// counter로 객체 지시
const caller = counter.increase().bind(counter)
caller; // undefined

class Bob {}
const bob = new Bob();
bob.run = counter.increase();
bob.run; //



//
// //window 함수는 글로벌 객체
// function hello() {console.log('hello')}
//
// //undefined
// const ellie = 'ellie'