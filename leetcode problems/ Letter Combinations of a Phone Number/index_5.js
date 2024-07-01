/**Given a string containing digits from 2-9 inclusive, return all possible letter combinations that the number could represent. Return the answer in any order.

A mapping of digits to letters (just like on the telephone buttons) is given below. Note that 1 does not map to any letters.

Example 1:

Input: digits = "23"
Output: ["ad","ae","af","bd","be","bf","cd","ce","cf"]
Example 2:

Input: digits = ""
Output: []
Example 3:

Input: digits = "2"
Output: ["a","b","c"]
 
Constraints:

0 <= digits.length <= 4
digits[i] is a digit in the range ['2', '9']. */
const letterCombinationsObject={
    '2':['a','b','c'],
    '3':['d','e','f'],
    '4':['g','h','i'],
    '5':['j','k','l'],
    '6':['m','n','o'],
    '7':['p','q','r','s'],
    '8':['t','u','v'],
    '9':['w','x','y','z']
}
var letterCombinations = function(digits) {
let result=[]
let result_1=[]
  if (digits==""){
    return result
  }
    for (let item=0;item<digits.length;item++){
      const digit = digits[item];
      result.push(letterCombinationsObject[digit])   
   } 
   if (result.length==1){
    return result.flat()
   }
    function combine(index, currentCombination) {
      if (index === result.length) {
        result_1.push(currentCombination.join(""));
       
        return;
      }
      for (let i = 0; i < result[index].length; i++) {
        combine(index + 1, [...currentCombination, result[index][i]]);
      }
    }
    combine(0, []);
    return result_1;
  }
console.log(letterCombinations("382"))
