function solution(input) {
  const chess = [1, 1, 2, 2, 2, 8]
  const answer = input.map((el, idx) => chess[idx] - el)
  console.log(...answer)
}

const rl = require('node:readline').createInterface({
  input: process.stdin,
  output: process.stdout,
})

rl.on('line', line => {
  let input = line.split(' ').map(Number)
  solution(input)
  rl.close()
})
