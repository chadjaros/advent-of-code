import { aoc } from '../../ts-utils/aoc';
import { Range } from '../../ts-utils/range';

aoc((infile) => {
    const input = infile.lines.reduce<{ ranges: Range[]; values: number[]; isValues: boolean }>(
        (acc, line) => {
            if (line.length === 0) {
                acc.isValues = true;
            } else if (acc.isValues) {
                acc.values.push(parseInt(line));
            } else {
                const r = line.split('-').map((_) => parseInt(_));
                acc.ranges.push(new Range(r[0], r[1]));
            }

            return acc;
        },
        { ranges: [], values: [], isValues: false }
    );

    const value = input.values.reduce((acc, value) => {
        return acc + (input.ranges.some((r) => r.includes(value)) ? 1 : 0);
    }, 0);
    return { value };
});
