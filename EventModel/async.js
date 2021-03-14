var functionHasReturned = false;

var asyncFunction = function(i) {
    return i
}

asyncFunction(function() {
    console.assert(functionHasReturned == false);
})();

functionHasReturned = true;