class Solution {
  /**
   * @param {number[]} nums
   * @return {number}
   */
  maxSubArray(nums: number[]): number {
    let realSum = nums[0];
    let sum = 0;
    const len = nums.length
    for (let i = 0; i < len; i++) {
      const num = nums[i];
      if (sum <= 0) {
        sum = 0;
      }
      sum += num;
      realSum = Math.max(realSum, sum);
    }

    return realSum;
  }
}
