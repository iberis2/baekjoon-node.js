function solution(input) {
  let answer = input === input.split('').reverse().join('')
  console.log(answer ? 1 : 0)
}

const rl = require('node:readline').createInterface({
  input: process.stdin,
  output: process.stdout,
})

rl.on('line', line => {
  solution(line.trim())
  process.exit()
})
