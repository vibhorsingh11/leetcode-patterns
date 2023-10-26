var encode = function (strs) {
  let str = '';
  for (let s of strs) {
    str += s.length + '#' + s;
  }
  //"5#hello5#world"
  return str;
};

var decode = function (str) {
  let res = [];
  while (str.length > 0) {
    const delimiter = str.indexOf('#');
    const length = parseInt(str.slice(0, delimiter));
    const substring = str.slice(delimiter + 1, delimiter + length + 1);
    res.push(substring);
    str = str.slice(delimiter + 1 + length);
  }
  return res;
};

module.exports = encode;
module.exports = decode;
