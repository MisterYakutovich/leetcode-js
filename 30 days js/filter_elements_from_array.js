/**Given an integer array arr and a filtering function fn, return a filtered array filteredArr.

The fn function takes one or two arguments:

arr[i] - number from the arr
i - index of arr[i]
filteredArr should only contain the elements from the arr for which the expression fn(arr[i], i) evaluates to a truthy value. A truthy value is a value where Boolean(value) returns true.

Please solve it without the built-in Array.filter method.

 

Example 1:

Input: arr = [0,10,20,30], fn = function greaterThan10(n) { return n > 10; }
Output: [20,30]
Explanation:
const newArray = filter(arr, fn); // [20, 30]
The function filters out values that are not greater than 10
Example 2:

Input: arr = [1,2,3], fn = function firstIndex(n, i) { return i === 0; }
Output: [1]
Explanation:
fn can also accept the index of each element
In this case, the function removes elements not at index 0
Example 3:

Input: arr = [-2,-1,0,1,2], fn = function plusOne(n) { return n + 1 }
Output: [-2,0,1,2]
Explanation:
Falsey values such as 0 should be filtered out
 

Constraints:

0 <= arr.length <= 1000
-109 <= arr[i] <= 109 */
var filter = function(arr, fn) {
    let result = [];
    for (let i=0;i<arr.length;i++){
        if (fn(arr[i],i)) {
            result.push(arr[i]);
        } 
    }   
    return result;
  };
  let greaterThan10=function(n){
    if(n>10){
      return n
   }

 }
 function firstIndex(n, i) {  
     return i==0  
 }
 function plusOne(n) { 
    return n+1   
 }
  let arr=[0,10,20,30,-1]
  const newArray = filter(arr, greaterThan10);
  console.log(newArray)
  const newArray1 = filter(arr, firstIndex);
  console.log(newArray1)
  const newArray2 = filter(arr, plusOne);
  console.log(newArray2)
  function customFilter(arr, fn) {
    const filteredArr = [];
    
    for (let i = 0; i < arr.length; i++) {
      if (fn(arr[i], i)) {
        filteredArr.push(arr[i]);
      }
    }
    
    return filteredArr;
  }
  
  const arr1 = [0, 10, 20, 30];
  const fn1 = function moreThan10(n) { return n > 10; };
  console.log(customFilter(arr1, fn1)); // [20, 30]
  
  const arr2 = [1, 2, 3];
  const fn2 = function firstIndex(n, i) { return i === 0; };
  console.log(customFilter(arr2, fn2)); // [1]
  
  const arr3 = [-2, -1, 0, 1, 2];
  const fn3 = function plusOne(n) { return n + 1; };
  console.log(customFilter(arr3, fn3)); // [-2, 0, 1, 2]