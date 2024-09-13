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

