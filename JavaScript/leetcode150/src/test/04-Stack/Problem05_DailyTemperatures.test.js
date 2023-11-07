const dailyTemperatures = require('../../main/04-Stack/Problem05_DailyTemperatures');

test('should return daily temp', () => {
  const temperatures = [73, 74, 75, 71, 69, 72, 76, 73];

  expect(dailyTemperatures(temperatures)).toStrictEqual([
    1, 1, 4, 2, 1, 1, 0, 0,
  ]);
});
