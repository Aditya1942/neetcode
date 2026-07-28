class Solution {
  arr = [];

  push(s) {
    this.arr.push(s);
  }
  pop() {
    return this.arr.pop();
  }

  peak() {
    return this.arr.at(-1);
  }

  size() {
    return this.arr.length;
  }

  isValid(s) {
    const len = s.length;
    const closingToOpeningMap = {
      "}": "{",
      ")": "(",
      "]": "[",
    };
    for (let i = 0; i < len; i++) {
      const char = s.at(i);

      const isOpening = char === "(" || char === "{" || char === "[" ;

      if (isOpening) {
        this.push(char);
      } else {
        if (this.peak() === closingToOpeningMap[char]) {
          this.pop();
        } else {
          return false;
        }
      }
    }
    return this.size() === 0;
  }
}
