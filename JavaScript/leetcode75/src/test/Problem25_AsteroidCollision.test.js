const asteroidCollision = require("../main/Problem25_AsteroidCollision");

test("should return states after collision", () => {
  const asteroids = [5, 10, -5];
  const result = [5, 10];
  expect(asteroidCollision(asteroids)).toStrictEqual(result);
});
