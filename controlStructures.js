let num1=10;
let num2=20;

//if statement
//if(condition){
// code to be executed if the condition is true
// }
if (num2>num1){
    console.log(`${num2} is greater than ${num1}`)
}


//if...else statement
//if(condition){
// code to be executed if the condition is true
// }
// else{
//  code to be executed if the condition is false
// }
if (num1>num2){
    console.log(`${num1} is greater than ${num2}`)
}
else{
    console.log(`${num1} is less than ${num2}`)
}

//if...elseif...else statement
//if( first condition){
// code to be executed if the first condition is true
// }
//else if(second condition){
//code to be executed if the second condition is true
//}
// else{
//  code to be executed if all the conditions are false
// }
if (num1>num2){
    console.log(`${num1} is greater than ${num2}`)
}
else if(num2>num1){
    console.log(`${num1} is less than ${num2}`)
}else{
    console.log(`${num1} is equal to ${num2}`)
}

