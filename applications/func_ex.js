var bar = function() {
    return arguments.callee;
}

console.log(bar());