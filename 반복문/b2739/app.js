// const fs = require('fs')
// const input = Number(fs.readFileSync('./input.txt').toString().trim())

function solution(N) {
  for (let i = 1; i <= 9; i++) {
    console.log(`${N} * ${i} = ${N * i}`)
  }
}

const readline = require('node:readline')
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})

let input
rl.on('line', line => {
  input = +line.trim()
  rl.close()
}).on('close', () => {
  solution(input)
  process.exit()
})
