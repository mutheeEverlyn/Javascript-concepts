//normal func syntaxt
async function greet(){
    return await fetch('https://jsonplaceholder.typicode.com/posts')
    .then((res)=>{res.json})
    .then((data)=>{
        console.log(data)
    })
    .catch((error)=>{
        console.log(error)
    })
}
