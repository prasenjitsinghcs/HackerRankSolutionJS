function isValidColor(graph, node, color, colorAssignment) {
    for (const neighbor of graph[node]) {
        if (colorAssignment[neighbor] === color) {
            return false;
        }
    }
    return true;
}

function colorGrid(graph, colors, node, colorAssignment) {
    if (node === graph.length) {
        return true;
    }

    for (const color of colors) {
        if (isValidColor(graph, node, color, colorAssignment)) {
            colorAssignment[node] = color;
            if (colorGrid(graph, colors, node + 1, colorAssignment)) {
                return true;
            }
            colorAssignment[node] = 0; // Backtrack
        }
    }

    return false;
}

function fillColor(grid) {
    const rows = grid.length;
    const cols = grid[0].length;
    const graph = new Array(rows * cols).fill().map(() => []);

    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            if (i > 0) graph[i * cols + j].push((i - 1) * cols + j);
            if (i < rows - 1) graph[i * cols + j].push((i + 1) * cols + j);
            if (j > 0) graph[i * cols + j].push(i * cols + j - 1);
            if (j < cols - 1) graph[i * cols + j].push(i * cols + j + 1);
        }
    }

    const colors = Array.from({ length: rows * cols }, (_, index) => index + 1);
    const colorAssignment = new Array(rows * cols).fill(0);

    if (colorGrid(graph, colors, 0, colorAssignment)) {
        const result = Array.from({ length: rows }, (_, i) => colorAssignment.slice(i * cols, (i + 1) * cols));
        return result;
    } else {
        return null;
    }
}

function printGrid(grid) {
    for (const row of grid) {
        console.log(row.join(' '));
    }
}

// Example usage:
const grid = [
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0]
];

const coloredGrid = fillColor(grid);
if (coloredGrid) {
    console.log("Colored Grid:");
    printGrid(coloredGrid);
} else {
    console.log("No solution exists.");
}
