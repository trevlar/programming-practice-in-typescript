export function fizzBuzz(n: number): string[] {
    return Array.from({ length: n }, (v, i) => {
        const num = i + 1;
        let result = '';
        if (num % 3 === 0) {
            result += 'Fizz';
        }
        if (num % 5 === 0) {
            result += 'Buzz';
        }
        if (result === '') {
            return num.toString();
        }
        return result;
    });
}
