// '/dev/stdin'
const input = require('fs').readFileSync('./input.txt').toString().trim().split('\n').map(Number)

// input [ 1, 2, 3, 4,  5, 6, 7, 8, 9, 10 ]

function solution(input) {
  let answer = new Set(input.map(el => el % 42))
  console.log(answer.size)
}

solution(input)
