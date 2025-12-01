import { aoc } from '../../ts-utils/aoc';

aoc((infile) => {
    const input = infile.lines;

    let value = 50;

    let zeroCt = 0;

    input.forEach((line) => {
        const op = line[0];
        const num = parseInt(line.slice(1)) % 100;

        if (op === 'R') {
            value = (value + num) % 100;
        }
        if (op === 'L') {
            value = (value - num + 100) % 100;
        }
        if (value === 0) {
            zeroCt += 1;
        }
    });

    return {
        value: zeroCt
    };
});
