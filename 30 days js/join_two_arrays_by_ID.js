/**Given two arrays arr1 and arr2, return a new array joinedArray. All the objects in each of the two inputs arrays will contain an id field that has an integer value. 

joinedArray is an array formed by merging arr1 and arr2 based on their id key. The length of joinedArray should be the length of unique values of id. The returned array should be sorted in ascending order based on the id key.

If a given id exists in one array but not the other, the single object with that id should be included in the result array without modification.

If two objects share an id, their properties should be merged into a single object:

If a key only exists in one object, that single key-value pair should be included in the object.
If a key is included in both objects, the value in the object from arr2 should override the value from arr1.
 

Example 1:

Input: 
arr1 = [
    {"id": 1, "x": 1},
    {"id": 2, "x": 9}
], 
arr2 = [
    {"id": 3, "x": 5}
]
Output: 
[
    {"id": 1, "x": 1},
    {"id": 2, "x": 9},
    {"id": 3, "x": 5}
]
Explanation: There are no duplicate ids so arr1 is simply concatenated with arr2.
Example 2:

Input: 
arr1 = [
    {"id": 1, "x": 2, "y": 3},
    {"id": 2, "x": 3, "y": 6}
], 
arr2 = [
    {"id": 2, "x": 10, "y": 20},
    {"id": 3, "x": 0, "y": 0}
]
Output: 
[
    {"id": 1, "x": 2, "y": 3},
    {"id": 2, "x": 10, "y": 20},
    {"id": 3, "x": 0, "y": 0}
]
Explanation: The two objects with id=1 and id=3 are included in the result array without modifiction. The two objects with id=2 are merged together. The keys from arr2 override the values in arr1.
Example 3:

Input: 
arr1 = [
    {"id": 1, "b": {"b": 94},"v": [4, 3], "y": 48}
]
arr2 = [
    {"id": 1, "b": {"c": 84}, "v": [1, 3]}
]
Output: [
    {"id": 1, "b": {"c": 84}, "v": [1, 3], "y": 48}
]
Explanation: The two objects with id=1 are merged together. For the keys "b" and "v" the values from arr2 are used. Since the key "y" only exists in arr1, that value is taken form arr1.
 

Constraints:

arr1 and arr2 are valid JSON arrays
Each object in arr1 and arr2 has a unique integer id key
2 <= JSON.stringify(arr1).length <= 106
2 <= JSON.stringify(arr2).length <= 106 */
var join=function(arr1,arr2){
   
    if (Object.keys(arr1[0]).length===Object.keys(arr2[0]) && Object.keys(arr1).length!==Object.keys(arr2).length && JSON.stringify(Object.keys(arr1[0]))===JSON.stringify(Object.keys(arr2[0]))){
        const obj1 = arr1.filter(item => item.id);
        const obj2 = arr2.filter(item => item.id);        
        if (JSON.stringify(Object.keys(obj1)) !== JSON.stringify(Object.keys(obj2))) {
            let obj = Object.assign(obj1,obj2)          
           return obj                   
        }
    }
   
    if(Object.keys(arr1[0]).length===Object.keys(arr2[0]).length && JSON.stringify(Object.keys(arr1[0]))===JSON.stringify(Object.keys(arr2[0]))){
        let joinedArray=arr1.filter((obj1)=>!arr2.some(obj2=>obj1.id===obj2.id))
        let arr =joinedArray.concat(arr2)
         return arr.sort((a,b)=>a.id-b.id)
    }else{  
        let map1 = new Map(arr1.map(obj => [obj.id, obj]));
        let map2 = new Map(arr2.map(obj => [obj.id, obj]));
        
        let joinedArray = [];
        
        for (let [id, obj1] of map1) {
            let obj2 = map2.get(id);
            if (obj2) {
                let newObj = { id };
                for (let key in obj1) {
                    if (key !== 'id') {
                        newObj[key] = obj2.hasOwnProperty(key) ? obj2[key] : obj1[key];
                    }
                }
                for (let key in obj2) {
                    if (key !== 'id' && !obj1.hasOwnProperty(key)) {
                        newObj[key] = obj2[key];
                    }
                }
                joinedArray.push(newObj);
                map2.delete(id);
            } else {
                joinedArray.push(obj1);
            }
        }
        
        for (let [, obj2] of map2) {
            joinedArray.push(obj2);
        }
        
        return joinedArray.sort((a, b) => a.id - b.id);
           /* let joinedArray = []; 
            let ids = new Set([...arr1.map(obj => obj.id), ...arr2.map(obj => obj.id)]);
             ids.forEach (id => { 
                let obj1 = arr1.find(obj => obj.id === id);
                 let obj2 = arr2.find(obj => obj.id === id); 
                 if (obj1 && obj2) { 
                    let newObj = { id }; 
                 for (let key in obj1) { 
                    if (key !== 'id') { 
                        newObj[key] = obj2.hasOwnProperty(key) ? obj2[key] : obj1[key];
                 } 
                } 
                for (let key in obj2) { 
                    if (key !== 'id' && !obj1.hasOwnProperty(key)) {
                         newObj[key] = obj2[key];
                         } 
                        } 
                        joinedArray.push(newObj); 
                    } else { 
                        joinedArray.push(obj1 || obj2);
                     } 
                    }); 
                    return joinedArray.sort((a,b)=>a.id-b.id); */
        }
    
    }



/*const arr1 = [
    {"id": 1, "x": 2, "y": 3},
    {"id": 2, "x": 3, "y": 6},
   
]
const arr2 = [
    {"id": 2, "x": 10, "y": 20},
    {"id": 3, "x": 0, "y": 0}
]*/
/*const arr1 = [
    {"id": 1, "x": 1},
    {"id": 4, "x": 9}
]
const arr2 = [
    {"id": 3, "x": 5},
    
]*/
/*const arr1 = [
    {"id": 1, "b": {"b": 94},"v": [4, 3], "y": 48}
]
const arr2 = [
    {"id": 1, "b": {"c": 84}, "v": [1, 3]}
]*/
//const arr1=[{"id": 1,"x": 6}]
//const arr2=[{"id": 1,"x": 15,"y": 7},{"id": 2,"x": 9,"y": 18}]
//[{"id":1,"x":15,"y":7},{"id":2,"x":9,"y":18}]

//const arr1=[{"id":1,"a":21,"t":95,"y":51}]
//const arr2=[{"id":1,"k":51,"u":30,"s":61}]
//[{"a":21,"id":1,"k":51,"s":61,"t":95,"u":30,"y":51}]
//const arr1=[{"id":1,"m":68,"g":41}]
//const arr2=[{"id":1,"q":55,"b":59,"f":63},{"id":3,"o":21,"q":36,"w":11}]
//[{"b":59,"f":63,"g":41,"id":1,"m":68,"q":55},{"id":3,"o":21,"q":36,"w":11}]
const arr1=[{"id":1,"x":36,"d":26,"f":35},{"id":3,"c":20,"z":75}]
const arr2=[{"id":2,"o":48,"z":84,"y":61}]
//[{"d":26,"f":35,"id":1,"x":36},{"id":2,"o":48,"y":61,"z":84},{"c":20,"id":3,"z":75}]
console.log(join(arr1,arr2))
 /* let newArray=[]
    const obj1 = arr1.find( item=>item.id) 
    const obj2 = arr2.find( item=>item.id) 
        if (JSON.stringify(Object.keys(obj1))!==JSON.stringify(Object.keys(obj2))){
           let obj = Object.assign(obj1,obj2)
           newArray.push(obj)
           return newArray
       }*/
        /* let newArray=[]
   
    for (let i = 0; i < arr1.length; i++) {
       
        for (let y = 0; y < arr2.length; y++) {  
            console.log(JSON.stringify(Object.keys(arr1[i])))
               
          let obj= Object.assign({},arr1[i],arr2[y])        
          newArray.push(obj)  
         // return newArray   
            }
           
            
        return newArray
        }   */   