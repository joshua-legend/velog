{

    type Coffee = {
        shot: number,
        hasMilk?: boolean,
        hasSugar?: boolean,
    }

    //계약서
    interface CoffeeMaker{
        makeCoffee(shots:number):Coffee;
    }

    // 우유 거품기
    class MilkSteamer{
        private steamMilk():void {
            console.log(`Steaming some milk...`);
        }
        makeMilk(cup: Coffee):Coffee{
            this.steamMilk();
            return{
                ...cup,
                hasMilk: true,
            }
        }
    }

    class SugarMixer{
        private getSugar():void {
            console.log(`Getting some sugar...`);
        }
        addSugar(cup: Coffee):Coffee{
            const sugar = this.getSugar();
            return{
                ...cup,
                hasSugar: true,
            }
        }
    }

    class CoffeeMachine implements CoffeeMaker{
        private static BEANS_GRAM_PER_SHOT: number = 7; // class level
        protected coffeeBeans: number = 0; // instance level

        constructor(coffeeBeans:number) {
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

    class CaffeLatteMachine extends CoffeeMachine {
        constructor(beans:number,public readonly serial:string, private milkFoam: MilkSteamer ) {
            super(beans);
        }

        private steamMilk(){
            console.log(`Steamming some milk...`);
        }

        makeCoffee(shots: number): Coffee {
            const coffee = super.makeCoffee(shots);
            return this.milkFoam.makeMilk(coffee);
        }
    }

    class SweetCoffeeMaker extends CoffeeMachine{

        constructor(coffeeBeans: number, private sugar: SugarMixer) {
            super(coffeeBeans);
        }

        makeCoffee(shots: number): Coffee {
            const coffee = super.makeCoffee(shots);
            return this.sugar.addSugar(coffee);
        }
    }

    // 다중상속 composition
    class SweetCaffeLatteMachine extends CoffeeMachine{
        constructor(
            coffeeBeans: number,
            private milk: MilkSteamer,
            private sugar: SugarMixer,
        ) {
            super(coffeeBeans);
        }
        makeCoffee(shots: number): Coffee {
            const coffee = super.makeCoffee(shots);
            return this.milk.makeMilk(this.sugar.addSugar(coffee));
        }
    }

}