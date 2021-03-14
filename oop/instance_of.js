function Hero(name, age) {
    this.name = name
    this.age = age
}

var h = new Hero();

console.log(h instanceof Hero)