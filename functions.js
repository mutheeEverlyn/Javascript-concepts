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
