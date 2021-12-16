{

    const BEANS_GRAM_PER_SHOT:number = 7;
    let coffeeBeans:number = 0;

    type Coffee = {
        shot: number,
        hasMilk: boolean,
    }

    function makeCoffee(shot:number):Coffee {
        if(coffeeBeans < shot * BEANS_GRAM_PER_SHOT) throw new Error(`Not enough coffee beans!`);
        coffeeBeans -= shot * BEANS_GRAM_PER_SHOT;
        return {
            shot,
            hasMilk: false,
        };
    }

    coffeeBeans += 3 * BEANS_GRAM_PER_SHOT;
    const coffee = makeCoffee(2);
    console.log(coffee)
    console.log(coffeeBeans)
}