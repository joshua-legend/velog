const loginInput = document.querySelector(`#login-form input`);
const loginButton = document.querySelector(`#login-form button`);

function handleLoginBtnClick(){
    const userName = loginInput.value;
    if(userName==="") alert("Please write your name.");
    else if(userName.length > 15) alert("Your name is too long.");

}
loginButton.addEventListener("click",handleLoginBtnClick);

const link = document.querySelector("a");

function handleLinkClick(event) {
    console.log(event)
    console.dir(event)
}

link.addEventListener("click",handleLinkClick);