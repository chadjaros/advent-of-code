import { Possible } from './util-types';

export class Range {
    readonly start: number;
    readonly end: number;

    constructor(start: number, end: number) {
        this.start = Math.min(start, end);
        this.end = Math.max(start, end);
    }

    includes(value: number): boolean {
        return value >= this.start && value <= this.end;
    }

    contains(r: Range): boolean {
        return this.start <= r.start && this.end >= r.end;
    }

    overlaps(r: Range): boolean {
        return (
            this.includes(r.start) ||
            this.includes(r.end) ||
            r.includes(this.start) ||
            r.includes(this.end)
        );
    }

    intersection(r: Range): Possible<Range> {
        if (this.overlaps(r)) {
            return new Range(Math.max(this.start, r.start), Math.min(this.end, r.end));
        }
    }

    difference(r: Range): Range[] {
        const result: Range[] = [];
        if (!this.overlaps(r)) {
            return [this];
        }
        if (this.start < r.start) {
            result.push(new Range(this.start, r.start - 1));
        }
        if (this.end > r.end) {
            result.push(new Range(r.end + 1, this.end));
        }

        return result;
    }

    merge(r: Range): Range {
        return new Range(
            Math.min(this.start, r.start),
            Math.max(this.end, r.end)
        );
    }

    get length(): number {
        return this.end - this.start + 1;
    }

    static mergeList(ranges: Range[]): Range[] {
        const merges: Range[] = [...ranges];

        let end = false;
        while (!end) {
            let m1 = -1;
            let m2 = -1;
            for (m1 = 0; m1 < merges.length - 1; m1++) {
                const m = merges[m1];
                for (let ri = m1 + 1; ri < merges.length; ri++) {
                    const r = merges[ri];
                    if (r.overlaps(m)) {
                        m2 = ri;
                        break;
                    }
                }
                if (m2 >= 0) {
                    merges[m1] = m.merge(merges[m2]);
                    merges.splice(m2, 1);
                    break;
                }
            }
            if (m2 < 0) {
                end = true;
            }
        }

        return merges;
    }

    clone(overrides: Partial<Range> = {}) {
        return new Range(
            overrides.start ?? this.start,
            overrides.end ?? this.end
        );
    }
}
