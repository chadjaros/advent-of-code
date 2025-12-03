import { aoc } from '../../ts-utils/aoc';
import { Series } from '../../ts-utils/series';

aoc((infile) => {
    const input = infile.lines.map((l) => l.split('').map((x) => parseInt(x)));

    function pow10(n: number): number {
        if (n === 1) {
            return 1;
        }
        return 10 * pow10(n - 1);
    }

    let value = input.reduce((acc, line) => {
        const digit = Array.from(Series.of(12, 0));

        for (let i = 0; i < line.length; i++) {
            for (let j = 12; j > 0; j--) {
                if (i < line.length - j + 1) {
                    if (line[i] > digit[12 - j]) {
                        digit[12 - j] = line[i];
                        for (let k = j - 1; k > 0; k--) {
                            digit[12 - k] = 0;
                        }
                        break;
                    }
                }
            }
        }

        const joltage = digit.reduce((acc, d, i) => {
            return acc + pow10(12 - i) * d;
        }, 0);

        return acc + joltage;
    }, 0);

    return { value };
});
