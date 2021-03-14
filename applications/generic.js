var arr = ['a', 'b', 'c']
var toArr = function() {
    var arr = [],
        prop;

    for (prop in obj) {
        if (obj.hasOwnProperty(prop)) {
            arr.push(prop);
        }
    }
    return arr
}
w
var randomItem = function randomItem(collection) {
    var arr = ({}.toString.call(collection) !== '[object Array]') ? toArray(collection) : collection;
    return arr[Math.floor(arr.length * Math.random())]
}