import { buildTree } from '../utils/TreeNode';
import { checkTree } from './2236-root-equals-sum-of-children';

describe('root equals sum of children', () => {
    it('should return true when the root adds up to its children', () => {
        const root = buildTree([10, 4, 6]);
        const result = checkTree(root);

        expect(result).toBeTruthy();
    });

    it('should return false when the root does not add up to its children', () => {
        const root = buildTree([5, 3, 1]);
        const result = checkTree(root);

        expect(result).toBeFalsy();
    });
});
