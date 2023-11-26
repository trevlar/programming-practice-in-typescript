export function twoSum(nums: number[], target: number, baseIndex?: number): number[] {
    let answer = target - nums.shift();
    let answerIndex = nums.indexOf(answer);

    let currentIndex = baseIndex || 0;

    if (answerIndex >= 0) {
        return [currentIndex, answerIndex + currentIndex + 1];
    }

    return twoSum(nums, target, ++currentIndex);
}
