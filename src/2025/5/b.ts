import { aoc } from '../../ts-utils/aoc';
import { Range } from '../../ts-utils/range';

aoc((infile) => {
    const input = infile.lines.reduce<{ ranges: Range[]; isValues: boolean }>(
        (acc, line) => {
            if (line.length === 0) {
                acc.isValues = true;
            } else if (acc.isValues) {
            } else {
                const r = line.split('-').map((_) => parseInt(_));
                acc.ranges.push(new Range(r[0], r[1]));
            }

            return acc;
        },
        { ranges: [], isValues: false }
    );

    input.ranges.sort((a, b) => a.start - b.start);

    const mergedRanges = input.ranges.reduce<Range[]>((acc, range) => {
        if (acc.some((r) => r.overlaps(range))) {
            return acc;
        }

        const merged = input.ranges.reduce((acc, r) => {
            if (acc.overlaps(r)) {
                return acc.merge(r);
            }
            return acc;
        }, range);

        acc.push(merged);
        return acc;
    }, []);

    const value = mergedRanges.reduce((acc, range) => {
        return acc + range.end - range.start + 1;
    }, 0);

    return { value };
});
