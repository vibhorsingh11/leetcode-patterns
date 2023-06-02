/**
 * @param {number[]} asteroids
 * @return {number[]}
 */
var asteroidCollision = function (asteroids) {
  let st = [];
  for (let i = 0; i < asteroids.length; i++) {
    if (st.length === 0 || asteroids[i] > 0) {
      st.push(asteroids[i]);
    } else {
      while (
        st.length > 0 &&
        st[st.length - 1] > 0 &&
        st[st.length - 1] < Math.abs(asteroids[i])
      ) {
        st.pop();
      }
      if (st[st.length - 1] < 0 || st.length === 0) {
        st.push(asteroids[i]);
      }
      if (st.length > 0 && st[st.length - 1] == Math.abs(asteroids[i])) {
        st.pop();
      }
    }
  }
  let res = new Array(st.length);
  for (let i = st.length - 1; i >= 0; i--) {
    res[i] = st.pop();
  }
  return res;
};

module.exports = asteroidCollision;
