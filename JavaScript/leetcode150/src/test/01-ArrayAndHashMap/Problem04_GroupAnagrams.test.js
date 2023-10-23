const groupAnagrams = require('../../main/01-ArrayAndHasMap/Problem04_GroupAnagrams');

test('should return groups of anagram', () => {
  const strs = ['eat', 'tea', 'tan', 'ate', 'nat', 'bat'];
  const res = [ [ 'eat', 'tea', 'ate' ], [ 'tan', 'nat' ], [ 'bat' ] ];

  expect(groupAnagrams(strs)).toStrictEqual(res);
});
