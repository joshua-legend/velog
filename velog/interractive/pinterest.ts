const PHOTO_NUMBER = 20;
const TITLE = 'Lorem ipsum';
const TEXT = 'consectetur adipiscing elit, sed do eiusmod tempor incididunt';

window.addEventListener('load',()=>{
    for(let i=0; i<PHOTO_NUMBER;i++){
        console.log(i);
        const article = document.createElement('article');
        const div = document.createElement('div');
        const img = document.createElement('img');

        const height = Math.floor( ( Math.random() * (600 - 300) + 300 ) );
        const width = Math.floor( ( Math.random() * (600 - 300) + 0 ) )
        img.src=`https://picsum.photos/${height}/${width}`;
        const h2 = document.createElement('h2');
        h2.innerText = TITLE;
        const p = document.createElement('p');
        p.innerText = TEXT;
        article.appendChild(div);
        div.append(img,h2,p);
        document.querySelector('section')?.appendChild(article);
    }
})
