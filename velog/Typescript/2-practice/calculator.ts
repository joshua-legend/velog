{
    type compute = 'add' | 'substract' | 'multiply' | 'divide' | 'remainder';


    function calculate(command:compute, pre:number, post:number):number {
        switch (command){
            case "add": return pre + post;
            case "substract": return pre - post;
            case "multiply": return pre * post;
            case "divide" : return pre / post;
            case "remainder": return pre % post;
            default: throw Error('unknown command');
        }
    }

    console.log(calculate('add',1,3));
    console.log(calculate('substract',3,1));
    console.log(calculate('multiply',4,2));
    console.log(calculate('divide',4,2));
    console.log(calculate('remainder',5,2));

}