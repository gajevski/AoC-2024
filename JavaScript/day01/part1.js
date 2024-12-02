const fs = require('fs');


function solve() {
  const filePath = "./input.txt";
  const lines = fs.readFileSync(filePath, 'utf-8').trim().split('\r\n');
  const leftArray = [];
  const rightArray = [];
  let sum = 0;
  lines.forEach(line => {
    const [left, right] = line.trim().split(/\s+/).map(Number);
    leftArray.push(left);
    rightArray.push(right);
  });

  leftArray.forEach((_, i) => {
    const sortedLeft = leftArray.toSorted();
    const sortedRight = rightArray.toSorted();
    let lowest = Math.min(sortedLeft[i], sortedRight[i]);
    let highest = Math.max(sortedLeft[i], sortedRight[i]);
    let subDif = highest - lowest;
    sum += subDif;
  })

  return sum;
}

console.log(solve());
