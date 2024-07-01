/*Given an object or array obj, return a compact object. A compact object is the same as the original object, except with keys containing falsy values removed. This operation applies to the object and any nested objects. Arrays are considered objects where the indices are keys. A value is considered falsy when Boolean(value) returns false.

You may assume the obj is the output of JSON.parse. In other words, it is valid JSON.

 

Example 1:

Input: obj = [null, 0, false, 1]
Output: [1]
Explanation: All falsy values have been removed from the array.
Example 2:

Input: obj = {"a": null, "b": [false, 1]}
Output: {"b": [1]}
Explanation: obj["a"] and obj["b"][0] had falsy values and were removed.
Example 3:

Input: obj = [null, 0, 5, [0], [false, 16]]
Output: [5, [], [16]]
Explanation: obj[0], obj[1], obj[3][0], and obj[4][0] were falsy and removed.*/
var compact=function(obj) {
    if (Array.isArray(obj)) {
        return obj.filter( (item) =>  Boolean(item)).map( (item)=> compact(item));
    }
    else if (typeof obj === 'object' && obj !== null) {
        var result = {};
        for (var key in obj) {
            if (Boolean(obj[key])) {
                result[key] = compact(obj[key]);
            }
        }
        return result;
    }
    else {
        return obj;
    }
}
const obj1 = [null, 0, false, 1];
console.log(compact(obj1)); // Output: [1]

const obj2 = {"a": null, "b": [false, 1]};
console.log(compact(obj2)); // Output: {"b": [1]}

const obj3 = [null, 0, 5, [0], [false, 16]];
console.log(compact(obj3)); // Output: [5, [], [16]]
