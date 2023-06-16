// total 260000 counts 4 input [ [ 20000, 5 ], [ 30000, 2 ], [ 10000, 6 ], [ 5000, 8 ] ]

function solution(total, counts, input) {
  const sum = input.reduce((acc, cur) => {
    acc += cur[0] * cur[1]
    return acc
  }, 0)
  total === sum ? console.log('Yes') : console.log('No')
}

const readline = require('node:readline')
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})

let inputs = []
rl.on('line', line => {
  let i = line.trim().split(' ').map(Number)
  inputs.push(i)
}).on('close', () => {
  let [[total], [counts], ...input] = inputs
  solution(total, counts, input)
  process.exit()
})
