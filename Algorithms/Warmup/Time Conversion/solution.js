'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(str => str.trim());

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the timeConversion function below.
 */
function timeConversion(s) {
    const time = s.split(':');

    const hour = time[0];
    const minute = time[1];
    const second = time[2].substring(0, 2);

    const period = time[2].substring(2, 4);

    let newHour = hour;

    if (period === 'AM' && hour === '12') {
        newHour = '00';
    }

    if (period === 'PM' && hour !== '12') {
        newHour = Number(hour) + 12;
    }

    return [newHour, minute, second].join(':');
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const s = readLine();

    let result = timeConversion(s);

    ws.write(result + "\n");

    ws.end();
}
