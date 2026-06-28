class Solution {
  /**
   * @param {string[]} strs
   * @return {string[][]}
   */
  groupAnagrams(strs) {
    const resultMap = new Map();

    for (const str of strs) {
      const len = str.length;
      const frequencyArr = new Array(26).fill(0);
      for (let i = 0; i < len; i++) {
        const ascii = str.charCodeAt(i) - 97;
        frequencyArr[ascii] = frequencyArr[ascii] + 1;
      }
      const key = frequencyArr.join(",");
      if (!resultMap.has(key)) resultMap.set(key, []);
      resultMap.get(key).push(str);
    }
    const result = [];
    resultMap.forEach((value) => result.push(value));
    return result;
  }
}
