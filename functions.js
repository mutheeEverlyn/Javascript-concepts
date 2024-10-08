//1.normal function

//function declaration
function sayHello(){
    console.log('hello there')
}
//function call
sayHello()

//normal function with a parameter
function hello(name){
    console.log(`hello there ${name}`)
}
hello('evah');

//2.arrow function

//function declaration
let sayHi=()=>{
    console.log('hello, how are you!')
}
//function call
sayHi()

//arrow function with a parameter
let marks=(grade)=>{
    console.log(`you got a grade ${grade}`)
}
marks('A')

//3.function with a return statement
function add(a,b){
    return a+b
}
console.log(add(10,2))

let sum=(num1,num2)=>{
return num1+num2;
}
console.log(sum(1,4))

//4.immediately invoked function expression(IIFE) :does not required a function call
// (function name() {
//     console.log("good morning");
// })();

// (() => { 
//     console.log("good evening my friend");
// })();

//5.anonymous function :function without a name
let result=function(a,b){
    return a*b;
    }
    console.log(result(3,2))

//arrow function to switch values of numbers
let reversedNumbers=(num1,num2)=>{
    return [num1,num2]=[num2,num1]
}
console.log(reversedNumbers(2,3))
