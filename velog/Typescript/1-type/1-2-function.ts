{
    // //Javascript
    // function jsAdd(num1,num2) {
    //     return num1+num2;
    // }
    //
    // //Typescript
    // function tsAdd(num1:number,num2:number):number {
    //     return num1+num2;
    // }

    // function FetchNum(id:string):Promise<number>{
    //     // @ts-ignore
    //     return new Promise(((resolve, reject) => {
    //         resolve(100);
    //     }));
    // }
    
    //Optional parameter
    function printName(firstName: string, lastName?: string): void {
        console.log(firstName);
        console.log(lastName);
    }

    printName('Steve','jobs');
    printName('Eille');
    printName('monster', undefined);

    //Default parameter
    function printMessage(message:string ='default message') {
        console.log(message)
    }

    printMessage();
    
    //Rest parameter
    function addNumbers(...num:number[]):number {
        return num.reduce((a,b)=>a+b);
    }

    
    

}