// '/dev/stdin'
let [ball, ...input] = require('fs').readFileSync('./input.txt').toString().trim().split('\n')
let [N, M] = ball.split(' ').map(Number)
input = input.map(ele => ele.split(' ').map(Number))

// N: 5 M: 4 input: [ [ 1, 2, 3 ], [ 3, 4, 4 ], [ 1, 4, 1 ], [ 2, 2, 2 ] ]

function solution(basket, count, input) {
  let answer = Array(basket).fill(0)
  for (let i = 0; i < count; ++i) {
    answer.fill(input[i][2], input[i][0] - 1, input[i][1])
  }
  console.log(...answer)
}

solution(N, M, input)
