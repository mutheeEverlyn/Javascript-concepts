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

// string operator
let fName="evah ";
let sName="mso";
console.log(fName + sName) //evah mso
console.log(fName += sName) //evah mso

// bitwise operator
a=10;
c=20;
console.log(a & c) //10=1010,20=10100, 1010 & 10100=0
console.log(a | c)  //10=1010,20=10100 ,1010 | 10100=11110 =30
console.log(~a)  //~10=-(10+1)=-11
console.log(a ^ c)  //10=1010,20=10100 ,1010 ^ 10100=11110 =30
console.log(a << c)  //10=1010,20=10100 ,1010 << 10100=101000000000000000000=10485760
console.log(a >> c)  //10=1010,20=10100 ,1010 >> 10100=0

//generating random numbers
console.log(Math.random()) //0.33185008259217597
console.log(Math.random()*10)//gets a random number between 0-9 but in decimal
console.log(Math.floor(Math.random()* 100)) //gets a random number between 0-99 in whole numbers by rounding down

// how to get a single character in a string
let name="evah mso"
console.log(name[0]) //e
name[1]="l";  //imposiible --you cannot change the values in the string you can only read
console.log(name)

//using charAt
console.log(name.charAt(0))

//trim function --removes any excess space before and after the string
let myName= " Grace mumbi "
myName.trim()
console.log(myName)

//slice function: used to get part of a string and make it a new string
let fullName="Evah Mso"
let firstName=fullName.slice(0,4) //used when you know the index of the character you want to get
console.log(firstName);

