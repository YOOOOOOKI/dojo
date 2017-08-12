class Person
{
    constructor(name,age){
        this.name=name;
        this.age=age;
    }
    introduce()
    {
        console.log(`My name is ${this.name}. I am ${this.age} years old.\n`) ;
    }
}
class Student extends  Person
{
    constructor(a,b,klass)
    {   super(a,b);
        this.klass=klass;
    }
    introduce()
    {

        console.log(` I am a Student. I am at Class ${this.klass}.`) ;
    }
}
let xiaoming=new Student("yuqi","13","2");
xiaoming.introduce();