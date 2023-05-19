/**
 * @param {number[]} nums
 * @return {boolean}
 */
var increasingTriplet = function(nums) {
    let min = Number.MAX_VALUE;
    let secMin = Number.MAX_VALUE;
    for (let num of nums) {
        if (num <= min) min = num;
        else if (num <= secMin) secMin = num;
        else return true;
    }
    return false;
};

module.exports = increasingTriplet;