// '/dev/stdin'
const fs = require('fs')
const input = fs.readFileSync('./input.txt').toString().split(' ')
const A = +input[0],
  B = +input[1],
  C = +input[2]

function solution(a, b, c) {
  console.log(a + b + c)
}

solution(A, B, C)
