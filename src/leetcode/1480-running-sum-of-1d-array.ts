export function runningSum(nums: number[]): number[] {
    return nums.reduce((result, num) => {
        if (!result.length) {
            return [num];
        }

        const lastNumber = result[result.length - 1];

        return [...result, lastNumber + num];
    }, []);
}
