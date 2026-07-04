class Solution {
  /**
   * @param {number[]} prices
   * @return {number}
   */
  maxProfit(prices) {
    let i = 0;
    let j = 1;
    let profit = 0;
    const len = prices.length;
    while (j <= len - 1) {
      const first = prices[i];
      const second = prices[j];
      profit = Math.max(second - first, profit);

      if (first > second) {
        i=j
        j++
      } else {
        j++;
      }
    }
    return profit > 0 ? profit : 0;
  }
}
