export interface File {
    size: number;
    name: string;
    parent: Directory;
}

export interface Directory {
    name: string;
    parent: Directory;
    files: Map<string, File>;
    directories: Map<string, Directory>;
    totalSize: number;
}

export function runInstructions(input: string[]): Directory {
    const nullDir = {} as unknown as Directory;

    const root: Directory = {
        name: '/',
        parent: nullDir,
        files: new Map(),
        directories: new Map(),
        totalSize: 0,
    };

    let cd: Directory = root;
    for (const line of input) {
        const tokens = line.split(' ');

        if (tokens[0] === '$') {
            if (tokens[1] === 'cd') {
                const dirname = tokens[2];
                if (dirname === '/') {
                    cd = root;
                } else if (dirname === '..' && cd !== root) {
                    cd = cd.parent;
                } else {
                    if (!cd.directories.has(dirname)) {
                        cd.directories.set(dirname, {
                            name: dirname,
                            parent: cd,
                            files: new Map(),
                            directories: new Map(),
                            totalSize: 0,
                        });
                    }
                    cd = cd.directories.get(dirname)!;
                }
            }
        } else {
            if (tokens[0] === 'dir') {
                const dirname = tokens[1];
                if (!cd.directories.has(dirname)) {
                    cd.directories.set(dirname, {
                        name: dirname,
                        parent: cd,
                        files: new Map(),
                        directories: new Map(),
                        totalSize: 0,
                    });
                }
            } else {
                const size = parseInt(tokens[0]);
                const name = tokens[1];
                const file = {
                    size,
                    name,
                    parent: cd,
                };
                cd.files.set(name, file);
            }
        }
    }

    return root;
}

export function compileSize(dir: Directory): number {
    let size = 0;

    size += Array.from(dir.files.values()).reduce((acc, v) => acc + v.size, 0);
    size += Array.from(dir.directories.values()).reduce(
        (acc, v) => acc + compileSize(v),
        0
    );

    dir.totalSize = size;
    return size;
}
