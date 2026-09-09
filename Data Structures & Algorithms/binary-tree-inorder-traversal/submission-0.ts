/**
 * Definition for a binary tree node.
 class TreeNode {
     constructor(val = 0, left = null, right = null) {
         this.val = val;
         this.left = left;
         this.right = right;
     }
 }
 */
// interface TreeNode {
//   val: number;
//   left: TreeNode | null;
//   right: TreeNode | null;
// }
class Solution {
  /**
   * @param {TreeNode} root
   * @return {number[]}
   */

  stack: TreeNode[] = [];
  iter(root: TreeNode | null): void {
    if (root.left) {
      this.iter(root.left);
    }
    this.stack.push(root);
    if (root.right) {
      this.iter(root.right);
    }
  }

  inorderTraversal(root: TreeNode | null): number[] {
    if (root) this.iter(root);
    const result = [];
    this.stack.forEach((node) => {
      result.push(node.val);
    });
    return result;
  }
}
