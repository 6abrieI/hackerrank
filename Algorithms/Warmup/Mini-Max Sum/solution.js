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

// Complete the miniMaxSum function below.
function miniMaxSum(arr) {
    const sorted = arr.sort();

    const minArray = sorted.slice(0, 4);
    const maxArray = sorted.slice(-4);

    const sumArray = (array) => array.reduce((acc, cur) => acc + cur, 0);

    const minSum = sumArray(minArray);
    const maxSum = sumArray(maxArray);

    console.log(`${minSum} ${maxSum}`);
}

function main() {
    const arr = readLine().split(' ').map(arrTemp => parseInt(arrTemp, 10));

    miniMaxSum(arr);
}
