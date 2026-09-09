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

  result: number[] = [];
  iter(root: TreeNode | null): void {
    if (!root) return;
    this.iter(root.left);
    this.result.push(root.val);
    this.iter(root.right);
  }

  inorderTraversal(root: TreeNode | null): number[] {
    this.iter(root);

    return this.result;
  }
}
