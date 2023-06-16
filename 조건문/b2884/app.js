// '/dev/stdin'
const fs = require('fs')
const input = fs
  .readFileSync('./input.txt')
  .toString()
  .split(' ')
  .map(num => +num)
const H = input[0],
  M = input[1]

function solution(H, M) {
  if (M >= 45) {
    console.log(`${H} ${M - 45}`)
  } else if (H < 1) {
    console.log(`${23} ${M - 45 + 60}`)
  } else {
    console.log(`${H - 1} ${M - 45 + 60}`)
  }
}

solution(H, M)

// readline 풀이

// const readline = require('node:readline')

// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// })

// let input
// rl.on('line', line => {
//   input = line.split(' ').map(num => +num)
//   rl.close()
// }).on('close', () => {
//   solution(input[0], input[1])
//   process.exit()
// })
