var o = function o() {
    var data = 1,
        get;

    get = function() {
        return data;
    };

    return {
        get: get
    }
}


var obj = o()

console.log(obj.get())