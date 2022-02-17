// @ts-check
export function example(inputNumber) {
    console.log('bob');
    let newValue = 'bob';
    newValue = 2;
    return inputNumber.toString();
}
function add(foo, bar) {
    return {
        foo: foo,
        bar: bar,
    };
}
const result = add(2, '1');
//const foo = example(2);
console.log(result);
