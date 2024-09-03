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

//freezing an object to make it a constant
let student={
    name:"evah mumbi",
    age:18,
    course:"teacher"
}

Object.freeze(student);

student.name='annie'
console.log(student.name) //name will remain evah mumbi since the object is frozen and cannot be changed

//how to manipulate objects with keys having a space bettween them
let movies={
    "movie one":"see",
    "movie two":"game of thrones",
    "movie three":"manifest"
}

//updating the object
movies["movie one"]="vikings"
console.log(movies)

//adding a new key and value
movies["movie four"]="the boys"
console.log(movies)

//deleting the key and value
delete movies["movie two"]
console.log(movies)

//objects with function
let greeting={
    sayHi:function(){
        console.log("hello there")
    },
    howOld:function(){
        console.log('how old are you?')
    }
}
greeting.sayHi();
greeting.howOld();

//this key word to access object properties
let Student={
    name:"evah mso",
    age:22,
    registered:function(){
        console.log(`hello ${this.name} you are ${this.age} years old and you have registered for the semester`)
    }
}
Student.registered();

//or
let Stude={
    name:"evah mso",
    age:22,
    registered:function(){
        console.log(`hello ${Stude.name} you are ${Stude.age} years old and you have registered for the semester`)
    }
}
Stude.registered();

//Map : object that holds key-value pairs of any data type
const store=new Map([
    ["socks",50],
    ["jamsuit",1500],
    ["palazo",500],
    ["puff jacket",2500]
])
let shoppingCart=0;

