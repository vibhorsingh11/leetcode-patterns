const TimeMap = require('../../main/05-BinarySearch/Problem06_TimeBasedKeyValueStore');

test('should return time key based value', () => {
  let time = new TimeMap();
  time.set('foo', 'bar', 1);
  expect(time.get('foo', 1)).toBe('bar');
});
