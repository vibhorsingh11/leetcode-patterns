const permute = require('../main/Problem72_Permutations');

test('should return permutations', () => {
  let nums = [1, 2, 3],
    res = [
      [1, 2, 3],
      [1, 3, 2],
      [2, 1, 3],
      [2, 3, 1],
      [3, 1, 2],
      [3, 2, 1],
    ];

  expect(permute(nums)).toStrictEqual(res);
});
