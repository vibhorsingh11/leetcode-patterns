const increasingTriplet = require('../main/Problem08_IncreasingTripletSubsequence');

test('should return triplet', () => {
    let arr = [2, 1, 5, 0, 4, 6];
    expect(increasingTriplet(arr)).toBeTruthy()
})