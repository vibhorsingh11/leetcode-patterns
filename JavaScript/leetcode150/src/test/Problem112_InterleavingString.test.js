const isInterleave = require('../main/Problem112_InterleavingString');

test('should return ctrue', () => {
  const s1 = 'aabcc',
    s2 = 'dbbca',
    s3 = 'aadbbcbcac';

  expect(isInterleave(s1, s2, s3)).toBeTruthy();
});
