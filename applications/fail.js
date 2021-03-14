var score = 6;

if (score > 5) {
    function grade() {
        return 'pass';
    }
} else {
    function grade() {
        return 'fail';
    }
}

module('Pass or Fail');

test('Condition function declaration. ', function() {
    equal(grade(), 'pass', 'Grade should pass.')
})