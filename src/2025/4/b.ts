import { aoc } from '../../ts-utils/aoc';
import { Point } from '../../ts-utils/point-2d';

aoc((infile) => {
    const input = infile.grid();

    let allRemove: Point[] = [];
    let toRemove: Point[] = [];
    do {
        toRemove = input.reduce((acc, value, point) => {
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

            if (adjCt < 4) {
                acc.push(point);
            }
            return acc;
        }, new Array<Point>());

        allRemove.push(...toRemove);
        toRemove.forEach((p) => {
            input.setValue(p, '.');
        });
    } while (toRemove.length > 0);

    return { value: allRemove.length };
});
