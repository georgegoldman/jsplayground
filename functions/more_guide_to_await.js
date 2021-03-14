const p = {
    then: onFulfilled => {
        // Prints "then(): function () { [native code] }"
        console.log('then():', onFulfilled.toString());
        // Only one entry in the stack:
        // Error
        // at Object.then (/examples/chapter3.test.js:8:21)
        console.log(new Error().stack);
        onFulfilled('Hello, World!');
    }
};
console.log(await p); // Prints "Hello, World!"