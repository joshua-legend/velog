{

    type Coffee = {
        shot: number,
        hasMilk: boolean,
    }

    //계약서
    interface CoffeeMaker{
        makeCoffee(shots:number):Coffee;
    }
    //계약서
    interface CommercialCoffeeMaker {
        makeCoffee(shots: number): Coffee;
        fillCoffeeBeans(beans: number): void;
        clean(): void;
    }


    class CoffeeMachine implements  CoffeeMaker{
        private static BEANS_GRAM_PER_SHOT: number = 7; // class level
        protected coffeeBeans: number = 0; // instance level

        private constructor(coffeeBeans:number) {
            this.coffeeBeans = coffeeBeans;
        }

        static makeMachine(coffeeBeans: number):CoffeeMachine{
            return new CoffeeMachine (coffeeBeans);
        }

        fillCoffeeBeans(beans:number){
            if(beans<=0) throw new Error(`value for beans should be greater than 0`);
            this.coffeeBeans += beans;
        }

        clean(){
            console.log("cleaning the machine...")
        }

        private grindBeans(shot:number){
            console.log(`grinding beans for ${shot}`)
            if (this.coffeeBeans < shot * CoffeeMachine.BEANS_GRAM_PER_SHOT) throw new Error(`Not enough coffee beans!`);
            this.coffeeBeans -= shot * CoffeeMachine.BEANS_GRAM_PER_SHOT;
        }

        private preheat(): void{
            console.log(`heating up... `)
        }

        private extract(shots:number):Coffee{
            console.log(`Pulling ${shots} shots...`)
            return {
                shot:shots,
                hasMilk: false,
            };
        }

        makeCoffee(shots: number): Coffee {
            this.grindBeans(shots);
            this.preheat();
            return this.extract(shots)
        }
    }

    // const maker = new CoffeeMaker(50);
    const maker = CoffeeMachine.makeMachine(10);
    maker.fillCoffeeBeans(10);

    // method order ?
    // abstraction 필요!
    maker.makeCoffee(2);

    const maker2:CommercialCoffeeMaker = CoffeeMachine.makeMachine(32);
    maker2.fillCoffeeBeans(32);
    maker2.makeCoffee(2);
    maker2.clean();

    class AmateurUser {
        constructor(private machine: CoffeeMaker) {}
        makeCoffee(){
            const coffee = this.machine.makeCoffee(2);
            console.log(coffee)
        }
    }

    class ProBarista {
        constructor(private machine: CommercialCoffeeMaker) {}
        makeCoffee(){
            const coffee = this.machine.makeCoffee(2);
            this.machine.fillCoffeeBeans(45);
            this.machine.clean();
        }
    }
}