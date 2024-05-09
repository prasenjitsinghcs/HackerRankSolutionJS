const graph = {
    "a": ["b", "c"],
    "b": ["d"],
    "c": ["e"],
    "e": ["d", "j"],
    "d": ["f", "g"],
    "f": [],
    "g": ["h"],
    "j": ["i"],
    "h": ["i"],
    "i": [],
    "k": ["l"],
    "l": [],
    "m": ["n"],
    "n": []
}

/*                         G-------> H ----> I
*                         /                 /
*                        /                 /
*      A -----> B ----> D -----> F        /
*       \              /                 /
*        \            /                 /
*         C -------> E --------------> J

          k -----> L         M -----> N   
* 
*/


function depthFirstTraversal(graph, start, visited) {
    console.log(start);
    visited.push(start);
    for (let neighbour of graph[start]) {
        if (!visited.includes(neighbour)) {
            depthFirstTraversal(graph, neighbour, visited);
        }
    }
}

function bredthFirstSearch(graph, start, visited) {
    const queue = [start];

    while (queue.length > 0) {
        var start = queue.shift();
        if (!visited.includes(start)) {

            console.log(start);
            visited.push(start);

            const neighbours = graph[start];

            for (neighbour of neighbours) {
                queue.push(neighbour);
            }
        }
    }
}

function dfsIterative(graph, start, visited) {
    const stack = [start];

    while (stack.length > 0) {
        var current = stack.pop();
        if (!visited.includes(current)) {

            console.log(current);
            visited.push(current);

            const neighbours = graph[current];

            for (neighbour of neighbours) {
                stack.push(neighbour);
            }
        }
    }
}

