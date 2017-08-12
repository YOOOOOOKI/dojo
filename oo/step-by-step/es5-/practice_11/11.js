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
    isIn(student,teacher)
    {
        for(let i of teacher.klasses)
        {
            if(i===student.klass)
            {
                return true;
            }

        }
        return false;
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
    constructor(name,age,id,klasses)
    {   super(name,age,id);
        this.klasses=klasses;
    }
    introduce()
    {
        if(this.klasses)
        {
            return (`${super.introduce()} I am a Teacher. I teach Class ${this.klasses.join(",")}.`) ;
        }
        else
        {
            return (`${super.introduce()} I am a Teacher. I teach No Class.`) ;
        }
    }
    introduceWith(studenta)
    {
        if(this.klasses===studenta.klasses)
        {
            return (`${super.introduce()} I am a Teacher. I teach ${studenta.name}.`) ;
        }
        else
        {
            return (`${super.introduce()} I am a Teacher. I dont teach ${studenta.name}.`) ;
        }
    }
    isTeaching(student)
    {
        let cl=new class_student(student.klass)
        if(cl.isIn(student,this))
        {
            return true;
        }
        else
        {
            return false;
        }
    }
}
let classOne=new class_student(1);
let classTwo=new class_student(2);
let classThree=new class_student(3)
let xiaoming=new Student("yuqi","13",'2',classOne);
let xiaogang=new Student("gang",'15','3',classThree);
console.log(classTwo.assignLeader(xiaoming));
console.log(xiaoming.introduce(classOne));
let honghong=new Teacher("honghong","47",'223',[1,2]);
console.log(honghong.introduce());
console.log(honghong.isTeaching(xiaoming));
console.log(honghong.isTeaching((xiaogang)));