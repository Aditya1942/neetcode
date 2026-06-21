class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s: string, t: string): boolean {
        const lenS = s.length;
        const lenT = t.length;
        if (lenS !== lenT) return false;

        const mapA = new Map();

        for (let i = 0; i < lenS; i++) {
            const char = s.at(i);
            const charCount = mapA.get(char) || 0;
            mapA.set(char, charCount + 1);
        }
        console.log({...mapA})
        for (let i = 0; i < lenT; i++) {
            const char = t.at(i);
            if (!mapA.has(char)) return false;
            const charCount = mapA.get(char);
            if (charCount === 1) {
                mapA.delete(char);
            } else {
                mapA.set(char, charCount - 1);
            }
        }
        return !mapA.size;
    }
}
