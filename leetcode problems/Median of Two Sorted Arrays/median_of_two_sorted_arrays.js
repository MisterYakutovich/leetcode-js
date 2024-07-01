/**Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.

The overall run time complexity should be O(log (m+n)).

 

Example 1:

Input: nums1 = [1,3], nums2 = [2]
Output: 2.00000
Explanation: merged array = [1,2,3] and median is 2.
Example 2:

Input: nums1 = [1,2], nums2 = [3,4]
Output: 2.50000
Explanation: merged array = [1,2,3,4] and median is (2 + 3) / 2 = 2.5.
 

Constraints:

nums1.length == m
nums2.length == n
0 <= m <= 1000
0 <= n <= 1000
1 <= m + n <= 2000
-106 <= nums1[i], nums2[i] <= 106 */
var findMedianSortedArrays = function(nums1, nums2) {
    const nums3=nums1.concat(nums2);
    nums3.sort((a,b)=>a-b);
    console.log(nums3)
    for (let item=0;item<nums3.length;item++){
        if (nums3.length%2!==0){
            let lengthOddIndex=Math.ceil(nums3.length/2);
            return nums3[lengthOddIndex-1];
        }
        if (nums3.length%2===0){
            let lengthEvenIndex=nums3.length/2;
            let elem_1=nums3[lengthEvenIndex-1]          
            let elem_2=nums3[lengthEvenIndex]
            return (elem_1+elem_2)/2
        }
    }  
};
console.log(findMedianSortedArrays([1,3,8,5,6],[2,4,15,9,20]))