function Fibonacci(n) {
    if (n <= 1) return n;
    return Fibonacci(n - 1) + Fibonacci(n - 2);
}

function Fibonacci2(n, ans) {
    if (ans[n]) {
        return ans[n];
    }
    if (n <= 1) {
        ans[n] = n;
    } else {
        ans[n] = Fibonacci2(n - 1, ans) + Fibonacci2(n - 2, ans);
    } 
    
    return ans[n];
}

console.log(`Fibonacci2 -> ` + Fibonacci2(1000, []));
console.log(`Fibonacci -> ` + Fibonacci(45));