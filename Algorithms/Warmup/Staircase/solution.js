'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.replace(/\s*$/, '')
        .split('\n')
        .map(str => str.replace(/\s*$/, ''));

    main();
});

function readLine() {
    return inputString[currentLine++];
}

// Complete the staircase function below.
function staircase(n) {
    let spaces = n - 1;
    let hashtags = 1;

    for (let i = 1; i <= n; i++) {
        const strSpaces = ''.padEnd(spaces, ' ');
        const strHashtags = ''.padEnd(hashtags, '#');

        console.log(strSpaces + strHashtags);

        spaces--;
        hashtags++;
    }
}

function main() {
    const n = parseInt(readLine(), 10);

    staircase(n);
}
