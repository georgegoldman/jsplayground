function foo() {
    return arguments.callee;
}

console.log(foo())