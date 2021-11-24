# Quotes 만들기

* quotes는 객체로 이루어진 배열이고, 이를 html에 queryselector를 통해서 배분한다.
* quotes.lenght를 이용하여 숫자를 상수화 시킨다.
* Math.floor(Math.random() * 10(=const) ) * something * length);

```javascript
const quotes = [
    {
        quote: "I can accept failure, everyone fails at something. But I can't accept not trying",
        author: "Michael Jordan",
    },
    {
        quote: "The way to get started is to quit talking and being doing.",
        author: "Walt Disney",
    },
]
const quote = document.querySelector("#quote span:first-child")
const author = document.querySelector("#quote span:last-child")
const todaysQuotes = quotes[Math.floor(Math.random() * quotes.length)];
quote.innerText = todaysQuotes.quote;
author.innerText =  todaysQuotes.author;

//배경화면 설정
const backgroundImages = ["0.jpg","1.jpg","2.jpg"];

const chosenImage = backgroundImages[Math.floor(Math.random() * backgroundImages.length)];

const bgImage = document.createElement("img");

bgImage.src = `img/${chosenImage}`;

document.body.append(bgImage);

```