var start = new Date;
setTimeout(function() {
    var end = new Date;
    console.log('time elapsed: ', end - start, 'ms')
}, 500)

while (new Date - start < 1000) {};