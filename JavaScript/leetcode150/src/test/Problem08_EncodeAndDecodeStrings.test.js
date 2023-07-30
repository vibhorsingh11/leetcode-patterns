const decode = require('../main/Problem08_EncodeAndDecodeStrings');
const encode = require('../main/Problem08_EncodeAndDecodeStrings');

test('should encode', () => {
  const strs = ['hello', 'world'];

  // expect(encode(strs)).toBe('5#hello5#world');
  expect(decode('5#hello5#world')).toStrictEqual(strs);
});
