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

    while (i < len) {
      let j = i;

      while (str[j] !== "#") {
        j++;
      }

      const length = Number(str.slice(i, j));
      i = j + 1;

      strs.push(str.slice(i, i + length));
      i += length;
    }
    return strs;
  }
}
