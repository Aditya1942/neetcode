class Solution {
  /**
   * @param {string} s
   * @return {number}
   */
  lengthOfLongestSubstring(s) {
    let j = 0;
    const len = s.length;
    const set = new Set();
    let max = 0;

    for (let i = 0; i < len; i++) {
      const char = s.at(i);
      while (set.has(char)) {
        set.delete(s.at(j));
        j++;
      }
      set.add(char);
      max = Math.max(max, i - j + 1);
    }

    return max;
  }
}
