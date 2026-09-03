class Solution {
  /**
   * @param {number[][]} grid
   * @return {number}
   */
  arr: { rottenFIndex: number; rowindex: number }[] = [];
  Rotting(grid: number[][], rottenFIndex: number, rowindex: number) {
    const up = grid[rowindex - 1]?.[rottenFIndex];
    const down = grid[rowindex + 1]?.[rottenFIndex];
    const left = grid[rowindex][rottenFIndex - 1];
    const right = grid[rowindex][rottenFIndex + 1];
    const arr = []
    if (up !== 1 && down !== 1 && left !== 1 && right !== 1) {
      return arr;
    }
    if (up === 1) {
      arr.push({
        rowindex: rowindex - 1,
        rottenFIndex: rottenFIndex,
      });
      grid[rowindex - 1][rottenFIndex] = 2;
    }
    if (down === 1) {
      arr.push({
        rowindex: rowindex + 1,
        rottenFIndex: rottenFIndex,
      });
      grid[rowindex + 1][rottenFIndex] = 2;
    }
    if (left === 1) {
      arr.push({
        rowindex: rowindex,
        rottenFIndex: rottenFIndex - 1,
      });
      grid[rowindex][rottenFIndex - 1] = 2;
    }
    if (right === 1) {
      arr.push({
        rowindex: rowindex,
        rottenFIndex: rottenFIndex + 1,
      });
      grid[rowindex][rottenFIndex + 1] = 2;
    }

    return arr;
  }

  orangesRotting(grid: number[][]): number {
    const len = grid.length;
    for (let i = 0; i < len; i++) {
      const row = grid[i];
      const rowLen = row.length;

      for (let j = 0; j < rowLen; j++) {
        const fruit = row[j];
        if (fruit === 2) {
          this.arr.push({
            rowindex: i,
            rottenFIndex: j,
          });
        }
      }
    }
    let count = 0;
    let arr = []
    while (this.arr.length) {
      const fruit = this.arr.shift();
      const newArr =  this.Rotting(grid, fruit.rottenFIndex, fruit.rowindex);
      arr.push(...newArr)
      if(this.arr.length ===0){
        if(arr.length){
          count++
        }
        this.arr = arr 
        arr = []
      }
      
    }
   for (let i = 0; i < len; i++) {
      const row = grid[i];
      const rowLen = row.length;

      for (let j = 0; j < rowLen; j++) {
            const fruit = row[j];
            if(fruit===1)return -1

      }
   }
    return count;
  }
}
