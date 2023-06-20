const canVisitAllRooms = require("../main/Problem43_KeysAndRooms");

test("should return true and all rooms have been visited", () => {
  let rooms = [[1], [2], [3], []];

  expect(canVisitAllRooms(rooms)).toBe(true);
});
