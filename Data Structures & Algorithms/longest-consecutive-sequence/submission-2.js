class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        const set = new Set(nums);
        let max = 0
        for (const num of nums) {
            if(!set.has(num-1)){
                let count = 1
                let currNum = num
                while(set.has(currNum+1)){
                    currNum++
                    count++
                }
                max = Math.max(max,count)
            }
        }
        return max
    }
}
