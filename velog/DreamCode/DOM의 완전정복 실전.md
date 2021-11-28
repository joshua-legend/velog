# 쇼핑 리스트 미니 

* 가운데 오도록 조정 하는 코드, input 포커스 했을 때 빈테두리

* html class 정의 하는 방법 parent__child 와 같은 방식

* css 애니메이션 transition 사용하기

* box-sizing: border-box 설정

* box-shadow 사이트 참조하기!

* item.setAttribute(qualifiedNama,value); 속성 넣어주기

```css
body{background-color: #c7ecee;text-align: center;}
input{outline: none;}
.item__delete{font-size: 18px;transition: all 300ms ease-in-out;}
```

```js

```

```html
  <section class="list">
    <header class="header">Shopping list</header>
    <ul class="items">
      <li class="item__row">
        <div class="item">
          <span class="item__name">egg</span>
          <button class="item__delete">
            <i class="fas fa-trash"></i>
          </button>
        </div>
        <div class="item__divider"></div>
      </li>
    </ul>
    <footer class="footer">
      <input type="text" class="footer__input">
      <button class="footer__button">
        <i class="fas fa-plus-circle"></i>
      </button>
    </footer>
  </section>
```