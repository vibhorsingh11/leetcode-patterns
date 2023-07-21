const dailyTemperatures = require('../main/Problem74_DailyTemperatures');

test('should return difference', () => {
  const temperatures = [73, 74, 75, 71, 69, 72, 76, 73];
  const result = [1, 1, 4, 2, 1, 1, 0, 0];

  expect(dailyTemperatures(temperatures)).toStrictEqual(result);
});
