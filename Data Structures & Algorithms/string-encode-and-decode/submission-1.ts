class Solution {
  /**
   * @param {string[]} strs
   * @returns {string}
   */
  encode(strs: string[]): string {
    let str = "";
    for (const s of strs) {
      const len = s.length;
      str = str + `${len}#${s}`;
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
    while (i < len) {
      let countStr = "";
      while (i < len) {
        const char = str.at(i);
        if (char === "#") {
          i++;
          break;
        }
        countStr += str.at(i);
        i++;
      }

      if (!isNaN(parseInt(countStr))) {
        const count = parseInt(countStr);
        const currStr = str.slice(i, i + count);
        strs.push(currStr);
        i += count;
        continue;
      }
      i++;
    }
    return strs;
  }
}
