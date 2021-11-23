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
 