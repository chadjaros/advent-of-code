import { aoc } from '../../ts-utils/aoc';
import { ArrayUtils } from '../../ts-utils/array-utils';

aoc((infile) => {
    const input = infile.lines;

    const ops = input[input.length - 1].split(/\s+/);
    const numbers = ArrayUtils.transpose(input.slice(0, input.length - 1).map((_) => _.split('')))
        .map((_) => _.join(''))
        .reduce<number[][]>(
            (acc, _) => {
                const trimmed = _.trim();
                if (trimmed.length === 0) {
                    acc.push([]);
                    return acc;
                }
                acc[acc.length - 1].push(parseInt(trimmed));
                return acc;
            },
            [[]]
        );

    const value = numbers.reduce((acc, _, i) => {
        const op = ops[i];
        const act = op === '+' ? (a: number, b: number) => a + b : (a: number, b: number) => a * b;
        return acc + _.reduce((acc, _2) => act(acc, _2), op === '+' ? 0 : 1);
    }, 0);
    return { value };
});
