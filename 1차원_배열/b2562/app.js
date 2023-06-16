function solution(input) {
  const max = Math.max(...input)
  console.log(max)
  console.log(input.indexOf(max) + 1)
}

const rl = require('node:readline').createInterface({
  input: process.stdin,
  output: process.stdout,
})

let input = []
rl.on('line', line => {
  input.push(Number(line))
}).on('close', () => {
  solution(input)
  process.exit()
})
