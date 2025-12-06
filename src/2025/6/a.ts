import { aoc } from '../../ts-utils/aoc';
import { ArrayUtils } from '../../ts-utils/array-utils';

aoc((infile) => {
    const input = infile.lines
        .map((_) => _.split(/\s+/))
        .map((_, i) => {
            if (i === infile.lines.length - 1) {
                return _;
            }
            return _.map((_2) => parseInt(_2));
        });

    const problems = ArrayUtils.transpose(input as (string | number)[][]);

    const value = problems.reduce((acc, _) => {
        const op = _[_.length - 1];
        const act = op === '+' ? (a: number, b: number) => a + b : (a: number, b: number) => a * b;
        return acc + (_.slice(0, _.length - 1) as number[]).reduce((acc, _2) => act(acc, _2), op === '+' ? 0 : 1);
    }, 0);
    return { value };
});
