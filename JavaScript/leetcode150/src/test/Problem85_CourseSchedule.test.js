const canFinish = require('../main/Problem85_CourseSchedule');

test('should return true or false', () => {
  let numCourses = 2,
    prerequisites = [[1, 0]];

  expect(canFinish(numCourses, prerequisites)).toBeTruthy();

  (numCourses = 2),
    (prerequisites = [
      [1, 0],
      [0, 1],
    ]);
  expect(canFinish(numCourses, prerequisites)).toBeFalsy();
});
