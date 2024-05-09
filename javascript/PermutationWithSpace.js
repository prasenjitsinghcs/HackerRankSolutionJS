
let input = 'abcd';
let output = input[0];

generatePermutation(input.slice(1), output);

function generatePermutation(str, output) {
    if (str.length === 0) {
        console.log(output);
        return;

    }

    let s = str[0];

    let op1 = `${output}${s}`;
    let op2 = `${output}_${s}`;

    let newstr = str.slice(1);

    generatePermutation(newstr, op2);

    generatePermutation(newstr, op1);
}