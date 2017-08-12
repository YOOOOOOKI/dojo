class Person{
    constructor(id,name,age) {
        this.id = id;
        this.name = name;
        this.age = age;
    }
    introduce(){
        return `My name is ${this.name}. I am ${this.age} years old.`;
    }
}

class Student extends Person{
    constructor(id,name,age,klass){
        super(id,name,age);
        this.klass=klass.number;
    }
    introduce(klass){
        if(klass.leader===this.id) {
            return `${super.introduce()} I am a Student. I am leader of Class ${this.klass}.`;
        }
        else{
            return `${super.introduce()} I am a Student. I am at Class ${this.klass}.`;
        }
    }
}

class Teacher extends Person{
    constructor(id,name,age,classes){
        super(id,name,age);
        this.classes=classes;
    }
    introduce(){
        if(this.classes.length===0){
            return `${super.introduce()} I am a Teacher. I teach No Class.`;
        }
        else{
            let classes=[];
            for (let i=0; i<this.classes.length; i++){
                classes.push(classes[i].number);
            }
            return `${super.introduce()} I am a Teacher. I teach Class ${classes}.`;
        }
    }
    introduceWith(student){
        if(student.klass===this.klass){
            return `${super.introduce()} I am a Teacher. I teach ${student.name}.`
        }
        else{
            return `${super.introduce()} I am a Teacher. I don't teach ${student.name}.`
        }
    }
    isTeaching(student){
        for(let i=0; i<this.classes.length; i++) {
            if (this.classes[i].isIn(student)) {
                return true;
            }
        }
        return false;
    }
    welcomeStudent(student) {
        for (let i = 0; i < this.classes.length; i++) {
            if(this.classes[i].appendMember(student)===true){
                return `I am ${this.name}. I know ${student.name} has joined Class ${this.classes[i].number}.`;
            }
        }
    }
    welcomeLeader(student) {
        for (let i = 0; i < this.classes.length; i++) {
            if(this.classes[i].leader===student.id){
                return `I am ${this.name}. I know ${student.name} become Leader of Class ${this.classes[i].number}.`;
            }
        }
    }
}

class Class{
    constructor(number){
        this.number=number;
    }
    assignLeader(student){
        if(student.klass===this.number){
            this.leader=student.id;
        }
    }
    appendMember(student){
        if(student.klass!==this.number){
            return `It is not one of us.`;
        }
        else{
            return true;
        }
    }
    isIn(student) {
        return (this.number === student.klass);
    }

}

let classOne=new Class(1);
let classTwo=new Class(2);
let studentOne=new Student(12,"Tom",18,classOne);
let studentTwo=new Student(10,"Frank",22,classTwo);
let teacher=new Teacher(33,"Jack",26,[classOne,classTwo]);
classTwo.assignLeader(studentTwo);

console.log(teacher.introduceWith(studentOne));
console.log(teacher.isTeaching(studentOne));
console.log(studentOne.introduce(classOne));
console.log(studentTwo.introduce(classTwo));
console.log(teacher.welcomeStudent(studentOne));
console.log(teacher.welcomeStudent(studentTwo));
console.log(teacher.welcomeLeader(studentOne));
console.log(teacher.welcomeLeader(studentTwo));