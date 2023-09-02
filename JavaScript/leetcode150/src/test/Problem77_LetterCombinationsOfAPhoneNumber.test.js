const letterCombinations = require('../main/Problem77_LetterCombinationsOfAPhoneNumber');

test('should return letter combinations', () => {
  const digits = '23',
    res = ['ad', 'ae', 'af', 'bd', 'be', 'bf', 'cd', 'ce', 'cf'];

  expect(letterCombinations(digits)).toStrictEqual(res);
});
