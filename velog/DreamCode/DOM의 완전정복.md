# DOM 큰 그림 이해하기
![](https://images.velog.io/images/joshua0404/post/fd285af9-9534-4f39-84c7-4e5628a3154e/html,node.png)
> HTML tag -> Javascript node 형식으로 변환
>
> 모든 조상은 EventTarget을 상속 받는다

**EventTarget <- Node <- Document,Element,Text...**

![](https://images.velog.io/images/joshua0404/post/5315040f-603b-47f3-9f68-f1307213e017/tga.png)

## DOM Tree
![](https://images.velog.io/images/joshua0404/post/6ce81beb-b45b-4269-8cc7-cf54d839db77/Domtree.png)

# 우리의 조상 이벤트 타겟

## EventTarget

>**EventTarget.addEventListener()**
Registers an event handler of a specific event type on the EventTarget.

>**EventTarget.removeEventListener()**
Removes an event listener from the EventTarget.

>**EventTarget.dispatchEvent()**

## Node

> Node.appendChild(),Node.contains(),Node.hasChildNodes() ...


# CSSOM

![](https://images.velog.io/images/joshua0404/post/383ae80e-e1af-4e37-9879-57a5ae815faf/AS.png)

# 성능 보장 렌더링 순서!
![](https://images.velog.io/images/joshua0404/post/b3e588c4-e98c-4a2f-b1cd-8f4208370993/gg.png)

* layout 까지 건들면 수정을 해야한다.
* composition에서 끝나는 것이 Best!
> 개발툴 -> ... -> More tool -> Layouts


[](https://images.velog.io/images/joshua0404/post/71048428-ec5d-4b22-a460-639ac3cb1534/google.gif)![](https://images.velog.io/images/joshua0404/post/080386bb-361a-4ab6-911f-232595379708/google.gif)

# CSS Triggers
* http://csstriggers.com 참고하기!

# DOM 조작하기

* querySelector가 getelement 보다 포괄적 역할을 한다.

* textContent 와 innerHTML 을 활용하기!