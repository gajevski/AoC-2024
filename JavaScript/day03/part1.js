const fs = require('fs');

function solve() {
    const filePath = "./input.txt";
    let lines = fs.readFileSync(filePath, 'utf-8');
    const regex = /mul\((\d+),(\d+)\)/g;

    const matches = [];
    let match;
    while ((match = regex.exec(lines)) !== null) {
        let x = +match[1];
        let y = +match[2];
        matches.push(x * y);
    }

    return matches.reduce((a, b) => a + b);
}

console.log(solve());
