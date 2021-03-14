async function i() {
    let promise = new Promise((res, rej) => {
        console.log('ok')
        res('me')
    })
    let me = await promise
    console.log(me)
}

i()

async function firstAsync() {
    let promise = Promise.resolve(10)
    let result = await promise
    console.log(result)

}

// firstAsync()