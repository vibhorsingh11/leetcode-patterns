/**
 * @param {string} senate
 * @return {string}
 */
var predictPartyVictory = function (senate) {
  let rQueue = [];
  let dQueue = [];
  for (let i = 0; i < senate.length; i++) {
    if (senate[i] == "R") {
      rQueue.push(i);
    } else {
      dQueue.push(i);
    }
  }
  let n = senate.length;
  while (rQueue.length > 0 && dQueue.length > 0) {
    let rturn = rQueue.shift();
    let dturn = dQueue.shift();
    if (dturn < rturn) {
      dQueue.push(dturn + n);
    } else {
      rQueue.push(rturn + n);
    }
  }
  return rQueue.length > 0 ? "Radiant" : "Dire";
};

module.exports = predictPartyVictory;
