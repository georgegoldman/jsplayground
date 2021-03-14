var baz = {
    f: function() {
        return arguments.callee;
    }
};

console.log(baz.f());