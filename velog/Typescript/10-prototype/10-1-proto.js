const array = [];
console.log(array);

function CoffeeMachine(beans) {
    this.beans = beans;

    // Instance member level
    this.makeCoffee = shots =>{
        console.log(`making...`)
    }
}

// Prototype member level
CoffeeMachine.prototype.makeCoffee = shot =>{
    console.log(`making...`)
}


const mac1 = new CoffeeMachine(10);
const mac2 = new CoffeeMachine(120);
console.log(mac1)
console.log(mac2)

function LatteMachine(milk) {
    this.milk = milk;
}

LatteMachine.prototype = Object.create(CoffeeMachine);

const latte = new LatteMachine(123);
console.log(latte);
latte.makeCoffee();