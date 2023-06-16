function solution(N) {
  const loop = N / 4
  let answer = 'int'
  for (let i = 1; i <= loop; ++i) {
    answer = 'long ' + answer
  }
  console.log(answer)
}

const { stdin, stdout } = require('node:process')
const readline = require('node:readline')
const rl = readline.createInterface({
  input: stdin,
  output: stdout,
})

rl.on('line', line => {
  solution(+line.trim())
  rl.close()
  process.exit()
})
