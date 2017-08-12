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
class Worker extends  Person
{
    introduce()
    {
        console.log(` I am a Worker. I have a job.`);
    }
}
let xiaoming=new Student("yuqi","13","2");
let xiaogang=new Worker("aqi","16");
xiaoming.introduce();
xiaogang.introduce();
console.log(xiaogang.name);