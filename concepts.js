//synchronous code: code that follows a certain order of execution
console.log("hello there");
console.log("today we are learning")
console.log("synchronous code")

//asynchronous code : code that does not execute in an orderly manner
console.log("this is ")
setTimeout(()=>{console.log("an example of an")},5000)
console.log("asynchronous code")

