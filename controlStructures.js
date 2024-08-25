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

//switch statement
let grade='A'

switch(grade){
    case 'A':
        console.log('upper class');
        break;
    case 'B':
        console.log('second class upper');
         break; 
    case 'C':
         console.log('second class lower');
         break;  
    case 'D':
         console.log('pass');
         break;   
    default :
        console.log('invalid grade') ;     
}

// ternary operator --if else statement
let x=60;
let result= x>50 ? 'greater' : 'lesser';
console.log(result)

// ternary operator --if statement (if the condition is true the you get statement eg equal in the example below but if false you get false as the output)
let y=20;
let num= y == 20 && 'equal';
console.log(num)

//nested ternary operator--if else if else statement
let num3=-8;
let answer=num3>0? "greater than 0" :num3<0 ?"less than 0":"equal to zero"
console.log(answer)