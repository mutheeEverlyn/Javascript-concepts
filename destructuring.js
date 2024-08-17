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
   