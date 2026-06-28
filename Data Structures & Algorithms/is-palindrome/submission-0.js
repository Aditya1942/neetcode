class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */

    isAlphanumericChar(ch) {
        if (ch.length !== 1) return false;

        const c = ch.charCodeAt(0);

        return (
            (c >= 48 && c <= 57) || // 0-9
            (c >= 65 && c <= 90) || // A-Z
            (c >= 97 && c <= 122) // a-z
        );
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
