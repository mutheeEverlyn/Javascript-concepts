const container=document.getElementById("container");
window.addEventListener("keydown",move);
let x=0;
let y=0;
function move(event){
switch(event.key){
    case "ArrowDown":
        y+=5;
        container.style.top=y+"px";
        break;
    case "ArrowUp":
        y-=5;
        container.style.top=y+"px";
        break;
    case "ArrowRight":
        x+=5;
        container.style.left=x+"px";
       break;
    case "ArrowLeft":
        x-=5;
        container.style.left=x+"px"
        break;
}
}