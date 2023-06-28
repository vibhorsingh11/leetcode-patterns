const SmallestInfiniteSet = require("../main/Problem50_SmallestNumberInInfiniteSet");

test("should perform action for the smallest infinite set", () => {
  let test = new SmallestInfiniteSet();
  test.addBack(2);
  expect(test.popSmallest()).toBe(1);
});
