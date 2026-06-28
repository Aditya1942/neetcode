class Solution {
  /**
   * @param {character[][]} board
   * @return {boolean}
   */
  isValidSudoku(board) {
    const rowMap = new Map();
    const columnsMap = new Map();
    const boxMap = new Map();
    const len = 9;

    // rows

    for (let colIndex = 0; colIndex < len; colIndex++) {
      if (!rowMap.has(colIndex)) rowMap.set(colIndex, new Set());

      for (let rowIndex = 0; rowIndex < len; rowIndex++) {
        const num = board[colIndex][rowIndex];
        if (num === ".") continue;
        const boxRow = Math.floor(rowIndex / 3) + 1;
        const boxCol = Math.floor(colIndex / 3);
        const boxNum = boxRow + boxCol * 3;
        
        if (!columnsMap.has(rowIndex)) columnsMap.set(rowIndex, new Set());
        if (!boxMap.has(boxNum)) boxMap.set(boxNum, new Set());

        const rowSet = rowMap.get(colIndex);
        const columnsSet = columnsMap.get(rowIndex);
        const boxSet = boxMap.get(boxNum);

        if (rowSet.has(num)) return false;
        if (columnsSet.has(num)) return false;
        if (boxSet.has(num)) return false;

        rowSet.add(num);
        columnsSet.add(num);
        boxSet.add(num);
      }
    }
    return true;
  }
}
