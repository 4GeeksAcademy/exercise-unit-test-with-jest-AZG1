const { sum } = require('./app.js');
test('adds 14 + 9 to equal 23', () => {
    let total = sum(14, 9);
     expect(total).toBe(23);
});

test("One euro should be 1.07 dollars", function() {
    const { fromEuroToDollar } = require('./app.js');
    const dollars = fromEuroToDollar(3.5);
    const expected = 3.5 * 1.07;

    expect(fromEuroToDollar(3.5)).toBe(3.745);
}) 

test("3.5 dollars should be 511.92 yen", function() {
    const { fromDollarToYen } = require('./app.js');
    const yen = fromDollarToYen(3.5);
    const expected = 511.92;

    expect(fromDollarToYen(3.5)).toBe(expected);
});

test("3.5 yen should be 0.02 pounds", function() {
    const { fromYenToPound } = require('./app.js');
    const pounds = fromYenToPound(3.5);
    const expected = 0.02;
    expect(fromYenToPound(3.5)).toBe(expected);
});