const fs = require('fs');


function solve() {
  const filePath = "./input.txt";
  const data = fs.readFileSync(filePath, 'utf-8').trim().split('\r\n');

  return data;
}

console.log(solve());
