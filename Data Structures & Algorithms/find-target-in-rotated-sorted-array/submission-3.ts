class Solution {
  /**
   * @param {number[]} nums
   * @param {number} target
   * @return {number}
   */
  search(nums: number[], target: number): number {
    for (let i = 0; i < nums.length; i++) {
      const num = nums[i];
      if (num === target) return i;
      if (num[i] + 1 > nums[i + 1]) {
        return this.binarySearch(i, nums, target);
      }
    }
    return -1
  }

  binarySearch(initL: number, nums: number[], target: number): number {
    if (nums.length === 0) return -1;

    let l = initL;
    let r = nums.length - 1;

    while (l <= r) {
      const midIndex = Math.floor((l + r) / 2);

      if (nums[midIndex] === target) {
        return midIndex;
      }

      if (nums[midIndex] < target) {
        l = midIndex + 1;
      } else {
        r = midIndex - 1;
      }
    }
    return -1;
  }
}
