function solution(num) {
  let answer = 0
  for (let i = 1; i <= num; ++i) {
    answer += i
  }
  console.log(answer)
}

const readline = require('node:readline')
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})

rl.on('line', line => {
  solution(+line.trim())
  rl.close()
  process.exit()
})
