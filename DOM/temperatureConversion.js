document.getElementById("btn").onclick=function(){
    let temp;
    if(document.getElementById("cbtn").checked){
    temp=document.getElementById("temp").value;
    temp=Number(temp);
    temp=toCelsius(temp)
    document.getElementById("result").innerHTML="temperature in degrees is"+temp;
    }
    else if(document.getElementById("fbtn").checked){
    temp=document.getElementById("temp").value;
    temp=Number(temp);
    temp=toFahrenheit(temp)
    document.getElementById("result").innerHTML="temperature in fahrenheit is"+temp ;
    }
    else{
        document.getElementById("result").innerHTML="please enter a unit for conversion";  
    }
    function toFahrenheit(temp){
    return (temp* 9/5 + 32);
    }

    function toCelsius(temp){
        return (temp-32)*(5/9);
    }

}