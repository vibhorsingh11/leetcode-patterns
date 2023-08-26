const kClosest = require('../main/Problem63_KClosestPointsToOrigin');

test('should return k closest', () => {
  const points = [
      [1, 3],
      [-2, 2],
    ],
    k = 1;

  expect(kClosest(points, k)).toStrictEqual([[-2, 2]]);
});
