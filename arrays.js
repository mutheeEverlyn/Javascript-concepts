//arrays: used to store values which are indexed and are separated by a comma
//index: 0,1,2,3.....

//create an array
//1.using array literal
let snacks=['chocolate','yoghurt','capcakes','juice']

//2.using new Keyword/ prototype/ constructor
let fruits=new Array('mango','apple','pawpaw')

//array properties
//1.length
console.log(snacks.length)

//2.constructor
console.log(snacks.constructor)

//array methods: push,pop,shift,unshift,indexOf,lastIndexOf,includes,join,filter,map,splice,concat,reverse
let shopping=['bread',' milk',' soap','colgate','bread']
//push: used to add an item at the end of the array
console.log(shopping.push('rice'))
console.log(shopping)

//pop : used to remove an item at the end of the array
console.log(shopping.pop())
console.log(shopping)

//unshift: used to add an item at the beginning of an array
console.log(shopping.unshift('beans'))
console.log(shopping)

//shift: used to remove the first item in the array
console.log(shopping.shift())
console.log(shopping)

//includes: returns true or false by checking whether an item is present in the array
console.log(shopping.includes('mango'))

//indexOf: checks the index of the item in the array
console.log(shopping.indexOf('bread'))

//lastIndexOf: used to check the last index of the item if they are two or more in the array
console.log(shopping.lastIndexOf('bread'))

//join: joins two arrays
let snack=[' crisps','biscuit',' juice']
console.log(shopping.join(snack))

//concat: used to concatinate two arrays where it lists all items in the first array then the second
console.log(shopping.concat(snack))

