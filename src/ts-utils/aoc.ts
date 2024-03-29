import { existsSync, readFileSync, writeFileSync } from 'fs';
import fetch from 'node-fetch';
import { dirname, join } from 'path';
import { performance } from 'perf_hooks';
import { env } from 'process';
import { Grid, GridEdgeFunction } from './grid';

export class AocInputFileHelper {
    constructor(readonly inputFile: string) { }

    sample(filename = 'sample-input.txt'): AocInputFileHelper {
        return new AocInputFileHelper(join(dirname(this.inputFile), filename));
    }

    get buffer(): Buffer {
        return readFileSync(this.inputFile);
    }

    get string(): string {
        return this.buffer.toString().trim();
    }

    get lines(): string[] {
        return this.string.split('\n');
    }

    get tokenLines(): string[][] {
        return this.splitLines(/\s+/);
    }

    regexLines(regex: string | RegExp): string[][] {
        return this.lines.map((line) => {
            return (
                line
                    .match(regex)
                    ?.map((x) => x)
                    .slice(1) ?? []
            );
        });
    }

    splitLines(s: string | RegExp): string[][] {
        return this.lines.map((line) => line.split(s));
    }

    splitLinesAndMap<T>(s: string | RegExp, mapFn: (x: string) => T): T[][] {
        return this.lines.map((line) => line.split(s).map(mapFn)) as T[][];
    }

    grid<T = string>(
        s: string | RegExp = '',
        mapFn: (x: string) => T = (_) => _ as T,
        edgeFn?: GridEdgeFunction<T>
    ): Grid<T> {
        return new Grid(this.splitLinesAndMap(s, mapFn), edgeFn);
    }
}

export const fetchInputFile = async (inputpath: string): Promise<void> => {
    if (!existsSync(inputpath)) {
        const day = inputpath.match(/src\/(\d+)\/(\d+)\/input.txt/);
        if (!day) {
            throw new Error(`Could not parse year and day from '${inputpath}'`);
        }
        if (!env.AOC_SESSION) {
            throw new Error(
                'Please set environment variable AOC_SESSION to session cookie from AOC website to automatically download inputs'
            );
        }
        if (!env.AOC_USERAGENT) {
            throw new Error(
                'Please set environment variable AOC_USERAGENT'
            );
        }

        console.log(
            'Fetching input data from',
            `https://adventofcode.com/${day[1]}/day/${day[2]}/input`
        );
        const fstart = performance.now();
        const inputdata = await fetch(
            `https://adventofcode.com/${day?.[1]}/day/${day?.[2]}/input`,
            {
                method: 'GET',
                headers: {
                    cookie: env.AOC_SESSION.replace(':', '='),
                    'User-Agent': env.AOC_USERAGENT,
                },
            }
        );
        if (!inputdata.ok) {
            throw new Error(
                `Failed with status ${inputdata.status} ${inputdata.statusText}`
            );
        }

        writeFileSync(inputpath, await (await inputdata.blob()).text());

        console.log(
            'Fetched and written to',
            inputpath,
            `in ${(performance.now() - fstart).toFixed(3)} ms`
        );
        console.log('---');
    }
};

export interface AocResult {
    value: number | string;
}

export const aoc = async (
    f: (infile: AocInputFileHelper) => AocResult | Promise<AocResult>
): Promise<void> => {
    try {
        const inputpath = join(dirname(process.argv[1]), 'input.txt');

        await fetchInputFile(inputpath);

        let start = 0;
        let end = 0;

        try {
            start = performance.now();
            const { value, ...extra } = await f(
                new AocInputFileHelper(inputpath)
            );
            end = performance.now();
            console.log('---');
            console.log('value:', value);
            console.log('extra:', extra);
        } catch (err) {
            end = performance.now();
            console.log('---');
            console.log('error:', err);
        } finally {
            console.log('---');
            console.log(`time: ${(end - start).toFixed(3)} ms`);
        }
    } catch (err) {
        console.log('Failed with error', err);
    }
};
