/**
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueens = function(n) {
    
    var board = [...new Array(n)].map( ele => new Array(n).fill(0) );
    
    const ans = [];
    solution(board, 0, n);
    return ans;

    function solution(board, c, n) {
        if (c >= n) {
            return true;
        }
    
        for (let i = 0; i < n; i++) {
            if (isSafe(board, i, c)) {
                board[i][c] = 'Q';
                
                if (solution(board, c + 1, n) === true) {
                    // return true;
                    ans.push([...board].map(ele => ele.join("").replace(/0/g, ".")));
                }
        
                board[i][c] = 0;
            }    
        }
        
        return false;
    }
};

solveNQueens(4);

function isSafe(board, row, col) {
    // Check this row on left side
    for (let i = 0; i < col; i++)
        if (board[row][i])
            return false;
 
    // Check upper diagonal on left side
    for (let i = row, j = col; i >= 0 && j >= 0; i--, j--)
        if (board[i][j])
            return false;
 
    // Check lower diagonal on left side
    for (let i = row, j = col; j >= 0 && i < board.length; i++, j--)
        if (board[i][j])
            return false;
 
    return true;
}