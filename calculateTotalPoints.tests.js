const assert = require('assert');
const calculateTotalPoints = require('./calculateTotalPoints');

describe('calculateTotalPoints', () => {
  it('should pass testcase 1', () => {
    const expected = 63 + 49.5 + 10 + 5;
    const actual = calculateTotalPoints(99.5, 'SMALL', 98, [16, 17, 16.5, 16, 18], 10, 5);

    assert.equal(actual, expected);
  });

  it('should pass testcase 2', () => {
    const expected = 47 + 3 + 5 + 4;
    const actual = calculateTotalPoints(91.5, 'SMALL', 98, [1,1,1,1,1], 5, 4);

    assert.equal(actual, expected);
  });
});