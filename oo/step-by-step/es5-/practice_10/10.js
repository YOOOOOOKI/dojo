class Person
{
    constructor(name,age,id){
        this.name=name;
        this.age=age;
        this.id=id;
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
    assignLeader(student)
    {
        if(this.appendMember(student))
        {this.leader=student.name;
        }
        else
            {return ("It is not one of us.")
            }

    }
    appendMember(student)
    {
         return student.klass===this.number;
    }
}

class Student extends  Person
{
    constructor(name,age,id,klass)
    {   super(name,age,id);
        this.klass=klass.number;
    }
    introduce(klass1)
    {  if(this.name===klass1.leader)
    {
        return(`${super.introduce()} I am a Student. I am Leader of class ${this.klass}.`) ;
    }
    else{
        return(`${super.introduce()} I am a Student. I am at Class ${this.klass}.`) ;
    }

    }
}
class Teacher extends  Person
{
    constructor(id,name,age,klass)
    {   super(id,name,age);
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
let classOne=new class_student(1);
let classTwo=new class_student(2);
let xiaoming=new Student("yuqi","13",'2',classOne);
console.log(classTwo.assignLeader(xiaoming));
console.log(xiaoming.introduce(classOne));

