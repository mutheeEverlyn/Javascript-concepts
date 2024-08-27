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

//nested array
let numbers=[[1,2,3],[4,5],[6,7],[8,[9,0]]]
console.log(numbers[0][2]) //3
console.log(numbers[3][1][1]) //0

//sorting an array of string 
let Fruits=["mango","pawpaw","apple","watermelon","orange","grapes"]
Fruits=Fruits.sort()
console.log(Fruits)

//sorting arrays in reverse manner using method chaining
Fruits=Fruits.sort().reverse();
console.log(Fruits)

