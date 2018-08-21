const assert = require('assert');
const calculateStylePoints = require('./calculateStylePoints');

describe('calculateStylePoints', () => {
  it('should pass testcase 1', () => {
    const expected = 49.5;
    const actual = calculateStylePoints([16, 17, 16.5, 16, 18]);

    assert.equal(actual, expected);
  });

  it('should pass testcase 2', () => {
    const expected = 0;
    const actual = calculateStylePoints([0,0,0,0,0]);

    assert.equal(actual, expected);
  });

  it('should pass testcase 3', () => {
    const expected = 3;
    const actual = calculateStylePoints([1, 1, 1, 1, 1]);

    assert.equal(actual, expected);
  });
});