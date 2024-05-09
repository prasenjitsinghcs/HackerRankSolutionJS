/**
 * 
 *      0------- 1
 *      |      / | 
 *      |     /  | 
 *      |    /   | 
 *      |   /    |  
 *      |  /     | 
 *      | /      | 
 *      |/       |
 *      2--------3   
 *
 */

var graph = [
    [0, 1, 1, 0],
    [1, 0, 1, 1],
    [1, 1, 0, 1],
    [0, 1, 2, 0]
];

var color = ["R","G", "B"];
var vcolor = [0,0,0,0];

solution(graph, 0, vcolor, color);

function isSafe(graph, v, vcolor, c) {
    for (let i = 0; i < 4; i++) {
        if (graph[v][i] === 1 && vcolor[i] == c) {
            return false;
        }
    }
    return true;
}

function solution(graph, v, vcolor, color) {
    if (v === 4) {
        console.log(vcolor);
        return true;
    }

    for (let c of color) {
        if (isSafe(graph, v, vcolor, c)) {
            vcolor[v] = c;
            if (solution(graph, v + 1, vcolor, color)) {
                // return true;
            }
            vcolor[v] = 0;
        }
    }
    return false;
}
