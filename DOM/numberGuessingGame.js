let answer=Math.floor(Math.random()*10 +1);
let count=0;

document.getElementById("btn").onclick=function(){
    
    let guess=document.getElementById("guess").value;
    count+=1;
    
    if(guess==answer){
        document.getElementById("result").innerHTML=`number ${guess} is the correct answer and you have used ${count} counts`
    }
   else if(guess<answer){
    document.getElementById("result").innerHTML="number is too small"
   }
   else if(guess>answer){
    document.getElementById("result").innerHTML="number is too big"
   }
    else{
        document.getElementById("result").innerHTML="pick a number that is in the range provided"
    }
}