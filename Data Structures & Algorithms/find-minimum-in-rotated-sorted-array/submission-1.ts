class Solution {
  /**
   * @param {number[]} nums
   * @return {number}
   */
  findMin(nums: number[]): number {
    for (let i = 0; i < nums.length; i++) {
      const nextNum = nums[i + 1];
      if (nextNum === undefined) return nums[0];
      if (nums[i] + 1 > nextNum) return nextNum;
    }

    return 0;
  }
}
