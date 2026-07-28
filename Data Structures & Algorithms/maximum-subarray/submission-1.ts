class Solution {
  /**
   * @param {number[]} nums
   * @return {number}
   */
  maxSubArray(nums: number[]): number {
    let sum = 0;
    let realSum = nums[0];
    for (let i = 0; i < nums.length; i++) {
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
