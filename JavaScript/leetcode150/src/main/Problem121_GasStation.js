/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
var canCompleteCircuit = function (gas, cost) {
  let totalGas = 0;
  let currGas = 0;
  let start = 0;

  for (let i = 0; i < gas.length; i++) {
    //difference between the available gas at the current gas station (`gas[i]`) and the gas required to travel to the next gas station (`cost[i]`)
    currGas += gas[i] - cost[i];
    totalGas += gas[i] - cost[i];

    if (currGas < 0) {
      currGas = 0;
      start = i + 1;
    }
  }

  return totalGas < 0 ? -1 : start;
};

module.exports = canCompleteCircuit;
