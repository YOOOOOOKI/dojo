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
class class_student
{
    constructor(number)
    {
        this.number=number;
    }
}

class Student extends  Person
{
    constructor(name,age,klass)
    {   super(name,age);
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
    introduceWith(studenta)
    {
        if(this.klass===studenta.klass)
        {
            return (`${super.introduce()} I am a Teacher. I teach ${studenta.name}.`) ;
        }
        else
        {
            return (`${super.introduce()} I am a Teacher. I dont teach ${studenta.name}.`) ;
        }
    }
}
let xiaoming=new Student("yuqi","13",new class_student(101).number);
//console.log(xiaoming.introduce());

 let xiaohua=new Teacher("aqi","16",100);
 console.log(xiaohua.introduceWith(xiaoming));
// console.log(xiaohua.introduce());
// let xiaohua1=new Teacher("yoki","32","2");
// console.log(xiaohua1.introduce());