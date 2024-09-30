const mainButton = document.querySelector("button");
const body = document.body;
const currentColor = document.querySelector(".current-color") ;
function randomColorGenrator(){
    const red = Math.floor(Math.random() *256 );
    const green = Math.floor(Math.random() *256 );
    const blue = Math.floor(Math.random() *256 );
    const randomcolor = `rgb(${red},${green},${blue})`
    return randomcolor;
}

mainButton.addEventListener("click",()=>{
    const randomcolor = randomColorGenrator();
    body.style.backgroundColor = randomcolor;
    currentColor.textContent = randomcolor;
})



