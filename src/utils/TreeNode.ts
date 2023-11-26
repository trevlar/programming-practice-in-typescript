export class TreeNode {
    val: number;
    left: TreeNode | null;
    right: TreeNode | null;
    constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
        this.val = val === undefined ? 0 : val;
        this.left = left === undefined ? null : left;
        this.right = right === undefined ? null : right;
    }
}

export function buildTree(values: number[]) {
    const nodes = values.map((value) => new TreeNode(value));
    for (let i = 0; i < nodes.length; i++) {
        const node = nodes[i];
        const leftIndex = i * 2 + 1;
        const rightIndex = i * 2 + 2;
        if (leftIndex < nodes.length) {
            node.left = nodes[leftIndex];
        }
        if (rightIndex < nodes.length) {
            node.right = nodes[rightIndex];
        }
    }
    return nodes[0];
}
