//js window.prompt
let radius=window.prompt("enter the radius:");
const PI=Math.PI;
let circumference=2*PI*radius;
console.log(circumference)

//using DOM
document.getElementById("button").onclick=function(){
    let radius=document.getElementById("radius").value;
    const PI=Math.PI;
    let circumference=2*PI*radius;
    document.getElementById("circumference").innerHTML="The circumference of the circle is: "+ circumference;
}