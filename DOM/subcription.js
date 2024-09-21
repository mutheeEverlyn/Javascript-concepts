
document.getElementById('btn').onclick=function(){
   let subcription=document.getElementById("subscription");
   let visa=document.getElementById("visa");
   let payPal=document.getElementById("payPal");
   let creditCard=document.getElementById("creditCard");
   
    if(subcription.checked && visa.checked){
        document.getElementById("feedback").innerHTML="You have successfully paid your subscription via visa"
    }
    else if(subcription.checked && payPal.checked){
       document.getElementById("feedback").innerHTML="You have successfully paid your subscription via payapal"
    }
    else if(subcription.checked && creditCard.checked){
        document.getElementById("feedback").innerHTML="You have successfully paid your subscription via creditCard"
     }
     else if((subcription.checked && !(visa.checked)) || (subcription.checked && !(payPal.checked)) || (subcription.checked && !(creditCard.checked)) ){
        document.getElementById("feedback").innerHTML="please complete payment for your subcription"
     }
     else{
        document.getElementById("feedback").innerHTML="please subcribe and complete payment for your subcription"
     }
}