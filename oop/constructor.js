function Staff(name, occupation, age) {
    this.name = name
    this.occupation = occupation
    this.age = age
    this.salute = function() {
        return 'hi my name is ' + this.name
    }
}

let newStaff = new Staff('George goldman', 'programmer', 23)

console.log(newStaff)
console.log(newStaff.salute())