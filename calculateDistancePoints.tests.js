const assert = require('assert');
const calculateDistancePoints = require('./calculateDistancePoints');

describe('calculateDistancePoints', () => {
  it('should pass testcase 1', () => {
    const expected = 63;
    const actual = calculateDistancePoints(99.5, 'SMALL' ,98);

    assert.equal(actual, expected);
  });

  it('should pass testcase 2', () => {
    const expected = 47;
    const actual = calculateDistancePoints(91.5, 'SMALL', 98);

    assert.equal(actual, expected);
  });
});