/**
 * @param {string[][]} tickets
 * @return {string[]}
 */
var findItinerary = function (tickets) {
  let n = tickets.length;
  let graph = {};
  for (let [from, to] of tickets) {
    if (!graph[from]) graph[from] = [];
    graph[from].push(to);
  }
  let res = [];
  //sorting all key for lexical order
  for (let key in graph) {
    graph[key].sort((a, b) => b.localeCompare(a));
  }

  //starting point
  let stack = ['JFK'];

  while (stack.length > 0) {
    while (
      graph[stack[stack.length - 1]] &&
      graph[stack[stack.length - 1]].length > 0
    ) {
      stack.push(graph[stack[stack.length - 1]].pop());
    }
    res.push(stack.pop());
  }

  return res.reverse();
};

module.exports = findItinerary;
