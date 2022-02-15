// @ts-check

type InputNumber = number;
interface NewValue {
  foo: number;
  bar: string;
}

export function example(inputNumber: InputNumber): string {
  console.log('bob');
  let newValue: any = 'bob';

  newValue = 2;
  return inputNumber.toString();
}

function add(foo: number, bar: string): NewValue {
  return {
    foo: foo,
    bar: bar,
  };
}

const result = add(2, '1');

//const foo = example(2);

console.log(result);
