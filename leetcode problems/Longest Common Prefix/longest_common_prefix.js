/**Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string "".

Example 1:

Input: strs = ["flower","flow","flight"]
Output: "fl"
Example 2:

Input: strs = ["dog","racecar","car"]
Output: ""
Explanation: There is no common prefix among the input strings.
 

Constraints:

1 <= strs.length <= 200
0 <= strs[i].length <= 200
strs[i] consists of only lowercase English letters. */
var longestCommonPrefix = function(strs) {
    if (strs.length === 0) return ""; // Если массив пустой, возвращаем пустую строку
    let prefix = strs[0]; // Первую строку принимаем за префикс
    for (let i = 1; i < strs.length; i++) { // Проходим по всем строкам, начиная со второй
        while (strs[i].indexOf(prefix) !== 0) { // Пока текущая строка не начинается с префикса
            prefix = prefix.substring(0, prefix.length - 1); // Уменьшаем префикс на один символ
            if (prefix === "") return ""; // Если префикс стал пустым, значит общего префикса нет
        }
    }
    return prefix; // Возвращаем найденный общий префикс
};

console.log(longestCommonPrefix(["flower","flow","flight"])); // Выведет "fl"
console.log(longestCommonPrefix(["dog","racecar","car"])); // Выведет ""