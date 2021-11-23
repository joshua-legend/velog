## Basic DataType
***

* nubmer
* text

```javascript
1
2
3.14
hello //에러
"hello"
```

## Variables

* const를 기본으로 한다.(=업데이트는 종종하기 )
* undefined=값이 정의되지 않음
* null=값이 없음

## Arrays

```javascript
const mon = "mon";
const tue = "tue";
const wed = "wed";
const thu = "thu";
const fri = "fri";
const sat = "sat";
const sun = "sun";
const week = [mon,tue,wed,thu,fri,sat,sun];
[ ] = Array;

// Get a item from Array
console.log(week[4]);

// Add one more to the array
week.push("hi")
```

## Object

> Object는 컨테이너 이다.

```javascript
const playerName = "joshua";
const playerPoints = 1455;
const playerHandsome = false;
const playerFat = "little bit";

const player = ["joshua",1455,false,"little bit"];

//curly brace
const player = {
    name : "joshua",
    point : 10,
    fat : true,
    handsome : "little bit",
}
player.lastname = "david";
```

## Function

```javascript
const player = {
    name : `happy`,
    sayHi : function (){
        console.log("hey!")
    },
};
``` 
## Recap
  
```javascript
function x() {}
x // nothing
x(); //execution

//calculator
const calculator = {
    add : function (x,y) {console.log(x+y);},
    minus : function (x,y) {console.log(x-y);},
    multi : function (x,y) {console.log(x*y);},
    divide : function (x,y) {console.log(x/y);},
}
```

## Return

```javascript
const calculator = {
    add : function (x,y) {return (x+y);},
    minus : function (x,y) {return (x-y);},
    multi : function (x,y) {return (x*y);},
    divide : function (x,y) {return (x/y);},
}

const result = calculator.add(5,7);
```

## Conditional

```javascript
const age = parseInt(prompt("몇 살이세요?"))

if(isNaN(age)){
    console.log("에바야")
} else if(age < 20){
    console.log("어리누")
} else{
    console.log("늙었누")
}

```