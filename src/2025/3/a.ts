import { aoc } from '../../ts-utils/aoc';

aoc((infile) => {
    const input = infile.lines.map((l) => l.split('').map((x) => parseInt(x)));

    let value = input.reduce((acc, line) => {
        let tens = 0;
        let ones = 0;
        for (let i = 0; i < line.length; i++) {
            if (i !== line.length - 1) {
                if (line[i] > tens) {
                    tens = line[i];
                    ones = 0;
                    continue;
                }
            }

            if (line[i] > ones) {
                ones = line[i];
            }
        }

        return acc + 10 * tens + ones;
    }, 0);

    return { value };
});
