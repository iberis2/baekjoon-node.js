// '/dev/stdin'
const [[N, M], ...input] = require('fs')
  .readFileSync('./input.txt')
  .toString()
  .trim()
  .split('\n')
  .map(el => el.split(' ').map(Number))

// N: 5 M: 4 input: [ [ 1, 2 ], [ 3, 4 ], [ 1, 4 ], [ 2, 2 ] ]

function solution(basket, counts, input) {
  let answer = [...Array(basket + 1)].map((_, idx) => idx)
  input.forEach(([ball1, ball2]) => {
    ;[answer[ball1], answer[ball2]] = [answer[ball2], answer[ball1]]
  })
  console.log(...answer.slice(1))
}

solution(N, M, input)
