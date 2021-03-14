new Promise((resolved, reject) => {
    console.log('initial')

    resolved()
}).then(() => {
    throw new Error('something went wrong');

}).catch(() => {
    console.error('do that')
}).then(() => {
    console.log('Do this, no matter what happened')
})