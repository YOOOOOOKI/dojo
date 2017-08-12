class Person
{
    constructor(name,age){
        this.name=name;
        this.age=age;
    }
    introduce()
    {
        return (`My name is ${this.name}. I am ${this.age} years old.`) ;
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
        return(`${super.introduce()} I am a Student. I am at Class ${this.klass}.`) ;
    }
}

class Teacher extends  Person
{
    constructor(a,b,klass)
    {   super(a,b);
        this.klass=klass;
    }
    introduce()
    {
        if(this.klass)
        {
            return (`${super.introduce()} I am a Teacher. I teach Class ${this.klass}.`) ;
        }
        else
        {
            return (`${super.introduce()} I am a Teacher. I teach No Class.`) ;
        }
    }
}
//let xiaoming=new Student("yuqi","13","2");
//console.log(xiaoming.introduce());
let xiaohua=new Teacher("aqi","16");
console.log(xiaohua.introduce());
let xiaohua1=new Teacher("yoki","32","2");
console.log(xiaohua1.introduce());