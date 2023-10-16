const canCompleteCircuit = require('../main/Problem121_GasStation');

test('should return 3', () => {
  const gas = [1, 2, 3, 4, 5],
    cost = [3, 4, 5, 1, 2];

  expect(canCompleteCircuit(gas, cost)).toBe(3);
});
