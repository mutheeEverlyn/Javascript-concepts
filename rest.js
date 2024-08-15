//rest: used to get the rest of the parameters where you dont know the size of the items to be passed

let numbers=(a,b,...nums)=>{
console.log(a,b,nums) //1 2 [ 2, 3, 4, 5, 6, 7 ]
console.log(a)//1
console.log(b)//2
nums.forEach((num)=>{
    console.log(num)
})
}
numbers(1,2,2,3,4,5,6,7)