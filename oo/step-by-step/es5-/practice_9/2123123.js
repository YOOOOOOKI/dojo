'use strict';

class Animal {
    constructor(name) {
        this.name = name;
    }
}
class Cat extends Animal
{
    constructor(name)
    {
        super(name);
    }
    say()
    {
        return (`Hello, ${this.name}!`);
    }

}
let a=new Cat("add");
console.log(a.name);
console.log(a.say());