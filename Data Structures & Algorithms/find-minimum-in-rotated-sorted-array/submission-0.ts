class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMin(nums: number[]): number {

        for(let i =0;i<nums.length;i++){
            const num = nums[i]
            const nextNum = nums[i+1]
        const numPlusNext=  num+1
        if(nextNum === undefined)return nums[0]
        if(numPlusNext>nextNum)return nextNum

        }

        return 0
    }
}
