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
    
    