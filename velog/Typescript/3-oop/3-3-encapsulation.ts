{

    type Coffee = {
        shot: number,
        hasMilk: boolean,
    }

    //public
    //private
    //protected

    class CoffeeMaker {
        private static BEANS_GRAM_PER_SHOT: number = 7; // class level
        protected coffeeBeans: number = 0; // instance level

        private constructor(coffeeBeans:number) {
            this.coffeeBeans = coffeeBeans;
        }

        static makeMachine(coffeeBeans: number):CoffeeMaker{
            return new CoffeeMaker(coffeeBeans);
        }

        fillCoffeeBeans(beans:number){
            if(beans<=0) throw new Error(`value for beans should be greater than 0`);
            this.coffeeBeans += beans;
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

    // const maker = new CoffeeMaker(50);
    const maker = CoffeeMaker.makeMachine(10);
    maker.fillCoffeeBeans(10);

    class User {
        get fullName() : string{
            return `${this.firstName} ${this.lastName}`
        }

        private internalAge = 4;
        get age():number{
            return 3;
        }
        set age(num:number){
            this.internalAge =num;
        }

        constructor(private firstName: string, private lastName: string) {
            this.firstName = firstName;
            this.lastName = lastName;
        }
    }


}