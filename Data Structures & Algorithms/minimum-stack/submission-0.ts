class MinStack {
  arr: number[] = [];
  constructor() {}

  /**
   * @param {number} val
   * @return {void}
   */
  push(val: number): void {
    this.arr.push(val);
  }

  /**
   * @return {void}
   */
  pop(): void {
    this.arr.pop();
  }

  /**
   * @return {number}
   */
  top(): number {
    return this.arr.at(-1);
  }

  /**
   * @return {number}
   */
  getMin(): number {
    let min = this.arr[0];
    for (let i = 0; i < this.arr.length; i++) {
      const num = this.arr[i];
      min = Math.min(min, num);
    }
    return min
  }
}
