// '/dev/stdin'
const fs = require('fs')
const input = fs.readFileSync('./input.txt').toString().split(' ')
const A = +input[0]
const B = +input[1]

function solution(a, b) {
  console.log(a + b)
  console.log(a - b)
  console.log(a * b)
  console.log(parseInt(a / b, 10))
  console.log(a % b)
}

solution(A, B)
