//destructuring : used to extract data from nested objects and arrays
let people=
    {
        name:'paul',
        age:60,
        address:{
            country:'Kenya',
            city:'Nairobi'
        }
    }


    let{name,age,address:{country,city}}=people
    console.log(name)
    console.log(age)
    console.log(country)
    console.log(city)
    
    let fruits=[
        {
            fruit:'mango',
            rating:3
        },
        {
            fruit:'apple',
            rating:5
        },
        {
            fruit:'pineapple',
            rating:4
        }
    ]
    
    let [{fruit,rating}]=fruits
    console.log(fruit)
    console.log(rating)