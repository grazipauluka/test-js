const {sum} = require('./calculator.js')

it('should sum 2 and 2 and the result must be 4', () => {
    expect(sum(2,2)).toBe(4)
});