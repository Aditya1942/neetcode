class Solution {
  /**
   * @param {number[]} heights
   * @return {number}
   */
  maxArea(heights) {
    const len = heights.length;
    let leftIndex = 0;
    let rightIndex = len - 1;

    let max = 0;

    while (leftIndex <= rightIndex) {
      const leftMaxBar = heights[leftIndex];
      const rightMaxBar = heights[rightIndex];
      const width = rightIndex - leftIndex;
      const result = Math.min(leftMaxBar, rightMaxBar);
      max = Math.max(max, result * width);

      if (leftMaxBar < rightMaxBar) {
        leftIndex++;
      } else {
        rightIndex--;
      }
    }
    return max;
  }
}
