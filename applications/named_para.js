var userProto = {
    name: 'none',
    email: 'none',
    alias: 'none',
    showInSearch: true,
    colorScheme: 'light'
}


var newUser = createUser({
    name: 'goldman',
    showInSearch: false
})

console.log(newUser)