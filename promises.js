//states of promises
// 1.pending: result is undefined
// 2.fulfilled: result is a value
// 3.rejected: result is an error

const result=()=>{
    const promise=new Promise((resolve,reject)=>{
    setTimeout(()=>{
   resolve('result returned successfully');
   reject('failed to return result');
    },2000)
    })
    return promise
}
result().then((text)=>{
    console.log(text)
}).catch((error)=>{
    console.log(error)
})