---
layout: post
title:  "표현식과 연산자 (Learning JS)"
date:   2021-11-19
categories: Javascript
---
---

# Statement

### 프로그램을 구성하는 기본 단위/ 최소 실행 단위
1. 프로그램: 문의 집합
2. 프로그래밍: 문을 작성 후 순서 나열 
***
토큰: 문법적으로 나눌 수 없는 코드의 기본요소

```javascript
let sum = 1 + 2 ;

토큰이 let,sum,=,1,+,2,;
//변수 선언문
var x;

//할당문
x = 5;

//함수 선언문
function foo() {}

//조건문
if (x > 1) { console.log(x); }

//반복문
for (var i = 0 ; i < 2; i++) { console.log(i); }
```

***
### Typeof, Destructing Assignment, template literals, OR표현식

1.Typeof 
> typeof null = "object"
> 
> typeof [] = "object"

2.Destructing Assignment
```javascript
const obj = {b:2, c:3, d:4};
const {a,b,c} = obj;
a; // undefined;
b; // 2
c; // 3
d; // ReferenceError;

const obj1 = {b:2, c:3, d:4};
let a,b,c;
({a,b,c} = obj1);

const arr = [1,2,3,4,5];
let [x,y,...rest] = arr;
rest; // 3,4,5;

```
