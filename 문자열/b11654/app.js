function solution(str) {
  console.log(str.charCodeAt())
}

const rl = require('node:readline').createInterface({
  input: process.stdin,
  output: process.stdout,
})

rl.on('line', line => {
  solution(line)
  rl.close()
})
