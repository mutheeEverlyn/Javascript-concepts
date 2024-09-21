const button=document.getElementById('btn')
const nameInput=document.querySelector('.nameInput')
const emailInput=document.querySelector('.emailInput')
const container=document.querySelector('.container')
const mouseOut=document.querySelector('.mouseOut')

button.style.backgroundColor='blue'
button.style.border='none';
button.style.borderRadius='5px'
button.style.padding='5px'
button.addEventListener('click',()=>{
    document.body.style.backgroundColor='red'
})

container.style.backgroundColor='green'
container.style.margin='auto'
container.addEventListener('mouseover',()=>{
    container.style.backgroundColor='blue'
    container.innerHTML='mouseover'
})
container.addEventListener('mouseout',()=>{
    mouseOut.innerHTML='mouse out'
})

nameInput.addEventListener('focus',()=>{
    nameInput.style.background='gray';
    nameInput.style.fontSize='20px'
})

emailInput.addEventListener('focus',()=>{
    emailInput.style.background='gray';
    emailInput.style.fontSize='20px'
})
nameInput.addEventListener('blur',()=>{
    nameInput.style.background='white';
    nameInput.style.fontSize='15px'
})

emailInput.addEventListener('blur',()=>{
    emailInput.style.background='white';
    emailInput.style.fontSize='15px'
})
