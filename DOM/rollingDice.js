document.getElementById("btn").onclick=function(){
    let num1=Math.floor(Math.random() *7);
    let num2=Math.floor(Math.random()*7);
    let num3=Math.floor(Math.random()*7);

    document.getElementById("lab1").innerHTML=num1;
    document.getElementById("lab2").innerHTML=num2;
    document.getElementById("lab3").innerHTML=num3;
}