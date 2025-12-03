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

    const value = input.reduce((acc, range) => {
        for (let d = digits(range.start); d <= digits(range.end); d++) {
            if (d % 2 === 0) {
                const subrange = new Range(Math.max(pow10(d), range.start), Math.min(pow10(d + 1) - 1, range.end));

                let halfer = pow10(d / 2 + 1);
                let double = Math.floor(subrange.start / halfer);

                let invalid = 0;
                do {
                    invalid = double * halfer + double;

                    if (subrange.includes(invalid)) {
                        acc += invalid;
                    }
                    double++;
                } while (subrange.end >= invalid);
            }
        }

        return acc;
    }, 0);
    return { value };
});
