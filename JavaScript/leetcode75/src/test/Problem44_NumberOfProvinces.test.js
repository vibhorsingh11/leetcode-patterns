const findCircleNum = require("../main/Problem44_NumberOfProvinces");

test("should return total number of provinces", () => {
  const isConnected = [
    [1, 1, 0],
    [1, 1, 0],
    [0, 0, 1],
  ];

  expect(findCircleNum(isConnected)).toBe(2);
});
