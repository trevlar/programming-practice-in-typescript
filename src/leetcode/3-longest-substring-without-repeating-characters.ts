export function lengthOfLongestSubstring(s: string): number {
    let chars = {};
    let left = 0;
    let right = 0;

    let result = 0;

    while (right < s.length) {
        let r = s[right];
        let index = chars[r];
        if (index !== null && index >= left && index < right) left = index + 1;

        result = Math.max(result, right - left + 1);

        chars[r] = right;
        right++;
    }

    return result;
}
