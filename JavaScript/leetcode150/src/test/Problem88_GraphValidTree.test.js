const validTree = require('../main/Problem88_GraphValidTree');

test('should return true', () => {
  expect(
    validTree(5, [
      [0, 1],
      [0, 2],
      [0, 3],
      [1, 4],
    ])
  ).toBeTruthy();
});
