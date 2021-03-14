var hero = {}

hero.name = 'georgegoldman'

hero.say_name = function() {
    console.log(this.name)
}

console.log(hero)