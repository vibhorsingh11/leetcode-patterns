const findRedundantConnection = require('../main/Problem86_RedundantConnection');

test('should return cyclic nodes', () => {
  const edges = [
      [1, 2],
      [2, 3],
      [3, 4],
      [1, 4],
      [1, 5],
    ],
    res = [1, 4];

  expect(findRedundantConnection(edges)).toStrictEqual(res);
});
