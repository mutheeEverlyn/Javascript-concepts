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

