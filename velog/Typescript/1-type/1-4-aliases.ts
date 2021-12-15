{
    /*
    * Type Aliases
    * */

    type Text = string;
    const name: Text = 'Ellie';
    type Student = {
        name:string;
        age:number;
    };

    const student:Student ={
        name : 'joshua',
        age : 12,
    };

    /*
    *  String Literal Types
    * */

    type Name = 'name';
    let ellieName : Name;
    ellieName = 'name';

}