//windows.prompt
let a=window.prompt("enter side a of the triangle:");
let b=window.prompt("enter side b of the triangle");
let c=Math.sqrt(Math.pow(a,2)+Math.pow(b,2));
console.log("the hypotenuse of this triangle is :"+c)


//DOM
document.getElementById("button").onclick=function(){
    let a=document.getElementById("sideA").value;
    let b=document.getElementById("sideB").value;
    let c=Math.sqrt(Math.pow(a,2)+Math.pow(b,2));
    document.getElementById("sideC").innerHTML="the hypotenuse of this triangle is:"+ c;
}