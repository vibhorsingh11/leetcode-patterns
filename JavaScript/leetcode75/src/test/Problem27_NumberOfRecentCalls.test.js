const RecentCounter = require("../main/Problem27_NumberOfRecentCalls");

test("should return recent calls", () => {
  var obj = new RecentCounter();
  expect(obj.ping(1)).toBe(1);
});
