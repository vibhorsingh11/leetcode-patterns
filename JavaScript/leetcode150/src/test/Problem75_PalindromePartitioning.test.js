const partition = require('../main/Problem75_PalindromePartitioning');

test('should return all palindrome partition', () => {
  const s = 'aab',
    output = [
      ['a', 'a', 'b'],
      ['aa', 'b'],
    ];

  expect(partition(s)).toStrictEqual(output);
});
