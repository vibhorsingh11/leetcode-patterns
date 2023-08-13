/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    let mergedArr = [];
    let median = 0;
    merge();
    //Median from the merged array
    let n = mergedArr.length;
    let mid = Math.floor(n /2);
    // if length is even then we have calulate median from middle and less middle element
    if(n % 2 === 0){
        median = (mergedArr[mid-1] + mergedArr[mid])/2;
    } else {
        median = mergedArr[mid];
    }

    //applied merged sort
    function merge(){
        let i =0, j=0;
        while(i < nums1.length && j < nums2.length){
            if(nums1[i] <= nums2[j]){
                mergedArr.push(nums1[i++]);
            } else{
                mergedArr.push(nums2[j++]);
            }
        }
        while(i < nums1.length){
            mergedArr.push(nums1[i++]);
        }
        while(j < nums2.length){
            mergedArr.push(nums2[j++]);
        }
    }
    return median;
};

module.exports = findMedianSortedArrays;