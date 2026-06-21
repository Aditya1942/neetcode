class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums: number[], target: number): number[] {
        const map = new Map();
        const len = nums.length;

        for (let i = 0; i < len; i++) {
            const num = nums[i];
            const a = target - num;
            if (map.has(a)) {
                return [map.get(a), i];
            }
            map.set(num, i);
        }
    }
}
