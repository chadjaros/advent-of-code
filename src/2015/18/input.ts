import { Grid } from '../../utils/grid';

const raw = `#..####.##..#...#..#...#...###.#.#.#..#....#.##..#...##...#..#.....##..#####....#.##..##....##.#....
.#..#..#..#.###...##..#.##.....#...#..##....#####.##............####.#..######..#.#.##.#...#..#...##
#.....##.##.##.#..##.#..###...#.#.#..##..###.####.####.#.####.#...##.#..###.........#.###...#....###
#.###..#######..##..#.....##.#.#.###.#.##..#.##..##.##.#.##...###.#...#.#####.#.##..#.#####..#.#####
#.##.##.###.##..###.#.##.##...##.#.#..##..###.########.#.####..####...#####...#..#...##....##.##.##.
..#.#.#.#..#.#.###....###...#...#.##..####.###.....#.####.###.###.#......#.#.###..#..#.#....#.#####.
...#.###.#....#.###...#.#.#...#...#.#####....#....#...#####..#..#.#..######..#.##.#.##.#..###.#...##
.###...#...#.#..#.#.####.#...#.....##...###.#....#..##.###....#.##....###..#.#####...###.#.##.####..
#.#....##.#.....#####.#.##..#######.#.####..###.##.#####.##.#...###...#.#...###..#...#.#.###.###.###
...##.##.....##..#.##...#.#...#...#.#####.#...#.#.#.#####.##.#...#.#..##.##..#...#....####..###.###.
#..#....######...#...###.#....#####....#.#.#....#....#.#######.#####..#....#....#.##..#.##.###..#...
#####.#.######.#.#####.#..##..##..####..#....#...#######....##..##.#..###..###.###..###...#...######
#...##..##...###....##..##.##..#.#.#.#....##.#.......###..###..###...###..##.##.##.#.#.#..#.#..#..#.
..###....##.###..#.#..########...###...##..#######....##..###..#####.##.#....###..##.##.##.#...##.#.
###..#.#..#.#.##.##...##.....#..###.#..##.##.#....##.#.######..##..#.#.##.###...#..####...#.#..#.###
.######....#..##..#.####.##..#.#..#.#..#....#..##.#..#.#...####..#....#.####.#.###.#...####.#...#.#.
#.######.##..###.###..#..###.#...#..#...#...###.##....#.#......#...#.##.#.###..#.#####.#.#..###..#.#
...#..#...####..###.########.....###.###.#..##.##....######..#..#.....#.##.##.#..##..#..##...#..#..#
#..#..##..#.#.########.##.#.####..#.#####.#.###.##....###..##..#.#.###..#.##..##.##.####...######.##
.######.###....#...##...#..#....##..#.#...###.######.##...#....##.##.#.#.##..#...###.###.#....#..##.
####.#.##..##.##.###...#.###.##..##....###..####.##..#.#.##..###.#..##...####...#..####.#.#..##...#.
.#.#..#.....##...#..#...#.#...#.#.##..#....#..#......#####.#######....#.#..#..###..##.#.########..##
.##.#..#..##..#..####.#...####...#...#..##.#..###.#..######..#.#...###.##...#..#####..##.#..##.#.##.
.###..##.##.##....###.###..#.#...##.#.#...#.#######.####..#..###.#######.#...#.#...#.##...#..####..#
##.########..#..#....#.###..##.##.#.##.#..#......####..##.##.#..####..#####..#.....#####.###..#.#.#.
.#..####..##.#.#..#####.##..#..#.#....#.#####.#####...######........##.##..##.#.#.###..#.#.#.#..##.#
.##..##..#.######..###....#.#.###.#........#..###..#.########.....#.##...#.....#..#...##...#..#.###.
##.##.#..####....####.#######.....#.#.#...#.######.#.....####.####...###..####.##.##....###..#..#...
#.#..####...#......#...###...##....##.#######..#.###.#...###.##.##...####..#.####..#......##..#####.
.#.#...##...#....#.####.##.....#....#.#.#######..###.#.....#.....####...##...#.#.##.####..##.###.#.#
####.#.#.####...#...####.#.....#.#######.#.......####......###..###.#...######..#.##.#.##..#..##..##
..##.###..#..####..####.......######.##..#.....##.##...##.##......#.###..###...#.##.#####.#.######.#
.###..####.###..#..#.......#.##...##...##.######.....#..####.#......#.#...#...#...###...#.#.##..####
.####....##.##.#.....##.###.####.#.......#.......#.#..#.#.#.....###.#.#####.#..#.#.#####.#####.###.#
.##.#.###.#####..#..#....###.#.#.#..#..###..##..####..##.###....#..####.####.#..###.#..######.######
####.#.....##..###....#.....#.##.#.##..##..########.#####..###.####....##.....######.#.#.##.......#.
#.#.##.....#.....##.###.#..#.##.##....#..##....##.#.###.##.#..#..##.##.###.#..##.###...##..###.#####
#.###.#.#.#.#.#.#.#...#..#.###..####.##...#..####.###....#..#..##.#....####..##.##....#.#.##.##....#
...######....#..####...#.#..#.#.#..#.##.#.#.......#..#......##..#...#..#..##...##.#...#.#.#...##.##.
.#####..#...####....#..###..##....#####..###.#.#...###..###.###..##...#......#...#...#.#.#...#.##..#
......#####.#...#.#.#.##..#.###..##..#.#...###..###....##..#####..#######.#..#.###....###...##.#..#.
..##.########.##..#....##.#...##.##.#.#..#.##..#.#.#.##....#.#.#.#.##....##....#....#####.##..#.##.#
####...#....##.#.###......##.##.#..##...#..#####..#.#....##..#####...#.#.##...#.####.####..##.######
.##.###.##.#...#.#....###.#######...##...##..#..##.###.#.####..#..###......#.#.##.#.#....#..##...#..
.#.###.#.###.###.#.##.#..#......####.##...#..##.#..####.....#...#.###.##.##.#..#.##..#.###......#..#
...##.####......#.#.#..###..#....###....#.##.#####..#..#..#...#.#.###...#.#.#.##....###.####..###.#.
##..#.#.#.#....####...#.##.###..####....#..#####.######..#.##.##..#####.#.....#.#...##.#.##.##.#.#..
#..##.#.#.#.###.#.#.###...#.#...##..#..#.#.#.##..###...#..##.#..#.#.#..#.....#.######.#.###..###.#..
....#.#.##.###.##...#.##.#....#..##.#..##...#...#.##.####...##..####.#.........#..##..#...#...##.#..
.##.......##...###.##.#.##.###.##.#..#..#..####...#...#....#####...###..##..#..#..##...#....#..#####
..####..#...#...#..###....##.#.#####..#..#.....#......#...#.......##....####...##....##.##.#.#####.#
##.#.#.#..##..##..#.####.##.##.###.#...###.#....#.....#.###...#######..###.####.###.####.##...##.#..
..#.#...##.#....#..#..##.####.....#.#.#...#..#..###.#..###.#####.#.#####.#.#.#.#.###.##.###..#....##
.###.#...#....###..#...####....####..#.##..#..##.###..#.#.#.#..#...###.#.#...#......#...#.##.##.#...
..####.####.##.#.##....#...##....#..#....#..###..#...#..###.#####.....#####..##.#.#.#.#.#.##.####...
...##.#.##.####..##.###..#.#.#.#.#.#.#..###...#.##..#.####.##...#.#.##......###..#...###....#.#.###.
##...##..#.#.##..#.#.#....#.####.......#.#.#######.#..#....#.###.#...###.##....###.#.#..#.#.##.####.
...##.......######.....##....#...#..#.##.###.#..#.##.###.#.###.#.#.#...#.#...##.##.##..#.##########.
###..#....#.#.....#....###.#...##.......##.#.#..#.#...########......###..##.#..#..####.##..####...#.
......##.###.#.###.....#..#...#.#......##....#....#........#..#...##.##.....#...##.##.........##....
.##.##.#.#...#....######..##....##..##.#.#.##.#.##..##...#..###......##......#.#....#.#.#.......###.
.......#.##..##.#...#.##..#..#####.#..#.######.........###.#####.####.#...##...........##...##..####
#......#.#..#...#...##..#.#.###.##.##.#.#..#.###.##.#..###..#.###..#...###.##..###..#...#..###...#..
####.##..#####..####.#...#..#..###..##.#.#...#...#...#.##.####.##.###....###...#.#.#..####.######.##
.....#..####...#.#.#.####..####..##.###......#.....########.#...#.#..#..#...#.###..##.#####..###.###
.#######.#.##..###.#...###.#####............##.###...#.##.#.##..##.#.#..#.######..######..#..#..####
...##..#.####...#..#.#.##.#....#.####..#..###.###..#.#...#....##.##.#......##..##..#.#.#.###..#..#..
........#...#.##.#.#..#....####....#.##...###..####...###.#.#..######..###..##.#####.###.###.#.#...#
##......##.#..###.####.##.#.###.#.......#.##..####..#.###.##..##..##...##...#.###...#.#..#..#.#####.
##..#.#.....##.####.#..##.#.##.#.#...#...#.#...####.#.#.##...##....##.###..###.####.#...#.###..#####
.#####.####.####.####.#.##.##......###....###.####...###...#...#..#.##.#.#####.###..##.#..###...##..
.#...#..##...##...#....#.#.#..##..#.##..#.###.#.###..###.#.#.###.#....#######.####.##..#..#...####..
..##.##..#.##..#.#.###..#.##.########...####.#.###.##..#..###.###...##..##.#..#.######.##.#....###.#
##.#####.###.##.#.##.##.##.###..##..##..#.#.#.#.####..#......#.#.#.#.#.#.##...#####.####...#.#...#.#
.#..###..##.#####.#.##.#..##...##..##...#####.#.####..#...##.....######.#.#...##.#..#######.###.###.
#.#..##.#.#####.#.#.....###.###.#..##.#####....#.###.##.##.#.#..##..#.#....#######.###.#.#.....#.###
....###...#.###.####....###.....##....#####.##.###.###.##.##.##.#..###..######...####.#.#..####..#..
###.....#..####..#.####..#..#...##.##..##.######.####.....#...##....#..#.##.#####..###.##.#.####...#
.##.##.#...#..####...##.##.###...#...#..#.#.#####.....####...#.#.#..#.####...####.#...###.#......###
###.##....#.#.#...#.###....####..##...##.##.##.#..#...####..#..#..##...#####.####.####...##.#..###.#
..####.....##..###.#.#.###.########..#...#.##..#.#.#.......#.##.#..#...####.##.#..#.######..#.#...#.
#.#.##.#.#.##.#....##......##......#######.#..#.##...##..#.#.###...#.#..#..###...#..###.....##.....#
..#.##.#.##.#.##..##.....#.#..#.#..#...##..#..#.#....###.#####....####.####..#####.##.###...#..###.#
#....#.###..#..########.###..#.#.#.##...##.#..##.###..#..#..#.#.##..###...###.#.##..#.##.#..#.#.####
#.......#######......#...#...##.##...###.#....##.#..#....####.#.##.###...#.#####...##.###........##.
.##.####.....###.##......####.###.########..#.####..#.##.#.####.....#...#.##....#######.##..#......#
#.#.##.##....##..##.#.###..#.##.#..#..#.#..##.....###..###.##.##.####.##.#.#.##...####..#.#..##.#.#.
...##.#.#.#...###.#.......#.#.....#.#...##....##.##.##.####...#.#..#..#..#.#.##.#..#.#.#....###..#.#
....#.#.###.#####.##..###..##..#...#.##.#......##.####.#..####.#.##..####.#.#...##..#####..##.#.#...
..###.#.##..#....#..#.#.....##.#####..##....#.#...#.##..##.#.#..#...##.##..##..##....#...#..#..#..##
##.#.##.#...#.###.##.##.##.##..##.##...#..##.#..#######.#..#...#.#.##..#....##.#..####.###........#.
.##.#..#.....#####..##.#.#.#.#..###.#######.###.###....##....#.#.#.###....###.#..#.#....#.#..###...#
...###.#.#.###..#...#..###.######..##.#.#..#...####.#####.##..#..###...#..#..#..###..##.#.#...#.###.
#......#.#..#..##.##.#.##.#.###.#.##.#.#..#....#.##..#..##..##.#.#.#....##.###.###.####.#.#####...##
...#.##..#.######.......#.#.###.....#####....##.#.#.###........#.#.###.#.#########.##.##.#..##..#...
##..###..###....####.##.##..##.###....####..##...####.####..####..###.####..##.#...###.#####.##.##.#
###...##.#.#.#####..#..#####...##.#...#.#.###.#..##..###.##.#.#.....####.##.#..##.###.#...##.##...##
...#.#.##.##..##....#..#.#####.##.###..#.#.#........####.###.##....##....####..#.#....#.#.#.###..#.#
..#.#.#.#.###...#....##..######.##....#.#.##..###..#.#.###..#.##..#.#.###......#..#..#.####..#...##.
.....####.#.....###.#.##.#..##.#..###.#####.#..##...###.#..###..#..##....###.#..##.#..#.##.#..#...##`;

export const input18 = new Grid<boolean>(
    raw.split('\n').map((line) => line.split('').map((c) => c === '#'))
);