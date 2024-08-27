//creating objects
//1.object literal
let person={
    name:"Karen Mumbi",
    age:22,
    location:"nyeri"
}

//2.new keyword/constructor/prototype
let food=new Object()
food.name="pilau";
food.ingredients=['rice','meat','ginger','garlic','pilau masala'];
food.ratings=5;

//loopimg over items in an object
let fruits=[
    {
        name:'mango',
        ratings:3
    },
    {
        name:'pawpaw',
        ratings:4
    },
    {
        name:'banana',
        ratings:3
    },
    {
        name:'apple',
        ratings:5
    },
    {
        name:'pineapple',
        ratings:4
    }
]

//1.for loop
for(let fruit=0;fruit<fruits.length;fruit++){
    console.log(fruits[fruit])
}

//2.forEach loop
fruits.forEach((fruit)=>{
    console.log(fruit)
})

//object keys
for(let key in person){
    console.log(key)
    console.log(person[key])
}
//object getOwnPropertyNames
//object entries

