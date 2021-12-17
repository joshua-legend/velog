interface Employee{
    pay():void;
}

class FullTimeEmployee implements Employee {
    pay() {
        console.log(`full time job`);
    }
    workFullTime(){

    };
}

class PartTimeEmployee implements Employee{
    pay() {
        console.log(`Part time job`);
    }
    workPartTime(){

    };
}

// 세부적인 타입을 인자로 받아서 추상적으로 돌리는 타입은 안됨!!!
function payBad(employee:Employee): Employee{
    employee.pay();
    return employee;
}

function pay<Type extends Employee>(employee: Type):Type{
    employee.pay();
    return employee;
}

function getValue(obj:object,key:string):string{
    return obj[key];
}


// type assure
function getValue1<Type, Key extends keyof Type>(obj:Type, key:Key) : Type[Key] {
    return obj[key];
}

const obj ={
    name: `joshua`,
    age: 20,
}

console.log(getValue(obj,'name'));

