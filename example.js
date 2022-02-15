"use strict";
// @ts-check
exports.__esModule = true;
exports.example = void 0;
function example(inputNumber) {
    console.log('bob');
    var newValue = 'bob';
    newValue = 2;
    return inputNumber.toString();
}
exports.example = example;
function add(foo, bar) {
    return {
        foo: foo,
        bar: bar
    };
}
var result = add(2, '1');
//const foo = example(2);
console.log(result);
