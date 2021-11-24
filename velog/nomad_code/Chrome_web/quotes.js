const quotes = [
    {
        quote: "I can accept failure, everyone fails at something. But I can't accept not trying",
        author: "Michael Jordan",
    },
    {
        quote: "The way to get started is to quit talking and being doing.",
        author: "Walt Disney",
    },
    {
        quote: "Never forget that only dead fish swim with the stream",
        author: "Malcolm Muggeridge",
    },
    {
        quote: "Whenever I hear\"It cannot be done.\", I know I am close to success",
        author: "Michael Flatley",
    },
    {
        quote: "I hated every minute of training, but I said, \'Don't quit. Suffer now and live the rest of your life as a champion.\'",
        author: "Mohamed Ali",
    },
    {
        quote: "With self-discipline most anything is possible",
        author: "Theodore Roosevelt",
    },
    {
        quote: "Patience is not simply the ability to wait, it's how we behave while we're waiting",
        author: "Joyce Meyer",
    },
    {
        quote: "The finest steel has to go through the hottest fire.",
        author: "Nixon",
    },
    {
        quote: "Our patience will achieve more than our force.",
        author: "Edmund Burke",
    },
]
const quote = document.querySelector("#quote span:first-child")
const author = document.querySelector("#quote span:last-child")
const todaysQuotes = quotes[Math.floor(Math.random() * quotes.length)];
quote.innerText = todaysQuotes.quote;
author.innerText =  todaysQuotes.author;
