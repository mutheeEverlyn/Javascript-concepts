//class: it is a blueprint that is used to create various objects
// class without a constructor
class Car{
    start(){
        console.log("the car has started");
    }

    stop(){
        console.log("the car ha sstopped")
    }
}

const car1=new Car()
car1.start()
car1.stop()

//class with a constructor :special method of a class
class Student{
    constructor(name,age,gpa){
    this.name=name;
    this.age=age;
    this.gpa=gpa;
    }

    details(){
        console.log(`hello ${this.name} you are ${this.age} years old and you have a gpa of ${this.gpa}`)
    }
}

const student1=new Student("emily",22,3.2);
console.log(student1)
student1.details()

//class inheritance
class Animal{
alive=true;
sleep(name){
    console.log(`the ${name} sleeps`);
}
type(name){
console.log(`this is a ${name}`);
}
}

class Bird extends Animal{
    fly(){
        console.log('the bird flies')
    }
}

class Fish extends Animal{
    swim(){
        console.log('the fish swims')
    }
}

class Rabbit extends Animal{
    walks(){
        console.log('the rabbit walks')
    }
}

const bird=new Bird();
const fish=new Fish();
const rabbit=new Rabbit();

console.log(bird.alive);
bird.fly();
bird.sleep("hawk");
bird.type("hawk")

//supper keyword: used to refer to a construction in the parent class during inheritance
class Person{
    constructor(name,age){
        this.name=name;
        this.age=age;
    }
}

class Comrade extends Person{
    constructor(name,age,course){
        super(name,age);
        this.course=course;
    }
}

const comrade=new Comrade("evah",22,"nursing");
console.log(comrade)

//passing an object as an argument
function info(person){
    console.log(person.name);
    console.log(person.age);
    console.log(person.course)
    }
    
    info(comrade)
    
    //array of objects
    const comrade1=new Comrade("evah",22,"nursing");
    const comrade2=new Comrade("Grace",14,"teaching");
    const comrade3=new Comrade("Paul",20,"doctor");
    const comrade4=new Comrade("kamaa",28,"escort");
    
    const myComrades=[comrade1,comrade2,comrade3,comrade4];
    console.log(myComrades[1].age)
    console.log(myComrades[1].name)
    console.log(myComrades[1].course)
    
    //anonymous objects
    class Vehicle{
        constructor(model,make,color){
            this.make=make;
            this.model=model;
            this.color=color
        }
    }
    
    const vehicles=[new Vehicle("benz","toyota","white"),
    new Vehicle("harrier","toyota","black"),
    new Vehicle("prado","ford","red"),
    new Vehicle("vitz","isuzu","gold")]
    
    console.log(vehicles[0])
    console.log(vehicles[1])
    console.log(vehicles[2])
    console.log(vehicles[3])