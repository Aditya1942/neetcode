class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */

    isAlphanumericChar(char) {
         return (
            (char >= 'a' && char <= 'z') ||
            (char >= 'A' && char <= 'Z') ||
            (char >= '0' && char <= '9')
        )
    }
    isPalindrome(s) {
        const len = s.length;
        let left = 0;
        let right = len - 1;

        while (left <= len / 2) {
            let leftChar = s.at(left);
            if (!leftChar) return false;
            if (!this.isAlphanumericChar(leftChar)) {
                left++;
                continue;
            }
            let rightChar = s.at(right);
            if (!rightChar) return false;
            if (!this.isAlphanumericChar(rightChar)) {
                right--;
                continue;
            }
            if (leftChar.toLowerCase() !== rightChar.toLowerCase()) {
                return false;
            }
            left++;
            right--;
        }
        return true;
    }
}
