/*Write code that enhances all arrays such that you can call the array.groupBy(fn) method on any array and it will return a grouped version of the array.

A grouped array is an object where each key is the output of fn(arr[i]) and each value is an array containing all items in the original array with that key.

The provided callback fn will accept an item in the array and return a string key.

The order of each value list should be the order the items appear in the array. Any order of keys is acceptable.

Please solve it without lodash's _.groupBy function.

Example 1:

Input:
array = [
  {"id":"1"},
  {"id":"1"},
  {"id":"2"}
],
fn = function (item) {
  return item.id;
}
Output:
{
  "1": [{"id": "1"}, {"id": "1"}],
  "2": [{"id": "2"}]
}
Explanation:
Output is from array.groupBy(fn).
The selector function gets the "id" out of each item in the array.
There are two objects with an "id" of 1. Both of those objects are put in the first array.
There is one object with an "id" of 2. That object is put in the second array.
Example 2:

Input:
array = [
  [1, 2, 3],
  [1, 3, 5],
  [1, 5, 9]
]
fn = function (list) {
  return String(list[0]);
}
Output:
{
  "1": [[1, 2, 3], [1, 3, 5], [1, 5, 9]]
}
Explanation:
The array can be of any type. In this case, the selector function defines the key as being the first element in the array.
All the arrays have 1 as their first element so they are grouped together.
{
  "1": [[1, 2, 3], [1, 3, 5], [1, 5, 9]]
}
Example 3:

Input:
array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
fn = function (n) {
  return String(n > 5);
}
Output:
{
  "true": [6, 7, 8, 9, 10],
  "false": [1, 2, 3, 4, 5]
}
Explanation:
The selector function splits the array by whether each number is greater than 5. */
Array.prototype.groupBy = function (fn) {
    return this.reduce(function (acc, curr) {
        const key = fn(curr);
        if (!acc[key]) {
            acc[key] = [];
        }
        acc[key].push(curr);
        return acc;
    }, {});
};
var array1 = [
    { "id": "1" },
    { "id": "1" },
    { "id": "2" }
];
var array2 = [
    [1, 2, 3],
    [1, 3, 5],
    [1, 5, 9]
];
var array3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var fn1 = function (item) {
    return item.id;
};
var fn2 = function (list) {
    return String(list[0]);
};
var fn3 = function (n) {
    return String(n > 5);
};
console.log(array1.groupBy(fn1));
console.log(array2.groupBy(fn2));
console.log(array3.groupBy(fn3));

/*fn=function(){
    const obj={}
    let newarr=[]
    let newarr1=[]
   
    for (let i=0;i<arr.length;i++){
        if (arr[i]<=5){
           newarr.push(arr[i])
           obj[false]=newarr
                    
        }
        if (arr[i]>5){
           newarr1.push(arr[i])
           obj[true]=newarr1
          
        }
    }
      
    return obj
}
fn1=function(){//fn1
    const obj={}   
    array.filter((item)=>{
        if (!obj[item.id]) {
            obj[item.id] = [];
        }
    obj[item.id].push(item)
  })

return obj
}
fn2=function(){//fn2
    const obj={}
    arr1.filter((item)=>{
        if (!obj[item[0]]) {
            obj[item[0]] = [];
        }
    obj[item[0]].push(item)
        
    })
    return obj
}
Array.prototype.groupBy=function(fn){
    return fn(this)

}
const array = [
    {"id":"1"},
    {"id":"1"},
    {"id":"2"}
  ]//array
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]//arr
const arr1 = [
    [1, 2, 3],
    [1, 3, 5],
    [1, 5, 9],
   
  ]//arr1

console.log(array.groupBy(fn1)) 
console.log(arr.groupBy(fn)) 
console.log(arr1.groupBy(fn2)) */