let maze = [
    [1, 0, 0, 1],
    [1, 1, 1, 0],
    [1, 1, 0, 1],
    [0, 1, 1, 1]
];

let output = [];

for (let i = 0; i < maze.length; i++) {
    output[i] = [];
    for (let j = 0; j < maze.length; j++) {
        output[i].push(0);
    }
}

findPath(maze, 0, 0, output);

function isSafe(maze, row, col) {
    var n = maze.length - 1;

    if (row >= 0 && row <= n && col >= 0 && col <= n && maze[row][col] == 1) {
        return true;
    }

    return false;
}

function findPath(maze, row, col, output) {
    var n = maze.length - 1;
    if(row === n && col === n) {
        output[row][col] = 1;
        console.log(output);
        return;
    }

    if (isSafe(maze, row, col)) {
        output[row][col] = 1;
        findPath(maze, row + 1, col, output);
        findPath(maze, row, col + 1, output);

        output[row][col] = 0;
    }

    return;
}
