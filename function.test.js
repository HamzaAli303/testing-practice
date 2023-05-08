const { returnTwo, greeting, add } = require('./function.js');

test(returnTwo, () => {
    const returnTwoF = returnTwo()
    expect(returnTwoF).toBe(2)
});

test('greeting', () => {
    expect(greeting('James')).toEqual('Hello, James')
    expect(greeting('Jill')).toEqual('Hello, Jill')
});

test('add', () => {
    expect(add(1, 2)).toEqual(3)
    expect(add(5, 9)).toEqual(14)
});

