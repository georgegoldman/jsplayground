class Person {
    constructor(name) {
        this.name = name;
    }

    sayHi() {
        return `${this.name} says hi`
    }

}

let georgegoldman = new Person('George goldman');


console.log(georgegoldman.name)
console.log(georgegoldman.sayHi())
console.log(georgegoldman.otherAtt.lastname)