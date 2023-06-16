// '/dev/stdin'
const fs = require('fs')
const input = fs.readFileSync('./input.txt').toString().split(' ')
const A = +input[0]
const B = +input[1]
const C = +input[2]

function solution(a, b, c) {
  console.log((a + b) % c)
  console.log(((a % c) + (b % c)) % c)
  console.log((a * b) % c)
  console.log(((a % c) * (b % c)) % c)
}

solution(A, B, C)
