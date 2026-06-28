class Solution {
  /**
   * @param {number[]} numbers
   * @param {number} target
   * @return {number[]}
   */
  twoSum(numbers, target) {
    const len = numbers.length;
    let left = 0;
    let right = len-1;

    while (left < len) {
      const leftNum = numbers[left];
      const rightNum = numbers[right];
      const sum = leftNum + rightNum;
      if (sum === target) {
        return [left + 1, right + 1];
      }
      if (sum > target) {
        right--;
      } else {
        left++;
      }
    }
  }
}
