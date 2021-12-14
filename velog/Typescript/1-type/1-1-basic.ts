{
    /*
    * JavaScript
    * Primitive: number, string, boolean, bigint, undefined, null
    * Object: function, array ...
    * */

    // number
    const num:number = 3;

    // string
    const str:string = `hello`;

    //boolean
    const boal:boolean = true;

    //undefined 😋
    let age : number |undefined;

    //null
    let person : string | null;


    //function
    function find() : number {
        return 123;
    }

    // 무조건 지양
    let notsure : unknown = 0;
    let anything: any = 0;
    anything = `hello`;


    //void
    function print() : void {
    }

    //never
    function throwError(message:string):never {
        throw  new Error(message)
        while(true){}
    }

    // object 지양양
    let ob: object

}