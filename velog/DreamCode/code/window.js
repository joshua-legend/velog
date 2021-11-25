const container = document.querySelector("#container");
function change(){
    const screenWidth = window.screen.width;
    const screenHeight = window.screen.height;
    const outerWidth = window.outerWidth;
    const outerHeight = window.outerHeight;
    const innerWidth = window.innerWidth;
    const innerHeight = window.innerHeight;
    container.innerText =
    `window.screen: ${screenHeight}, ${screenWidth} 
     window.outer: ${outerWidth}, ${outerHeight}
     window.inner: ${innerWidth}, ${innerHeight}
    `
}
change();
window.addEventListener("resize",change);