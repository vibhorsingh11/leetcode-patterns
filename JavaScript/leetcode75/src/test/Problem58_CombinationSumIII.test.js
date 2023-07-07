const combinationSum3 = require("../main/Problem58_CombinationSumIII");

test("should return the combination list", () => {
  const k = 3,
    n = 7,
    Output = [[1, 2, 4]];

  expect(combinationSum3(k, n)).toStrictEqual(Output);
});
