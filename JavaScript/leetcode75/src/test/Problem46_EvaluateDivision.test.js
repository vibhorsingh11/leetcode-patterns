const calcEquation = require("../main/Problem46_EvaluateDivision");

test("should return queries output", () => {
  let equations = [
      ["a", "b"],
      ["b", "c"],
    ],
    values = [2.0, 3.0],
    queries = [
      ["a", "c"],
      ["b", "a"],
      ["a", "e"],
      ["a", "a"],
      ["x", "x"],
    ];

  expect(calcEquation(equations, values, queries)).toStrictEqual([
    6.0, 0.5, -1.0, 1.0, -1.0,
  ]);
});
