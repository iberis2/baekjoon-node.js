function solution(str) {
  let answer = str.split(' ')
  console.log(answer[0] === '' ? 0 : answer.length)
}

const rl = require('node:readline').createInterface({
  input: process.stdin,
  output: process.stdout,
})

rl.on('line', line => {
  solution(line.trim())
  rl.close()
})
