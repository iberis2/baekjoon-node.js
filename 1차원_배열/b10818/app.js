// N: 5 numbers:  [ 20, 10, 35, 30, 7 ]

function solution(N, numbers) {
  console.log(Math.min(...numbers), Math.max(...numbers))
}

const readline = require('node:readline')
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})

let inputs = []
rl.on('line', line => {
  inputs.push(line)
}).on('close', () => {
  let [N, numbers] = inputs
  N = Number(N)
  numbers = numbers.split(' ').map(Number)
  solution(N, numbers)
  process.exit()
})
