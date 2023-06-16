// '/dev/stdin'
// const fs = require('fs')
// let [len, ...input] = fs.readFileSync('./input.txt').toString().trim().split(/\n/)
// len = +len
// input = input.map(text => text.split(' ').map(Number))

// len : 5
// input : [ [ 1, 1 ], [ 2, 3 ], [ 3, 4 ], [ 9, 8 ], [ 5, 2 ] ]

// fs는 런타임 에러 남

function solution(len, input) {
  for (let i = 0; i < len; i++) {
    console.log(input[i][0] + input[i][1])
  }
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
  let [[len], ...input] = inputs
  solution(len, input)
  process.exit()
})
