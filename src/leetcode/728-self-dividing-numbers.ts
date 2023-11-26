export function selfDividingNumbers(left: number, right: number): number[] {
    if (left < 1 || left > right || right >= Math.pow(10, 4)) return [];

    let result = [];
    for (let num = left; num <= right; num++) {
        let numString = num.toString();
        if (numString.includes('0')) continue;

        let numArray = [...numString] as string[];
        let r = numArray.filter((a: string) => num % parseInt(a) === 0);

        if (numArray.length === r.length) {
            if (num % num === 0 && !result.includes(num)) {
                result.push(num);
            }
        }
    }
    return result;
}
