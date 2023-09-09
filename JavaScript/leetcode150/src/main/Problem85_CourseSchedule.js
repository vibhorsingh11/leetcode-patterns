/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function (numCourses, prerequisites) {
  //creating graph
  let graph = new Array(numCourses).fill(null).map(() => []);

  //visited array overall visited node and stack array for current visited node
  let visited = new Array(numCourses).fill(false);
  let stack = new Array(numCourses).fill(false);

  //filing graph
  for (let [course, prerequisite] of prerequisites) {
    graph[prerequisite].push(course);
  }

  function dfs(course) {
    //cycle detetcted, cannot proceed
    if (stack[course]) {
      return true;
    }
    if (visited[course]) {
      return false;
    }
    visited[course] = true;
    stack[course] = true;

    for (let neighbour of graph[course]) {
      if (dfs(neighbour)) {
        //cycle detetcted, cannot proceed
        return true;
      }
    }
    stack[course] = false;
    return false;
  }

  for (let course = 0; course < numCourses; course++) {
    if (dfs(course)) {
      return false;
    }
  }
  return true;
};

module.exports = canFinish;
