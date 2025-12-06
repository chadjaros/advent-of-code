import { aoc } from '../../ts-utils/aoc';

aoc((infile) => {
    const input = infile.grid();

    const value = input.reduce((acc, value, point) => {
        if (value === '.') {
            return acc;
        }

        let adjCt = 0;
        for (const adj of point.adjacents(true)) {
            if (input.isValid(adj) && input.getValue(adj) === '@') {
                adjCt++;
            }
            if (adjCt >= 4) {
                break;
            }
        }

        return acc + (adjCt < 4 ? 1 : 0);
    }, 0);
    return { value };
});
