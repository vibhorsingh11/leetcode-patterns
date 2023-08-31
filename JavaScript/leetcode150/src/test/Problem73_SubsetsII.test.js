const subsetsWithDup = require('../main/Problem73_SubsetsII');

test('shouls return subset with dups', () => {
  const nums = [1, 2, 2],
    res = [[], [1], [1, 2], [1, 2, 2], [2], [2, 2]];

  expect(subsetsWithDup(nums)).toStrictEqual(res);
});
