const moveZeroes = require('../main/Problem10_MoveZeroes');

test('should move zeros to end', () => {
    let nums = [0,1,0,3,12];
    let res = [1,3,12,0,0];
    expect(moveZeroes(nums)).toStrictEqual(res);
})