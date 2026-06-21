class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums: number[]): boolean {
        const set = new Set()
        const len = nums.length
        for(let i =0;i<=len;i++){
            const num =nums[i] 
            if(set.has(num))
            return true
            else 
            set.add(num)
        }
        return false
    }
}
