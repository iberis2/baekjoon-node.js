// '/dev/stdin'
const fs = require('fs')
const input = fs.readFileSync('./input.txt').toString().split(' ')
const A = +input[0],
  B = +input[1]

function solution(a, b) {
  if (a > b) {
    console.log('>')
  }
  if (a < b) {
    console.log('<')
  }
  if (a === b) {
    console.log('==')
  }
}

solution(A, B)
