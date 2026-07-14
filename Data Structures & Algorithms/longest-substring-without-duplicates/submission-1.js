class Solution {
  /**
   * @param {string} s
   * @return {number}
   */
  lengthOfLongestSubstring(s) {
    let i = 0;
    let j = 0;
    const len = s.length;
    const set = new Set();
    let max = 0;
    while (i < len) {
      const charI = s.at(i);
      const charJ = s.at(j);
      console.log("===charI:", charI, "charJ:", charJ, "i:", i, "j:", j, "set:", [...set]);
      if (set.has(charJ)) {
        i++;
        set.delete(charI);
      } else if (j >= len) {
        set.delete(charI);
        i++;
      } else {
        set.add(charJ);
        j++;
      }
      max = Math.max(max, set.size);
    }
    return max;
  }
}
