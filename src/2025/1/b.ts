import { aoc } from '../../ts-utils/aoc';

aoc((infile) => {
    const input = infile.lines;

    let value = 50;

    let zeroCt = 0;

    input.forEach((line) => {
        const op = line[0];
        const num = parseInt(line.slice(1));

        const fullRotations = Math.floor(num / 100);
        zeroCt += fullRotations;

        const remainder = num % 100;

        if (remainder !== 0) {
            if (op === 'R') {
                const orig = value;
                value = (value + remainder) % 100;
                if (orig > value) {
                    zeroCt += 1;
                }
            }
            if (op === 'L') {
                const orig = value;
                value = (value - remainder + 100) % 100;
                if (value === 0 || (orig !== 0 && orig < value)) {
                    zeroCt += 1;
                }
            }
        }
    });

    return {
        value: zeroCt
    };
});
