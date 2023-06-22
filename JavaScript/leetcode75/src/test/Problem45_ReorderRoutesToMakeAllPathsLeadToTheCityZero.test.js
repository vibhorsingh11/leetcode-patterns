const minReorder = require("../main/Problem45_ReorderRoutesToMakeAllPathsLeadToTheCityZero");

test("should return the max route needed to be flipped", () => {
  const connections = [
    [0, 1],
    [1, 3],
    [2, 3],
    [4, 0],
    [4, 5],
  ];

  expect(minReorder(6, connections)).toBe(3);
});
