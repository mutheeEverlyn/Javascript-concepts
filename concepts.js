//synchronous code: code that follows a certain order of execution
console.log("hello there");
console.log("today we are learning")
console.log("synchronous code")

//asynchronous code : code that does not execute in an orderly manner
console.log("this is ")
setTimeout(()=>{console.log("an example of an")},5000)
console.log("asynchronous code")

//error handling
try{
    let num="";
    num=Number(num)
    if(isNaN(num)) throw("this is not a number")
    else if(num=="") throw("you have not entered a number")
        else{
    console.log(num)
    }
    }catch(error){
        console.log(error)
    }