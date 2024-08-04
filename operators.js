// arithmetic operators
let a=10;
let b=5;
let c=20;

console.log(`the value of ${a} + ${b} is ${a + b}`); //addition
console.log(`the value of ${a} - ${b} is ${a - b}`); //subtraction
console.log(`the value of ${a} * ${b} is ${a * b}`); //multiplication
console.log(`the value of ${a} / ${b} is ${a / b}`); //division
console.log(`the value of ${a} % ${b} is ${a % b}`); //modulus
console.log(`the value of ${a} ** ${b} is ${a ** b}`); //exponential
console.log(`the value of a++ is ${a++}`);  //post increment
console.log(`the value of ++a is ${++a}`);  //pre increment
console.log(`the value of b-- is ${b--}`);  //post decrement
console.log(`the value of --b is ${--b}`);  //pre decrement

// assignment operator
console.log(`${a +=b}`)  //a=a+b
console.log(`${a -=b}`)  //a=a-b
console.log(`${a *=b}`)  //a=a*b
console.log(`${a /=b}`)  //a=a/b
console.log(`${a %=b}`)  //a=a%b

// comparison operator-- returns true or false
console.log(a>b)
console.log(a<b)
console.log(a>=b)
console.log(a<=b)
console.log(a==b)
console.log(a===b)
console.log(a!=b)

// logical operators-- returns true or false
console.log(a<=b && c>=b) //AND
console.log(c<=a || b>=c) //OR
console.log(!(c<=a)) //NOT

