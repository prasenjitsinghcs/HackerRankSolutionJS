
solution(3, 'A', 'C', 'B');

function solution(n, from, to, helper) {
    if (n === 0) {
        return;
    }

    solution(n - 1, from, helper, to);
    console.log(`Move ${n} from ${from} to ${to}`);
    solution(n - 1, helper, to, from);
}