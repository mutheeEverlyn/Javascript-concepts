let animals=['monkey','lion','antelop','gazzel','cheetah']
let countries=[{
    name:'Kenya',
    capital_city:'Nairobi'
},
{
    name:'Uganda',
    capital_city:'Kampala'
},
{
    name:'Tanzania',
    capital_city:'Mogadishu'
},
{
    name:'Burundi',
    capital_city:'Bujumbura'
},
]
let person={
    name:'evah',
    age:22,
    weight:62
}
//forEach loop: used to loop over an array or an array of objects
animals.forEach((animal)=>{
    console.log(animal)
})
countries.forEach((country)=>{
    console.log(country)
})

//for ... of loop: used to loop over an array
for(let animal of animals){
    console.log(animal)
}

//for ... in loop: used to loop over an object
for(let key in person){
    console.log(key)
    console.log(person[key])
    }
    
    //for loop:loops through items until the condition is false
    // for(initialization;condition;increment/decrement){
    //     code to be executed
    // }
    
    for(let num=0;num<=10;num++){
        console.log(num)
    }
    for(let num=10;num>=0;num--){
        console.log(num)
    }
    
   //while loop:executes a block of code by first checking the condition
    //initialization
    //while(condition){
    // code to be executed
    //incerement/decrement
    //}
    
    let num=0;
    while(num<=10){
        console.log(num);
        num++;
    }
    
     num=10;
    while(num>=0){
        console.log(num);
        num--;
    }
    
    //do..while loop :loops through items before checking then condition first
    // initialization;
    // do{
    //     code to be executed
    //     increment/decrement
    // }while(condition)
    
    let numbers=0;
    do{
        console.log(numbers);
        numbers++;
    }while(numbers<=10) 

 //pushing numbers into an empty array using loops
 //1.for loop
 let forArray=[]
 for(let i=0;i<10;i++) {
forArray.push(i)
 }     
 console.log(forArray)

 //2.while loop
 let whileArray=[]
 let a=0
 while(a<8){
    whileArray.push(a)
    a++
 }
 console.log(whileArray)

 //for loop to add even numbers to an empty array
 let even=[]
 for(let e=0;e<10;e+=2){
     even.push(e)
 }
 console.log(even)
 
   //for loop to add odd numbers to an empty array
   let odd=[]
   for(let o=1;o<10;o+=2){
     odd.push(o)
   }
   console.log(odd)
 
 //while loop to add even numbers to an empty array in a reverse manner
 let Even=[]
 let E=10;
 while(E>0){
  Even.push(E);
 E-=2;
 }
 console.log(Even)
 
  //while loop to add odd numbers to an empty array in a reverse manner
  let Odd=[]
  let O=9;
  while(O>0){
     Odd.push(O)
     O-=2
  }
  console.log(Odd)
 
  