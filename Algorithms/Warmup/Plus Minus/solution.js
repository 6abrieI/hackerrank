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

// Complete the plusMinus function below.
function plusMinus(arr) {
    let positives = 0;
    let negatives = 0;
    let zeros = 0;

    arr.forEach(number => {
        if (number > 0) positives++;
        else if (number < 0) negatives++;
        else zeros++;
    });

    const len = arr.length;

    const response = (value) => (value / len).toFixed(6);

    console.log(response(positives));
    console.log(response(negatives));
    console.log(response(zeros));
}

function main() {
    const n = parseInt(readLine(), 10);

    const arr = readLine().split(' ').map(arrTemp => parseInt(arrTemp, 10));

    plusMinus(arr);
}
