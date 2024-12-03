const fs = require('fs');

function solve() {
    const filePath = "./input.txt";
    let lines = fs.readFileSync(filePath, 'utf-8').trim().split('\r\n');

    lines = lines.map((line) => line.split(' ').map(Number));

    const isValidLine = (line) => {
        const isIncreasing = line[1] > line[0];
        const isDecreasing = line[1] < line[0];
        for (let i = 0; i < line.length - 1; i++) {
            const diff = Math.abs(line[i] - line[i + 1]);
            if (diff < 1 || diff > 3) {
                return false;
            }
            if ((line[i + 1] > line[i]) !== isIncreasing && (line[i + 1] < line[i]) !== isDecreasing) {
                return false;
            }
        }
        return true;
    }

    const validLines = lines.filter(isValidLine);
    return validLines.length;

}

console.log(solve());
