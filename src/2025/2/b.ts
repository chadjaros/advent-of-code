import { aoc } from '../../ts-utils/aoc';
import { Range } from '../../ts-utils/range';

aoc((infile) => {
    const input = infile.string.split(',').map((x) => {
        const nums = x.split('-').map((y) => parseInt(y));
        return new Range(nums[0], nums[1]);
    });

    function digits(n: number): number {
        if (n === 0) {
            return 0;
        }
        return 1 + digits(Math.floor(n / 10));
    }

    function pow10(n: number): number {
        if (n === 1) {
            return 1;
        }
        return 10 * pow10(n - 1);
    }

    function combiner(value: number, digits: number, times: number): number {
        if (times === 1) {
            return value;
        }
        return value * pow10(digits * times - (digits - 1)) + combiner(value, digits, times - 1);
    }

    const value = input.reduce((acc, range) => {
        let seen = new Set<number>();
        for (let d = digits(range.start); d <= digits(range.end); d++) {
            const subrange = new Range(Math.max(pow10(d), range.start), Math.min(pow10(d + 1) - 1, range.end));

            for (let repeatableDigits = 1; repeatableDigits <= d / 2; repeatableDigits++) {
                if (d % repeatableDigits === 0) {
                    let cutter = pow10(d - repeatableDigits + 1);
                    let prefix = Math.floor(subrange.start / cutter);
                    let repeats = d / repeatableDigits;
                    let invalid = 0;
                    do {
                        invalid = combiner(prefix, repeatableDigits, repeats);

                        if (!seen.has(invalid) && subrange.includes(invalid)) {
                            acc += invalid;
                            seen.add(invalid);
                        }
                        prefix++;
                    } while (subrange.end >= invalid);
                }
            }
        }

        return acc;
    }, 0);

    return { value };
});
