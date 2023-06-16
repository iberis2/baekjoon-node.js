// '/dev/stdin'
// const fs = require('fs')
// const input = fs.readFileSync('./input.txt').toString().split('\n')
// const x = +input[0],
//   y = +input[1]
// fs로 런타임 에러 나는 문제

const readline = require('node:readline')
const { stdin: input, stdout: output } = require('node:process')

const rl = readline.createInterface({ input, output })

let inputs = []
rl.on('line', line => {
  inputs.push(line)
}).on('close', () => {
  solution(+inputs[0], +inputs[1])
  process.exit()
})

function solution(x, y) {
  const answer = x > 0 ? (y > 0 ? 1 : 4) : y > 0 ? 2 : 3
  console.log(answer)
}
