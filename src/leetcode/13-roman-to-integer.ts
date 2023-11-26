export function romanToInt(s: string): number {
    const list = [...s];
    return list.reduce((a, c, i) => {
        const pl = list[i - 1];
        switch (c) {
            case 'I':
                return a + 1;
            case 'V':
                if (pl === 'I') {
                    return a + 3;
                }
                return a + 5;

            case 'X':
                if (pl === 'I') {
                    return a + 8;
                }

                return a + 10;
            case 'L':
                if (pl === 'X') {
                    return a + 30;
                }

                return a + 50;
            case 'C':
                if (pl === 'X') {
                    return a + 80;
                }

                return a + 100;
            case 'D':
                if (pl === 'C') {
                    return a + 300;
                }

                return a + 500;
            case 'M':
                if (pl === 'C') {
                    return a + 800;
                }

                return a + 1000;
        }
    }, 0);
}
