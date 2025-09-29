const { add } = require('../utils/math');

describe('math.add', () => {
  test('adds two numbers', () => {
    expect(add(2, 3)).toBe(5);
  });
});


