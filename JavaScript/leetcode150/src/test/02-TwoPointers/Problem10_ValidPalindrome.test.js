const isPalindrome = require('../../main/02-TwoPointers/Problem10_ValidPalindrome');

test('should return if valid palindrome', () => {
  const s = 'A man, a plan, a canal: Panama';
  expect(isPalindrome(s)).toBeTruthy();
});
