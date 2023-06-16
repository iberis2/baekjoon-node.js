// '/dev/stdin'
const input = require('fs').readFileSync('./input.txt').toString().trim().split('\n').map(Number)
// input [ 3,  1,  4,  5,  7,  9,  6, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30 ]

function solution(input) {
  let thirty = [...Array(30)].map((_, idx) => idx + 1)
  const answer = thirty.filter(el => !input.includes(el))
  console.log(answer[0])
  console.log(answer[1])
}

solution(input)
