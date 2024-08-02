//object
let person={
    name:"Everlyn",
    age:22,
    education:{
     year:4,
     course:"software engineering",
     location:{
        county:"kirinyaga",
        town:"kutus"
     }
    }
}

console.log(person.education.location.town)

// array
let fruits=["banana","mango","apple","watermelon","pawpaw"]

console.log(fruits)  //[ 'banana', 'mango', 'apple', 'watermelon', 'pawpaw' ]
console.table(fruits) //a table with two colums one for the index and the other for values
fruits.forEach((fruit)=>{
    console.log(fruit)
})   //loops through and give the items in a list format