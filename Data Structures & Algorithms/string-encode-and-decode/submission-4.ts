class Solution {
  /**
   * @param {string[]} strs
   * @returns {string}
   */
  encode(strs: string[]): string {
    let str = "";
    for (const s of strs) {
      const len = s.length;
      str += len + "#" + s;
    }
    return str;
  }

  /**
   * @param {string} str
   * @returns {string[]}
   */
  decode(str: string): string[] {
    const strs = [];
    const len = str.length;
    let i = 0;
    let count = -1;
    let countStr = "";
    while (i < len) {
      const char = str[i];
      if (char === "#") {
        i++;
        count = Number(countStr);
        countStr = "";
      } else {
        countStr = countStr + char
        i++;
        if (count === -1) continue;
      }

      const currStr = str.slice(i, i + count);
      strs.push(currStr);
      i += count;
      count = -1;
    }
    return strs;
  }
}
