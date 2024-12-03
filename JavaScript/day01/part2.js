const fs = require('fs');

function solve() {
    const filePath = "./input.txt";
    const lines = fs.readFileSync(filePath, 'utf-8').trim().split('\r\n');
    const leftArray = [];
    const rightArray = [];
    let sum = 0;
    let mul = 0;
    lines.forEach(line => {
        const [left, right] = line.trim().split(/\s+/).map(Number);
        leftArray.push(left);
        rightArray.push(right);
    });

    leftArray.forEach((_, i) => {
        mul = 0;
        rightArray.forEach((_, j) => {
            if (leftArray[i] === rightArray[j]) {
                mul += 1;
            }
        })
        sum += leftArray[i] * mul;
    })
    return sum;
}

console.log(solve());
