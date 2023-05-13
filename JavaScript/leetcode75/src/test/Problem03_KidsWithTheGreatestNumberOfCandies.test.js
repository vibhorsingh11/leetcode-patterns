const kidsWithCandies = require('../main/Problem03_KidsWithTheGreatestNumberOfCandies');

test('should return kid with greatest number of candies', () => {
    const candies = [2,3,5,1,3];
    const result = [true,true,true,false,true];

    expect(kidsWithCandies(candies, 3)).toStrictEqual(result);
})