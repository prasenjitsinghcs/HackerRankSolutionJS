
let input = 'ab';
let output = "";

generatePermutation(input, output);

function generatePermutation(str, output) {
    if (str.length === 0) {
        console.log(output);
        return;
    }

    let s = str[0];

    let sl = s.toUpperCase();
    let su = s.toLowerCase();

    let op1 = `${output}${sl}`;
    let op2 = `${output}${su}`;

    let newstr = str.slice(1);

    generatePermutation(newstr, op2);

    generatePermutation(newstr, op1);
}