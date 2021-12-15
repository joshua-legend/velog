/*
* Type Inference
* */
    
let text = 'hello';
// text = 1; error

function print(message = 'hello') {
    console.log(message)
}
print(`hhh`)


function add(x:number, y:number) {
    return x+y;
}

const result = add(1,2);