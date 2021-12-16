{

    type Coffee = {
        shot: number,
        hasMilk: boolean,
    }

    class CoffeeMaker {
        static BEANS_GRAM_PER_SHOT: number = 7; // class level
        coffeeBeans: number = 0; // instance level

        static makeMachine(coffeeBeans: number):CoffeeMaker{
            return new CoffeeMaker(coffeeBeans);
        }

        constructor(coffeeBeans:number) {
            this.coffeeBeans = coffeeBeans;
        }

        makeCoffee(shot: number): Coffee {
            if (this.coffeeBeans < shot * CoffeeMaker.BEANS_GRAM_PER_SHOT) throw new Error(`Not enough coffee beans!`);
            this.coffeeBeans -= shot * CoffeeMaker.BEANS_GRAM_PER_SHOT;
            return {
                shot,
                hasMilk: false,
            };
        }
    }

    const maker = new CoffeeMaker(50);

}