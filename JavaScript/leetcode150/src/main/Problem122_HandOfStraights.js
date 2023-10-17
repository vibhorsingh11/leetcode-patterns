/**
 * @param {number[]} hand
 * @param {number} groupSize
 * @return {boolean}
 */
var isNStraightHand = function(hand, groupSize) {
    if (hand.length % groupSize !== 0) {
   return false; // If the hand size is not divisible by groupSize, it's not possible to form valid groups
 }

 const countMap = new Map();
 for (const card of hand) {
   countMap.set(card, (countMap.get(card) || 0) + 1); // Count the occurrence of each card
 }

 while (countMap.size > 0) {
   const minCard = Math.min(...countMap.keys()); // Find the minimum card value
   for (let i = minCard; i < minCard + groupSize; i++) {
     if (!countMap.has(i)) {
       return false; // If any card in the group is missing, it's not possible to form valid groups
     }
     const count = countMap.get(i);
     if (count === 1) {
       countMap.delete(i); // Remove the card from the map if it has been used up
     } else {
       countMap.set(i, count - 1); // Decrement the count of the card
     }
   }
 }

 return true; // All groups have been formed successfully
};

module.exports = isNStraightHand;