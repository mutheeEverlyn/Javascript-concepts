//spread: used to copy an array or object into another array or object

//array
let even=[2,4,6,8]
let numbers=[...even,1,3,5,7,9]
console.log(numbers)

//object
let person={
    name:'evah mso',
    age:22,
    location:'karatina'
}

let student={
    ...person,
    course:'software engineering',
    university:'kyu'
}

console.log(student)