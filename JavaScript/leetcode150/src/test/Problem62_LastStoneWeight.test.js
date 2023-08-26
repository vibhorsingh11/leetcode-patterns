const lastStoneWeight = require('../main/Problem62_LastStoneWeight');

test('should return last stone weight', () => {
  const stones = [2, 7, 4, 1, 8, 1];

  expect(lastStoneWeight(stones)).toBe(1);
});
