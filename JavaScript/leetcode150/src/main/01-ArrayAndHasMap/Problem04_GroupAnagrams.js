/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
  let map = new Map();
  for (let str of strs) {
    //Count array to create unique key for each anagram
    let arr = new Array(26).fill(0);
    for (let i = 0; i < str.length; i++) {
      //subtract 97 from the ASCII value to get the index in the array
      arr[str.charCodeAt(i) - 97]++;
    }
    //converting whole array to make a key
    let key = arr.toString();
    if (!map.has(key)) {
      map.set(key, []);
    }
    map.get(key).push(str);
  }
  return Array.from(map.values());
};

// Map(3) {
//   '1,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0' => [ 'eat', 'tea', 'ate' ],
//   '1,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,0' => [ 'tan', 'nat' ],
//   '1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0' => [ 'bat' ]

//time complexity:- O(n * k) => k is average length of word
//space:- O(n)

module.exports = groupAnagrams;
